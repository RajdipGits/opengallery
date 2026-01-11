<p align="center">
  <img src="./src/assets/logo.svg" alt="OpenGallery Logo" width="150px" />
</p>

<h1 align="center">OpenGallery</h1>

<p align="center">
  A clean, modern, and responsive image gallery built with React.<br/>
  Browse, preview, and download stunning images powered by a free open API.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Material_UI-7.3.7-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
</p>

---

## 🌟 Overview

**OpenGallery** is a responsive web application that lets users explore beautiful, high-quality images in a distraction-free interface.  
Images are fetched dynamically from the **Picsum Photos API**, making the app fast, lightweight, and completely free to use.

Whether you're browsing casually, testing UI layouts, or downloading images for mockups, OpenGallery keeps things simple and elegant.

---

## 🌐 Free Image API

This project uses **Picsum Photos**, a free and open image service.

- 🔗 https://picsum.photos/
- ✅ No authentication or API key needed
- 📸 Random images with pagination
- 🆓 Free for personal and commercial use

---

## ✨ Features

- Responsive image grid for all screen sizes
- Full-screen modal preview for focused viewing
- One-click image download in high quality
- Page-based navigation with Prev / Next controls
- Skeleton loaders for smooth loading experience
- Automatic scroll-to-top when switching pages
- Clean and modern UI with subtle animations

---

## 🎨 Design Philosophy

- **Minimal & Content-First** — images stay the hero
- **Mobile-First Layout** — designed for phones first, scaled up
- **Soft Visual Hierarchy** — spacing, shadows, and balance
- **Fast Interactions** — no clutter, no distractions
- **Modern Tooling** — Material UI + Tailwind CSS working together

---

## 🚀 Live Demo
<a herf="https://rajdipgits.github.io/opengallery/" style="color:#220964"><h3>🔗Visit site</h3></a>

---

## 🛠️ Tech Stack

| Technology       | Usage                    |
| ---------------- | ------------------------ |
| **React**        | UI and component logic   |
| **Vite**         | Fast development & build |
| **Material-UI**  | Layout and components    |
| **Tailwind CSS** | Styling & responsiveness |
| **Axios**        | API requests             |
| **Lucide React** | Icons                    |
| **React Modal**  | Image modal display      |

---

## 📦 Installation & Setup

```bash
git clone https://github.com/RajdipGits/opengallery.git
cd opengallery
npm install
```

## 📁 Project Structure

```bash
src/
├── assets/              # Images, icons, and static assets
├── component/           # Reusable UI components
│   ├── Card.jsx         # Image card with modal & download logic
│   ├── Loader.jsx       # Skeleton loading component
│   ├── Nav.jsx          # Top navigation bar
│   ├── BottomNav.jsx    # Footer section
│   └── Pageno.jsx       # Pagination controls
├── App.jsx              # Core application logic & API calls
├── index.css            # Global styles
└── main.jsx             # Application entry point
```

### 👤 Author

#### Rajdip Das

<b>GitHub: </b>https://github.com/RajdipGits

<b>LinkedIn:</b> https://www.linkedin.com/in/rajdip-das01

<b>Instagram:</b> https://www.instagram.com/rajdippp___/

### 📄 License

This project is licensed under the MIT License.
See the <a herf="./LICENSE">LICENSE</a>
file for details.
