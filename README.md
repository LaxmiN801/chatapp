# 💬 ChatVerse  
A **real-time chat application** built with the **MERN stack** and **Socket.IO**, featuring WhatsApp-style ticks, contact management, and secure JWT authentication.  

---

## ✨ Features  

### 🔑 Authentication & Profile  
- Secure **JWT authentication** with cookies (`httpOnly`, `sameSite`, `secure`)  
- User **signup, login, logout**  
- Update **username** and **avatar**  

### 👥 Users & Contacts  
- Search users by **username**  
- Contact list with:  
  - **Latest message preview** (with ticks)  
  - **Unread message count**  
  - **Reordering by recent activity**  
  - **Last message time formatting** (today, yesterday, or date)  

### 💬 Real-time Chat (Socket.IO)  
- **Online/offline** user tracking  
- Message ticks:  
  - ✅ Single (sent, receiver offline)  
  - ✅✅ Double gray (delivered)  
  - ✅✅ Blue (seen)  
- **Soft delete**: delete for me / delete for everyone  
- Real-time **sidebar updates** (latest message, reorder, unread count)  

### 📩 Messages  
- Send **text + image messages**  
- Seen/delivered syncing across chats  
- Deleted message fallback → “This message was deleted”  

### 🎨 Frontend Experience  
- Built with **React + Vite**  
- **Zustand** for global state (auth, socket, users)  
- **Framer Motion** animations  
- **React Hot Toast** for notifications  
- **Tailwind CSS** for responsive styling  

---

## 🛠️ Tech Stack  

**Frontend:** React (Vite), Zustand, Axios, Tailwind CSS, Framer Motion, React Hot Toast, Lucide React  
**Backend:** Node.js + Express, MongoDB + Mongoose, JWT + bcryptjs, Socket.IO, Cookie-parser + CORS, dotenv  
**Deployment:** Backend → Render, Frontend → Vercel  

---
