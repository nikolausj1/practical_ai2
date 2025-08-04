import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config = {
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Practical AI</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Toolkit
      </span>
    </>
  ),
  /* Removed GitHub project link as requested */
  docsRepositoryBase: 'https://github.com/nikolausj1/practical_ai2/blob/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Practical AI Toolkit - Companion site for the Practical AI talk" />
      <meta property="og:title" content="Practical AI Toolkit" />
      <meta property="og:description" content="Companion site for the Practical AI talk" />
    </>
  ),
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Practical AI Toolkit.
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Practical AI Toolkit'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
    title: 'On This Page',
  },
  /* Hide search box as requested */
  search: {
    component: null
  },
  /* Hide last updated timestamp as requested */
  gitTimestamp: null,
  /* Custom CSS for word wrap in code blocks and navigation positioning */
  primaryHue: 210,
  style: function useStyle() {
    return (
      <style global jsx>{`
        /* Add word wrap to code blocks */
        pre code {
          white-space: pre-wrap !important;
          word-wrap: break-word !important;
        }
        
        /* Move hamburger menu to left on mobile */
        @media (max-width: 767px) {
          .nextra-nav-container .nextra-menu-icon {
            order: -1 !important;
            margin-left: 0 !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    )
  }
}

export default config
