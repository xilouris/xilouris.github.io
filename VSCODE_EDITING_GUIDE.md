# VS Code Editing Guide for Website Content

## Quick Start

### Opening Files

```bash
# Open entire repository (recommended)
code ~/Documents/GitHub/xilouris.github.io

# Open just the data folder
code ~/Documents/GitHub/xilouris.github.io/src/data/
```

### Content Files Location

**Data Files** in `src/data/`:
- **profile.ts** - Personal info, bio, research interests, social links
- **cv.ts** - CV content (education, experience, skills, publications, awards, service)
- **projects.ts** - Research projects (active and completed)

**Blog Posts** in `src/pages/blog/`:
- ***.md** - Markdown blog posts with frontmatter
- **_template.md** - Template for creating new blog posts

## Editing Workflow

### 1. Make Changes
Edit the `.ts` files in VS Code with full TypeScript syntax highlighting and IntelliSense.

### 2. Preview Locally
```bash
cd ~/Documents/GitHub/xilouris.github.io
npm run dev
```
Then visit: http://localhost:4322

### 3. Commit Changes
```bash
cd ~/Documents/GitHub/xilouris.github.io
git add src/data/*.ts
git commit -m "docs: update website content"
git push
```

The website will automatically rebuild and deploy in 2-3 minutes.

## What to Edit in Each File

### profile.ts

**Common edits:**
- Update `bio` paragraph
- Add/remove research interests
- Update social media links
- Change title/position

**Example:**
```typescript
export const profile: Profile = {
  name: 'Georgios Xylouris',
  title: 'Your Title Here',
  bio: `Your bio paragraph here...`,
  researchInterests: [
    '5G/6G Networks',
    'Cybersecurity',
    // Add more...
  ]
};
```

### cv.ts

**Sections you can edit:**
- `education.items[]` - Add degrees
- `experience.items[]` - Update positions
- `skills` - Modify skill categories
- `selectedPublications` - Highlight key papers
- `awards` - Add new awards
- `service` - Update committee memberships

**Example - Adding new position:**
```typescript
export const experience: CVSection = {
  title: 'Professional Experience',
  items: [
    {
      title: 'New Position Title',
      organization: 'Organization Name',
      location: 'Athens, Greece',
      startDate: '2024',
      endDate: 'Present',
      description: 'Brief description of role',
      details: [
        'Key responsibility 1',
        'Key responsibility 2',
      ]
    },
    // ... existing entries
  ]
};
```

### projects.ts

**How to add a new active project:**
```typescript
export const activeProjects: Project[] = [
  {
    title: 'Full Project Name',
    acronym: 'SHORT',
    description: 'Brief description of what the project does',
    role: 'Your Role (e.g., Principal Investigator)',
    status: 'active',
    startDate: '2024',
    endDate: '2026',
    funding: 'European Commission',
    fundingProgram: 'Horizon Europe',
    website: 'https://project-website.eu',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    objectives: [
      'Objective 1',
      'Objective 2',
      'Objective 3',
    ],
    impact: 'Expected impact statement',
  },
  // ... existing projects
];
```

**Moving a project to completed:**
1. Cut the project object from `activeProjects`
2. Paste into `completedProjects`
3. Change `status: 'active'` to `status: 'completed'`
4. Update `endDate` to actual completion date

## Recommended VS Code Extensions

Install these extensions for the best editing experience:

```bash
# Astro support
code --install-extension astro-build.astro-vscode

# TypeScript and JavaScript
code --install-extension dbaeumer.vscode-eslint

# Tailwind CSS IntelliSense
code --install-extension bradlc.vscode-tailwindcss

# Prettier code formatting
code --install-extension esbenp.prettier-vscode
```

## Common Tasks

### Adding a New Research Interest
**File:** `profile.ts`
**Location:** Line 27-35 (approximately)

```typescript
researchInterests: [
  '5G/6G Networks',
  'Cybersecurity',
  'AI/ML for Networks',
  'New Interest Here', // Add here
]
```

### Updating Your Bio
**File:** `profile.ts`
**Location:** Line 6-14 (approximately)

```typescript
bio: `Write your new bio here. You can use multiple
lines. Keep it concise and focused on your expertise
and current role.`,
```

### Adding a New Award
**File:** `cv.ts`
**Location:** Search for `export const awards`

