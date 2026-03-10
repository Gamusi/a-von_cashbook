# Tasks 1.2 and 1.3 — Git Workflow and Python Foundations

**Project:** A-Von CashBook
**Branch prefix:** `game/`

---

# Task 1.2 — Opening Your First Pull Request

You have completed the environment setup. Now you need to submit it properly. In professional development, no code enters the main codebase without going through a Pull Request. This is your first one.

A Pull Request (PR) is how you say: "I have done some work on my branch. Please review it and merge it into main." It is also how your work gets reviewed before it is accepted.

Follow every step below exactly.

---

## Step 1 — Make Sure Your Work is Committed and Pushed

Open your terminal. Navigate to the project:

```bash
cd ~/dev/a-von_cashbook
```

Activate your virtual environment:

```bash
source .venv/bin/activate
```

Check which branch you are on:

```bash
git branch
```

You should see `game/task-1.1-environment-setup` with an asterisk next to it. If you are on `main`, stop and ask for help before continuing.

Check the status of your files:

```bash
git status
```

If you see any files listed under "Changes not staged" or "Untracked files," you need to add and commit them first:

```bash
git add .
git commit -m "docs: complete environment setup and add learning log"
```

Now push your branch to GitHub:

```bash
git push -u origin game/task-1.1-environment-setup
```

If it says "Everything up-to-date" or shows a success message, you are ready for the next step.

---

## Step 2 — Open the Pull Request on GitHub

