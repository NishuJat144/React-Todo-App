# 🚀 React Mini Projects

This repository contains two mini React projects built for practicing React fundamentals, component-based architecture, state management, and browser APIs.

## 📁 Projects Included

### 1. 📝 Todo App

A simple Todo application built with React.

### Features

- ➕ Add Todo
- ✅ Mark Todo as Completed
- 🗑️ Delete Todo
- 🧹 Clear All Todos
- 💾 Local Storage Support
- ⚛️ React Hooks (useState & useEffect)

---

### 2. 🔘 Toggle Switch

A simple React Toggle Switch project.

### Features

- Toggle ON/OFF state
- Dynamic UI update
- React State Management Practice

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- CSS3
- Bun
- Local Storage API

---

## 📂 Folder Structure

```
src/
│
├── components/
│   └── projects/
│       ├── Todo/
│       │   ├── Todo.jsx
│       │   ├── TodoForm.jsx
│       │   ├── TodoList.jsx
│       │   ├── TodoDate.jsx
│       │   ├── Todo.css
│       │   └── TodoLocalStorage.jsx
│       │
│       └── ToggleSwitch/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd mini_proj
```

Install dependencies

```bash
bun install
```

Run the development server

```bash
bun run dev
```

---

## 🔄 Switching Between Projects

### Run Todo App

Open **App.jsx** and render:

```jsx
<Todo />
```

---

### Run Toggle Switch

Open **main.jsx** (or the file where you render components) and render:

```jsx
<ToggleSwitch />
```

Make sure the `ToggleSwitch` component is imported before rendering.

Example:

```jsx
import { ToggleSwitch } from "./components/projects/ToggleSwitch/ToggleSwitch";

<ToggleSwitch />
```

---

## 📚 Learning Concepts

- React Components
- JSX
- Props
- useState
- useEffect
- Event Handling
- Conditional Rendering
- Local Storage
- Component Reusability

---

## 👨‍💻 Author

** Yogesh Choudhary **