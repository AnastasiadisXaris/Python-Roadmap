# 📊 Data Science με Python

Η Python είναι ιδανική για **ανάλυση δεδομένων** και **στατιστική μοντελοποίηση**! Χρησιμοποιείται σε επιστημονική έρευνα, οικονομική ανάλυση, μηχανική μάθηση και πολλά άλλα. Στον οδηγό αυτό θα δούμε ολόκληρη τη ροή εργασίας ενός data science project: από τη φόρτωση και τον καθαρισμό δεδομένων, μέχρι την οπτικοποίηση, τη στατιστική ανάλυση και ένα πρώτο μοντέλο μηχανικής μάθησης.

---

## 🔹 Γιατί να χρησιμοποιήσεις Python για Data Science;

🔹 **Ευκολία στη χρήση** - Καθαρή σύνταξη και μεγάλη κοινότητα χρηστών.

🔹 **Ισχυρές βιβλιοθήκες** - Υπάρχουν πολλά εργαλεία για ανάλυση και επεξεργασία δεδομένων.

🔹 **Συμβατότητα** - Μπορεί να ενσωματωθεί με άλλες γλώσσες και συστήματα.

🔹 **Επεκτασιμότητα** - Υποστηρίζει Big Data και cloud-based ανάλυση.

🔹 **Οικοσύστημα** - Jupyter, Colab, IDEs, notebooks — πολλοί τρόποι να δουλέψεις διαδραστικά.

---

## 🔹 Η ροή εργασίας ενός Data Science project

Ένα τυπικό project data science ακολουθεί (σχεδόν) πάντα τα ίδια βήματα:

1️⃣ **Συλλογή δεδομένων** - CSV, βάσεις δεδομένων, APIs, web scraping.

2️⃣ **Καθαρισμός δεδομένων (Data Cleaning)** - Missing values, duplicates, λάθος τύποι.

3️⃣ **Εξερευνητική Ανάλυση (EDA)** - Κατανόηση της δομής και των μοτίβων των δεδομένων.

4️⃣ **Οπτικοποίηση** - Γραφήματα για εντοπισμό τάσεων και outliers.

5️⃣ **Μοντελοποίηση** - Στατιστικά μοντέλα ή μηχανική μάθηση.

6️⃣ **Αξιολόγηση & Επικοινωνία** - Μετρικές απόδοσης, reports, dashboards.

Θα περάσουμε από όλα αυτά τα βήματα παρακάτω, με πραγματικό κώδικα σε κάθε στάδιο.

---

## 🔹 Βασικές Βιβλιοθήκες:

✅ **NumPy** (Υπολογιστικά μαθηματικά & πίνακες δεδομένων)

✅ **Pandas** (Διαχείριση και επεξεργασία δεδομένων)

✅ **Matplotlib** (Οπτικοποίηση δεδομένων)

✅ **Seaborn** (Στατιστικά γραφήματα)

✅ **Scikit-learn** (Μηχανική μάθηση)

✅ **Statsmodels** (Στατιστική ανάλυση & hypothesis testing)

✅ **BeautifulSoup & Scrapy** (Web scraping)

✅ **Plotly** (Διαδραστικές οπτικοποιήσεις)

✅ **Jupyter Notebook / JupyterLab** (Διαδραστικό περιβάλλον ανάλυσης)

📌 **Εγκατάσταση όλων μαζί:**
```sh
pip install numpy pandas matplotlib seaborn scikit-learn statsmodels plotly jupyter
```

---

## 🔹 Παράδειγμα Ανάλυσης Δεδομένων:

```python
import pandas as pd

# Δημιουργία DataFrame
data = {'Όνομα': ['Αντώνης', 'Μαρία'], 'Ηλικία': [30, 25]}
df = pd.DataFrame(data)

# Εμφάνιση δεδομένων
print(df)
```

📌 **Αποθήκευση & Ανάγνωση από αρχείο CSV**
```python
df.to_csv("data.csv", index=False)  # Αποθήκευση
new_df = pd.read_csv("data.csv")    # Ανάγνωση
print(new_df)
```