1. Go to [https://github.com/Gamusi/a-von_cashbook](https://github.com/Gamusi/a-von_cashbook) in your browser
2. You should see a yellow banner near the top that says something like:

   > "game/task-1.1-environment-setup had recent pushes — Compare & pull request"
   >

   Click that button. If you do not see the banner, click the `Pull requests` tab at the top, then click the green `New pull request` button. Set the base to `main` and the compare to `game/task-1.1-environment-setup`.
3. You will now see the Pull Request form. Fill it in as follows:

**Title:**

```
[Task 1.1] Environment Setup
```

**Description — copy this template and fill in your own answers:**

```
## What I did

Describe in 2-3 sentences what you set up. Do not copy paste from the guide.
Write it in your own words.

## What was challenging

Write honestly about anything that was confusing or took extra effort.
If nothing was challenging, say so and explain why it felt straightforward.

## Checklist

- [ ] Python 3.11+ installed and confirmed
- [ ] Git installed and configured
- [ ] VSCode installed with recommended extensions
- [ ] Repository cloned successfully
- [ ] Virtual environment created and activated
- [ ] docs/game/log.md created with first entry
- [ ] docs/game/glossary.md created with first four terms
- [ ] First commit made on this branch
```

4. On the right side of the form, look for these sections and set them:

   - **Assignees** — assign yourself
   - **Labels** — select `game-task` and `tier-1`
   - **Milestone** — select `Tier 1: Environment and Foundations`
5. Click the green **Create pull request** button.

---

## Step 3 — What Happens Next

Your PR is now open. The reviewer will look at your code and your log and may leave comments. If they do:

- Read the comment carefully
- Make the change locally on the same branch
- Commit and push again — the PR updates automatically
- Reply to the comment on GitHub to say you have addressed it

Do not open a new PR. Do not create a new branch. Just push to the same branch and it will update.

Once the reviewer approves, they will merge it. You will see the branch status change to "Merged." That means Task 1.1 is officially complete.

---

## What You Just Learned (Task 1.2 Complete)

By opening that PR you have practiced:

- Checking your branch status with `git status` and `git branch`
- Staging and committing changes
- Pushing a branch to a remote repository
- Opening a Pull Request with a proper title, description, and labels
- Understanding the review and merge cycle

This is the workflow for every single task from here on. It becomes automatic after a few repetitions.

Add a log entry to `docs/game/log.md` for Task 1.2. Answer: what is a Pull Request in your own words, and why does it exist?

Add to your glossary: `branch`, `commit`, `pull request`, `merge`, `staging area`, `remote`

---

---

# Task 1.3 — Python Foundations

**Branch to create:** `game/task-1.3-python-foundations`

---

## Before the Task — Read This First

This section teaches you the Python concepts you need before writing anything. Read it fully before touching your keyboard to write code.


#### A Note on What You Are Building Here

The scripts you write in Tier 1 and Tier 2 live in `backend/tests/scratch/`.

This folder is a sandbox — a safe place to learn and experiment. These scripts
are not part of the final app. They are stepping stones.

From Tier 4 onwards, you will start writing code that goes directly into the
real product file structure — properly named, properly organized, and built to
ship. Everything you learn in the scratch folder prepares you for that.

Think of it this way: a carpenter practices joints on scrap wood before building
the actual furniture. The scrap wood matters. But it is not the furniture.

---

### Variables and Data Types

A variable is a name you give to a piece of data so you can use it later.

```python
student_name = "Amara Osei"
age = 14
balance_owed = 150000.00
is_enrolled = True
```

Python has several built-in data types. The most important ones are:

| Type      | Example                               | What it holds                       |
| --------- | ------------------------------------- | ----------------------------------- |
| `str`   | `"Amara Osei"`                      | Text                                |
| `int`   | `14`                                | Whole numbers                       |
| `float` | `150000.00`                         | Decimal numbers                     |
| `bool`  | `True` or `False`                 | Yes or no                           |
| `list`  | `["P.1", "P.2", "P.3"]`             | An ordered collection of items      |
| `dict`  | `{"name": "Amara", "class": "P.6"}` | Key-value pairs                     |
| `tuple` | `("T1", "T2", "T3")`                | An ordered, unchangeable collection |

**Why this matters in A-Von CashBook:**
A student record is a dictionary. A list of students is a list of dictionaries. A receipt amount is a float. An enrollment status is a bool. These types are everywhere in the backend.

---

### Functions

A function is a reusable block of code that does one specific thing. You define it once and call it as many times as you need.

```python
def format_student_name(first_name, last_name):
    return f"{last_name}, {first_name}"

result = format_student_name("Amara", "Osei")
print(result)  # prints: Osei, Amara
```

Key parts:

- `def` — tells Python you are defining a function
- `format_student_name` — the name of the function
- `first_name, last_name` — parameters (inputs the function expects)
- `return` — what the function gives back when called

A function that does not `return` anything gives back `None`.

**Why this matters:**
Every operation in the backend is a function. Generating a receipt number is a function. Calculating a student's balance is a function. Validating a payment is a function.

---

### Conditional Logic

Conditionals let your code make decisions.

```python
def check_payment_status(amount_paid, amount_owed):
    if amount_paid >= amount_owed:
        return "Fully paid"
    elif amount_paid > 0:
        return "Partial payment"
    else:
        return "No payment made"
```

- `if` — checks the first condition
- `elif` — checks another condition if the first was false
- `else` — runs if none of the above were true

---

### Loops

A loop lets you repeat code without writing it multiple times.

**For loop** — use when you know what you are iterating over:

```python
students = ["Amara", "David", "Fatima"]

for student in students:
    print(f"Processing record for {student}")
```

**While loop** — use when you repeat until a condition is no longer true:

```python
attempts = 0
while attempts < 3:
    print(f"Attempt {attempts + 1}")
    attempts += 1
```

---

### Importing Modules

Python comes with a large standard library — code that is already written and ready for you to use. You bring it in with `import`.

```python
import datetime

today = datetime.date.today()
print(today)  # prints: 2025-03-10
```

You do not need to install anything for standard library modules. They come with Python.

---

## The Task

Now that you understand the concepts, apply them.

### Step 1 — Create Your Branch

In your terminal, make sure you are on `main` and it is up to date:

```bash
cd ~/dev/a-von_cashbook
source .venv/bin/activate
git checkout main
git pull
```

Create and switch to your new branch:

```bash
git checkout -b game/task-1.3-python-foundations
```

Confirm you are on the right branch:

```bash
git branch
```

You should see `* game/task-1.3-python-foundations`.

---

### Step 2 — Create the File

Create the scratch folder if it does not exist, and create your script:

```bash
mkdir -p backend/tests/scratch
touch backend/tests/scratch/task_1_3_foundations.py
```

Open the file in VSCode:

```bash
code backend/tests/scratch/task_1_3_foundations.py
```

---

### Step 3 — Write the Script

Your script must do all of the following. Write it yourself — do not copy and paste from anywhere. If you use AI to understand a concept, close the AI before you write the code.

**Requirement 1 — Student record as a dictionary**

Create a dictionary that represents one student. It must have at least these keys: `student_id`, `name`, `class_name`, `guardian_name`, `amount_owed`, `is_enrolled`.

Print each key and value in a readable format.

**Requirement 2 — A function that formats a student summary**

Write a function called `format_student_summary` that takes a student dictionary as a parameter and returns a formatted string like this:

```
Student: Amara Osei | Class: P.6 | Balance: UGX 150,000 | Status: Enrolled
```

The function must use an f-string. It must return the string, not print it directly.

**Requirement 3 — A list of students and a loop**

Create a list containing at least three student dictionaries. Write a loop that calls `format_student_summary` on each one and prints the result.

**Requirement 4 — A function that checks payment status**

Write a function called `check_payment_status` that takes `amount_paid` and `amount_owed` as parameters and returns one of three strings: `"Fully paid"`, `"Partial payment"`, or `"No payment made"`. Use if/elif/else.

Call this function for at least three different scenarios and print the results.

**Requirement 5 — Use a standard library module**

Import the `datetime` module. Add a field to your student dictionary called `record_created` that stores today's date using `datetime.date.today()`. Print it as part of your student summary or separately.

---

### Step 4 — Run Your Script

Make sure your virtual environment is active, then run the script:

```bash
python backend/tests/scratch/task_1_3_foundations.py
```

Fix any errors until it runs cleanly with no exceptions.

---

### Step 5 — Commit Your Work

Stage and commit:

```bash
git add backend/tests/scratch/task_1_3_foundations.py
git commit -m "feat: add python foundations script for task 1.3"
```

---

### Step 6 — Update Your Learning Log

Open `docs/game/log.md` and add a new entry for Task 1.3. Answer these questions in your own words:

- What is the difference between a list and a dictionary? When would you use one over the other?
- What does `return` do in a function? What happens if you forget it?
- What surprised you while writing this script?
- What was confusing?

Commit the log update:

```bash
git add docs/game/log.md
git commit -m "docs: add learning log entry for task 1.3"
```

---

### Step 7 — Update Your Glossary

Open `docs/game/glossary.md` and add definitions in your own words for:

`function`, `module`, `data type`, `iteration`, `conditional`, `dictionary`, `list`, `return value`

Commit:

```bash
git add docs/game/glossary.md
git commit -m "docs: update glossary for task 1.3"
```

---

### Step 8 — Push and Open a Pull Request

Push your branch:

```bash
git push -u origin game/task-1.3-python-foundations
```

Go to GitHub and open a Pull Request exactly as you did in Task 1.2. Use this as your title and description template:

**Title:**

```
[Task 1.3] Python Foundations — Functions, Data Types, and Modules
```

**Description:**

```
## What I built

Describe the script in your own words. What does it do?

## Concepts I used

List the Python concepts you applied in this task.

## What clicked

What concept made sense once you actually wrote code for it?

## What I am still unsure about

Be honest. No marks are lost for uncertainty — only for pretending to understand.

## Checklist

- [ ] Student dictionary created with all required fields
- [ ] format_student_summary function written and returns a string
- [ ] List of students with loop calling the function
- [ ] check_payment_status function with if/elif/else
- [ ] datetime module imported and used
- [ ] Script runs without errors
- [ ] Learning log updated
- [ ] Glossary updated
```

Set labels to `game-task` and `tier-1`. Set milestone to `Tier 1: Environment and Foundations`. Assign to yourself.

---

## What Comes Next

Task 1.4 introduces testing. You will write tests for the exact functions you built in this task. This is why it was important to write clean, well-named functions with clear return values — they are easy to test. Functions that just print things are hard to test. Keep that in mind.
