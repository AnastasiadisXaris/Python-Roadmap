/* ==========================================================================
   Python Roadmap — app logic
   ========================================================================== */

const SECTIONS = [
  { id: "python-basics",    title: "Python Basics",                file: "python_basics.md" },
  { id: "data-structures",  title: "Δομές Δεδομένων",               file: "data_structures.md" },
  { id: "oop",               title: "Object-Oriented Programming", file: "oop.md" },
  { id: "web-dev",           title: "Web Development",              file: "web_dev.md" },
  { id: "data-science",      title: "Data Science",                 file: "data_science.md" },
  { id: "machine-learning",  title: "Machine Learning",             file: "machine_learning.md" },
];

const GRAPH_LINKS = [
  { source: "python-basics",   target: "data-structures" },
  { source: "python-basics",   target: "oop" },
  { source: "oop",             target: "web-dev" },
  { source: "data-structures", target: "data-science" },
  { source: "data-science",    target: "machine-learning" },
];

const contentStore = new Map();   // id -> raw markdown text
let currentId = null;

const els = {
  pathNav: document.getElementById("path-nav"),
  noResults: document.getElementById("no-results"),
  searchInput: document.getElementById("search-input"),
  breadcrumb: document.getElementById("breadcrumb"),
  markdown: document.getElementById("markdown-content"),
  sidebar: document.getElementById("sidebar"),
  menuToggle: document.getElementById("menu-toggle"),
  graphOverlay: document.getElementById("graph-overlay"),
  graphToggle: document.getElementById("graph-toggle"),
  graphClose: document.getElementById("graph-close"),
  graphSvg: document.getElementById("graph-svg"),
};

/* ---------- helpers ---------- */

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // strip accents/tones (incl. Greek)
}

function sectionById(id) {
  return SECTIONS.find((s) => s.id === id);
}

/* ---------- sidebar (the "path") ---------- */

function buildSidebar() {
  els.pathNav.innerHTML = "";
  SECTIONS.forEach((section, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "path-item";
    btn.dataset.id = section.id;
    btn.innerHTML = `
      <span class="stop" aria-hidden="true"></span>
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <span class="label">${section.title}</span>
    `;
    btn.addEventListener("click", () => navigateTo(section.id));
    els.pathNav.appendChild(btn);
  });
}

function setActiveNav(id) {
  document.querySelectorAll(".path-item").forEach((el) => {
    el.classList.toggle("active", el.dataset.id === id);
  });
  document.querySelectorAll(".node").forEach((el) => {
    el.classList.toggle("current", el.dataset.id === id);
  });
}

/* ---------- search ---------- */

function runSearch(query) {
  const q = normalize(query.trim());
  let anyVisible = false;

  document.querySelectorAll(".path-item").forEach((el) => {
    const id = el.dataset.id;
    const section = sectionById(id);
    const haystack = normalize(section.title + " " + (contentStore.get(id) || ""));
    const match = q === "" || haystack.includes(q);
    el.classList.toggle("hidden", !match);
    if (match) anyVisible = true;
  });

  els.noResults.classList.toggle("hidden", anyVisible);
}

/* ---------- markdown rendering ---------- */

function enhanceCodeBlocks(container) {
  container.querySelectorAll("pre > code").forEach((codeEl) => {
    if (window.hljs) {
      try { window.hljs.highlightElement(codeEl); } catch (e) { /* ignore */ }
    }

    const pre = codeEl.parentElement;
    const wrapper = document.createElement("div");
    wrapper.className = "code-block";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "Αντιγραφή";
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(codeEl.textContent);
        copyBtn.textContent = "Έγινε ✓";
        copyBtn.classList.add("copied");
      } catch (e) {
        copyBtn.textContent = "Δεν έγινε";
      }
      setTimeout(() => {
        copyBtn.textContent = "Αντιγραφή";
        copyBtn.classList.remove("copied");
      }, 1800);
    });
    wrapper.appendChild(copyBtn);
  });
}

