
markdown
# 📝 DevBlog - Tech Blog Platform

A simple yet powerful blog platform built for developers, by developers. Share your programming insights, tutorials, and tech stories with a clean and minimal interface.

[![Node.js](https://img.shields.io/badge/Node.js-22.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-3.x-yellow)](https://ejs.co/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

---

## ✨ Features

- ✅ **Secure Authentication** with JWT (JSON Web Token) and HTTP-only cookies
- ✅ **Role-Based Access Control** (Admin / User)
- ✅ **Full CRUD Operations** for Blog Posts
- ✅ **Admin Dashboard** to manage posts and users
- ✅ **Responsive Design** with Tailwind CSS
- ✅ **Clean & Minimal UI** with dark theme
- ✅ **SEO-Friendly URLs** using slugs
- ✅ **Session Management** with secure cookie handling
- ✅ **MVC Architecture** for clean and maintainable code

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Template Engine** | EJS (Embedded JavaScript) |
| **Database** | MongoDB + Mongoose |
| **Authentication** | JWT + bcryptjs |
| **Styling** | Tailwind CSS |
| **Language** | JavaScript (ES Modules) |

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js 18 or higher
- MongoDB (local or cloud)

### Steps

1️⃣ **Clone the repository**
```bash
git clone https://github.com/your-username/devblog.git
cd devblog
2️⃣ Install dependencies

bash
npm install
3️⃣ Configure environment variables

bash
cp .env.example .env
Edit .env file and set your values:

env
PORT=5000
MONGO_URI=mongodb://localhost:27017/devblog
JWT_SECRET=your_super_secret_key_change_this
NODE_ENV=development
4️⃣ Start the server

bash
npm run dev
The server will run on http://localhost:5000

📂 Project Structure
text
devblog/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   ├── adminController.js
│   │   └── pageController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   ├── models/
│   │   ├── userModule.js
│   │   └── blogModule.js
│   ├── routes/
│   │   ├── authRouters.js
│   │   ├── blogRouters.js
│   │   ├── adminRouters.js
│   │   └── pageRouters.js
│   ├── views/
│   │   ├── partials/
│   │   │   ├── header.ejs
│   │   │   ├── footer.ejs
│   │   │   └── navbar.ejs
│   │   ├── pages/
│   │   │   ├── index.ejs
│   │   │   ├── about.ejs
│   │   │   ├── contact.ejs
│   │   │   ├── me.ejs
│   │   │   ├── 404.ejs
│   │   │   ├── 500.ejs
│   │   │   ├── admin/
│   │   ├── admin/
│   │   │   ├── dashboard.ejs
│   │   │   ├── create-blog.ejs
│   │   │   └── edit-blog.ejs
│   │   ├── blog/
│   │   │   └── show.ejs
│   │   └── auth/
│   │       ├── login.ejs
│   │       └── register.ejs
│   └── app.js
├── public/
│   ├── js/
│   │   └── main.js
│   └── css/
│       └── style.css
├── .env
├── .gitignore
├── package.json
└── server.js
🌐 Pages & Features
Public Pages
Page	Description	Route
Home	List of all blog posts	/
Blog Post	Single blog post view	/blog/:slug
About	About the blog/developer	/about
Contact	Contact information	/contact
Login	User login page	/login
Register	User registration page	/register
Admin Panel (Protected)
Page	Description	Route
Dashboard	Manage users and blog posts	/admin
Create Post	Create new blog post	/admin/blogs/new
Edit Post	Edit existing blog post	/admin/blogs/edit/:id
🔐 Authentication Flow
User Roles
Role	Permissions
User	View blog posts, manage own profile
Admin	Full CRUD on posts, manage users
Authentication
All protected routes require JWT stored in HTTP-only cookies.

Protected Routes:

Admin dashboard and management routes

User profile pages

🧪 Test Data
Create a Test Blog Post
javascript
{
  title: "Complete Guide to Node.js Development",
  description: "Learn how to build scalable applications with Node.js, Express, and MongoDB. Perfect for beginners.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  imgUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200",
  imgAlt: "Node.js development environment setup",
  slug: "complete-guide-nodejs-development"
}
📊 Database Schema
User Model
javascript
{
  fullname: String,
  email: String (unique),
  password: String (hashed),
  role: String (admin / user)
}
Blog Post Model
javascript
{
  title: String (50-80 chars),
  description: String (80-160 chars),
  content: String,
  imgUrl: String,
  imgAlt: String,
  slug: String (unique),
  createdAt: Date,
  updatedAt: Date
}
🚦 API Endpoints
Authentication
Method	Endpoint	Description
GET	/auth/register	Show registration form
POST	/auth/register	Register new user
GET	/auth/login	Show login form
POST	/auth/login	Login user
GET	/auth/logout	Logout user
Blog
Method	Endpoint	Description
GET	/	Show all blog posts
GET	/blog/:slug	Show single post
Admin (Protected)
Method	Endpoint	Description
GET	/admin	Admin dashboard
GET	/admin/blogs/new	Create post form
POST	/admin/blogs/create	Create new post
GET	/admin/blogs/edit/:id	Edit post form
POST	/admin/blogs/update/:id	Update post
POST	/admin/blogs/delete/:id	Delete post
📝 Environment Variables
Variable	Description	Default
PORT	Server port	5000
MONGO_URI	MongoDB connection string	mongodb://localhost:27017/devblog
JWT_SECRET	Secret key for JWT signing	(required)
NODE_ENV	Environment (development/production)	development
🎨 UI Features
Dark Theme - Easy on the eyes for developers

Responsive Design - Works on all screen sizes

Tailwind CSS - Utility-first styling

Custom Scrollbar - Themed to match the dark aesthetic

Modern Gradients - Clean and professional look

Glassmorphism - Modern card designs

🤝 Contributing
Contributions are welcome! Feel free to submit a Pull Request.

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Hossain Yazdani

GitHub: @hossain-yzdani

LinkedIn: _

⭐ Show Your Support
If you found this project helpful, please give it a ⭐ on GitHub!
