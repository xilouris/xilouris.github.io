# Setup Instructions for Your Academic Website

## 🎉 Initial Setup Complete!

Your website foundation has been created successfully. Here's what has been built:

### ✅ Completed

1. **Project Structure** - Astro site with TypeScript and Tailwind CSS
2. **Academic Theme** - Professional color scheme (blues, grays, cybersecurity purple accent)
3. **Core Components** - Header, Footer, Navigation with mobile support
4. **Homepage** - Hero section with profile, research interests, stats placeholders
5. **GitHub Actions** - Automated deployment workflow configured
6. **Documentation** - README and setup guides

### 📍 Project Location

Your website code is located at:
```
~/Documents/GitHub/xilouris.github.io
```

A symlink has been created in your Obsidian vault at:
```
1.Projects/_Active-Strategic/Personal Website/_files_PersonalWebsite
```

## 🚀 Next Steps

### 1. Push to GitHub

First, create the repository on GitHub:
1. Go to https://github.com/new
2. Repository name: **xilouris.github.io** (must be exact)
3. Make it **Public**
4. **DO NOT** initialize with README (we already have one)
5. Click "Create repository"

Then push your code:

```bash
cd ~/Documents/GitHub/xilouris.github.io

# Add GitHub as remote
git remote add origin https://github.com/xilouris/xilouris.github.io.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Save the settings

The GitHub Action will automatically deploy your site!

### 3. Complete Your Profile Information

Edit `/src/data/profile.ts` and fill in:

```typescript
{
  name: 'Your Full Name',           // Replace "Your Name"
  email: 'your.email@example.com',  // Add your email
  socialLinks: {
    googleScholar: 'https://scholar.google.com/citations?user=YOUR_ID',
    orcid: 'https://orcid.org/YOUR-ORCID',
    linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
    // ... add other profiles
  }
}
```

### 4. Add Your Profile Photo

1. Add your photo to `/public/images/profile.jpg`
2. Or update the path in `/src/data/profile.ts`

Recommended: 500x500px, square crop

### 5. Update Site Metadata

Edit `/src/layouts/BaseLayout.astro` to replace:
- "Your Name" placeholders
- Default descriptions
- Social media tags

## 📝 Content Creation Workflow

### Local Development

```bash
cd ~/Documents/GitHub/xilouris.github.io

# Start development server
npm run dev

# Visit http://localhost:4321
```

### Making Changes

1. Edit files in `/src/`
2. Preview locally with `npm run dev`
3. Commit changes: `git add -A && git commit -m "Your message"`
4. Push to GitHub: `git push`
5. GitHub Actions will automatically deploy (check Actions tab)

## 🎯 Immediate TODO Items

### Priority 1: Basic Information
- [ ] Update profile data (`/src/data/profile.ts`)
- [ ] Add profile photo (`/public/images/profile.jpg`)
- [ ] Update site title in BaseLayout.astro
- [ ] Add Google Scholar profile URL
- [ ] Add ORCID (if you have one)
- [ ] Add LinkedIn profile

### Priority 2: Content Pages (Coming Next)
- [ ] Create CV page
- [ ] Add publications (manual or from Google Scholar)
- [ ] Build research projects showcase
- [ ] Set up blog structure
- [ ] Create links/resources page

### Priority 3: Automation
- [ ] Configure Google Scholar auto-sync
- [ ] Set up weekly publication updates
- [ ] Add citation metrics

## 🔍 Checking Your Live Site

After pushing to GitHub and enabling Pages:
1. Go to repository Settings → Pages
2. You'll see: "Your site is live at https://xilouris.github.io"
3. First deployment takes 2-5 minutes
4. Check GitHub Actions tab for build progress

## ⚠️ Common Issues

### Site not deploying?
- Check Actions tab for errors
- Ensure repository name is exactly `xilouris.github.io`
- Verify GitHub Pages source is set to "GitHub Actions"
- Check that the workflow file exists: `.github/workflows/deploy.yml`

### Images not showing?
- Images should be in `/public/images/`
- Reference them as `/images/filename.jpg` (not `/public/images/`)

### Styling issues?
- Run `npm run build` locally to check for errors
- Clear browser cache
- Check browser console for errors

## 📚 File Reference

### Key Files to Edit

| File | Purpose |
|------|---------|
| `/src/data/profile.ts` | Your profile information |
| `/src/pages/index.astro` | Homepage content |
| `/src/components/Header.astro` | Navigation menu |
| `/src/styles/global.css` | Colors and styling |
| `/astro.config.mjs` | Site configuration |

### Directory Structure

```
xilouris.github.io/
├── public/           # Static assets (images, PDFs, etc.)
│   └── images/       # Profile photo, icons, etc.
├── src/
│   ├── components/   # Reusable UI components
│   ├── layouts/      # Page templates
│   ├── pages/        # Site pages (auto-routed)
│   ├── data/         # Structured data (profile, pubs, etc.)
│   ├── styles/       # Global CSS
│   └── types/        # TypeScript definitions
└── .github/
    └── workflows/    # Deployment automation
```

## 🎨 Customization

### Change Colors

Edit `/src/styles/global.css`:
- `--color-primary-*`: Main blue colors
- `--color-secondary-*`: Gray colors
- `--color-accent-*`: Purple accent (cybersecurity theme)

### Update Navigation

Edit `/src/components/Header.astro`:
```typescript
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/cv', label: 'CV' },
  // Add or remove items here
];
```

## 🆘 Getting Help

- **Astro Docs**: https://docs.astro.build
- **Tailwind Docs**: https://tailwindcss.com/docs
- **GitHub Pages**: https://docs.github.com/pages
- **Issues**: Create an issue in your repository

## 📧 Next Session with Claude Code

When you want to continue building:

1. "Add the Publications page with Google Scholar integration"
2. "Create the CV page with structured data"
3. "Set up the blog system"
4. "Build the Research Projects showcase"
5. "Create the Links/Resources page"

---

**Current Status**: Foundation complete, ready for content and customization!

**Live Site** (after pushing): https://xilouris.github.io
**Repository**: https://github.com/xilouris/xilouris.github.io
**Local Dev**: `cd ~/Documents/GitHub/xilouris.github.io && npm run dev`
