# 🔐 PassOP – Password Manager

PassOP is a full-stack **password manager application** built with **React (frontend)** and **Node.js + Express + MongoDB (backend)**.  
It allows users to **securely store, manage, update, and delete** their login credentials with a clean UI and smooth interactions.  

---
**🌐 Demo**
<img width="1892" height="881" alt="image" src="https://github.com/user-attachments/assets/1792725f-0113-4ea2-9039-e5b6da247ba3" />

<img width="1896" height="881" alt="image" src="https://github.com/user-attachments/assets/3400d139-90d1-4e03-a90e-f0c77608cb73" />

---
## ✨ Features

### 🖥️ Frontend (React + Tailwind CSS)
- 🎨 Clean and responsive UI built with **Tailwind CSS**
- ➕ Add, ✏️ edit, and 🗑️ delete saved passwords
- 📋 Copy **site, username, or password** to clipboard with one click
- 👁️ Toggle password visibility (show/hide password)
- 🔔 Toast notifications for user actions (`react-toastify`)
- 🆔 Auto-generates unique IDs for each saved password (`uuid`)
- ⚡ Interactive icons using **lord-icon**
- 🧭 Modern Navbar & Footer components

### ⚙️ Backend (Node.js + Express + MongoDB)
- 🌐 RESTful API with the following endpoints:
  - 📥 `GET /` → Fetch all stored passwords
  - 📤 `POST /` → Save a new password entry
  - ✏️ `PUT /:id` → Update an existing password
  - ❌ `DELETE /:id` → Delete a password
- 🗄️ MongoDB database connection using `mongodb` driver
- 🛡️ Handles invalid JSON gracefully with error middleware
- 🔓 CORS enabled for frontend-backend communication
- ⚙️ Environment-based configuration (`dotenv`)

---

## 🛠️ Tech Stack

- ⚛️ **Frontend**: React, Tailwind CSS, React Icons, React Toastify, Lord Icon  
- 🚀 **Backend**: Node.js, Express.js, MongoDB  
- 🗄️ **Database**: MongoDB (local or cloud via Atlas)  
- 🛠️ **Other**: UUID, dotenv, cors  

---

## ⚡ Setup & Installation

### 🔧 Backend Setup
1. 📂 Navigate to backend folder:
   ```bash
   cd backend
   npm install
   npm start

2. 📂 Navigate to frontend folder:
   ```bash
   cd frontend
   npm install
   npm run dev