📌 **Γρήγορη επισκόπηση ενός DataFrame**
```python
df.head()        # Πρώτες 5 γραμμές
df.tail(3)        # Τελευταίες 3 γραμμές
df.shape          # (γραμμές, στήλες)
df.columns        # Ονόματα στηλών
df.dtypes         # Τύποι δεδομένων ανά στήλη
df.info()         # Σύνοψη: τύποι, non-null τιμές, μνήμη
```

---

## 🔹 Καθαρισμός Δεδομένων (Data Cleaning)

Στην πράξη, τα δεδομένα σπάνια είναι "καθαρά". Ο εντοπισμός και η διαχείριση κενών τιμών, διπλότυπων και λάθος τύπων είναι από τα πιο σημαντικά βήματα.

```python
import pandas as pd
import numpy as np

data = {
    'Όνομα': ['Αντώνης', 'Μαρία', 'Γιώργος', 'Μαρία'],
    'Ηλικία': [30, np.nan, 45, 25],
    'Πόλη': ['Αθήνα', 'Θεσσαλονίκη', None, 'Θεσσαλονίκη']
}
df = pd.DataFrame(data)

# Εντοπισμός κενών τιμών
print(df.isnull().sum())

# Συμπλήρωση κενών τιμών με τον μέσο όρο
df['Ηλικία'] = df['Ηλικία'].fillna(df['Ηλικία'].mean())

# Αφαίρεση γραμμών με κενές τιμές (εναλλακτικά)
# df = df.dropna()

# Αφαίρεση διπλότυπων γραμμών
df = df.drop_duplicates()

# Μετατροπή τύπου δεδομένων
df['Ηλικία'] = df['Ηλικία'].astype(int)

print(df)
```

📌 **Άλλες χρήσιμες λειτουργίες καθαρισμού:**
```python
df.rename(columns={'Όνομα': 'name'}, inplace=True)  # Μετονομασία στήλης
df['Πόλη'] = df['Πόλη'].str.strip().str.title()      # Καθαρισμός κειμένου
df = df[df['Ηλικία'] > 0]                              # Φιλτράρισμα μη έγκυρων τιμών
```

---

## 🔹 Στατιστική Ανάλυση με NumPy & Pandas:

```python
import numpy as np
import pandas as pd

# Δημιουργία τυχαίων δεδομένων
data = np.random.randint(1, 100, (5, 3))
df = pd.DataFrame(data, columns=["A", "B", "C"])

# Βασικές στατιστικές τιμές
print(df.describe())
```

📌 **Πιο συγκεκριμένες στατιστικές συναρτήσεις:**
```python
df["A"].mean()      # Μέσος όρος
df["A"].median()     # Διάμεσος
df["A"].std()        # Τυπική απόκλιση
df["A"].var()         # Διακύμανση
df.corr()             # Πίνακας συσχετίσεων μεταξύ στηλών
```

### Group By - Ομαδοποίηση δεδομένων

Το `groupby` είναι από τα πιο δυνατά εργαλεία του Pandas· επιτρέπει ομαδοποίηση και συγκεντρωτικούς υπολογισμούς ανά κατηγορία:

```python
sales = pd.DataFrame({
    'Κατηγορία': ['Ρούχα', 'Ρούχα', 'Ηλεκτρονικά', 'Ηλεκτρονικά', 'Βιβλία'],
    'Πωλήσεις': [120, 90, 300, 250, 60]
})

grouped = sales.groupby('Κατηγορία')['Πωλήσεις'].agg(['sum', 'mean', 'count'])
print(grouped)
```

### Merge - Συνδυασμός δεδομένων από πολλαπλές πηγές

```python
customers = pd.DataFrame({'id': [1, 2, 3], 'name': ['Άννα', 'Νίκος', 'Ελένη']})
orders = pd.DataFrame({'id': [1, 2, 2], 'amount': [50, 20, 75]})

merged = pd.merge(customers, orders, on='id', how='inner')
print(merged)
```

---

## 🔹 Εξερευνητική Ανάλυση Δεδομένων (EDA)

Πριν φτιάξεις οποιοδήποτε μοντέλο, είναι σημαντικό να "γνωρίσεις" τα δεδομένα σου: κατανομές, ακραίες τιμές (outliers), σχέσεις μεταξύ μεταβλητών.

