# Social Responsibility Council - React Migration

This project is a complete migration from the original Nuxt.js/Vue.js application to a modern React + Vite stack.

## 🚀 Technology Stack

### Frontend
- **React 19** - Latest React version with modern features
- **Vite** - Lightning fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework with custom theme

### State Management
- **Redux Toolkit** - Modern Redux with simplified syntax
- **React Query** - Server state management and caching

### UI & UX
- **Lucide React** - Beautiful, customizable icons
- **Framer Motion** - Smooth animations and transitions
- **React Hot Toast** - Toast notifications
- **Headless UI** - Unstyled, accessible UI components

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation

### Utilities
- **Axios** - HTTP client for API calls
- **Date-fns** - Modern date utility library
- **clsx** - Utility for constructing className strings

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── PrimaryAppBar.jsx
│   ├── MasterSlider.jsx
│   ├── LetterSlider.jsx
│   ├── SocialSection.jsx
│   ├── CounterSection.jsx
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── capabilities/
│   ├── events/
│   ├── membership/
│   └── ...
├── layouts/            # Layout components
│   ├── DefaultLayout.jsx
│   └── GeneralLayout.jsx
├── store/              # Redux store and slices
│   ├── index.js
│   └── slices/
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── constants/          # App constants
└── assets/            # Static assets
```

## 🎨 Design System

The application uses a custom design system built on Tailwind CSS with the original color scheme:

- **Primary**: `#1D3A7C` (Original blue)
- **Secondary**: `#2C498D` 
- **Text Color**: `#136A89`
- **Icon Color**: `#1D3A7C`

## 🔄 Migration Details

### From Nuxt.js/Vue.js to React
- **Framework**: Nuxt.js 2.15.3 → React 19 + Vite
- **UI Library**: Vuetify → Tailwind CSS + Headless UI
- **State Management**: Vuex → Redux Toolkit
- **Routing**: Nuxt Router → React Router DOM
- **Styling**: SCSS + Vuetify → Tailwind CSS
- **Build Tool**: Nuxt Build → Vite

### Key Features Migrated
- ✅ Multi-level navigation with dropdowns
- ✅ Image galleries and sliders
- ✅ Dynamic counters and animations
- ✅ Responsive design
- ✅ Static asset management
- ✅ Route-based page structure
- ✅ Component-based architecture

### Components Converted
- **PrimaryAppBar** - Navigation header with mobile menu
- **MasterSlider** - Main image carousel
- **LetterSlider** - Document gallery slider
- **SocialSection** - Social media integration
- **CounterSection** - Animated statistics
- **Footer components** - Site footer
- **Cookie consent** - GDPR compliance

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd srcouncil-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS
The Tailwind configuration includes custom colors matching the original design:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        600: '#1D3A7C', // Original primary color
      },
      secondary: {
        600: '#2C498D', // Original secondary color
      },
      textColor: '#136A89',
      iconColor: '#1D3A7C',
    },
  },
}
```

### Vite Configuration
Vite is configured for optimal development and build performance with React.

## 🌐 Deployment

The application can be deployed to various platforms:

- **Vercel** - `npm run build` and connect repository
- **Netlify** - `npm run build` and deploy dist folder
- **GitHub Pages** - Use GitHub Actions with build step
- **Traditional hosting** - Upload dist folder contents

## 📱 Features

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation

### Performance
- Vite for fast development and builds
- Code splitting with React Router
- Optimized images and assets
- Lazy loading components

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Focus management

## 🔮 Future Enhancements

- [ ] Form implementations (internship, voluntary, pledge)
- [ ] Enhanced animations with Framer Motion
- [ ] Progressive Web App (PWA) features
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Advanced search functionality
- [ ] Content Management System integration

## 🐛 Known Issues

- Some placeholder components need full implementation
- Form validations need to be added
- API integration points need to be configured

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For questions or support, please contact the development team.

---

**Migration Status**: ✅ Complete
**Last Updated**: September 2025
**React Version**: 19.1.1
**Vite Version**: 7.1.2