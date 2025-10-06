# Calculator Project

A minimal JavaScript calculator web app built for learning and demonstration purposes.

## Live demo

The project is hosted on GitHub Pages: https://devnikhil00.github.io/Calculator-project/

## Project structure

- `index.html` — the app HTML shell and UI
- `style.css` — styling for the calculator
- `script.js` — JavaScript logic handling input and calculations

## Features

- Basic arithmetic: addition, subtraction, multiplication, division
- Clear and backspace buttons
- Keyboard support (if implemented)

## How to run

Option 1 — Open in browser
1. Double-click `index.html` or right-click and open with your browser.

Option 2 — Serve with a simple HTTP server (recommended for some browser features)

If you have Python installed, run in PowerShell from the project directory:

```powershell
# Python 3.x
python -m http.server 8000; Start-Process "http://localhost:8000"
```

Or with Node.js and "http-server" (install once globally):

```powershell
npm install -g http-server
http-server -c-1
# Then open the URL printed by the server (usually http://127.0.0.1:8080)
```

## Usage

- Click number and operator buttons to build expressions.
- Press `=` to evaluate.
- Use `C` to clear and `←` to delete the last character.

## Development notes

- `script.js` contains the main calculator logic. You can add tests or improve keyboard accessibility.

## GitHub: commit & push (PowerShell)

If you want to push this project to a new GitHub repository, run these commands from the project folder in PowerShell:

```powershell
# Initialize a git repo (if not already initialized)
git init

# Add files and commit
git add .
git commit -m "Initial commit: add calculator project files"

# Create a repo on GitHub (manual or via gh CLI)
# If using GitHub CLI (gh), you can run:
# gh repo create <repo-name> --public --source=. --remote=origin --push

# Or add remote and push manually (replace <URL> with your GitHub repo URL)
git remote add origin <URL>
git branch -M main
git push -u origin main
```

