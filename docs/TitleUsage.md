### 📄 `docs/TitleUsage.md`

# TitleManager Usage Guide

This app uses a centralized `<TitleManager>` system to enforce consistent, prefixed page titles across all routes. Titles are derived from the `<title>` tag rendered via [`react-helmet-async`](https://github.com/staylor/react-helmet-async), and automatically prefixed using the value in `.env`:

```
VITE_FRONTEND_WEBSITE_TITLE="React-Vite |"
```

## ✅ Primary Usage (Recommended)

Use the `<Helmet>` component inside each page to declare the title manually:

```tsx
import { Helmet } from 'react-helmet-async'

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>Landing</title> // Will render: "React-Vite | Landing"
      </Helmet>

      <h1>Landing</h1>
    </>
  )
}
```

#### What happens automatically:
- Prefix (`React |`) is added automatically
- A fallback title is injected on app load (`React | Loading...`)
- An error is thrown if no `<title>` is detected (during development)

---

## Optional Usage: `useTitleManager()` Hook

Use this if:
- The title needs to change after data loads (e.g., `user.name`)
- You don't want to or can't use `<Helmet>` in a specific page

```tsx
import { useTitleManager } from '@/hooks/useTitleManager'
import { useEffect } from 'react'

export default function UserPage({ user }) {
  const setTitle = useTitleManager()

  useEffect(() => {
    if (user?.name) {
      setTitle(`Profile: ${user.name}`)
    }
  }, [user]) // Re-run once user changes.

  /*
  Or you can just do:

  useEffect(() => {
    setTitle('User Profile')
  }, []) // Run once on mount.

  or even something like:

  useEffect(() => {
    if (isAdmin) {
      setTitle('Admin Panel')
    } else {
      setTitle('User Dashboard')
    }
  }, [isAdmin]) // Re-run once isAdmin changes.

  */

  return (
    <h1>Welcome</h1>
  )
}
```

This sets the title manually, and it will still be prefixed automatically as:
`React-Vite | Profile: Alice`

> ⚠️ If you use this method or the method below, you do **not** need `<Helmet>` in that page.

---

### 🛠 Optional: Skipping the Prefix

If you use the `useTitleManager()` hook, you can pass a second argument to skip the automatic title prefix from `.env`.

```tsx
const setTitle = useTitleManager()

// Normal usage (will become "React | Dashboard")
setTitle('Dashboard')

// Override prefix entirely
setTitle('Standalone Page Title', true)
```

### When to use `skipPrefix = true`:
- For special standalone pages like splash screens or 404s
- If you want total control over the title content
- When you're dynamically rendering system-level modal pages or subapps

By default, `skipPrefix` is `false`, so the prefix is always applied unless explicitly overridden.

---



---

## 🔴 What *Not* to Do

- ❌ **Do not** skip both `<Helmet>` and `useTitleManager()` — this will throw an error due to a missing title.
- ❌ **Do not** use `<title>` directly in JSX without `<Helmet>`.
- ❌ **Do not** expect the prefix to be applied if you render `<title>` in any other way (e.g., static HTML or manually injected strings).

---

## Internal Stack Reference

* `src/contexts/TitleManager.tsx` - wraps the app, applies prefix, validates `<title>`
* `src/hooks/useTitleManager.ts` - provides an optional programmatic interface
* `.env` → `VITE_FRONTEND_WEBSITE_TITLE` - controls the prefix


## Related Tools

* [`react-helmet-async`](https://github.com/staylor/react-helmet-async)
* [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) - used internally to detect missing titles

