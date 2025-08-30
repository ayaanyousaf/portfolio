# Portfolio Website - Ayaan Yousaf
### 🌐 [Live Demo](www.ayaanyousaf.ca)
My personal developer portfolio to showcase projects, skills, experience, and more!

## 🚀 Features
- Responsive design (desktop & mobile)  
- Modern UI styled with Tailwind CSS  
- 3D space background and planet models made with Three.js
- Contact form integration with EmailJS (sends directly to my inbox)  
- Smooth animations & transitions with framer-motion
- Sections: Home, About, Education, Skills, Projects, Work, Contact

## 🛠️ Tech Stack
- **Frontend:** React w/ JavaScript, Vite, Tailwind CSS
- **Email API:** EmailJS (for contact form backend)  
- **Deployment:** Vercel

## 📂 Project Structure
```plaintext
portfolio/
├─ public/                # Static assets
│   ├─ assets/            # images, icons
│   ├─ textures/          # 3D model textures
│   └─ projects/          # Project thumbnails/screenshots
│
├─ src/
│   ├─ pages/             # Main pages (Home.jsx is root)
│   │   ├─ Home.jsx
│   │   └─ NotFound.jsx
│   │
│   ├─ components/        # Reusable components
│   │   ├─ ui/
│   │
│   ├─ lib/              
│   │   └─ utils.js
│   │
│   ├─ hooks/             # Custom React hooks
│   │  
│   │
│   ├─ App.jsx
│   ├─ main.jsx
│   └─ index.css          # Global CSS file with Tailwind CSS styling
│
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
└─ vite.config.js