```typescript
export const awards = [
  {
    title: 'Award Name',
    organization: 'Awarding Body',
    year: '2024',
    description: 'Optional description',
  },
  // ... existing awards
];
```

### Highlighting a Different Publication
**File:** `cv.ts`
**Location:** Search for `export const selectedPublications`

```typescript
export const selectedPublications = [
  {
    title: 'Paper Title',
    authors: 'Authors list',
    venue: 'Conference/Journal Name',
    year: '2024',
    citations: 0,
    url: 'https://doi.org/...',
    type: 'journal' | 'conference' | 'book',
  },
  // ... other publications
];
```

## Creating and Managing Blog Posts

The blog system uses Markdown files with YAML frontmatter. All blog posts are stored in `src/pages/blog/`.

### Creating a New Blog Post

**Step 1: Copy the template**
```bash
cd ~/Documents/GitHub/xilouris.github.io/src/pages/blog
cp _template.md my-new-post.md
```

**Step 2: Edit the frontmatter**
Open `my-new-post.md` and update the metadata:

```yaml
---
layout: ../../layouts/BlogPostLayout.astro
title: "Your Blog Post Title"
description: "A compelling description that appears in search results and blog index"
pubDate: "2024-12-14"
author: "Georgios Xylouris"
tags: ["5G", "Network Security", "Research"]
draft: false  # Change to false when ready to publish
---
```

**Step 3: Write your content**
Use standard Markdown formatting:

```markdown
## Main Heading

Write your introduction here.

### Subheading

- Bullet points
- Lists
- Are supported

### Code Examples

You can include code blocks:

\`\`\`python
def example():
    return "Hello, World!"
\`\`\`

### Mathematical Expressions

Inline math: $E = mc^2$

Block math:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Step 4: Preview your post**
```bash
cd ~/Documents/GitHub/xilouris.github.io
npm run dev
# Visit http://localhost:4322/blog to see your post
```

**Step 5: Publish**
When ready to publish, set `draft: false` in the frontmatter, then commit:

```bash
git add src/pages/blog/my-new-post.md
git commit -m "blog: add new post about [topic]"
git push
```

### Blog Post Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `layout` | Yes | Path to blog layout | `../../layouts/BlogPostLayout.astro` |
| `title` | Yes | Post title | `"5G Network Slicing Explained"` |
| `description` | Yes | Brief summary (150-160 chars) | `"An overview of network slicing..."` |
| `pubDate` | Yes | Publication date (YYYY-MM-DD) | `"2024-12-14"` |
| `author` | No | Author name (defaults to you) | `"Georgios Xylouris"` |
| `tags` | No | Array of topic tags | `["5G", "Network Slicing"]` |
| `draft` | No | Hide from blog index | `true` or `false` |
| `heroImage` | No | Optional header image | `"/images/hero.jpg"` |

### Available Tags

Use consistent tags to help readers find related content:

**Network Technologies:**
- `5G`, `6G`, `NFV`, `SDN`, `Network Slicing`, `Edge Computing`

**Security:**
- `Cybersecurity`, `Network Security`, `AI`, `Machine Learning`, `Threat Detection`

**Research:**
- `Research Methods`, `Network Architecture`, `Cloud Computing`, `IoT`

**Projects:**
- `5GENESIS`, `6G CLOUD`, `COBALT`, `PRIVATEER`, `AInception`

### Markdown Formatting Guide

**Headings:**
```markdown
## H2 Heading (Main Sections)
### H3 Heading (Subsections)
#### H4 Heading (Minor Points)
```

**Text Formatting:**
```markdown
**Bold text**
*Italic text*
***Bold and italic***
`inline code`
```

**Lists:**
```markdown
- Unordered list item
- Another item
  - Nested item

