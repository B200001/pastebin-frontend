# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


---

# 📗 FRONTEND — `frontend/README.md`

👉 **Copy everything below into `frontend/README.md`**

```md
# Pastebin-Lite Frontend

This is the frontend for **Pastebin-Lite**, a minimal Pastebin-style application.
It allows users to create pastes, receive a shareable link, and view pastes
through a simple web interface.

The frontend is built using **Vite + React (JavaScript)** and deployed on **Vercel**.

---

## Features

- Create a text paste
- Optional TTL and view limits
- Display shareable paste URL
- View paste content via shared link
- Clear error messages for expired or invalid pastes
- Minimal UI (functionality-focused)

---

## Tech Stack

- Vite
- React (JavaScript)
- React Router
- Fetch API
- Vercel (static hosting)



