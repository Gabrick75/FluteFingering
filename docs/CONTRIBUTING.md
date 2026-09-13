# Contributing

Thanks for your interest in Flute Fingering Charts. This is a small,
data-focused project, and every contribution counts — whether it is a new
instrument, a data correction, a bug fix, or better documentation.

## Ground Rules

- **Data is trusted, not guessed.** Fingering data lives directly in
  `src/data/`. If you believe a fingering is wrong, prefer updating it with
  evidence over guessing.
- **Keep the chart pages fast and mobile-first.** They are designed for quick
  consultation during practice.
- **Preserve the design tokens.** New styles must follow the palette/type
  system in `src/styles/main.css` (see [ARCHITECTURE.md](./ARCHITECTURE.md)).

## Getting Started

```bash
git clone <your-fork-url>
cd FluteFingering
npm install
npm run dev
```

Open http://localhost:5173 and confirm the app runs before making changes.

## Making Changes

1. Create a branch with a descriptive name:
   ```bash
   git checkout -b feat/add-recorder
   ```
2. Make your changes, following [DEVELOPMENT.md](./DEVELOPMENT.md).
3. Run the checks:
   ```bash
   npm run build
   ```
   It must pass.
4. Commit with a short, imperative message describing the *what* and *why*
   (the repo's existing history uses one-line messages).

## Pull Requests

- Reference the issue you are fixing in the description if one exists.
- If you change instrument data, describe the change and its basis in the PR
  description.
- If you add or change a route/component, update the relevant docs under
  `docs/`.
- Keep pull requests focused; split unrelated changes into separate PRs.

## Reporting Issues

Before opening an issue:

1. Check the [docs](../README.md#documentation) and existing issues.
2. For data questions, describe the current and expected fingering for the
   note and octave in question.
3. For rendering bugs, include the page/route and a screenshot if possible.

## Documentation

Docs live in `docs/`. If your change affects behaviour covered there, update
the matching file — it is part of the "definition of done".