```python
import pandas as pd
import seaborn as sns

df = sns.load_dataset("tips")  # Έτοιμο dataset για εξάσκηση

# Κατανομή μιας μεταβλητής
print(df["total_bill"].describe())

# Πλήθος μοναδικών τιμών σε κατηγορική στήλη
print(df["day"].value_counts())

# Έλεγχος outliers με το IQR
Q1 = df["total_bill"].quantile(0.25)
Q3 = df["total_bill"].quantile(0.75)
IQR = Q3 - Q1
outliers = df[(df["total_bill"] < Q1 - 1.5 * IQR) | (df["total_bill"] > Q3 + 1.5 * IQR)]
print(f"Αριθμός outliers: {len(outliers)}")
```

---

## 🔹 Οπτικοποίηση Δεδομένων με Matplotlib & Seaborn:

```python
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Δημιουργία δείγματος δεδομένων
data = {'Κατηγορία': ['A', 'B', 'C', 'D'], 'Τιμή': [10, 20, 30, 40]}
df = pd.DataFrame(data)

# Γράφημα
plt.figure(figsize=(8,5))
sns.barplot(x="Κατηγορία", y="Τιμή", data=df)
plt.title("Παράδειγμα Bar Chart")
plt.show()
```

📌 **Ιστόγραμμα (κατανομή μιας μεταβλητής)**
```python
sns.histplot(df["Τιμή"], bins=10, kde=True)
plt.show()
```

📌 **Boxplot (εντοπισμός outliers)**
```python
sns.boxplot(x="Κατηγορία", y="Τιμή", data=df)
plt.show()
```

📌 **Heatmap συσχετίσεων**
```python
import numpy as np

numeric_df = pd.DataFrame(np.random.rand(10, 4), columns=["A", "B", "C", "D"])
sns.heatmap(numeric_df.corr(), annot=True, cmap="coolwarm")
plt.show()
```

📌 **Scatter plot (σχέση δύο μεταβλητών)**
```python
sns.scatterplot(x="A", y="B", data=numeric_df)
plt.show()
```

📌 **Διαδραστικά γραφήματα με Plotly**
```python
import plotly.express as px

fig = px.scatter(df, x="Κατηγορία", y="Τιμή", size="Τιμή", title="Διαδραστικό Scatter Plot")
fig.show()
```

---

## 🔹 Στατιστικός Έλεγχος Υποθέσεων

Πέρα από περιγραφική στατιστική, βιβλιοθήκες όπως το `scipy.stats` επιτρέπουν πιο επίσημο στατιστικό έλεγχο, π.χ. αν η διαφορά ανάμεσα σε δύο ομάδες είναι στατιστικά σημαντική:

```python
from scipy import stats
import numpy as np

group_a = np.random.normal(50, 5, 100)
group_b = np.random.normal(53, 5, 100)

t_stat, p_value = stats.ttest_ind(group_a, group_b)
print(f"t-statistic: {t_stat:.3f}, p-value: {p_value:.4f}")

if p_value < 0.05:
    print("Στατιστικά σημαντική διαφορά ανάμεσα στις ομάδες.")
else:
    print("Δεν υπάρχει στατιστικά σημαντική διαφορά.")
```

---

## 🔹 Μηχανική Μάθηση με Scikit-Learn:

### Γραμμική Παλινδρόμηση (Regression)

```python
from sklearn.linear_model import LinearRegression

# Δημιουργία δεδομένων
X = [[1], [2], [3], [4], [5]]
y = [10, 20, 30, 40, 50]

# Εκπαίδευση μοντέλου
model = LinearRegression()
model.fit(X, y)

# Πρόβλεψη
print(model.predict([[6]]))  # Αναμενόμενο: 60
```

### Προετοιμασία δεδομένων: train/test split & scaling

Πριν εκπαιδεύσεις ένα πραγματικό μοντέλο, χωρίζεις τα δεδομένα σε training/testing sets και κανονικοποιείς τα features:

```python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pandas as pd

df = pd.read_csv("data.csv")

X = df.drop(columns=["target"])
y = df["target"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

### Ταξινόμηση (Classification) - Παράδειγμα με πραγματικό dataset

Το scikit-learn έρχεται με έτοιμα datasets, ιδανικά για εξάσκηση:

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Φόρτωση του κλασικού Iris dataset
iris = load_iris()
X, y = iris.data, iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)

# Εκπαίδευση ενός Random Forest classifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Πρόβλεψη & αξιολόγηση
y_pred = clf.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2%}")
print(classification_report(y_test, y_pred, target_names=iris.target_names))
```

