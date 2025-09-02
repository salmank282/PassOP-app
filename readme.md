# 🔐 PassOP – Your Personal Password Manager

PassOP is a simple and secure **Password Manager** built with **React + Tailwind CSS**.  
It allows you to **save, edit, copy, and manage passwords** locally in your browser using **LocalStorage**.

---

## 📸 Demo Screenshots

### 🔑 Add New Password
<img width="1894" height="885" alt="image" src="https://github.com/user-attachments/assets/4cb6a765-15e5-4c55-8730-be6b5f4a23bb" />

### 📋 Passwords List
<img width="1919" height="861" alt="image" src="https://github.com/user-attachments/assets/e7ca417b-113a-4af2-95ad-478b47cdbf65" />


## 🚀 Features

- ✅ **Save Passwords** – Store website, username, and password.
- ✅ **LocalStorage Support** – Data is persisted even after page reloads.
- ✅ **Form Validation** – Prevents saving weak/empty entries.
- ✅ **View & Hide Passwords** – Toggle password visibility with an eye icon.
- ✅ **Copy to Clipboard** – Quickly copy site, username, or password with one click.
- ✅ **Edit Saved Passwords** – Update entries easily.
- ✅ **Delete Passwords** – Remove entries with confirmation.
- ✅ **User Feedback with Toasts** – Success and error notifications using `react-toastify`.
- ✅ **Responsive UI** – Clean and mobile-friendly design with Tailwind CSS.
- ✅ **Branding** – Custom Navbar & Footer with PassOP logo.
- ✅ **GitHub Shortcut** – Navbar button linking to the project repo.

---

## 🖥️ Tech Stack

- **React** – Frontend library
- **Tailwind CSS** – Styling
- **React Toastify** – Notifications
- **React Icons** – Icons
- **LocalStorage** – Data persistence
- **UUID** – Unique ID generation

---

## 📂 Project Structure

src/
├── App.jsx
├── App.css
├── assets/
│ ├── eye.png
│ ├── eyeOff.png
│ ├── github.png
│ └── ...
├── components/
│ ├── Navbar.jsx
│ ├── Manager.jsx
│ └── Footer.jsx

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/salmank282/PassOP-app
cd passop
npm install
npm run dev
```
The app will be available at 👉 http://localhost:5173/ 
