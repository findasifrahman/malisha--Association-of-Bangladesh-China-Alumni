# Association of Bangladesh-China Alumni

A modern, responsive website for the Association of Bangladesh-China Alumni, built with Vue.js 3 and Vite.

## 🌟 Features

- **Multi-language Support**: English and Chinese (中文)
- **Responsive Design**: Mobile-first approach with Material Design
- **Interactive Components**: 
  - Auto-sliding image carousel
  - News ticker with scrolling animation
  - Smooth scrolling navigation
  - Lightbox image viewer
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## 🚀 Tech Stack

- **Frontend**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **Styling**: CSS3 with Material Design principles
- **Internationalization**: Vue I18n
- **Icons**: Material Design Icons
- **Deployment**: Vercel

## 📁 Project Structure

```
association-bd-cn-alumni/
├── src/
│   ├── components/          # Vue components
│   │   ├── Navbar.vue      # Navigation bar
│   │   ├── Hero.vue        # Hero section with carousel
│   │   ├── Events.vue      # News & Events section
│   │   ├── Programs.vue    # Programs section
│   │   ├── AboutUs.vue     # About Us section
│   │   ├── Members.vue     # Members section
│   │   ├── Contact.vue     # Contact section
│   │   └── Footer.vue      # Footer component
│   ├── assets/             # Static assets
│   │   ├── styles/         # CSS files
│   │   └── images/         # Image files
│   ├── i18n/              # Internationalization
│   └── content/           # Content files (YAML/JS)
├── public/                # Public assets
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd association-bd-cn-alumni
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy using Vercel Dashboard**:
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect the Vue.js project and deploy

3. **Deploy using CLI**:
```bash
vercel
```

### Environment Variables

No environment variables are required for this project.

### Build Settings for Vercel

- **Framework Preset**: Vue.js
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📱 Sections

### 1. **Hero Section**
- Auto-sliding image carousel (6 images)
- AI-generated bullet points
- Association logo
- Scrolling news ticker

### 2. **News & Events**
- Latest news and upcoming events
- Event cards with images and descriptions

### 3. **Programs**
- Video showcase
- Program descriptions
- Image gallery with circular images

### 4. **About Us**
- Association introduction
- Benefits and features
- Professional cards with icons

### 5. **Members**
- Member profiles with images
- Professional descriptions
- Grid layout (4 members)

### 6. **Contact Us**
- Contact information
- QR codes for quick access
- Map integration

### 7. **Footer**
- Quick links
- Social media links
- Contact information
- Copyright notice

## 🎨 Design Features

- **Color Scheme**: Professional dark gradients with blue accents
- **Typography**: Clean, readable fonts
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Works perfectly on all devices
- **Accessibility**: WCAG compliant design

## 🔧 Customization

### Adding New Content

1. **Images**: Place in `src/assets/`
2. **Translations**: Update `src/i18n/index.js`
3. **Content**: Modify component data or use content files

### Styling

- Global styles: `src/assets/styles/main.css`
- Component styles: Scoped CSS in each component
- CSS Variables: Defined in `main.css`

## 📄 License

This project is proprietary and confidential.

## 🤝 Contributing

For internal development only. Please contact the development team for any modifications.

## 📞 Support

For technical support or questions, please contact the development team.

---

**Built with ❤️ for the Association of Bangladesh-China Alumni**