### Αξιολόγηση Μοντέλου & Cross-Validation

Μια μεμονωμένη μέτρηση σε ένα test set μπορεί να είναι παραπλανητική. Το **cross-validation** δίνει πιο αξιόπιστη εικόνα της απόδοσης:

```python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(clf, X, y, cv=5)  # 5-fold cross-validation
print(f"Ακρίβεια ανά fold: {scores}")
print(f"Μέση ακρίβεια: {scores.mean():.2%} (±{scores.std():.2%})")
```

📌 **Βασικές μετρικές αξιολόγησης:**

| Μετρική | Χρήση |
|---|---|
| `accuracy_score` | Γενική ακρίβεια — καλή για ισορροπημένα datasets |
| `precision_score` / `recall_score` | Πότε το κόστος λάθος θετικού/αρνητικού διαφέρει |
| `f1_score` | Ισορροπία precision & recall |
| `mean_absolute_error` | Regression — μέσο απόλυτο σφάλμα |
| `mean_squared_error` / `r2_score` | Regression — πόσο καλά «εξηγεί» το μοντέλο τη διακύμανση |

```python
from sklearn.metrics import mean_absolute_error, r2_score

y_pred = model.predict(X_test)
print(f"MAE: {mean_absolute_error(y_test, y_pred):.2f}")
print(f"R²: {r2_score(y_test, y_pred):.2f}")
```

---

## 🔹 Ολοκληρωμένο Παράδειγμα: Ένα Μικρό End-to-End Pipeline

Συνδυάζοντας όλα τα παραπάνω βήματα σε ένα μίνι project:

```python
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# 1. Φόρτωση δεδομένων
iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df["target"] = iris.target

# 2. Γρήγορη επισκόπηση
print(df.describe())

# 3. Διαχωρισμός features/target
X = df.drop(columns=["target"])
y = df["target"]

# 4. Train/test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 5. Κανονικοποίηση
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 6. Εκπαίδευση μοντέλου
model = LogisticRegression(max_iter=200)
model.fit(X_train_scaled, y_train)

# 7. Αξιολόγηση
y_pred = model.predict(X_test_scaled)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2%}")
```

---

## 🔹 Καλές Πρακτικές

✔️ Έλεγξε πάντα για **missing values** και **outliers** πριν μοντελοποιήσεις.
✔️ Μην κάνεις `fit` τον scaler στο test set — μόνο `transform`, για να αποφύγεις **data leakage**.
✔️ Χρησιμοποίησε **cross-validation** αντί για μία μόνο μέτρηση ακρίβειας.
✔️ Κράτα τον κώδικά σου **αναπαραγώγιμο** (`random_state`) ώστε τα αποτελέσματα να είναι σταθερά.
✔️ Οπτικοποίησε τα δεδομένα **πριν** και **μετά** τον καθαρισμό, για να βλέπεις τι άλλαξε.

---

## 🔹 Επόμενα Βήματα

1️⃣ **Δούλεψε με πραγματικά datasets** - Δοκίμασε το [Kaggle](https://www.kaggle.com/) ή το [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php).

2️⃣ **Εξασκήσου σε Jupyter/Colab** - Ιδανικό για διαδραστική εξερεύνηση δεδομένων.

3️⃣ **Μάθε πιο προχωρημένη οπτικοποίηση** - Dashboards με Plotly Dash ή Streamlit.

4️⃣ **Πήγαινε στο επόμενο βήμα** - Δες τον οδηγό Machine Learning για πιο προχωρημένα μοντέλα.

---

## 🎯 Συμπέρασμα

Η Python είναι ένα πανίσχυρο εργαλείο για Data Science, προσφέροντας πλούσιες βιβλιοθήκες για καθαρισμό, ανάλυση, οπτικοποίηση, στατιστική και μηχανική μάθηση. Η πραγματική εξάσκηση έρχεται μέσα από πραγματικά datasets — δοκίμασε να αναπαράγεις το pipeline παραπάνω με τα δικά σου δεδομένα και προχώρα βήμα-βήμα! 🚀
