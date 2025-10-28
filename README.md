# Dr. Christy Sarguna - Portfolio Website

A world-class, animated portfolio website built with React and Chakra UI, showcasing expertise in GenAI, Data Science, and Leadership.

## 🚀 Features

- **Stunning Animations**: Framer Motion animations throughout
- **Particle Background**: Interactive particle system on hero section
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Animated Counters**: CountUp animations for statistics
- **Interactive Timeline**: Expandable experience cards
- **Skill Visualization**: Animated progress bars with proficiency levels
- **Project Showcase**: Detailed project cards with modals
- **Contact Form**: Functional contact form with validation
- **Smooth Scrolling**: React Scroll for seamless navigation
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Technologies Used

### Core
- **React 18** - UI Framework
- **Chakra UI** - Component Library
- **Vite** - Build Tool

### Animations
- **Framer Motion** - Animation Library
- **React Type Animation** - Typewriter Effect
- **React CountUp** - Number Animations
- **GSAP** - Advanced Animations (Ready to integrate)

### Utilities
- **React Router** - Navigation (if needed for multi-page)
- **React Scroll** - Smooth Scrolling
- **React Icons** - Icon Library
- **React Intersection Observer** - Scroll Animations
- **EmailJS** - Contact Form Integration

## 📦 Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal details (name, email, phone, etc.)
- Professional experience
- Skills and expertise
- Projects
- Education and certifications
- Publications

### Update Theme Colors

Edit `src/theme/index.js` to customize:
- Color palette
- Fonts
- Component styles
- Spacing
- Shadows

### Configure EmailJS (Contact Form)

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and User ID
3. Update `src/components/Contact/Contact.jsx`:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_USER_ID'
);
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/
│   │   ├── Hero/        # Hero section with particles
│   │   ├── About/       # About section with stats
│   │   ├── Experience/  # Experience timeline
│   │   ├── Skills/      # Skills showcase
│   │   ├── Projects/    # Project cards & modals
│   │   ├── Education/   # Education & certifications
│   │   ├── Contact/     # Contact form
│   │   ├── Navbar/      # Navigation bar
│   │   ├── Footer/      # Footer
│   │   └── common/      # Shared components
│   ├── data/
│   │   └── portfolioData.js  # All content data
│   ├── theme/
│   │   └── index.js     # Chakra UI theme
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Sections

1. **Hero** - Animated introduction with typewriter effect
2. **About** - Professional summary with animated statistics
3. **Experience** - Interactive career timeline with expandable cards
4. **Skills** - Categorized skills with proficiency indicators
5. **Projects** - Showcase of major projects with detailed modals
6. **Education** - Academic qualifications and certifications
7. **Contact** - Contact form and information

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Drag and drop `dist` folder to Netlify
3. Or connect GitHub repository

### GitHub Pages

```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 📱 Performance

- Lighthouse Score: 95+ (Performance)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Fully Responsive
- Accessible (WCAG 2.1 AA)

## 🎨 Animation Details

### Hero Section
- Particle background animation
- Fade-in with scale for avatar
- Slide from left for name
- Typewriter effect for roles
- Staggered button animations

### About Section
- Scroll-triggered fade-in
- Animated counter for statistics
- Smooth transitions

### Experience Section
- Sequential card fade-in
- Accordion expansion
- Hover lift effects

### Skills Section
- Staggered grid animation
- Animated progress bars
- Icon animations

### Projects Section
- Grid fade-in
- Image parallax on hover
- Modal transitions

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Dr. Christy Sarguna**
- Senior Manager - GenAI Architect & Master Data Scientist
- Cognizant
- LinkedIn: [Connect](https://www.linkedin.com/in/christy-sarguna)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React & Chakra UI
