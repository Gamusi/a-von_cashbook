# A-Von CashBook — Backend Developer Learning Curriculum

**Project:** A-Von CashBook
**Role:** Backend Developer (Python)
**Maintained by:** A-Von Computer Solutions
**Reviewed by:** Senior Developer

---

## How This Curriculum Works

Every task you are assigned is a GitHub Issue on the repository. Each issue belongs to a milestone. Each milestone belongs to a tier. You work through tasks in order — you do not skip ahead.

Before a task is considered done, you must open a Pull Request, your code must pass review, and you must be able to explain every line verbally or in writing. Code that cannot be explained does not merge. This is not optional.

The curriculum is organized into five tiers. Each tier builds directly on the previous one. Each task connects to the actual A-Von CashBook project — you are not doing exercises for the sake of exercises. You are building a real product.

---

## Tier 1 — Environment and Foundations

**Duration: Week 1 to Week 2**
**Goal: Get set up, learn Git workflow, and get comfortable with Python basics in the context of this project.**

These tasks establish your working environment and the habits you will carry through the entire project. Do not rush this tier. The habits formed here — writing clean code, committing often, documenting your understanding — will define the quality of everything you build later.

---

### Task 1.1 — Environment Setup

**Branch:** `game/task-1.1-environment-setup`
**Deliverable:** Learning log entry, glossary started, environment confirmed working

Set up your full development environment on your MacBook. Follow the Environment Setup Guide provided to you. At the end of this task:

- Python 3.11+ is installed and confirmed via terminal
- Git is installed and configured with your name and email
- VSCode is installed with recommended extensions
- You have cloned the repository
- You have created your `docs/game/log.md` and `docs/game/glossary.md`
- You have made your first commit

Write your first learning log entry: what did you set up, what was confusing, what did you learn?

Add to your glossary: `repository`, `clone`, `terminal`, `virtual environment`

---

### Task 1.2 — Git Workflow in Practice

**Branch:** `game/task-1.2-git-workflow`
**Deliverable:** Learning log entry, glossary updated, demonstrated understanding of Git flow

You will not write backend code yet. This task is about understanding how professional developers use Git daily.

Learn and practice the following:

- Creating a branch from `main`
- Making changes and staging them
- Writing a meaningful commit message (not "fixed stuff")
- Pushing a branch to GitHub
- Opening a Pull Request
- Responding to a review comment
- Understanding what a merge means

Read about conventional commits. Your commit messages going forward must follow this format:
`type: short description` where type is one of `feat`, `fix`, `chore`, `docs`, `test`, `refactor`

Write a learning log entry explaining Git in your own words. What is a branch? What is a commit? Why does this matter in a team?

Add to your glossary: `branch`, `commit`, `pull request`, `merge`, `staging area`, `remote`

---

### Task 1.3 — Python Foundations: Functions, Data Types, and Modules

**Branch:** `game/task-1.3-python-foundations`
**Deliverable:** Python script in `backend/tests/scratch/`, learning log, glossary updated

Write a standalone Python script (not part of the app yet) that demonstrates your understanding of:

- Variables and data types (string, int, float, bool, list, dict, tuple)
- Functions with parameters and return values
- Conditional logic (if, elif, else)
- Loops (for, while)
- Importing a module from the standard library

**Context connection:** The A-Von CashBook backend will use all of these constantly. A student record is a dictionary. A list of payments is a list of dictionaries. Receipt number generation is a function.

Write the script so it models something from the project — for example, a function that takes a student's name and class and prints a formatted summary. Keep it simple. The goal is understanding, not complexity.

Write a learning log entry: what surprised you, what was clear, what was confusing?

Add to your glossary: `function`, `module`, `data type`, `iteration`, `conditional`

---

### Task 1.4 — Understanding Testing: Your First Tests

**Branch:** `game/task-1.4-intro-to-testing`
**Deliverable:** Test file in `backend/tests/`, learning log, glossary updated

This task introduces you to the concept of testing. You will not be forced to use Test-Driven Development throughout the project, but you must understand what it is and what it offers. After this task, whether you adopt TDD is your own decision. What is not your decision is whether your code has tests — it must.

Learn what `pytest` is and install it in your virtual environment.

Write a test file that tests the functions you wrote in Task 1.3. For each function, write at least one test that confirms it works correctly and one test that confirms it handles a bad input gracefully.

Read about TDD: the idea is that you write the test before you write the function. The test fails first (red), then you write code to make it pass (green), then you clean up (refactor). This cycle is called red-green-refactor.

Write a learning log entry: do you think TDD would help you on this project? Why or why not? Be honest.

Add to your glossary: `test`, `pytest`, `assertion`, `TDD`, `red-green-refactor`, `test coverage`

---

## Tier 2 — Data and Persistence

