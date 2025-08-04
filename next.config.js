const { createNextraConfig } = require('nextra')

// Import the docs theme
const nextraThemeDocs = require('nextra-theme-docs')

// Basic Next.js config
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// Create Nextra configuration
const withNextra = createNextraConfig({
  theme: nextraThemeDocs,
  themeConfig: './theme.config.jsx',
})

// Export the combined configuration
module.exports = withNextra(nextConfig)
