# Practical AI Website Content

## Project Overview

This repository contains the complete markdown content for the Practical AI Talk companion website. We've organized the content into structured Markdown files that are ready to be used with any static site generator.

## Content Structure

The content is organized into the following pages:

- **Home** (`pages/index.mdx`) - Introduction to the site
- **What is AI** (`pages/what-is-ai.mdx`) - Overview of AI technology and how it works
- **When to use AI** (`pages/when-to-use-ai.mdx`) - Guidelines for effective AI usage
- **Which AI to use** (`pages/which-ai-to-use.mdx`) - Comparison of AI platforms and models
- **Input Types and Tools** (`pages/input-types-and-tools.mdx`) - Features of modern AI platforms
- **Prompting Tips** (`pages/prompting-tips.mdx`) - Techniques for effective prompting
- **Best Practices** (`pages/best-practices.mdx`) - General best practices for AI usage

## Deployment Options

There are several ways to use this content:

### Option 1: Use with Nextra (Recommended for Next.js users)

The project is set up to work with Nextra, a Next.js-based documentation site generator. However, there appears to be a compatibility issue with Node.js v22. To resolve this:

1. **Use Node.js v18 LTS** (recommended version for Next.js/Nextra)
   ```bash
   # Install nvm (Node Version Manager) if not already installed
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   
   # Install and use Node.js v18
   nvm install 18
   nvm use 18
   
   # Then run the development server
   npm run dev
   ```

### Option 2: Use another Static Site Generator

The content can be easily adapted to work with other static site generators:

- **Jekyll**: Move the `.mdx` files to `_posts/` (renaming them to `.md` files)
- **Hugo**: Place them in the `content/` directory
- **Gatsby**: Use them in a Gatsby site with MDX support
- **VitePress/VuePress**: Use in a Vue-based documentation site

### Option 3: Direct Access

The markdown files can be directly viewed in any Markdown viewer, including:

- GitHub's web interface
- VS Code with Markdown preview
- Obsidian, Notion, or other Markdown-based tools

## Next Steps

1. Choose a deployment approach based on your technical preferences
2. Customize the appearance and navigation as needed
3. Deploy to your preferred hosting provider (Vercel, Netlify, GitHub Pages, etc.)

If you need to make content updates, simply edit the corresponding Markdown files.
