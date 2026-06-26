# GitHub Upload Instructions

## Project Ready! 🚀

Your Next.js + React portfolio website is fully created and ready to upload to GitHub.

## What's Inside

✅ **Complete Next.js 15 Project**
- Modern React components with TypeScript
- Tailwind CSS for styling
- Responsive design
- Dark mode support
- Smooth animations and transitions

✅ **Features Included**
- Header with navigation
- Hero landing section
- About me section
- Projects showcase with cards
- Footer with contact info
- Global CSS with custom animations

✅ **Files Created**
- 6 React components (Header, Hero, About, Projects, ProjectCard, Footer)
- Global styles with animations
- Complete package.json with all dependencies
- ESLint and TypeScript configuration
- Environment variable example file

## Upload to GitHub

### Step 1: Create GitHub Token

1. Go to: https://github.com/settings/tokens?type=classic
2. Click "Generate new token (classic)"
3. Set name: "tsvetkov-site-token"
4. Check "repo" scope
5. Click "Generate token"
6. **Copy the token** (you won't see it again)

### Step 2: Push Repository

Choose one method:

#### Method A: Using PowerShell (Windows)
```powershell
cd E:\Programms\openclaw\openclaw-1\tsvetkov-site
npm run push
```
When prompted for password, paste your token.

#### Method B: Using Bash (Linux/Mac)
```bash
cd E:\Programms\openclaw\openclaw-1\tsvetkov-site
npm run push:linux
```

#### Method C: Manual Git Command
```bash
cd E:\Programms\openclaw\openclaw-1\tsvetkov-site
git push -u origin main
```

### Step 3: Verify on GitHub

After successful push:
1. Visit: https://github.com/spsnft/tsvetkov.site
2. You should see all files and commits
3. Check that main branch is default

## Next: Deploy to Vercel

After uploading to GitHub:

1. Visit: https://vercel.com
2. Sign up or login with GitHub
3. Click "Add New..." → "Project"
4. Import your "tsvetkov.site" repository
5. Click "Deploy"

**That's it!** Vercel will:
- Automatically build your Next.js project
- Deploy to global CDN
- Provide a production URL (e.g., tsvetkov-site.vercel.app)
- Set up automatic deployments for future pushes

## After Deployment

### Configure Custom Domain

In Vercel project settings:
1. Go to "Domains"
2. Add your domain: tsvetkov.site
3. Follow DNS instructions
4. Wait for DNS propagation (1-48 hours)

### Update Website

To make changes after deployment:

1. Edit files locally
2. Test with `npm run dev`
3. Push changes: `npm run push`
4. Vercel automatically redeploys

## Project Location

Local path:
```
E:\Programms\openclaw\openclaw-1\tsvetkov-site\
```

Files to know:
- `app/page.tsx` - Home page
- `app/components/` - React components
- `app/globals.css` - Global styles
- `package.json` - Dependencies
- `README.md` - Project documentation

## Documentation Files

Inside the project:
- **README.md** - Main project documentation
- **SETUP.md** - Local development guide
- **DEPLOYMENT.md** - Detailed deployment instructions
- **push.ps1** - PowerShell upload script
- **push.sh** - Bash upload script

## Git Status

Current state:
```
Repository: E:\Programms\openclaw\openclaw-1\tsvetkov-site\
Remote: https://github.com/spsnft/tsvetkov.site.git
Branch: main
Commits: 2 (ready to push)
```

Last commits:
1. Initial commit: Complete Next.js portfolio website
2. Add deployment guides and setup documentation

## Quick Commands

```bash
# Change to project directory
cd E:\Programms\openclaw\openclaw-1\tsvetkov-site

# Install dependencies (if needed)
npm install

# Test locally
npm run dev

# Build for production
npm run build

# Push to GitHub (Windows)
npm run push

# Push to GitHub (Linux/Mac)
npm run push:linux

# Lint code
npm run lint
```

## Troubleshooting

### Error: "fatal: Not a git repository"
```bash
# Ensure you're in the correct directory
cd E:\Programms\openclaw\openclaw-1\tsvetkov-site
git status
```

### Error: "Authentication failed"
1. Create new GitHub token (Step 1 above)
2. Make sure token has "repo" scope
3. Paste full token as password (not username)
4. Don't include quotes or spaces

### Error: "Repository not found"
1. Verify repository exists: https://github.com/spsnft/tsvetkov.site
2. Check username/repo name is correct
3. Ensure you have push access

### Error: "Port 3000 in use"
```bash
npm run dev -- -p 3001
```

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Help](https://help.github.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## What's Next?

1. ✓ Project created locally
2. ✓ All dependencies installed
3. ✓ Git repository initialized
4. → **Push to GitHub** (use npm run push)
5. → Deploy to Vercel
6. → Configure custom domain
7. → Monitor and update

## Summary

You have a complete, production-ready Next.js portfolio website!

**Current location:** `E:\Programms\openclaw\openclaw-1\tsvetkov-site\`

**To upload:** Run `npm run push` and paste your GitHub token

**Ready to go live!** 🎉

---

Questions? Check the documentation files in the project directory.
