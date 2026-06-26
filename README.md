# Tsvetkov.site

A modern, responsive portfolio website built with Next.js and React.

## Features

- ✨ Modern and responsive design
- 🎨 Beautiful gradient backgrounds and animations
- 📱 Mobile-first approach with Tailwind CSS
- ⚡ Next.js 15+ with App Router
- 🔄 TypeScript for type safety
- 🌙 Dark mode support
- 📦 Optimized for performance
- 🚀 Ready for deployment

## Project Structure

```
tsvetkov-site/
├── app/
│   ├── components/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── AboutSection.tsx   # About me section
│   │   ├── ProjectsSection.tsx # Projects showcase
│   │   ├── ProjectCard.tsx    # Individual project card
│   │   └── Footer.tsx         # Footer section
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── public/                     # Static assets
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript config
```

## Tech Stack

- **Framework**: Next.js 15+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: System fonts with fallbacks
- **Icons**: Unicode symbols
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/spsnft/tsvetkov.site.git
cd tsvetkov-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Components

### Header
Navigation component with links to different sections.

### Hero
Eye-catching landing section with call-to-action button.

### AboutSection
Personal introduction and skills overview.

### ProjectsSection
Grid of featured projects with tags and descriptions.

### ProjectCard
Reusable card component for displaying individual projects.

### Footer
Footer with links and contact information.

## Customization

### Modify Content

Edit the component files in `app/components/` to customize:
- Text and descriptions
- Links and URLs
- Projects list (in `ProjectsSection.tsx`)
- Colors and styling

### Update Styling

- Edit `app/globals.css` for global styles
- Modify Tailwind classes in components
- Update color scheme in component files

### Dark Mode

The site automatically supports dark mode. To test:
- Use your OS dark mode setting
- Or use browser DevTools to toggle

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- GitHub Pages (static export)
- Docker containers

## Environment Setup

No environment variables are required for basic setup.

Optional: Add `.env.local` for custom configurations:
```
NEXT_PUBLIC_SITE_URL=https://tsvetkov.site
```

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- CSS purging with Tailwind
- Minification for production builds

## SEO

The site includes:
- Semantic HTML structure
- Meta tags in layout.tsx
- Open Graph support ready
- Responsive design for mobile SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your needs!

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contact

- Email: info@tsvetkov.site
- Website: https://tsvetkov.site

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Made with ❤️ using Next.js and React
