# ⚡ Zikra-TM – Task Management Application 📝  

Zikra-TM is a **full-stack MERN Task Manager** that helps users organize, prioritize, and track their tasks with a **modern UI** and **secure authentication system**.  
Designed to boost productivity and provide clear task visibility via a **dashboard with statistics & progress tracking**.

---

## ✨ Features  

- 🔒 **User Authentication** – Sign up & Login with JWT security  
- 📝 **Task Management** – Create, Update, Delete tasks  
- 🎯 **Priorities** – Mark tasks as Low, Medium, or High  
- ✅ **Status Tracking** – Mark tasks as Pending or Completed  
- 📊 **Dashboard Analytics** – View statistics, progress & recent tasks  
- 🎨 **Modern UI** – Clean, responsive design built with Tailwind CSS  
  
---

## 🛠️ Tech Stack  

**Frontend (client):**  
- ⚛️ React.js (Vite)  
- 🎨 Tailwind CSS  
- 🔄 Axios  
- 🔗 React Router DOM  

**Backend (server):**  
- 🟢 Node.js + Express.js  
- 🗄️ MongoDB + Mongoose  
- 🔒 JWT Authentication  
- ⚙️ dotenv, bcryptjs  

---

## 📂 Project Structure  

```
ZIKRA-TM/
├── client/                 # React Frontend (Vite)
│   ├── src/
│   │   ├── assets/        # Static assets
│   │   ├── components/    # Reusable UI components
│   │   ├── layout/        # Layout components
│   │   ├── pages/         # Pages (Dashboard, Login, Signup, etc.)
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
│       └── vite.svg
│
├── server/                 # Node.js + Express Backend
│   ├── config/            # MongoDB connection & env setup
│   ├── controllers/       # Request handlers (auth, tasks)
│   ├── middleware/        # JWT auth middleware
│   ├── models/            # Mongoose models (User, Task)
│   ├── routes/            # API routes (auth, tasks)
│   ├── server.js
│   └── .env
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone Repository  
```bash
git clone https://github.com/thesakibrahman/Zikra-TM.git
cd Zikra-TM
```

### 2️⃣ Setup Backend (Server)  
```bash
cd server
npm install
```
Create a `.env` file in `/server` with:  
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Run server:  
```bash
npm run dev
```

### 3️⃣ Setup Frontend (Client)  
```bash
cd ../client
npm install
```
Create a `.env` file in `/client` with:  
```env
VITE_API_URL=http://localhost:4000
```
Run client:  
```bash
npm run dev
```

👉 Open **http://localhost:5173** in your browser.  

---

## 📱 Usage  

### 🔐 Authentication  
- Sign Up with name, email & password  
- Login to access the dashboard  

### 🖥️ Dashboard  
- Overview of total, pending & completed tasks  
- Productivity % and recent tasks  

### 📋 Task Management  
- Add new tasks with priority & due date  
- Update task details  
- Mark as Completed/Pending  
- Delete tasks    

---

## 📝 License  
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

---

## 👨‍💻 Developed By  
**Sakib Rahman**    
📧 sakib.rahman.adtu@gmail.com | 🌐 [LinkedIn](www.linkedin.com/in/sakib-profile)
