# Environment Setup Guide — A-Von CashBook Backend Developer

**For:** Backend Developer
**Platform:** macOS
**Project:** A-Von CashBook
**Maintained by:** A-Von Computer Solutions

---

This guide walks you through setting up your full development environment from scratch. Follow every step in order. Do not skip any step even if you think you already have something installed — confirm it first.

When you are done, you will have a working development environment and your first commit in the repository.

---

## Part 1 — Create a GitHub Account

1. Go to [https://github.com](https://github.com)
2. Click "Sign up"
3. Choose a professional username — this will be visible on your code contributions. Use something like `firstname-lastname` or similar. Avoid handles that look unprofessional.
4. Use an email address you check regularly
5. Complete the verification steps and confirm your email
6. Once logged in, go to your profile settings and add your full name under "Public profile"

Send your GitHub username to the me so you can be added to the repository.

Do not attempt to clone the repository until you have been confirmed as a collaborator.

---

## Part 2 — Install Homebrew

Homebrew is a package manager for macOS. It makes installing developer tools much easier.

Open Terminal. You can find it by pressing `Command + Space` and typing "Terminal."

Run the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the on-screen prompts. You may be asked for your Mac password. When it finishes, run:

```bash
brew --version
```

You should see a version number. If you see an error instead, do not proceed — resolve it first.

---

## Part 3 — Install Git

macOS may have an older version of Git pre-installed. Install the latest via Homebrew:

```bash
brew install git
```

Confirm it is installed:

```bash
git --version
```

You should see something like `git version 2.x.x`.

Now configure Git with your identity. This information will appear on every commit you make:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your-email@example.com"
```

Use the same email address you used to create your GitHub account.

Set the default branch name to `main`:

```bash
git config --global init.defaultBranch main
```

Set VSCode as your default Git editor (you will install VSCode in the next step — come back and run this after):

```bash
git config --global core.editor "code --wait"
```

---

## Part 4 — Install Visual Studio Code

Go to [https://code.visualstudio.com](https://code.visualstudio.com) and download the macOS version. Open the downloaded `.zip` file and drag the VSCode application to your Applications folder.

Open VSCode. Press `Command + Shift + P` to open the Command Palette. Type "shell command" and select "Shell Command: Install 'code' command in PATH." This allows you to open VSCode from the terminal with the `code` command.

Close and reopen your terminal, then confirm:

```bash
code --version
```

### Recommended Extensions

Install the following extensions inside VSCode. Press `Command + Shift + X` to open the Extensions panel and search for each:

- **Python** (by Microsoft) — essential
- **Pylance** (by Microsoft) — type checking and autocomplete
- **Python Test Explorer** — run pytest from the sidebar
- **GitLens** — see Git history inline in your code
- **REST Client** — test API endpoints from VSCode
- **SQLite Viewer** — inspect your SQLite database files
- **Prettier** — code formatting (you will use this more on frontend, but good to have)
- **Error Lens** — shows errors inline as you type
- **Officeview** - reads all types of documents right there in vscode

---

## Part 5 — Install Python

macOS comes with a system Python that you must not modify or use for development. Install Python via Homebrew:

```bash
brew install python@3.14
```

Confirm the installation:

```bash
python3.14 --version
```

You should see `Python 3.14.x`.

Also confirm pip is available:

```bash
pip3.14 --version
```

but to be safe google this shit man. and find the best way of doing it.

---

## Part 6 — Set Up SSH for GitHub

SSH keys allow you to authenticate with GitHub securely without entering your password every time. This is the standard now, passwords dont work anymore.

Generate a new SSH key:

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

When prompted for a file location, press Enter to accept the default. When prompted for a passphrase, you may set one or press Enter to skip.

Add the key to your SSH agent:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Copy your public key to your clipboard:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

Go to [https://github.com/settings/keys](https://github.com/settings/keys) and click "New SSH key." Give it a title like "MacBook" and paste the key. Click "Add SSH key."

Test the connection:

```bash
ssh -T git@github.com
```

You should see a message like: `Hi username! You've successfully authenticated.`

---

## Part 7 — Clone the Repository

You must have been added as a collaborator before this step. Confirm with the me, but send me your email first, so that i can add you.

Navigate to where you want to store the project on your Mac. A good place is your home directory under a `dev` folder:

```bash
mkdir -p ~/dev
cd ~/dev
```

Clone the repository:

```bash
git clone git@github.com:Gamusi/a-von_cashbook.git
```

Navigate into the project:

```bash
cd a-von_cashbook
```

Open it in VSCode:

```bash
code .
```

---

## Part 8 — Set Up Python Virtual Environment

A virtual environment keeps your project's Python dependencies isolated from the rest of your system. This is standard practice and non-negotiable.

Inside the project directory, create a virtual environment:

```bash
python3.14 -m venv .venv
```

it may not be python3.14 for you, google this stuff. get whatever works on your machine.

Activate it:

```bash
source .venv/bin/activate
```

You will see `(.venv)` appear at the start of your terminal prompt. This means the virtual environment is active.

Every time you open a new terminal to work on this project, you must activate the virtual environment first with the command above.

Confirm Python inside the virtual environment:

```bash
python --version
```

Install pip tools:

```bash
pip install --upgrade pip
```

The `.venv` folder is already in the `.gitignore` file — it will not be committed to the repository. That is correct. Virtual environments are local to each developer's machine.

---

## Part 9 — Install Initial Python Dependencies

With your virtual environment active, install the base packages you will need:

```bash
pip install fastapi uvicorn sqlalchemy alembic pydantic pytest httpx openpyxl python-multipart
```

Confirm pytest is available:

```bash
pytest --version
```

---

## Part 10 — Configure VSCode for This Project

Open VSCode. Press `Command + Shift + P`, type "Python: Select Interpreter," and choose the interpreter that shows `.venv` in the path. It should look like `./.venv/bin/python`.

This tells VSCode to use your project's virtual environment for everything.

---

## Part 11 — Create Your Learning Log and Glossary

These are required files that you will maintain throughout the project. They live inside the repository so i can also see them. These are for accountability. But if you do not feel comfortable.. you can do these privately, no pressure.

Navigate to the docs folder:

```bash
cd docs/game
```

Create the learning log:

```bash
touch log.md
touch glossary.md
```

Open `log.md` in VSCode and add the following structure:

```markdown
# Learning Log — A-Von CashBook Backend

## Entry 1 — Environment Setup
**Date:** YYYY-MM-DD

**What I did:**
Write here what you set up today.

**What I learned:**
Write here what was new to you.

**What confused me:**
Write here anything that was unclear or that took extra effort to figure out.

**Questions I still have:**
Write any open questions you want to follow up on.
```

Open `glossary.md` and add the following structure:

```markdown
# Developer Glossary — A-Von CashBook

A personal reference of technical terms in my own words.

---

## repository
A folder that Git tracks. It contains all the code, history, and branches for a project.

## clone
Downloading a copy of a repository from GitHub to your local machine.
```

Continue adding to these files with every new task you complete.

---

## Part 12 — Understand Branch Naming Convention

All your work is done on feature branches. You never commit directly to `main`. The branch naming convention for your work is:

```
game/task-X.X-short-description
```

Examples:

- `game/task-1.1-environment-setup`
- `game/task-2.2-sqlite-raw`
- `game/task-3.2-first-fastapi-app`

To create and switch to a new branch:

```bash
git checkout -b game/task-1.1-environment-setup
```

To push the branch to GitHub:

```bash
git push -u origin game/task-1.1-environment-setup
```

After your first push, subsequent pushes on the same branch only need:

```bash
git push
```

---

## Part 13 — Your First Commit

With your learning log and glossary created and filled in, make your first commit.

Stage the files:

```bash
git add docs/game/log.md docs/game/glossary.md
```

Commit with a proper message:

```bash
git commit -m "docs: add learning log and glossary for task 1.1"
```

Push to your branch:

```bash
git push -u origin game/task-1.1-environment-setup
```

Then go to GitHub, find the repository, and open a Pull Request from your branch to `main`. In the PR description write:

- What you set up
- Anything that was challenging
- Confirmation that all steps in this guide are complete

Wait for the me to review before merging.

---

## Quick Reference — Daily Workflow

Every time you sit down to work:

```bash
cd ~/dev/a-von_cashbook
source .venv/bin/activate
git checkout your-current-branch
git pull
```

Before ending a session:

```bash
git add .
git commit -m "type: description of what you did"
git push
```

---

## Troubleshooting

**`python` command not found:** Use `python3.14` explicitly, or confirm your virtual environment is activated.

**`(.venv)` not showing in terminal:** Run `source .venv/bin/activate` from the project root.

**Permission denied when pushing to GitHub:** Confirm your SSH key is added to GitHub and your SSH agent is running.

**VSCode not recognizing imports:** Confirm the Python interpreter is set to the `.venv` interpreter via `Command + Shift + P` > "Python: Select Interpreter."

---
