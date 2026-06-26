# Setup & Deployment Guide

## Quick Start

### 1. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### 2. Push to GitHub

#### Option A: Using PowerShell (Windows)
```bash
npm run push
```

#### Option B: Using Bash (Linux/Mac)
```bash
npm run push:linux
```

#### Option C: Manual Git Commands
```bash
git add .
git commit -m "Your message here"
git push -u origin main
```

## Complete Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- GitHub account with Personal Access Token
- Git installed

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- `next` - React framework
- `react` - UI library
- `react-dom` - React DOM library
- `tailwindcss` - CSS framework
- `typescript` - Type checking
- Development tools (ESLint, etc.)

### Step 2: Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Create GitHub Personal Access Token

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "tsvetkov-site-push")
4. Select scopes:
   - ✓ repo (Full control of private repositories)
5. Click "Generate token"
6. Copy the token (you won't see it again!)

### Step 4: Update Remote URL (if needed)

Ensure you're using HTTPS:
```bash
git remote set-url origin https://github.com/spsnft/tsvetkov.site.git
```

### Step 5: Push to GitHub

```bash
# Windows (PowerShell)
npm run push

# Or manually
git push -u origin main
```

When prompted for password, paste your Personal Access Token.

### Step 6: Verify on GitHub

1. Go to https://github.com/spsnft/tsvetkov.site
2. You should see all your files and commits
3. Main branch should be the default

## Development Workflow

### Edit Components

All React components are in `app/components/`:

```
Header.tsx        - Navigation
Hero.tsx          - Landing section
AboutSection.tsx  - About me
ProjectsSection.tsx - Projects grid
ProjectCard.tsx   - Project card component
Footer.tsx        - Footer
```

### Edit Styles

Global styles in `app/globals.css`
Component styles use Tailwind CSS classes

### Test Changes

Development server auto-reloads:
```bash
npm run dev
```

Changes are reflected instantly in browser.

### Build for Production

```bash
npm run build
npm start
```

Opens production build locally for testing.

### Run Linter

```bash
npm run lint
```

Checks code quality and style issues.

## Project Structure

```
tsvetkov-site/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Footer.tsx
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout wrapper
│   └── page.tsx             # Home page
├── public/                  # Static assets (images, fonts)
├── .git/                    # Git repository
├── .gitignore               # Files to ignore
├── node_modules/            # Installed packages
├── package.json             # Dependencies manifest
├── package-lock.json        # Dependency lock file
├── next.config.ts           # Next.js config
├── tsconfig.json            # TypeScript config
├── tailwind.config.mjs       # Tailwind config
├── postcss.config.mjs        # PostCSS config
├── eslint.config.mjs         # ESLint config
├── .env.example              # Environment variables template
├── README.md                 # Project documentation
├── SETUP.md                  # This file
├── DEPLOYMENT.md             # Deployment guide
├── push.ps1                  # PowerShell push script
└── push.sh                   # Bash push script
```

## Customization Guide

### Change Site Title & Description

Edit `app/layout.tsx`:
```typescript
const metadata = {
  title: 'Your Portfolio',
  description: 'Your description here',
};
```

### Add New Project

Edit `app/components/ProjectsSection.tsx`:
```typescript
const projects = [
  {
    title: 'New Project',
    description: 'Project description',
    tags: ['React', 'TypeScript'],
    link: '#',
  },
  // ... more projects
];
```

### Change Colors

Edit `app/globals.css` and component files:
- Change gradient colors
- Update text colors
- Modify hover effects

### Update Content

Edit any component `.tsx` file to change text, links, and content.

### Add Images

1. Place images in `public/` folder
2. Import in components:
```typescript
import Image from 'next/image';

<Image src="/image-name.png" alt="Description" width={100} height={100} />
```

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

1. Visit https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Deploy with one click
5. Add custom domain

### Option 2: Netlify

1. Visit https://netlify.com
2. Connect GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy

### Option 3: GitHub Pages

1. Add to `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
};
```

2. Deploy to GitHub Pages using Actions

### Option 4: Self-Hosted

Deploy to your own server:
- VPS/Dedicated server
- Docker container
- Own domain and hosting

## Troubleshooting

### Problem: "Cannot find module"
```bash
npm install
```

### Problem: Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Problem: Git push authentication fails
1. Generate new Personal Access Token
2. Ensure token has `repo` scope
3. Paste token as password (not username)

### Problem: Build fails
```bash
npm run lint
npm run build
```

Check error messages and fix any TypeScript/ESLint issues.

### Problem: Styles not showing
1. Check Tailwind config
2. Ensure CSS import in layout.tsx
3. Clear `.next` folder: `rm -rf .next`
4. Rebuild: `npm run build`

## Performance Tips

1. **Optimize images**: Use Next.js Image component
2. **Lazy loading**: Import components with dynamic
3. **Remove unused CSS**: Tailwind purges automatically
4. **Monitor performance**: Use Lighthouse in DevTools

## Security

- Never commit secrets to GitHub
- Use `.env.local` for sensitive data
- Enable 2FA on GitHub
- Keep dependencies updated: `npm update`
- Run security audit: `npm audit`

## Next Steps

1. ✓ Install dependencies
2. ✓ Test locally with `npm run dev`
3. ✓ Customize content and design
4. → Push to GitHub with `npm run push`
5. → Deploy to Vercel/Netlify
6. → Configure custom domain
7. → Monitor with analytics

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Vercel](https://vercel.com/docs)
- [GitHub Guides](https://guides.github.com)

## Support

For issues or questions:
1. Check README.md
2. Review component code
3. Check Next.js documentation
4. Ask in GitHub Discussions

---

Happy building! 🚀
