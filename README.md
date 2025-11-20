# Boundary Breakers 🏏

A modern, responsive cricket training and coaching website built with React and Vite. Showcasing world-class cricket coaching services with an elegant and professional design.

## Features

- 🎨 **Modern UI/UX Design** - Beautiful, clean interface with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Smooth Scrolling** - Seamless navigation between sections
- 📋 **Comprehensive Sections**:
  - Hero section with engaging call-to-action
  - About section with mission and statistics
  - Services showcase (Batting, Bowling, Fielding, Fitness, Mental Coaching, Match Preparation)
  - Coaches profiles
  - Contact footer with social links

## Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Next-generation frontend tooling
- **CSS Modules** - Scoped styling for components
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
Boundary_Breakers/
├── src/
│   ├── components/
│   │   ├── navbar/       # Navigation bar with mobile menu
│   │   ├── hero/         # Hero section with main CTA
│   │   ├── about/        # About section with stats
│   │   ├── services/     # Services showcase
│   │   ├── coaches/      # Coaches profiles
│   │   └── footer/       # Footer with contact info
│   ├── assets/           # Images and static assets
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Public assets
└── package.json         # Dependencies and scripts
```

## Features in Detail

### Navigation
- Fixed navbar with scroll detection
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Active state styling

### Hero Section
- Eye-catching hero image
- Clear value proposition
- Dual call-to-action buttons
- Scroll indicator animation

### About Section
- Mission statement
- Key statistics
- Feature cards with icons
- Responsive grid layout

### Services
- Six comprehensive service offerings
- Feature lists for each service
- Hover animations
- Icon-based visual hierarchy

### Coaches
- Professional coach profiles
- Experience and specialization details
- Achievement highlights
- Card-based layout

### Footer
- Contact information
- Social media links
- Quick navigation
- Legal links

## Customization

### Colors
The color scheme uses a modern black and gray palette. To customize:
- Primary: `#1a1a1a` (black)
- Secondary: `#4a5568` (gray)
- Background: `#ffffff` and `#f7fafc`

### Content
Update component files in `src/components/` to modify:
- Text content
- Images (add to `src/assets/`)
- Service offerings
- Coach information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

Built with ❤️ using React + Vite
