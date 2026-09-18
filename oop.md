# 🎭 Αντικειμενοστραφής Προγραμματισμός (OOP)

Ο Αντικειμενοστραφής Προγραμματισμός (Object-Oriented Programming - OOP) είναι ένα δημοφιλές παράδειγμα προγραμματισμού που βοηθάει στη δομή και οργάνωση του κώδικα μέσω της χρήσης κλάσεων και αντικειμένων (objects). Αυτή η προσέγγιση καθιστά τον κώδικα πιο επαναχρησιμοποιήσιμο, ευανάγνωστο και επεκτάσιμο. Στον Α.Π, το λογισμικό οργανώνεται γύρω απο τα αντικείμενα, τα οποία συνδυάζουν δεδομένα (γνωρίσματα, ή ιδιότητες - attributes) και λειτουργίες (μεθόδους - methods) που επεξεργάζονται αυτά τα δεδομένα.

## 🔹 Βασικές Αρχές:

Ο OOP στηρίζεται σε τέσσερις βασικές αρχές:

✅ **Κλάσεις & Αντικείμενα**
Οι κλάσεις είναι τα σχέδια (blueprints) από τα οποία δημιουργούνται τα αντικείμενα. Ένα αντικείμενο είναι μια συγκεκριμένη υλοποίηση μιας κλάσης με μοναδικές τιμές ιδιοτήτων.


✅ **Κληρονομικότητα**
Η κληρονομικότητα επιτρέπει τη δημιουργία νέων κλάσεων που βασίζονται σε υπάρχουσες, επαναχρησιμοποιώντας και επεκτείνοντας τη λειτουργικότητά τους.


✅ **Πολυμορφισμός**
Ο πολυμορφισμός επιτρέπει τη χρήση μιας κοινής διεπαφής για διαφορετικούς τύπους αντικειμένων, κάνοντας τον κώδικα πιο ευέλικτο και επεκτάσιμο.


✅ **Ενθυλάκωση**
Η ενθυλάκωση προστατεύει τα δεδομένα μιας κλάσης, επιτρέποντας την πρόσβαση μόνο μέσω καθορισμένων μεθόδων και αποτρέποντας την απευθείας τροποποίησή τους.


## 🔹 Παράδειγμα Κώδικα:

Ας δούμε ένα παράδειγμα απλής κλάσης στην Python:

```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def drive(self):
        return f"{self.brand} {self.model} 🚗💨 ξεκινάει!"

my_car = Car("Tesla", "Model S")
print(my_car.drive())  # Tesla Model S 🚗💨 ξεκινάει!
```

---

## 🔹 Attributes Κλάσης vs Attributes Instance

Είναι σημαντικό να ξεχωρίζεις τα attributes που ανήκουν σε **κάθε αντικείμενο ξεχωριστά** από αυτά που **μοιράζονται όλα τα αντικείμενα** μιας κλάσης:

```python
class Car:
    wheels = 4  # Class attribute - κοινό για ΟΛΑ τα αντικείμενα

    def __init__(self, brand, model):
        self.brand = brand   # Instance attribute - μοναδικό ανά αντικείμενο
        self.model = model

car1 = Car("Toyota", "Corolla")
car2 = Car("Honda", "Civic")

print(car1.wheels, car2.wheels)  # 4 4 - το ίδιο και για τα δύο
Car.wheels = 3  # Αλλαγή στην κλάση επηρεάζει όλα τα αντικείμενα
print(car1.wheels, car2.wheels)  # 3 3
```

---

## 🔹 Κληρονομικότητα (Inheritance):

Η κληρονομικότητα επιτρέπει τη δημιουργία νέων κλάσεων που κληρονομούν χαρακτηριστικά από υπάρχουσες κλάσεις.

```python
class ElectricCar(Car):
    def __init__(self, brand, model, battery_capacity):
        super().__init__(brand, model)
        self.battery_capacity = battery_capacity

    def charge(self):
        return f"{self.brand} {self.model} φορτίζεται ⚡ ({self.battery_capacity} kWh)"

my_electric_car = ElectricCar("Tesla", "Model 3", 75)
print(my_electric_car.drive())  # Tesla Model 3 🚗💨 ξεκινάει!
print(my_electric_car.charge())  # Tesla Model 3 φορτίζεται ⚡ (75 kWh)
```