**Duration: Week 3 to Week 4**
**Goal: Understand how data is stored and retrieved. Work with files, JSON, and raw SQLite before touching any ORM.**

This tier is critical. Many developers skip straight to frameworks and never understand what is happening underneath. You will not do that. You will touch SQLite directly with plain Python before you ever use SQLAlchemy.

---

### Task 2.1 — File I/O and JSON

**Branch:** `game/task-2.1-file-io-json`
**Deliverable:** Script in `backend/tests/scratch/`, tests, learning log, glossary updated

Write Python code that:

- Reads a JSON file and parses it into a Python dictionary
- Writes a dictionary to a JSON file
- Handles the case where a file does not exist (graceful error handling)
- Uses `try`, `except`, `finally`

**Context connection:** The A-Von CashBook backup system will export data to files. Institution configuration is stored on disk. Excel import reads files into memory. This is the foundation.

Write tests for your functions.

Add to your glossary: `JSON`, `file I/O`, `exception handling`, `try/except`, `serialization`

---

### Task 2.2 — SQLite with Plain Python

**Branch:** `game/task-2.2-sqlite-raw`
**Deliverable:** Script in `backend/tests/scratch/`, tests, learning log, glossary updated

Using Python's built-in `sqlite3` module only — no external libraries — write code that:

- Creates a SQLite database file
- Creates a table called `students` with columns: `id`, `name`, `class_name`, `created_at`
- Inserts three sample student records
- Queries all students and prints them
- Queries a student by ID
- Updates a student's class
- Deletes a student record

Then answer in your learning log: what is a primary key? What is a foreign key? What would happen if two students had the same ID?

**Context connection:** Every piece of data in A-Von CashBook lives in a SQLite database. Understanding this layer means you will never be confused by what SQLAlchemy is doing above it.

Add to your glossary: `SQLite`, `SQL`, `table`, `primary key`, `foreign key`, `query`, `CRUD`

---

### Task 2.3 — Excel Import Prototype

**Branch:** `game/task-2.3-excel-import`
**Deliverable:** Script, tests, learning log, glossary updated

Install `openpyxl`. Write a Python script that:

- Reads a sample Excel file (you will create a sample `.xlsx` with student data)
- Extracts rows into a list of dictionaries
- Validates that required columns exist (`name`, `class_name`)
- Handles missing values gracefully
- Prints a summary of what was imported and what was skipped

**Context connection:** A-Von CashBook allows schools to import existing student data from Excel. This script is the prototype of that feature.

Add to your glossary: `openpyxl`, `data validation`, `column mapping`

---

## Tier 3 — Backend Fundamentals

**Duration: Week 5 to Week 7**
**Goal: Understand HTTP, build your first API endpoints, and connect them to real data.**

---

### Task 3.1 — What is an API and How Does HTTP Work

**Branch:** `game/task-3.1-http-concepts`
**Deliverable:** Learning log only (no code), glossary updated

This is a research and reflection task. No code is written. Before you build an API you must understand what one is.

Research and write a learning log entry that explains in your own words:

- What HTTP is
- What a request and a response are
- What GET, POST, PUT, DELETE mean and when each is used
- What a status code is (200, 201, 400, 404, 422, 500)
- What JSON has to do with APIs
- What "REST" means in plain language

Draw a simple diagram in your log showing how the A-Von CashBook frontend (React) will talk to your backend (Python FastAPI).

Add to your glossary: `HTTP`, `API`, `REST`, `endpoint`, `request`, `response`, `status code`, `JSON`

---

### Task 3.2 — Your First FastAPI Application

**Branch:** `game/task-3.2-first-fastapi-app`
**Deliverable:** Working FastAPI app in `backend/app/`, tests, learning log, glossary updated

Install FastAPI and uvicorn. Build a minimal FastAPI application with:

- A root endpoint `GET /` that returns `{"status": "A-Von CashBook API is running"}`
- A `GET /students` endpoint that returns a hardcoded list of two sample students
- A `POST /students` endpoint that accepts a student name and class and returns it back with a generated ID
- A `GET /students/{student_id}` endpoint that returns a single student or a 404

Test all endpoints using the FastAPI auto-generated docs at `/docs`. Write tests using `pytest` and the `TestClient` from FastAPI.

Write a learning log entry: what is a path parameter? What is a request body? What is the difference?

Add to your glossary: `FastAPI`, `uvicorn`, `route`, `path parameter`, `request body`, `TestClient`

---

### Task 3.3 — Pydantic Schemas

**Branch:** `game/task-3.3-pydantic-schemas`
**Deliverable:** Schema definitions, updated endpoints, tests, learning log, glossary updated

Learn what Pydantic is and what it does. Refactor your Task 3.2 endpoints to use proper Pydantic models for request and response validation.

