# Marc Cassanmagnago Somoza - Personal Portfolio 👨‍💻

![HTML5](https://img.shields.org/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.org/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.org/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Welcome to the source code of my personal portfolio website. This project serves as a showcase of my academic background, technical skills, and projects in **Data Science**, **Software Engineering**, and **Computer Vision**.

🔗 **Live Demo:** [https://cassanmagnago.com/]

---

## 🚀 About the Project

This website is a modern, responsive, and interactive single-page application built with **vanilla JavaScript**, HTML5, and CSS3. It is designed to be lightweight, fast, and accessible, featuring custom animations and a dynamic localization system.

The content reflects my journey as a **Computer Science student at the University of Girona (UdG)**, focusing on my transition into professional environments related to the Data ecosystem.

## ✨ Key Features

* **🌍 Multi-language Support (i18n):**
    * Full support for **English**, **Spanish**, and **Catalan**.
    * Dynamic content switching without page reloads using a custom JSON-based translation system (`translations.js`).
    * Language preference persistence using `localStorage`.
    
* **🌓 Dark/Light Mode:**
    * Theme toggle with smooth transitions.
    * Auto-detection of user system preferences.
    * Theme persistence using `localStorage`.

* **📱 Responsive Design:**
    * Mobile-first approach.
    * Custom animated hamburger menu for mobile devices.
    * Glassmorphism effects in the header.

* **🎨 Interactive UI:**
    * Particle background animation.
    * Scroll progress bar.
    * Intersection Observer API for "reveal on scroll" animations.
    * 3D tilt effect on project cards.

* **📧 Working Contact Form:**
    * Integrated with Web3Forms API for real-time email delivery.
    * Form validation and success/error feedback.

## 🛠 Technologies Used

* **Frontend:** HTML5, CSS3 (Custom Properties/Variables), JavaScript (ES6+).
* **Icons:** FontAwesome.
* **Fonts:** Inter (Google Fonts).
* **Form Handling:** Web3Forms API.

## 📂 Project Structure

```text
├── index.html          # Main HTML structure
├── style.css           # Global styles, variables, and responsive media queries
├── script.js           # Logic for UI, theme, translations, and animations
├── translations.js     # Dictionary object containing all text content (EN/ES/CA)
├── img/                # Profile photos and project assets

└── favicon_io/         # Favicons