### Πολλαπλή Κληρονομικότητα

Η Python επιτρέπει σε μια κλάση να κληρονομεί από **περισσότερες από μία** γονικές κλάσεις:

```python
class Electric:
    def charge(self):
        return "Φορτίζεται ⚡"

class Sporty:
    def turbo_boost(self):
        return "Turbo boost ενεργοποιήθηκε! 🏎️"

class SportsElectricCar(Electric, Sporty):
    pass

car = SportsElectricCar()
print(car.charge())        # Φορτίζεται ⚡
print(car.turbo_boost())    # Turbo boost ενεργοποιήθηκε! 🏎️
```

---

## 🔹 Πολυμορφισμός:

Ο πολυμορφισμός επιτρέπει τη χρήση μιας κοινής μεθόδου με διαφορετική συμπεριφορά ανάλογα με το αντικείμενο.

```python
class Motorcycle:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        return f"{self.brand} 🏍💨 ξεκινάει!"

vehicles = [Car("Ford", "Mustang"), ElectricCar("Nissan", "Leaf", 40), Motorcycle("Ducati")]

for vehicle in vehicles:
    print(vehicle.drive())
```

Κάθε αντικείμενο "ξέρει" τη δική του υλοποίηση της `drive()` — αυτή είναι η ουσία του πολυμορφισμού: το ίδιο "μήνυμα" (κλήση μεθόδου), διαφορετική συμπεριφορά.

---

## 🔹 Ενθυλάκωση:

Η ενθυλάκωση διασφαλίζει ότι τα δεδομένα μιας κλάσης δεν τροποποιούνται απευθείας από εξωτερικό κώδικα.

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Ιδιωτική μεταβλητή

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return f"Κατάθεση {amount}€. Νέο υπόλοιπο: {self.__balance}€"
        return "Το ποσό πρέπει να είναι θετικό!"

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return f"Ανάληψη {amount}€. Υπόλοιπο: {self.__balance}€"
        return "Μη έγκυρο ποσό!"

    def get_balance(self):
        return f"Υπόλοιπο λογαριασμού: {self.__balance}€"

account = BankAccount("Αντώνης", 1000)
print(account.deposit(200))    # Κατάθεση 200€. Νέο υπόλοιπο: 1200€
print(account.withdraw(500))    # Ανάληψη 500€. Υπόλοιπο: 700€
print(account.get_balance())     # Υπόλοιπο λογαριασμού: 700€
```

📌 Η διπλή κάτω παύλα (`__balance`) ενεργοποιεί το **name mangling** της Python — κάνει το attribute δύσκολο (όχι αδύνατο) να προσπελαστεί απευθείας από έξω, ενθαρρύνοντας τη χρήση των μεθόδων `deposit()`/`withdraw()`.

### Properties - Πιο "Pythonic" Ενθυλάκωση

Ο decorator `@property` επιτρέπει να έχεις ελεγχόμενη πρόσβαση σε ένα attribute, ενώ εξωτερικά "μοιάζει" με απλή μεταβλητή:

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance

    @property
    def balance(self):
        """Getter - διαβάζεται σαν απλό attribute"""
        return self.__balance

    @balance.setter
    def balance(self, value):
        """Setter - με έλεγχο εγκυρότητας"""
        if value < 0:
            raise ValueError("Το υπόλοιπο δεν μπορεί να είναι αρνητικό!")
        self.__balance = value

account = BankAccount("Αντώνης", 1000)
print(account.balance)   # 1000 (χωρίς παρενθέσεις!)
account.balance = 1500    # Χρησιμοποιεί το setter
# account.balance = -50   # Θα πετάξει ValueError
```

---

## 🔹 Ειδικές Μέθοδοι (Dunder / Magic Methods)

Οι μέθοδοι με διπλή κάτω παύλα (`__init__`, `__str__` κ.λπ.) λέγονται **dunder methods** ("double underscore") και καθορίζουν πώς συμπεριφέρεται μια κλάση με ενσωματωμένες λειτουργίες της Python (π.χ. `print()`, `len()`, `==`):

