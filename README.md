# 💻 eBank Frontend

This is the **ReactJS frontend** for the eBank project, developed as part of the Architecture des Composants d’Entreprise mini-projet.

It connects to a Spring Boot backend and supports **JWT authentication**, **role-based authorization**, and full banking features for `CLIENT` and `AGENT_GUICHET` roles.

---

## 📦 Project Structure

```bash
src/
├── components/          # Reusable UI components (Navbar)
├── context/             # AuthContext for state management
├── pages/               # Login, Dashboards, Virement, etc.
├── services/            # axios-based API service logic
├── App.js               # Route configuration
├── index.js             # React root entry
```

---

## 🚀 Setup Instructions

### 1. Clone the project
```bash
git clone https://github.com/your-username/ebank-frontend.git
cd ebank-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup backend connection
Create a `.env` file at the root:
```env
REACT_APP_API_URL=http://localhost:8080
```

Ensure your **Spring Boot backend is running** locally on port 8080.

### 4. Start the app
```bash
npm start
```
This runs the app in development mode on [http://localhost:3000](http://localhost:3000).

---

## 👤 Default Roles
- `AGENT_GUICHET` — can add clients and bank accounts.
- `CLIENT` — can access dashboard and initiate virements.

Ensure the backend is seeded with users.

---

## ✅ Features Covered
- JWT-based login with secure route protection
- Role-specific dashboards and routing
- Full CRUD for clients and accounts
- Virement handling with transaction traceability
- Password encryption and update (RG_1)
- Responsive UI using Bootstrap 5

---

## 🧪 Running Tests
Basic unit tests are in `src/__tests__/`

Run tests with:
```bash
npm test
```

---

## 📑 Project Constraints (From Enoncé)
- Authentication & Authorization ✅
- DTO usage ✅
- JWT, Spring Security, RESTful API ✅
- Form validation ✅
- UI separation per role ✅

---

## 📌 Final Notes
Make sure to:
- Run backend before using the frontend
- Use a modern browser
- Use correct JWT-compatible credentials

> For more backend help: [https://github.com/abbouformations/bank-service-multi-connecteur](https://github.com/abbouformations/bank-service-multi-connecteur)