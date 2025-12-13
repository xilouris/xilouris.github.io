# Personal Academic Website

This is the source code for my personal academic website, built with [Astro](https://astro.build) and deployed on GitHub Pages.

## 🚀 Features

- **Automated Publications**: Syncs with Google Scholar to automatically update publication list and citations
- **Academic Design**: Professional theme tailored for research and academia
- **Responsive**: Mobile-friendly design that works on all devices
- **Blog**: Markdown-based blog system for research updates and news
- **Fast**: Built with Astro for optimal performance

## 📦 Project Structure

```
/
├── public/              # Static assets (images, files, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/          # Site pages (routes)
│   ├── data/           # Structured data (profile, publications, etc.)
│   ├── styles/         # Global styles and Tailwind CSS
│   └── types/          # TypeScript type definitions
├── .github/
│   └── workflows/      # GitHub Actions for deployment
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:4321`

## 🚢 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch via GitHub Actions.

### Manual Deployment

```bash
# Build the site
npm run build

# The output will be in ./dist/ directory
```

## 📝 Content Management

### Updating Profile Information

Edit `/src/data/profile.ts` to update your personal information, affiliation, and social links.

### Adding Publications

Publications are automatically synced from Google Scholar via GitHub Actions. The workflow runs weekly and on manual trigger.

To manually update:
```bash
npm run sync-scholar
```

### Writing Blog Posts

Create a new `.md` file in `/src/pages/blog/` with frontmatter:

```markdown
---
title: "Your Post Title"
publishDate: "2024-01-01"
description: "Brief description"
tags: ["research", "networks"]
---

Your content here...
```

### Updating CV

Edit `/src/data/cv.ts` or place a PDF file in `/public/files/cv.pdf`

## 🔧 Configuration

- **Site URL**: Update in `astro.config.mjs`
- **Colors**: Modify theme in `/src/styles/global.css`
- **Navigation**: Edit nav items in `/src/components/Header.astro`

## 📊 Google Scholar Integration

The site uses a custom GitHub Action to automatically fetch publications and citations from Google Scholar. Configure your Scholar profile URL in:

- `/src/data/profile.ts` - Add your Google Scholar URL
- `.github/workflows/sync-scholar.yml` - Configure sync schedule

## 🤝 Contributing

This is a personal website, but feel free to use it as a template for your own academic site!

## 📄 License

MIT License - feel free to use this as a template for your own academic website.

## 🙏 Acknowledgments

Built with:
- [Astro](https://astro.build/) - Web framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [GitHub Pages](https://pages.github.com/) - Hosting

---

© 2024 - Built with Astro and deployed on GitHub Pages
