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
  project: {
    link: 'https://github.com/nikolausj1/practical_ai2',
  },
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
}

export default config
