# GitHub Copilot Workspace Instructions

## Purpose

This file provides guidance for using GitHub Copilot in this repository.

## Guidelines

- Prefer existing types, components, and utilities from the `src/` and `amplify/` directories.
- Follow the code style defined by `.prettierrc` and `eslint.config.js`.
- Use absolute imports with the `@/` alias for files in `src/`.
- When creating new features, place them in the appropriate folder (`components`, `features`, `layouts`, `lib`, or `types`).
- For AWS Amplify backend changes, use the `amplify/` directory and follow the patterns in `auth/resource.ts` and `data/resource.ts`.
- Write concise, descriptive commit messages.
- Use shadcn ui components for building user interfaces.
- Use tailwindcss for styling.

## References

- [README.md](../README.md)

---

Use Copilot to accelerate development, but always review
