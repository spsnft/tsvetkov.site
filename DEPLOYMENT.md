# Deployment Instructions

## Push to GitHub

The project is ready to be pushed to GitHub. Follow these steps:

### Option 1: Using HTTPS with Personal Access Token (Recommended)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Create a new token with `repo` scope
3. Copy the token
4. Run the following command in the project directory:

```bash
git push -u origin main
```

5. When prompted for password, paste your Personal Access Token

### Option 2: Using SSH

1. Generate SSH key (if not already done):
```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""
```

2. Add public key to GitHub:
```bash
cat ~/.ssh/id_rsa.pub
```
   - Copy the output
   - Go to GitHub Settings → SSH and GPG keys → New SSH key
   - Paste the key

3. Change remote to SSH:
```bash
git remote set-url origin git@github.com:spsnft/tsvetkov.site.git
```

4. Push the repository:
```bash
git push -u origin main
```

### Option 3: Using GitHub CLI

1. Install GitHub CLI if not already installed
2. Authenticate:
```bash
gh auth login
```

3. Push the repository:
```bash
git push -u origin main
```

## Next Steps After Push

### 1. Set Repository Settings
- Go to your GitHub repository settings
- Set default branch to `main`
- Enable branch protection rules if desired
- Configure pull request requirements

### 2. Deploy to Vercel (Recommended for Next.js)

1. Visit [https://vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Import Project"
4. Select your `tsvetkov.site` repository
5. Click "Deploy"

Vercel will automatically:
- Build your Next.js project
- Optimize images and assets
- Deploy to a global CDN
- Provide a production URL

### 3. Configure Custom Domain

Once deployed:
1. Go to your Vercel project settings
2. Add your domain (tsvetkov.site)
3. Update DNS records as instructed
4. Wait for DNS propagation (can take 24-48 hours)

### 4. Set Environment Variables (if needed)

In Vercel project settings → Environment Variables, add:
```
NEXT_PUBLIC_SITE_URL=https://tsvetkov.site
```

## Repository Structure

```
tsvetkov-site/
├── .git/                      # Git configuration
├── app/                       # Next.js app directory
│   ├── components/            # React components
│   │   ├── AboutSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ProjectsSection.tsx
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── public/                    # Static assets
├── node_modules/              # Dependencies
├── .gitignore                 # Git ignore rules
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies manifest
├── package-lock.json          # Dependency lock file
├── postcss.config.mjs         # PostCSS configuration
├── README.md                  # Project documentation
├── DEPLOYMENT.md              # This file
└── tsconfig.json              # TypeScript configuration
```

## Testing Before Deployment

1. Run development server:
```bash
npm run dev
```
   - Open http://localhost:3000 in your browser

2. Test all features:
   - Navigation links
   - Responsive design (test on mobile)
   - Dark mode toggle
   - Scroll behavior

3. Build for production:
```bash
npm run build
npm start
```

4. Run linter:
```bash
npm run lint
```

## Troubleshooting

### Push fails with authentication error
- Generate a new Personal Access Token
- Ensure token has `repo` scope
- Paste token as password when prompted

### Deployment fails on Vercel
- Check build logs in Vercel dashboard
- Ensure `npm run build` succeeds locally
- Check for missing environment variables
- Verify Node.js version compatibility

### Website not updating after push
- Clear Vercel cache and redeploy
- Check that main branch is set as default
- Verify webhook is enabled in GitHub

## Performance Optimization

Before going live:

1. Audit with Lighthouse:
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Run Mobile and Desktop audits
   - Target: 90+ on all metrics

2. Optimize images:
   - Use Next.js Image component (already implemented)
   - Compress images before adding to public/

3. Monitor Core Web Vitals:
   - Use Vercel Analytics
   - Check in Google Search Console
   - Target: Good rating for all metrics

## Maintenance

### Regular Updates
```bash
npm update
npm audit fix
```

### Add New Components
1. Create component in `app/components/`
2. Import in main page or other components
3. Test locally
4. Commit and push changes

### Update Content
1. Edit component files directly
2. No rebuild needed for local testing (hot reload)
3. Test changes
4. Commit and push

## Security

- Never commit sensitive information
- Use environment variables for secrets
- Enable GitHub branch protection
- Regularly update dependencies
- Use HTTPS for your domain
- Enable two-factor authentication on GitHub

## Contact & Support

For issues or questions:
- Check the main README.md
- Review Next.js documentation
- Check Vercel documentation
- Visit GitHub issues/discussions

---

Your Next.js portfolio is ready to go live! 🚀
