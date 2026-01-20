# Parithosh Souharda Credit Co-operative Ltd Website

A modern, responsive website for Parithosh Souharda Credit Co-operative Ltd built with React, Vite, and Tailwind CSS.

## Features

- ✨ Modern and responsive design
- 🎨 Red theme color scheme matching brand identity
- 📱 Mobile-friendly navigation
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🧭 Multi-page routing with React Router
- 💅 Styled with Tailwind CSS

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library

## Pages

1. **Home** - Hero section, services overview, stats, and features
2. **About Us** - Company information, vision, mission, and values
3. **Products & Services** - Detailed information about financial products
4. **Contact Us** - Contact form, location map, and contact details

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. Navigate to the project directory:
```bash
cd parithosh-coop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
parithosh-coop/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   └── Contact.jsx
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Theme Colors
The primary red theme is configured in `tailwind.config.js`:
- Primary colors range from 50-900
- Main brand color: `primary-600` (#dc2626)

### Content Updates
- Update company information in respective page components
- Modify contact details in `Header.jsx`, `Footer.jsx`, and `Contact.jsx`
- Update services and products in `Products.jsx`

## Contact Information

- **Email:** info@psccl.com
- **Phone:** 9071115946
- **Address:** #319, 1st Floor, 59th Cross, 3rd Block Rajajinagar, Bengaluru 560010
- **Website:** parithoshsouharda.org

## License

© 2026 Parithosh Souharda Credit Co-operative Ltd. All rights reserved.

## Support

For any issues or questions, please contact the development team or visit our office.
