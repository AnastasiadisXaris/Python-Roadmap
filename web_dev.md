# 🌐 Web Development με Python

Η Python είναι μια ισχυρή γλώσσα για την ανάπτυξη δυναμικών ιστοσελίδων **Web Development**! Μπορείς να δημιουργήσεις **websites & APIs** με **Flask** ή **Django**. Είναι ευέλικτη, ισχυρή και εύκολη στη χρήση και διαθέτει μια πληθώρα βιβλιοθηκών και εργαλείων που διευκολύνουν την ανάπτυξη εφαρμογών ιστού.

## 🔹 Γιατί να χρησιμοποιήσεις Python για Web Development;

🔹 **Ευκολία στη μάθηση** - Η Python έχει απλή σύνταξη και είναι ιδανική για αρχάριους.

🔹 **Μεγάλη κοινότητα** - Υπάρχουν πολλές πηγές μάθησης και υποστήριξη από προγραμματιστές παγκοσμίως.

🔹 **Ευελιξία** - Υποστηρίζει τόσο μικρά projects όσο και μεγάλες, περίπλοκες εφαρμογές.

🔹 **Ασφάλεια** - Frameworks όπως το Django προσφέρουν ενσωματωμένες δυνατότητες ασφαλείας.


## 🔹 Ποια εργαλεία να μάθεις;

✅ **Flask** (Ελαφρύ framework - κατάλληλο για μικρές εφαρμογές και APIs)

✅ **Django** (Full-stack framework - ιδανικό για μεγαλύτερες εφαρμογές με πολλές λειτουργίες)

✅ **FastAPI** (Σύγχρονο framework για γρήγορη ανάπτυξη APIs)

✅ **Jinja2** (Template engine για δυναμικά HTML templates)

✅ **SQLAlchemy** (ORM για διαχείριση βάσεων δεδομένων σε Flask)

✅ **Django ORM** (Εργαλείο για εύκολη διαχείριση βάσεων δεδομένων σε Django)

✅ **HTMX & Alpine.js** (Βιβλιοθήκες για διαδραστικές σελίδες χωρίς πολύ JavaScript)

✅ **Pytest** (Testing framework για να δοκιμάζεις τον κώδικά σου)


## 🔹 Flask vs Django vs FastAPI - Ποιο να διαλέξεις;

| | **Flask** | **Django** | **FastAPI** |
|---|---|---|---|
| **Μέγεθος** | Μικρό, minimal | Full-stack, "batteries included" | Μικρό, εστιασμένο σε APIs |
| **Καμπύλη μάθησης** | Εύκολη | Πιο απότομη | Εύκολη (αν ξέρεις Python type hints) |
| **Ενσωματωμένο admin panel** | ❌ | ✅ | ❌ |
| **Async υποστήριξη** | Περιορισμένη | Μερική | ✅ Εγγενής (native) |
| **Ιδανικό για** | Μικρά/μεσαία projects, prototyping | Μεγάλες εφαρμογές με πολλά features | Σύγχρονα, γρήγορα APIs |

## 🔹 Ποια είναι τα βασικά βήματα για Web Development με Python;

1️⃣ **Επιλογή framework** - Flask για μικρότερα projects, Django για μεγαλύτερες εφαρμογές.

2️⃣ **Δημιουργία ενός εικονικού περιβάλλοντος** - Για να διαχειρίζεσαι εξαρτήσεις εύκολα.

3️⃣ **Οργάνωση της εφαρμογής** - Κατάλληλη δομή φακέλων και αρχείων.

4️⃣ **Διαχείριση δεδομένων** - Χρήση ORM (όπως SQLAlchemy ή Django ORM) για σύνδεση με βάση δεδομένων.

5️⃣ **Ανάπτυξη frontend** - Χρήση HTML, CSS, JavaScript, ή συνδυασμός με Vue.js ή React.

6️⃣ **Δοκιμές & ανάπτυξη** - Χρήση μονάδων δοκιμής (unit tests) και ανάπτυξη με Docker ή cloud υπηρεσίες.


### 📌 Δημιουργία εικονικού περιβάλλοντος (Virtual Environment)

Πριν ξεκινήσεις οποιοδήποτε project, είναι καλή πρακτική να απομονώνεις τις εξαρτήσεις του:

```sh
# Δημιουργία virtual environment
python -m venv venv

# Ενεργοποίηση (Windows)
venv\Scripts\activate

# Ενεργοποίηση (macOS/Linux)
source venv/bin/activate

# Εγκατάσταση εξαρτήσεων
pip install flask
```

---

## 🔹 Παράδειγμα Flask:

Ένα απλό παράδειγμα με το Flask για να δημιουργήσεις έναν βασικό web server:

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Καλώς ήρθες στο Web Development!"

if __name__ == "__main__":
    app.run(debug=True)
```

### 📌 Δυναμικά Routes με παραμέτρους

```python
@app.route("/user/<username>")
def show_user(username):
    return f"Προφίλ χρήστη: {username}"

@app.route("/product/<int:product_id>")
def show_product(product_id):
    return f"Προϊόν με ID: {product_id}"
```

### 📌 Templates με Jinja2

Το Flask χρησιμοποιεί το Jinja2 για δυναμικά HTML templates. Βάζεις τα `.html` αρχεία σε φάκελο `templates/`:

```python
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/profile/<name>")
def profile(name):
    return render_template("profile.html", username=name)