function enhanceTables(container) {
  // wide tables (e.g. comparison tables) get their own horizontal scroll
  // area instead of forcing the whole page to scroll sideways
  container.querySelectorAll("table").forEach((table) => {
    const wrapper = document.createElement("div");
    wrapper.className = "table-wrap";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

function renderSection(id) {
  const section = sectionById(id);
  if (!section) return;
  const raw = contentStore.get(id);
  if (raw === undefined) return;

  els.markdown.innerHTML = marked.parse(raw);
  enhanceCodeBlocks(els.markdown);
  enhanceTables(els.markdown);

  els.breadcrumb.innerHTML = `Roadmap <span aria-hidden="true">/</span> <span class="current">${section.title}</span>`;
  setActiveNav(id);
  currentId = id;

  document.title = `${section.title} · Python Roadmap`;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  els.markdown.focus?.();
}

function navigateTo(id, { pushState = true } = {}) {
  renderSection(id);
  if (pushState) {
    const url = new URL(window.location.href);
    url.searchParams.set("section", id);
    history.pushState({ id }, "", url);
  }
  closeGraph();
  closeMobileSidebar();
}

/* ---------- shared: lock page scroll while an overlay covers it ---------- */

function updateScrollLock() {
  const locked = !els.graphOverlay.hidden || els.sidebar.classList.contains("open");
  document.body.classList.toggle("no-scroll", locked && window.innerWidth <= 720);
}

/* ---------- mobile sidebar ---------- */

function closeMobileSidebar() {
  els.sidebar.classList.remove("open");
  els.menuToggle.setAttribute("aria-expanded", "false");
  updateScrollLock();
}

els.menuToggle.addEventListener("click", () => {
  const open = els.sidebar.classList.toggle("open");
  els.menuToggle.setAttribute("aria-expanded", String(open));
  updateScrollLock();
});

/* ---------- graph modal ---------- */

function buildGraph() {
  const svg = d3.select("#graph-svg");
  svg.selectAll("*").remove(); // rebuild fresh each time, so it always fits current panel size

  const nodes = SECTIONS.map((s) => ({ id: s.id, title: s.title }));
  const links = GRAPH_LINKS.map((l) => ({ ...l }));

  const panel = document.querySelector(".graph-panel");
  const width = panel.clientWidth;
  const height = panel.clientHeight;
  svg.attr("viewBox", `0 0 ${width} ${height}`);

  // scale node size, spacing and label size down on small screens so the
  // graph stays legible instead of overflowing a narrow panel
  const small = width < 480;
  const nodeRadius = small ? 20 : 30;
  const linkDistance = Math.max(90, Math.min(150, width / 4.5));
  const labelSize = small ? 11 : 13;

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id((d) => d.id).distance(linkDistance))
    .force("charge", d3.forceManyBody().strength(small ? -260 : -420))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(nodeRadius + 26))
    .force("x", d3.forceX(width / 2).strength(0.06))
    .force("y", d3.forceY(height / 2).strength(0.06));

  const link = svg.append("g")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("class", "graph-link");

  const node = svg.append("g")
    .selectAll("g")
    .data(nodes)
    .enter().append("g")
    .attr("class", "node")
    .attr("data-id", (d) => d.id)
    .attr("tabindex", "0")
    .style("cursor", "pointer")
    .call(d3.drag()
      .on("start", dragStarted)
      .on("drag", dragged)
      .on("end", dragEnded))
    .on("click", (event, d) => navigateTo(d.id))
    .on("keydown", (event, d) => {
      if (event.key === "Enter" || event.key === " ") navigateTo(d.id);
    });

  node.append("circle").attr("r", nodeRadius);
  node.append("text")
    .text((d) => d.title)
    .attr("text-anchor", "middle")
    .attr("dy", nodeRadius + 18)
    .style("font-size", `${labelSize}px`);

  node.classed("current", (d) => d.id === currentId);

  simulation.on("tick", () => {
    link
      .attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
    node.attr("transform", (d) => `translate(${d.x},${d.y})`);
  });

  function dragStarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x; d.fy = d.y;
  }
  function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
  function dragEnded(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null; d.fy = null;
  }
}

let graphResizeTimer = null;

function openGraph() {
  els.graphOverlay.hidden = false;
  updateScrollLock();
  buildGraph();
  els.graphClose.focus();
}
function closeGraph() {
  els.graphOverlay.hidden = true;
  updateScrollLock();
}

els.graphToggle.addEventListener("click", openGraph);
els.graphClose.addEventListener("click", closeGraph);
els.graphOverlay.addEventListener("click", (e) => {
  if (e.target === els.graphOverlay) closeGraph();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !els.graphOverlay.hidden) closeGraph();
});

// rebuild the graph (debounced) on resize/orientation change while it's open,
// and re-evaluate the scroll lock breakpoint for the mobile drawer
window.addEventListener("resize", () => {
  updateScrollLock();
  if (els.graphOverlay.hidden) return;
  clearTimeout(graphResizeTimer);
  graphResizeTimer = setTimeout(buildGraph, 150);
});

/* ---------- init ---------- */

els.searchInput.addEventListener("input", (e) => runSearch(e.target.value));

window.addEventListener("popstate", (e) => {
  const id = e.state?.id || new URLSearchParams(window.location.search).get("section") || SECTIONS[0].id;
  renderSection(id);
});

async function init() {
  buildSidebar();

  if (window.hljs) {
    // languages registered via the CDN script tags above
  }

  const results = await Promise.all(
    SECTIONS.map((s) =>
      fetch(s.file)
        .then((r) => r.text())
        .then((text) => [s.id, text])
        .catch(() => [s.id, `# ${s.title}\n\n⚠️ Δεν ήταν δυνατή η φόρτωση αυτής της ενότητας.`])
    )
  );
  results.forEach(([id, text]) => contentStore.set(id, text));

  const requested = new URLSearchParams(window.location.search).get("section");
  const initialId = SECTIONS.some((s) => s.id === requested) ? requested : SECTIONS[0].id;
  navigateTo(initialId, { pushState: false });
}

init();
