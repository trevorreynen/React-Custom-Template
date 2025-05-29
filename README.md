# React Custom Template

A minimal React setup using a custom Webpack configuration. This template is structured for control, flexibility, and fast project initialization without opinionated frameworks like Create React App or Next.js.


## 🔗 Table of Contents
1. [✨ Included Features](#included-features)
2. [🔧 Tooling Overview](#tooling-overview)
3. [🧵 Styling Philosophy](#styling-philosophy)
4. [🗂️ File Structure](#file-structure)
5. [⚙️ Core Dependencies](#core-dependencies)
6. [📦 Optional Libraries (Curated Alternatives)](#optional-libraries-curated-alternatives)

---

## ✨ Included Features <a name="included-features"></a>

- Material UI theming is integrated and preconfigured.
- SCSS files can be imported directly alongside pages or components for modular styling.
- Context and hook system enables theme selection; currently configured with MUI.
- Built-in 404 page routing with fallback to the landing page.
- Stylelint is scoped to `.scss` files inside the frontend folder.
- Two layout layers are included by default: `MainLayout` for page structure, and `MuiThemeWrapper` for global MUI support via `Entry.tsx`. Either can be removed or replaced depending on project needs.
- `routesConfig.tsx` provides centralized lazy-loaded routing; new routes can be added above the default 404 fallback.


## 🔧 Tooling Overview <a name="tooling-overview"></a>

- **Webpack 5** manual setup (no CRA/Vite)
- **TypeScript**
- **Babel** with React + TypeScript presets
- **SCSS** loader and mixins support
- **Stylelint** with SCSS config
- **Prettier**


## 🧵 Styling Philosophy <a name="styling-philosophy"></a>

Each page or component may import its own `.scss` file, scoped under a single wrapper class named after the file (e.g., `Landing.tsx` uses `.Landing { ... }`). This mimics the isolation benefits of CSS Modules while preserving readable class string syntax (e.g., `className='box content'`).

This design was chosen deliberately for developer ergonomics, readability, and class string flexibility, especially in projects where full CSS Module integration adds unnecessary syntax overhead.

---

## 🗂️ File Structure <a name="file-structure"></a>
```
└── React-Custom-Template/
    ├── .!other/
    │   └── package-other.json
    ├── frontend/
    │   ├── public/
    │   │   └── index.html
    │   ├── src/
    │   │   ├── assets/
    │   │   ├── components/
    │   │   │   └── loading/
    │   │   │       └── FullPageLoader.tsx
    │   │   ├── config/
    │   │   │   └── routesConfig.tsx
    │   │   ├── contexts/
    │   │   │   └── ThemeContext.tsx
    │   │   ├── hooks/
    │   │   │   └── useTheme.ts
    │   │   ├── layouts/
    │   │   │   ├── MainLayout.tsx
    │   │   │   └── MuiThemeWrapper.tsx
    │   │   ├── pages/
    │   │   │   ├── Error404/
    │   │   │   │   └── Error404.tsx
    │   │   │   ├── Landing/
    │   │   │   │   └── Landing.tsx
    │   │   │   ├── App.tsx
    │   │   │   └── Entry.tsx
    │   │   ├── styles/
    │   │   │   ├── global.scss
    │   │   │   └── mixins.scss
    │   │   ├── types/
    │   │   │   └── index.ts
    │   │   └── utils/
    │   │       └── usefulFunctions.ts
    │   ├── .babelrc
    │   ├── .stylelintrc.json
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── webpack.config.js
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── LICENSE
    └── README.md
```

---

## ⚙️ Core Dependencies <a name="core-dependencies"></a>

| Package | Purpose |
|--------|---------|
| [`react`](https://www.npmjs.com/package/react), [`react-dom`](https://www.npmjs.com/package/react-dom) | React core libraries |
| [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) | Client-side routing |
| [`dotenv`](https://www.npmjs.com/package/dotenv) | Local `.env` file parsing |
| [`stylelint`](https://www.npmjs.com/package/stylelint`) + SCSS rules | CSS linter scoped to frontend folder |

<br />

<details>
<summary>📦 Optional Libraries (Curated Alternatives)</summary> <a name="optional-libraries-curated-alternatives"></a>

### 🧠 State Management

| Library | Included | Notes |
|--------|------|-------|
| [`zustand`](https://www.npmjs.com/package/zustand) | ✅ | Minimal and hook-based |
| [`redux-toolkit`](https://www.npmjs.com/package/@reduxjs/toolkit) | --> | Scalable and widely adopted |
| [`jotai`](https://www.npmjs.com/package/jotai) | --> | Atom-based and flexible |
| [`recoil`](https://www.npmjs.com/package/recoil) | --> | Works well for deeply nested trees |
| [`valtio`](https://www.npmjs.com/package/valtio) | --> | Proxy-based and reactive |
| [`mobx`](https://www.npmjs.com/package/mobx) | --> | Observable state with minimal boilerplate |

### 🎨 UI Frameworks & Styling

| Library | Included | Notes |
|--------|------|-------|
| [`@mui/material`](https://www.npmjs.com/package/@mui/material) | ✅ | Theming and accessibility support |
| [`@emotion/react`](https://www.npmjs.com/package/@emotion/react) | ✅ | CSS-in-JS used by MUI |
| [`antd`](https://www.npmjs.com/package/antd) | --> | An enterprise-class UI design language and React UI library |
| [`chakra-ui`](https://www.npmjs.com/package/@chakra-ui/react) | --> | Accessible and theme-friendly |
| [`tailwindcss`](https://www.npmjs.com/package/tailwindcss) | --> | Utility-first CSS |
| [`styled-components`](https://www.npmjs.com/package/styled-components) | --> | Scoped CSS-in-JS |

### 🌐 HTTP & Fetching

| Library | Included | Notes |
|--------|------|-------|
| [`axios`](https://www.npmjs.com/package/axios) | ✅ | Included by default |
| [`swr`](https://www.npmjs.com/package/swr) | --> | Great for REST APIs |
| [`@tanstack/react-query`](https://www.npmjs.com/package/@tanstack/react-query) | --> | Handles caching, pagination, and refetch logic |

</details>

<br />

---

> 🧪 This setup is intentionally minimal and open. Configuration, structure, and libraries are modular and can be modified or extended based on project-specific demands.
