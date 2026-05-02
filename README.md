# PekaDev Studio — Landing Page

Website landing page profesional untuk **PekaDev Studio**, web development & digital solutions agency dari Pekalongan.

## 🚀 Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations & scroll reveal
- **Lucide React** — icon library
- **Plus Jakarta Sans** — premium Google Font

## 📁 Struktur Folder

```
pekadev-studio/
├── public/
├── src/
│   ├── components/
│   │   ├── UI.jsx              # Reusable UI primitives
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── WhyUsSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── index.js            # All static content data
│   ├── hooks/
│   │   └── useScrollReveal.js  # Custom scroll animation hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🛠️ Setup & Running

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Buka browser di `http://localhost:5173`

### 3. Build untuk production
```bash
npm run build
```

## 🌐 Deploy ke Vercel

### Cara 1 — Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Cara 2 — Via GitHub
1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) → New Project
3. Import repository
4. Framework: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Klik **Deploy** ✓

## ✏️ Kustomisasi

### Ganti nomor WhatsApp
Di `src/components/ContactSection.jsx`, ubah:
```js
href="https://wa.me/62812xxxxxxxx?text=..."
```

### Update data konten
Semua data statis (services, portfolio, testimonial, dll) ada di:
```
src/data/index.js
```

### Ganti warna tema
Warna utama ada di class Tailwind (`from-blue-600 to-cyan-500`).
Bisa disesuaikan di masing-masing component.

## 📄 License
© 2025 PekaDev Studio. All rights reserved.
