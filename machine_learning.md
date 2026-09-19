# 🤖 Machine Learning με Python

Η **Μηχανική Μάθηση** χρησιμοποιείται σε τομείς της **AI, αναγνώριση εικόνων & chatbot ανάπτυξη**! Είναι ένας κλάδος της τεχνητής νοημοσύνης που επιτρέπει στους υπολογιστές να μαθαίνουν από δεδομένα και να βελτιώνουν την απόδοσή τους χωρίς ρητή προγραμματιστική παρέμβαση.

---

## 🔹 Γιατί να χρησιμοποιήσεις Python για Machine Learning;

✅ **Ευκολία χρήσης** - Η Python έχει απλή σύνταξη και πολλές έτοιμες βιβλιοθήκες.

✅ **Μεγάλη κοινότητα** - Υπάρχουν πολλοί πόροι μάθησης και υποστήριξη.

✅ **Ευελιξία** - Χρησιμοποιείται σε διάφορους τομείς, από αναγνώριση εικόνων έως οικονομικά δεδομένα.

✅ **Υποστήριξη GPU** - Τα TensorFlow και PyTorch αξιοποιούν GPUs για ταχύτερη εκπαίδευση μοντέλων.

---

## 🔹 Βασικές Βιβλιοθήκες:

✅ **Scikit-Learn** (ML models: Regression, Classification, Clustering)

✅ **TensorFlow / PyTorch** (Deep Learning: CNNs, RNNs, GANs)

✅ **NLTK / SpaCy** (Επεξεργασία Φυσικής Γλώσσας - NLP)

✅ **Pandas & NumPy** (Διαχείριση, επεξεργασία και ανάλυση δεδομένων)

✅ **Matplotlib & Seaborn** (Οπτικοποίηση δεδομένων)

✅ **OpenCV** (Επεξεργασία εικόνας και Computer Vision)

✅ **XGBoost & LightGBM** (Boosting αλγόριθμοι για βελτιστοποιημένη απόδοση)

✅ **Joblib** (Αποθήκευση & φόρτωση εκπαιδευμένων μοντέλων)

---

## 🔹 Παράδειγμα Μοντέλου:

Ένα απλό παράδειγμα γραμμικής παλινδρόμησης με **Scikit-Learn**:

```python
from sklearn.linear_model import LinearRegression
import numpy as np

model = LinearRegression()
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([10, 20, 30, 40, 50])

model.fit(X, y)
prediction = model.predict([[6]])
print(f"Αναμενόμενο: {prediction[0]}")  # Αναμενόμενο: 60
```

---

## 🔹 Προετοιμασία Δεδομένων για Machine Learning:

Η προετοιμασία των δεδομένων είναι κρίσιμη για την απόδοση του μοντέλου:

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Φόρτωση δεδομένων
df = pd.read_csv("data.csv")

# Διαχωρισμός features & target
X = df.drop(columns=["target"])
y = df["target"]

# Διαχωρισμός σε training και testing set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Κανονικοποίηση δεδομένων
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

### 📌 Επεξεργασία Κατηγορικών Μεταβλητών (Encoding)

Τα μοντέλα ML χρειάζονται αριθμούς, όχι κείμενο. Το **encoding** μετατρέπει κατηγορικές στήλες σε αριθμητική μορφή:

```python
import pandas as pd

df = pd.DataFrame({"city": ["Αθήνα", "Θεσσαλονίκη", "Αθήνα", "Πάτρα"]})

# One-hot encoding - μία binary στήλη ανά κατηγορία
encoded = pd.get_dummies(df, columns=["city"])
print(encoded)
```

---

## 🔹 Βασικοί Τύποι Αλγορίθμων Machine Learning:

📌 **Επιβλεπόμενη Μάθηση (Supervised Learning)**
- **Regression** (π.χ. Linear Regression, Decision Trees)
- **Classification** (π.χ. Logistic Regression, Random Forest, SVM)

📌 **Μη Επιβλεπόμενη Μάθηση (Unsupervised Learning)**
- **Clustering** (π.χ. K-Means, DBSCAN, Hierarchical Clustering)
- **Dimensionality Reduction** (π.χ. PCA, t-SNE)

📌 **Ενισχυτική Μάθηση (Reinforcement Learning)**
- **Q-Learning**, **Deep Q-Networks (DQN)**

---

## 🔹 Overfitting vs Underfitting

Δύο από τα πιο σημαντικά προβλήματα στη Machine Learning:

- **Underfitting** - Το μοντέλο είναι πολύ απλό και δεν "μαθαίνει" καλά ούτε τα δεδομένα εκπαίδευσης. Χαμηλή απόδοση παντού.
- 
- **Overfitting** - Το μοντέλο "απομνημονεύει" τα δεδομένα εκπαίδευσης αντί να γενικεύει. Πολύ καλή απόδοση στο training set, κακή στο test set.

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

# Πολύ βαθύ δέντρο = μεγάλος κίνδυνος overfitting
overfit_model = DecisionTreeClassifier(max_depth=None, random_state=42)
overfit_model.fit(X_train, y_train)

print("Training accuracy:", accuracy_score(y_train, overfit_model.predict(X_train)))
print("Test accuracy:", accuracy_score(y_test, overfit_model.predict(X_test)))
# Μεγάλη διαφορά training/test accuracy -> ένδειξη overfitting

# Περιορισμός βάθους = πιο απλό, πιο γενικευμένο μοντέλο
balanced_model = DecisionTreeClassifier(max_depth=4, random_state=42)
balanced_model.fit(X_train, y_train)
print("Balanced test accuracy:", accuracy_score(y_test, balanced_model.predict(X_test)))
```

💡 **Λύσεις για overfitting:** περισσότερα δεδομένα, regularization, cross-validation, μείωση πολυπλοκότητας μοντέλου (π.χ. μικρότερο `max_depth`), early stopping σε neural networks.

---

## 🔹 Hyperparameter Tuning με Grid Search

Αντί να δοκιμάζεις χειροκίνητα διαφορετικές τιμές παραμέτρων, το `GridSearchCV` δοκιμάζει συστηματικά όλους τους συνδυασμούς και κρατάει τον καλύτερο:

```python
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier

param_grid = {
    "n_estimators": [50, 100, 200],
    "max_depth": [None, 5, 10],
}

grid_search = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid,
    cv=5,
    scoring="accuracy"
)
grid_search.fit(X_train, y_train)

print("Καλύτερες παράμετροι:", grid_search.best_params_)
print("Καλύτερο accuracy:", grid_search.best_score_)

best_model = grid_search.best_estimator_
```

---

## 🔹 Clustering (Μη Επιβλεπόμενη Μάθηση)

Το **K-Means** ομαδοποιεί δεδομένα σε clusters χωρίς να χρειάζεται ετικέτες (labels):

```python
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Δημιουργία συνθετικών δεδομένων με "φυσικά" clusters
X, _ = make_blobs(n_samples=300, centers=4, random_state=42)

kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
labels = kmeans.fit_predict(X)

plt.scatter(X[:, 0], X[:, 1], c=labels, cmap="viridis")
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1],
            c="red", marker="X", s=200, label="Κέντρα")
plt.legend()
plt.title("K-Means Clustering")
plt.show()
```

## 🔹 Μείωση Διαστάσεων με PCA

Το **PCA (Principal Component Analysis)** συμπυκνώνει πολλά features σε λιγότερα, κρατώντας όσο το δυνατόν περισσότερη πληροφορία — χρήσιμο για οπτικοποίηση δεδομένων υψηλών διαστάσεων:

```python
from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
import matplotlib.pyplot as plt

iris = load_iris()
X, y = iris.data, iris.target  # 4 διαστάσεις

pca = PCA(n_components=2)  # Συμπύκνωση σε 2 διαστάσεις
X_reduced = pca.fit_transform(X)

plt.scatter(X_reduced[:, 0], X_reduced[:, 1], c=y, cmap="viridis")
plt.xlabel("Πρώτη κύρια συνιστώσα")
plt.ylabel("Δεύτερη κύρια συνιστώσα")
plt.title("Iris dataset σε 2D μέσω PCA")
plt.show()

print(f"Διατηρούμενη πληροφορία: {sum(pca.explained_variance_ratio_):.1%}")
```

---

## 🔹 Οπτικοποίηση Αποτελεσμάτων Μοντέλου:

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Παράδειγμα οπτικοποίησης δεδομένων
sns.histplot(df["feature"], bins=20, kde=True)
plt.show()
```

### 📌 Confusion Matrix - Οπτικοποίηση λαθών ταξινόμησης

```python
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay

y_pred = balanced_model.predict(X_test)
cm = confusion_matrix(y_test, y_pred)

disp = ConfusionMatrixDisplay(confusion_matrix=cm)
disp.plot(cmap="Blues")
plt.title("Confusion Matrix")
plt.show()
```

