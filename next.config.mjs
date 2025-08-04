import { createNextraConfig } from 'nextra'
import nextraThemeDocs from 'nextra-theme-docs'

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
export default withNextra(nextConfig)