1. Ordered list item
2. Second item
3. Third item
```

**Links:**
```markdown
[Link text](https://example.com)
[Research Projects](/research)
```

**Images:**
```markdown
![Alt text](/images/diagram.png)
```

**Blockquotes:**
```markdown
> This is a quote or callout
> that spans multiple lines.
```

**Code Blocks:**
````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

**Tables:**
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| More     | Data     | Here     |
```

**Horizontal Rules:**
```markdown
---
```

### Blog Writing Tips

1. **Catchy Titles**: Make titles specific and benefit-focused
   - Good: "5 Common Pitfalls in NFV Orchestration and How to Avoid Them"
   - Avoid: "NFV Orchestration"

2. **Strong Descriptions**: Write compelling 150-160 character summaries
   - Include key benefit or main insight
   - Use active voice
   - Include relevant keywords

3. **Structure**: Use clear hierarchy with headings
   - Start with introduction/context
   - Use H2 for main sections
   - Use H3 for subsections
   - End with conclusion or key takeaways

4. **Code Examples**: Include practical examples when relevant
   - Add comments to explain key lines
   - Use syntax highlighting (specify language)
   - Keep examples concise and focused

5. **Citations**: Reference relevant papers or projects
   - Link to your own publications
   - Mention ongoing research projects
   - Add "References" section at the end

6. **SEO**: Help readers find your content
   - Use descriptive headings
   - Include relevant technical terms naturally
   - Add appropriate tags (3-5 per post)

### Managing Existing Posts

**Edit a post:**
```bash
code ~/Documents/GitHub/xilouris.github.io/src/pages/blog/existing-post.md
```

**Hide a post (make it draft):**
Change `draft: false` to `draft: true` in the frontmatter.

**Delete a post:**
```bash
cd ~/Documents/GitHub/xilouris.github.io/src/pages/blog
rm post-to-delete.md
git add -A
git commit -m "blog: remove outdated post"
git push
```

**Update post date:**
Change the `pubDate` field in the frontmatter to re-order posts.

### Blog Workflow Example

```bash
# 1. Create new post from template
cd ~/Documents/GitHub/xilouris.github.io/src/pages/blog
cp _template.md zero-trust-networks.md

# 2. Edit in VS Code
code zero-trust-networks.md

# 3. Preview locally
cd ~/Documents/GitHub/xilouris.github.io
npm run dev
# Open http://localhost:4322/blog

# 4. Publish when ready
git add src/pages/blog/zero-trust-networks.md
git commit -m "blog: add post on zero-trust network architecture"
git push
```

## TypeScript Syntax Tips

1. **Strings** - Use single or double quotes consistently
   ```typescript
   title: 'Single quotes'
   title: "Double quotes"
   ```

2. **Multi-line strings** - Use backticks
   ```typescript
   description: `This is a long
   description that spans
   multiple lines`
   ```

3. **Arrays** - Use square brackets
   ```typescript
   technologies: ['Tech1', 'Tech2', 'Tech3']
   ```

4. **Objects** - Use curly braces
   ```typescript
   {
     field1: 'value1',
     field2: 'value2',
   }
   ```

5. **Commas** - Add trailing commas (helps with git diffs)
   ```typescript
   technologies: [
     'Tech1',
     'Tech2',
     'Tech3', // <- trailing comma is good
   ]
   ```

## Troubleshooting

### Syntax Errors
If you see errors after editing:
1. Check for missing quotes or brackets
2. Ensure all objects end with commas (except the last one in a block)
3. Run `npm run dev` to see detailed error messages

### Changes Not Appearing
1. Stop the dev server (Ctrl+C)
2. Run `npm run dev` again
3. Hard refresh browser (Cmd+Shift+R on Mac)

### Deployment Issues
Check GitHub Actions:
1. Go to https://github.com/xilouris/xilouris.github.io/actions
2. Look for failed builds
3. Click on failed build to see error logs

## Git Workflow Cheat Sheet

```bash
# Check what changed
git status
git diff src/data/profile.ts

# Stage changes
git add src/data/*.ts

# Commit with message
git commit -m "docs: update bio and research interests"

# Push to GitHub
git push

# Check if push worked
git log --oneline -3
```

## VS Code Keyboard Shortcuts

- **Cmd+P** - Quick open file
- **Cmd+Shift+F** - Search across all files
- **Cmd+/** - Toggle comment
- **Cmd+D** - Select next occurrence
- **Option+Up/Down** - Move line up/down
- **Cmd+Z** - Undo
- **Cmd+Shift+Z** - Redo

## Need Help?

### Preview your changes locally:
```bash
cd ~/Documents/GitHub/xilouris.github.io
npm run dev
```

### Check TypeScript errors:
```bash
cd ~/Documents/GitHub/xilouris.github.io
npm run build
```

### View deployment status:
https://github.com/xilouris/xilouris.github.io/actions

## Related Files

- **Website-Editing-Guide.md** - Overall editing guide (in Obsidian)
- **SCHOLAR_STATUS.md** - Google Scholar automation status
- **README.md** - Repository documentation