Create schemas for:

- `studentCreate` — the shape of data coming in when creating a student
- `studentResponse` — the shape of data going out when returning a student

Demonstrate that FastAPI automatically rejects invalid input — for example, sending a number where a name is expected.

Write a learning log entry: why does data validation matter? What could go wrong without it?

Add to your glossary: `Pydantic`, `schema`, `validation`, `type hints`, `data model`

---

## Tier 4 — Database Layer with SQLAlchemy

**Duration: Week 8 to Week 10**
**Goal: Connect the API to a real SQLite database using SQLAlchemy and manage schema changes with Alembic.**

---

### Task 4.1 — SQLAlchemy Models

**Branch:** `game/task-4.1-sqlalchemy-models`
**Deliverable:** Model definitions in `backend/app/models/`, tests, learning log, glossary updated

Install SQLAlchemy. Learn what an ORM is and why it exists. Rewrite your `students` table from Task 2.2 as a SQLAlchemy model.

Create a database session setup. Connect your FastAPI endpoints from Tier 3 to the real database instead of hardcoded data. Your `POST /students` should now save to SQLite. Your `GET /students` should now read from SQLite.

Write a learning log entry: what is the difference between a SQLAlchemy model and a Pydantic schema? This is a question many beginners confuse — answer it clearly in your own words.

Add to your glossary: `ORM`, `SQLAlchemy`, `model`, `session`, `database connection`

---

### Task 4.2 — Alembic Migrations

**Branch:** `game/task-4.2-alembic-migrations`
**Deliverable:** Migration files in `backend/migrations/`, learning log, glossary updated

Install Alembic. Initialize it in the project. Create your first migration that generates the `students` table from your SQLAlchemy model.

Add a new column to the students model — for example, `guardian_name`. Generate a new migration for this change. Apply it. Confirm the column now exists.

Then rollback the migration and confirm the column is gone.

Write a learning log entry: why do migrations exist? What would happen if two developers changed the database schema independently without migrations?

Add to your glossary: `Alembic`, `migration`, `schema change`, `upgrade`, `downgrade`

---

### Task 4.3 — Full CRUD for students

**Branch:** `game/task-4.3-students-crud`
**Deliverable:** Complete student CRUD in `backend/app/api/` and `backend/app/services/`, tests, learning log

Build the complete student CRUD operations as they will exist in the real A-Von CashBook:

- `POST /students` — create a student with all required fields (name, class, guardian, contact, enrollment status)
- `GET /students` — list all students with optional filter by class or status
- `GET /students/{student_id}` — get one student
- `PUT /students/{student_id}` — update a student
- `DELETE /students/{student_id}` — this should NOT hard-delete. It should set status to inactive. Add a mandatory `reason` field.

Separate your business logic from your route handlers. Routes go in `backend/app/api/`. Logic goes in `backend/app/services/`. This is the separation of concerns pattern.

Write tests for every endpoint including edge cases.

Add to your glossary: `separation of concerns`, `service layer`, `soft delete`, `filter`, `query parameter`

---

## Tier 5 — Real A-Von CashBook Features

**Duration: Week 11 onwards**
**Goal: Build the actual production modules of A-Von CashBook one at a time.**

By this tier, every concept has been introduced. You are now building real features that will ship in the product. Each task from here maps directly to a module in the master plan.

Tasks in this tier will be issued as GitHub Issues when Tier 4 is complete. The order will follow the module dependency chain:

1. Academic Structure (years, terms, classes)
2. Fee Management (categories, structures, per-student adjustments)
3. Payment Collection (the heart of the system)
4. Receipt Generation
5. Cashbook (auto-populated)
6. Daily Collection Report
7. Expenditure Management
8. Banking Module
9. Financial Reports
10. Term Lifecycle Management
11. RBAC and User Management
12. Audit Trail
13. Backup and Restore

Each of these will be broken into one or more GitHub Issues with full context, acceptance criteria, and links back to the project specification.

---

## Non-Negotiable Standards (Apply from Task 1.1 Onwards)

**Every Pull Request must include:**

- Working code that passes all tests
- Tests covering the new functionality
- An updated learning log entry for the task
- Any new terms added to the glossary
- A description in the PR body explaining what you built and how it works

**Code review will reject PRs where:**

- You cannot explain a block of code when asked
- Tests are missing or clearly written just to pass rather than to verify behavior
- Commit messages are vague (`fix`, `update`, `done`)
- Business logic is mixed into route handlers
- Errors are silently swallowed without handling

**On AI tools:**
AI is permitted for research, understanding concepts, and reviewing your own logic. It is not permitted as a ghostwriter. The test is simple: if you cannot delete the code and rewrite it yourself, you do not understand it. Code you do not understand does not merge.

*Subject to revision as the project evolves.*