```python
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        """Καθορίζει τι εμφανίζεται στο print()"""
        return f"«{self.title}» ({self.pages} σελίδες)"

    def __len__(self):
        """Καθορίζει τι επιστρέφει η len()"""
        return self.pages

    def __eq__(self, other):
        """Καθορίζει τη σύγκριση με =="""
        return self.pages == other.pages

book1 = Book("Python 101", 250)
book2 = Book("Άλλο Βιβλίο", 250)

print(book1)              # «Python 101» (250 σελίδες)
print(len(book1))          # 250
print(book1 == book2)       # True (ίδιος αριθμός σελίδων)
```

📌 **Μερικές ακόμα χρήσιμες dunder methods:**

| Method | Ενεργοποιείται από |
|---|---|
| `__init__` | Δημιουργία αντικειμένου `Book(...)` |
| `__str__` | `print(obj)`, `str(obj)` |
| `__repr__` | Αναπαράσταση για debugging στο console |
| `__len__` | `len(obj)` |
| `__eq__` | `obj1 == obj2` |
| `__lt__` | `obj1 < obj2` (χρήσιμο για `sorted()`) |
| `__add__` | `obj1 + obj2` |

---

## 🔹 Class Methods & Static Methods

Πέρα από τις κανονικές μεθόδους (που δουλεύουν πάνω σε `self`), υπάρχουν και μέθοδοι που δεν χρειάζονται συγκεκριμένο αντικείμενο:

```python
class Car:
    total_cars = 0

    def __init__(self, brand):
        self.brand = brand
        Car.total_cars += 1

    @classmethod
    def get_total_cars(cls):
        """Δουλεύει πάνω στην κλάση, όχι σε συγκεκριμένο instance"""
        return f"Συνολικά αυτοκίνητα: {cls.total_cars}"

    @staticmethod
    def is_valid_brand(brand):
        """Δεν χρειάζεται ούτε self ούτε cls - απλή βοηθητική συνάρτηση"""
        return len(brand) > 0

car1 = Car("Toyota")
car2 = Car("Honda")

print(Car.get_total_cars())          # Συνολικά αυτοκίνητα: 2
print(Car.is_valid_brand("Tesla"))    # True
```

---

## 🔹 Abstract Classes - Επιβολή "Συμβολαίου"

Μια abstract class δεν μπορεί να δημιουργήσει δικά της αντικείμενα — χρησιμεύει σαν "πρότυπο" που αναγκάζει τις υποκλάσεις να υλοποιήσουν συγκεκριμένες μεθόδους:

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass  # Κάθε υποκλάση ΠΡΕΠΕΙ να την υλοποιήσει

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14159 * self.radius ** 2

circle = Circle(5)
print(circle.area())  # 78.53975

# shape = Shape()  # Θα πετάξει TypeError - δεν μπορείς να το instantiate
```

---

## 🔹 Καλές Πρακτικές

✔️ Κάθε κλάση πρέπει να έχει **μία, ξεκάθαρη ευθύνη** (Single Responsibility).

✔️ Προτίμησε **composition over inheritance** όταν η σχέση δεν είναι πραγματικό "is-a" (π.χ. ένα `Car` *έχει* ένα `Engine`, δεν *είναι* Engine).

✔️ Χρησιμοποίησε `@property` αντί για ξεχωριστές `get_x()`/`set_x()` μεθόδους — πιο "Pythonic".

✔️ Πρόσθεσε πάντα `__str__` ή `__repr__` στις κλάσεις σου για ευκολότερο debugging.

✔️ Απόφυγε βαθιές ιεραρχίες κληρονομικότητας (πάνω από 2-3 επίπεδα) — δυσκολεύουν τη συντήρηση.

---

## 🎯 Επόμενα Βήματα

🔹 **Εξασκήσου** φτιάχνοντας δικές σου κλάσεις για πραγματικά προβλήματα (π.χ. ένα σύστημα διαχείρισης βιβλιοθήκης).

🔹 **Διάβασε για SOLID principles** — αρχές σχεδιασμού που κάνουν τον OOP κώδικα πιο συντηρήσιμο.

🔹 **Προχώρα στο Web Development** - Frameworks όπως το Django χρησιμοποιούν OOP σε κάθε τους γωνιά.


Με τη χρήση των αρχών του OOP, ο κώδικας γίνεται πιο οργανωμένος, πιο ασφαλής και πιο ευέλικτος. 🚀
