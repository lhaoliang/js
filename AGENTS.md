# AGENTS.md

## What This Repo Is

A JavaScript study-notes repository. Each `.html` file is a standalone demo with embedded `<script>` — no build system, no package manager, no tests.

## How to Run

Open any `.html` file directly in a browser. Check the browser console (F12) for output — most examples log to console.

## Structure

- `es5/` — Core JS concepts: `this`, closures, prototypes, scope, currying, deep copy, debounce/throttle
- `es6/` — Modern JS: Promises, Classes, Set/Map, Symbol, let/const, error handling
- `es6/promise/` — Promise subtopics split across multiple files
- `node/` — Empty (placeholder for future Node.js examples)

## Conventions

- **Language**: Filenames and all code comments are in Chinese (简体中文)
- **File format**: Each file is a self-contained HTML5 document with inline `<script>` — no external dependencies
- **File naming**: Chinese topic names, e.g. `深拷贝.html`, `函数颗粒化.html`
- **Code style**: No linter configured; comments are extensive and serve as the primary documentation
