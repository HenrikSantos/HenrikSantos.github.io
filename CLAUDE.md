# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The site is a single-page application (SPA) deployed to GitHub Pages showcasing projects, experience, education, and skills.

## Development Commands

### Build and Development
- `npm run dev` - Start Vite development server
- `npm run build` - TypeScript compilation + production build
- `npm run preview` - Preview production build locally

### Linting
- `npm run eslint:fix` - Auto-fix ESLint issues in src directory

### Deployment
- `npm run deploy` - Manual deployment to GitHub Pages (gh-pages branch)
- Automated deployment via GitHub Actions on push to main branch

## Architecture

### Component Structure
The application follows a simple hierarchical component structure:

```
App.tsx (root)
├── Header.tsx
├── Main.tsx
│   ├── Inicio.tsx (hero section)
│   ├── Sobre.tsx (about section)
│   └── (right column components)
│       ├── Stack.tsx
│       ├── Experiencias.tsx (uses ExperienciaItem.tsx)
│       ├── Fomacao.tsx (uses FormacaoItem.tsx)
│       └── Projetos.tsx
│           ├── ProjetosFrontend.tsx (uses ProjetoItem.tsx)
│           ├── ProjetosBackend.tsx (uses ProjetoItem.tsx)
│           └── OutrosProjetos.tsx
└── Footer.tsx
```

### Data Management
Content data is stored in JSON files under `src/assets/`:
- `frontendData.json` - Frontend project portfolio items
- `backendData.json` - Backend project portfolio items
- `outrosProjetosData.json` - Other/miscellaneous projects
- `experiencia.json` - Work experience entries
- `formacaoData.json` - Education/training entries

Each JSON file contains arrays of objects that are imported and mapped to their respective item components.

### Styling
- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** used for theming (defined in `index.css`):
  - `--primary` - background color
  - `--emphasis` - border/accent color
- **AOS (Animate On Scroll)** library initialized in App.tsx for scroll animations

### TypeScript Configuration
- Strict mode enabled with comprehensive linting rules
- Target: ESNext with DOM libraries
- Module resolution: bundler mode
- JSX mode: react-jsx (no need to import React in components)

## ESLint Configuration

The project uses strict ESLint rules (`.eslintrc.json`):
- 2-space indentation (not tabs)
- Double quotes for strings
- Semicolons required
- No unused variables/parameters
- Prefer const over let
- Arrow functions preferred over function expressions
- Template literals preferred over string concatenation
- Blank lines required before function declarations and return statements
- React rules: no need to import React in JSX files

## Deployment

### GitHub Actions
The repository uses GitHub Actions for continuous deployment:
- Workflow file: `.github/workflows/deploy.yml`
- Triggers on push to `main` branch
- Builds with Node.js 22
- Deploys to `gh-pages` branch using `peaceiris/actions-gh-pages@v3`
- Published directory: `dist`

### Manual Deployment
Alternative: `npm run deploy` (uses gh-pages package)

## Key Dependencies

### Production
- **React 18** - UI framework
- **AOS** - Animate On Scroll library for scroll-triggered animations

### Development
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Linting with TypeScript, React, and Tailwind plugins
- **gh-pages** - GitHub Pages deployment utility

## Important Notes

- The site is configured with a custom base path in package.json (`homepage` field)
- All components are functional components using React hooks
- The site is fully in Brazilian Portuguese (pt-br)
- Images are stored in `public/static/images/` (referenced in HTML/components)
- ESLint ignores `src/components/ui/` and `src/components/lib/` directories