---

## 🔹 Εκπαίδευση & Αξιολόγηση Μοντέλου:

```python
from sklearn.metrics import accuracy_score, mean_absolute_error

# Πρόβλεψη
y_pred = model.predict(X_test)

# Αξιολόγηση απόδοσης
mae = mean_absolute_error(y_test, y_pred)
print(f"Mean Absolute Error: {mae}")
```

📌 **Ποια μετρική να χρησιμοποιήσεις;**

| Πρόβλημα | Μετρικές |
|---|---|
| Classification (ισορροπημένο dataset) | `accuracy` |
| Classification (ανισόρροπο dataset, π.χ. fraud detection) | `precision`, `recall`, `f1-score`, `ROC-AUC` |
| Regression | `MAE`, `MSE`, `RMSE`, `R²` |
| Clustering | `silhouette score`, οπτική επιθεώρηση |

---

## 🔹 Αποθήκευση & Φόρτωση Μοντέλου

Μια φορά που εκπαιδεύσεις ένα μοντέλο, δεν χρειάζεται να το ξανα-εκπαιδεύσεις κάθε φορά — το αποθηκεύεις και το φορτώνεις όποτε χρειάζεται:

```python
import joblib

# Αποθήκευση
joblib.dump(best_model, "model.joblib")

# Φόρτωση σε άλλο script/session
loaded_model = joblib.load("model.joblib")
prediction = loaded_model.predict(X_test[:1])
```

---

## 🔹 Μια Πρώτη Ματιά στο Deep Learning

Για πιο σύνθετα προβλήματα (εικόνες, κείμενο, ήχος), χρησιμοποιούνται **νευρωνικά δίκτυα**. Ένα απλό παράδειγμα με Keras (TensorFlow):

```python
from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    layers.Dense(16, activation="relu", input_shape=(4,)),
    layers.Dense(8, activation="relu"),
    layers.Dense(3, activation="softmax")  # 3 κλάσεις εξόδου
])

model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])

# model.fit(X_train, y_train, epochs=20, validation_split=0.2)
model.summary()
```

💡 Δεν χρειάζεται να κατανοήσεις όλα τα επίπεδα (layers) εξαρχής — το σημαντικό στην αρχή είναι η ιδέα: δεδομένα εισόδου → κρυφά επίπεδα που «μαθαίνουν» μοτίβα → έξοδος πρόβλεψης.

---

## 🔹 Γρήγορη Ματιά: NLP & Computer Vision

📌 **NLP (Επεξεργασία Φυσικής Γλώσσας) με spaCy:**
```python
import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Python is a great language for machine learning.")

for token in doc:
    print(token.text, token.pos_)  # Λέξη + γραμματικός ρόλος
```

📌 **Computer Vision με OpenCV:**
```python
import cv2

image = cv2.imread("photo.jpg")
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)  # Μετατροπή σε ασπρόμαυρο
cv2.imwrite("gray_photo.jpg", gray)
```

---

## 🔹 Επόμενα Βήματα:

1️⃣ **Δούλεψε με πραγματικά δεδομένα** - Χρησιμοποίησε datasets όπως αυτά του [Kaggle](https://www.kaggle.com/) ή του [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php).

2️⃣ **Πειραματίσου με διαφορετικούς αλγορίθμους** - Δοκίμασε Random Forest, XGBoost, CNNs.

3️⃣ **Βελτιστοποίησε τα μοντέλα σου** - Χρησιμοποίησε Grid Search, Random Search, και hyperparameter tuning.

4️⃣ **Μάθε τα βασικά του Deep Learning** - Ξεκίνα με απλά feedforward δίκτυα πριν προχωρήσεις σε CNNs/RNNs.

5️⃣ **Δημιούργησε εφαρμογές AI** - Chatbots, Computer Vision, NLP projects.

---

## 🎯 Συμπέρασμα

Η Μηχανική Μάθηση με Python είναι ένα από τα πιο συναρπαστικά και χρήσιμα πεδία της τεχνολογίας σήμερα. Ξεκίνα με βασικούς αλγορίθμους, κατανόησε την έννοια του overfitting, μάθε να αξιολογείς σωστά τα μοντέλα σου, και σιγά-σιγά προχώρα σε πιο προχωρημένα θέματα όπως το deep learning. Καλή προγραμματιστική πορεία! 🚀