```

```html
<!-- templates/profile.html -->
<h1>Καλώς ήρθες, {{ username }}!</h1>
{% if username == "admin" %}
  <p>Έχεις δικαιώματα διαχειριστή.</p>
{% endif %}
```

### 📌 Διαχείριση φορμών (Forms)

```python
from flask import Flask, request
app = Flask(__name__)

@app.route("/submit", methods=["GET", "POST"])
def submit():
    if request.method == "POST":
        name = request.form.get("name")
        return f"Ευχαριστούμε, {name}!"
    return '''
        <form method="POST">
            <input type="text" name="name">
            <button type="submit">Αποστολή</button>
        </form>
    '''
```

### 📌 Ανάπτυξη API με Flask

```python
from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/api/data")
def get_data():
    return jsonify({"message": "Αυτό είναι ένα API endpoint!"})

if __name__ == "__main__":
    app.run(debug=True)
```

### 📌 Βάση Δεδομένων με SQLAlchemy

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)

with app.app_context():
    db.create_all()

    new_user = User(username="antonis")
    db.session.add(new_user)
    db.session.commit()

    users = User.query.all()
    print(users)
```

---

## 🔹 Παράδειγμα Django:

Με το Django μπορείς να δημιουργήσεις πιο σύνθετες εφαρμογές. Ένα γρήγορο παράδειγμα δημιουργίας ενός Django project:

```sh
# Εγκατάσταση Django
pip install django

# Δημιουργία project
django-admin startproject mysite
cd mysite

# Δημιουργία μιας εφαρμογής μέσα στο project
python manage.py startapp blog

python manage.py runserver
```

Αυτό δημιουργεί μια βασική δομή εφαρμογής που μπορείς να επεκτείνεις.

### 📌 Django Models (ORM)

Στο Django, ορίζεις τα δεδομένα σου ως Python κλάσεις — το framework αναλαμβάνει τη μετάφρασή τους σε πίνακες βάσης δεδομένων:

```python
# blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
```

```sh
# Δημιουργία & εφαρμογή migrations (μεταφράζουν το model σε πίνακα SQL)
python manage.py makemigrations
python manage.py migrate
```

### 📌 Django Views & URLs

```python
# blog/views.py
from django.shortcuts import render
from .models import Post

def post_list(request):
    posts = Post.objects.all()
    return render(request, "blog/post_list.html", {"posts": posts})
```

```python
# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.post_list, name="post_list"),
]
```

---

## 🔹 Ανάπτυξη API με FastAPI

Το FastAPI είναι ιδανικό για τη δημιουργία γρήγορων, ασύγχρονων APIs, με αυτόματο data validation μέσω Python type hints:

```python
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Καλώς ήρθες στο FastAPI!"}
```

### 📌 Data Validation με Pydantic

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    in_stock: bool = True

@app.post("/items/")
def create_item(item: Item):
    return {"message": f"Το {item.name} προστέθηκε!", "item": item}
```

Αν το request δεν ταιριάζει με το schema (π.χ. λείπει το `price`), το FastAPI επιστρέφει αυτόματα ένα λεπτομερές σφάλμα validation — χωρίς να γράψεις έστω μία γραμμή ελέγχου.

### 📌 Async Endpoints

```python
import asyncio
from fastapi import FastAPI

app = FastAPI()

@app.get("/async-data")
async def get_async_data():
    await asyncio.sleep(1)  # Προσομοίωση αργής κλήσης (π.χ. σε βάση δεδομένων)
    return {"message": "Δεδομένα μετά από ασύγχρονη αναμονή!"}
```

Το FastAPI δημιουργεί επίσης αυτόματα **interactive API docs** στο `/docs` — πολύ χρήσιμο για δοκιμές χωρίς επιπλέον εργαλεία.

---

## 🔹 Δοκιμές (Testing)

Πριν προχωρήσεις σε production, είναι σημαντικό να δοκιμάζεις τον κώδικά σου:

```python
# test_app.py
import pytest
from app import app

@pytest.fixture
def client():
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

def test_home_page(client):
    response = client.get("/")
    assert response.status_code == 200
    assert b"Web Development" in response.data
```

```sh
pytest test_app.py
```

---

## 🔹 Deployment - Ανέβασμα σε Παραγωγή

Μερικές δημοφιλείς επιλογές για να "ανεβάσεις" την εφαρμογή σου online:

✅ **Render / Railway** - Γρήγορο deployment με μηδενική σχεδόν ρύθμιση, ιδανικό για αρχάριους.

✅ **Docker** - Πακετάρεις την εφαρμογή σου με όλες τις εξαρτήσεις της σε ένα container.

✅ **AWS / Google Cloud / Azure** - Για πιο σοβαρά, κλιμακούμενα production συστήματα.

✅ **Gunicorn / Uvicorn** - Production-ready WSGI/ASGI servers (το `app.run(debug=True)` είναι μόνο για development!).

---

## 🎯 Συμπέρασμα

Η Python είναι ένα εξαιρετικό εργαλείο για Web Development, είτε φτιάχνεις μικρές εφαρμογές με Flask είτε πολύπλοκα projects με Django. Αν θέλεις ταχύτητα και σύγχρονο API development, το FastAPI είναι επίσης μια εξαιρετική επιλογή. Ξεκίνα με ένα μικρό project, πρόσθεσε σιγά-σιγά βάση δεδομένων, forms και tests, και προχώρα προς το deployment. Καλή προγραμματιστική πορεία! 🚀
