# 🔐 Password Generator

A modern and responsive Password Generator built using **React.js**, **Tailwind CSS**, and React Hooks.

This application generates secure and customizable passwords based on user preferences such as password length, inclusion of numbers, and special characters.

---

## 🚀 Features

* Generate random secure passwords
* Adjustable password length (1 - 30 characters)
* Include/Exclude Numbers
* Include/Exclude Special Characters
* One-click Copy to Clipboard
* Responsive UI
* Built with React Hooks

---

## 🛠 Tech Stack

* React.js
* JavaScript (ES6+)
* Tailwind CSS
* Vite

---

## 📚 React Concepts Used

### useState

Used for managing:

* Password Length
* Number Toggle
* Character Toggle
* Generated Password

### useCallback

Used to memoize functions and avoid unnecessary recreation of functions during re-renders.

### useEffect

Used to automatically generate a new password whenever:

* Password Length changes
* Number option changes
* Character option changes

---

## ⚙️ How It Works

1. User selects the desired password length.
2. User chooses whether to include:

   * Numbers
   * Special Characters
3. A character pool is created dynamically.
4. Random characters are selected from the pool.
5. A secure password is generated and displayed.
6. User can copy the generated password with a single click.

---

## 🧠 Learning Outcomes

While building this project, I learned:

* State Management with React Hooks
* Controlled Components
* Event Handling
* Dependency Arrays
* Side Effects using useEffect
* Function Memoization using useCallback
* Clipboard API
* Responsive UI Design using Tailwind CSS

---

## 📂 Project Structure

```bash
src/
│
├── App.jsx
├── index.css
│
└── Components
```

---

## 🎯 Future Improvements

* Password Strength Indicator
* Copy Success Toast Notification
* Dark / Light Theme Toggle
* Password History
* Custom Character Sets

---

## 📸 Preview

Generate secure passwords instantly with customizable options and a clean user interface.

---

### ⭐ If you found this project useful, don't forget to star the repository!
