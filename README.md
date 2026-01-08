# Aarju Kumar — Portfolio

A modern, responsive, and animated developer portfolio built with **React + Vite + Tailwind CSS** and **Framer Motion**.  
It is fully data-driven using JSON files for profile, skills, experience, and projects — making updates fast and simple.

## ✨ Features

- **Premium UI**: glassmorphism cards, gradients, smooth section layouts
- **Animations**: subtle reveals and hover effects using **Framer Motion**
- **Projects**: filterable project grid (Frontend / Backend / Cloud / DevOps)
- **Data-driven content**: update content via JSON files (no hardcoding)
- **Resume download**: serves `public/resume.pdf`
- **Responsive + accessible**: works well across desktop/tablet/mobile
- **SEO-ready**: basic meta tags + clean structure

## 🧱 Tech Stack

- **React** (UI)
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Lucide Icons** (icons)

## 📁 Project Structure

public/
resume.pdf
projects/ # project images (optional)
src/
components/
data/
profile.json
skills.json
experience.json
projects.json
pages/
ui/

shell
Copy code

## 🔧 Setup & Run Locally

```bash
# Install deps
npm install

# Run dev server
npm run dev
Open the URL shown in your terminal (usually http://localhost:5173).

🏗️ Build
bash
Copy code
npm run build
npm run preview
🧾 Updating Content
All content is controlled via JSON:

src/data/profile.json → name, headline, socials, summary

src/data/skills.json → skill categories and items

src/data/experience.json → timeline/roles

src/data/projects.json → project cards + filters

Add/Update Resume
Replace:

public/resume.pdf

Your “Download Resume” button should point to:

/resume.pdf

🚀 Deploy (Vercel)
Push repo to GitHub

Import in Vercel: New Project → Import Git Repo

Ensure settings:

Build Command: npm run build

Output Directory: dist

Deploy ✅

📬 Contact
Email: kaarju99@gmail.com

GitHub: https://github.com/Aarju-coder

LinkedIn: https://www.linkedin.com/in/aarju-kumar-98194a130
