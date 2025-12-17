# Project Overview

This is a personal academic website for Georgios Xylouris, a researcher at NCSR "Demokritos". The website is built with [Astro](https://astro.build/) and styled with [Tailwind CSS](https://tailwindcss.com/). It is deployed on GitHub Pages.

A key feature of this project is the automated synchronization of publications from Google Scholar. A GitHub Actions workflow runs a Python script weekly to fetch the latest publication data and update the website.

The website's content, such as profile information and research interests, is managed through TypeScript data files in the `src/data` directory. This makes it easy to update the website's content without needing to modify the Astro components.

## Building and Running

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The website will be available at `http://localhost:4321`.

3.  **Build for production:**

    ```bash
    npm run build
    ```

    The production-ready files will be located in the `dist/` directory.

4.  **Preview the production build:**

    ```bash
    npm run preview
    ```

## Development Conventions

### Content Management

-   **Profile Information:** To update personal information, edit the `profile` object in `src/data/profile.ts`.
-   **Publications:** Publications are automatically updated from Google Scholar. To trigger a manual update, you can run the following command:

    ```bash
    npm run sync-scholar
    ```

-   **Blog Posts:** To create a new blog post, add a new Markdown file to the `src/pages/blog/` directory.
-   **CV:** The CV can be updated by editing the `cv` data in `src/data/cv.ts` or by replacing the PDF file at `public/files/cv.pdf`.

### Styling

The project uses Tailwind CSS for styling. Global styles and Tailwind CSS configurations can be found in `src/styles/global.css` and `tailwind.config.ts`, respectively.

### Deployment

The website is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment process is managed by the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.
