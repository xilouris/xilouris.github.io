# Blog System

This directory contains all blog posts for the academic website. Posts are written in Markdown with YAML frontmatter.

## Quick Start

### Creating a New Post

1. Copy the template:
   ```bash
   cp _template.md my-new-post.md
   ```

2. Edit frontmatter and content in VS Code:
   ```bash
   code my-new-post.md
   ```

3. Preview locally:
   ```bash
   npm run dev
   # Visit http://localhost:4322/blog
   ```

4. Publish (set `draft: false` and push to GitHub)

## File Structure

```
src/pages/blog/
├── README.md                           # This file
├── _template.md                        # Template for new posts
├── index.astro                         # Blog index page with filtering
├── 5g-network-slicing-explained.md     # Example post
├── ai-driven-network-security.md       # Example post
└── cloud-edge-continuum-6g.md          # Example post
```

## Frontmatter Fields

Every blog post must have:

```yaml
---
layout: ../../layouts/BlogPostLayout.astro
title: "Post Title"
description: "Brief summary (150-160 chars)"
pubDate: "YYYY-MM-DD"
author: "Georgios Xylouris"
tags: ["Tag1", "Tag2"]
draft: false
---
```

## Tags

Use consistent tags from these categories:

- **Network Technologies**: 5G, 6G, NFV, SDN, Network Slicing, Edge Computing
- **Security**: Cybersecurity, Network Security, AI, Machine Learning
- **Research**: Network Architecture, Cloud Computing, IoT
- **Projects**: 5GENESIS, 6G CLOUD, COBALT, PRIVATEER, AInception

## Features

- **Markdown Support**: Full GitHub-flavored Markdown
- **Code Syntax Highlighting**: Specify language in code blocks
- **Tag Filtering**: Readers can filter by topic
- **Search**: Full-text search across all posts
- **Responsive Design**: Mobile-friendly layout
- **SEO Optimized**: Meta tags and descriptions
- **Draft Support**: Hide posts while working on them

## Writing Guidelines

1. **Title**: Be specific and engaging
2. **Description**: Compelling 150-160 character summary
3. **Structure**: Use H2 for sections, H3 for subsections
4. **Code Examples**: Include practical, commented examples
5. **Citations**: Reference papers and projects
6. **SEO**: Use technical terms naturally

## Deployment

Posts are automatically deployed to GitHub Pages when pushed to the main branch. The site rebuilds in 2-3 minutes.

## For More Details

See `VSCODE_EDITING_GUIDE.md` in the root directory for comprehensive documentation on creating and managing blog posts.
