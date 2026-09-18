# Python Roadmap

An interactive Python learning guide — from the basics to Machine Learning — with sidebar navigation, in-content search, syntax-highlighted code with a copy button, and a secondary interactive topic map (D3 force graph).

🔗 **[Live demo](#)** _(https://anastasiadisxaris.github.io/Python_roadmap/)_

## Features

- **Path-based sidebar** — six ordered topics, from Python Basics to Machine Learning, styled as a literal roadmap
- **Search** — filters topics live by title and content, accent/case-insensitive
- **Syntax-highlighted code blocks** with a one-click copy button
- **Topic map** — an optional D3 force-directed graph showing how topics connect; click a node to jump to it
- **Shareable URLs** — the current topic is reflected in `?section=...` so you can link directly to it
- **Responsive** — sidebar collapses into a toggle menu on small screens

## Tech stack

Plain HTML/CSS/JS — no build step. Uses [marked](https://github.com/markedjs/marked) for Markdown rendering, [highlight.js](https://highlightjs.org/) for syntax highlighting, and [D3.js](https://d3js.org/) for the topic map.

## Running locally

Because the page loads the `.md` files with `fetch()`, it needs to be served over HTTP rather than opened directly from `file://`:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project structure

```
.
├── index.html           # app shell
├── style.css            # all styling (typography, sidebar, map, syntax highlighting)
├── script.js            # navigation, search, markdown rendering, D3 graph
├── python_basics.md     # topic content
├── data_structures.md
├── oop.md
├── web_dev.md
├── data_science.md
└── machine_learning.md
```

## Adding a new topic

1. Add a new `.md` file with your content.
2. Register it in the `SECTIONS` array in `script.js` (id, title, filename).
3. Optionally add it to `GRAPH_LINKS` to connect it to related topics in the map.

## License

MIT — feel free to use and adapt this for your own learning notes.
