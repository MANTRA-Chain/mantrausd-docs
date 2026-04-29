/**
 * Unmint Theme Configuration for mantraUSD Documentation
 *
 * Customize your documentation's look and feel by modifying this file.
 * All colors, branding, and styling can be adjusted here.
 */

export const siteConfig = {
  // Site metadata
  name: 'mantraUSD Documentation',
  description:
    "Documentation for mantraUSD, an ecosystem stablecoin built on M0's universal stablecoin platform.",
  url: 'https://docs.mantrachain.io',

  // Logo configuration (mirrors Mintlify docs.json `logo` block)
  logo: {
    src: '/logo-light.svg',
    srcDark: '/logo-dark.svg',
    alt: 'mantraUSD',
    width: 120,
    height: 32,
  },

  // Top-level navbar links (mirrors Mintlify `navbar.links` and `navbar.primary`)
  navbar: {
    links: [
      {
        label: 'Follow on X',
        href: 'https://x.com/mantraUSD',
      },
    ],
    primary: {
      label: 'mantraUSD.com',
      href: 'https://mantrausd.com',
    },
  },

  // Global anchors (mirrors Mintlify `navigation.global.anchors`)
  anchors: [
    {
      label: 'Get mantraUSD on LotusDEX',
      icon: 'shuffle',
      href: 'https://app.lotusdex.io/swap',
    },
    {
      label: 'Get mantraUSD on QuickSwap',
      icon: 'shuffle',
      href: 'https://dapp.quickswap.exchange/swap/v4/ETH/0xd2b95283011E47257917770D28Bb3EE44c849f6F?chainId=5888',
    },
  ],

  // Navigation links (used by header / share components)
  links: {
    github: 'https://github.com/MANTRA-Chain',
    discord: 'https://discord.gg/mantra',
    twitter: 'https://twitter.com/MANTRA_Chain',
    support: 'https://discord.gg/mantra',
  },

  // Footer configuration (mirrors Mintlify `footer.socials`)
  footer: {
    copyright: `© ${new Date().getFullYear()} MANTRA Chain. All rights reserved.`,
    links: [
      { label: 'Website', href: 'https://mantrausd.com' },
      { label: 'X', href: 'https://twitter.com/MANTRA_Chain' },
      { label: 'GitHub', href: 'https://github.com/MANTRA-Chain' },
      { label: 'Discord', href: 'https://discord.gg/mantra' },
    ],
  },
}

export const themeConfig = {
  // Primary accent color - used for active states, links, highlights.
  // Maps Mintlify `colors.primary` / `colors.light` / `colors.dark`.
  colors: {
    // Light mode (Mintlify `colors.primary`)
    light: {
      accent: '#0D9373',
      accentForeground: '#ffffff',
      accentMuted: 'rgba(13, 147, 115, 0.1)',
    },
    // Dark mode (Mintlify `colors.dark`, brightened with `colors.light` accent)
    dark: {
      accent: '#07C983',
      accentForeground: '#0f172a',
      accentMuted: 'rgba(7, 201, 131, 0.1)',
    },
  },

  // Code block styling
  codeBlock: {
    light: {
      background: '#fafafa',
      titleBar: '#f3f4f6',
    },
    dark: {
      background: '#1a1a1f',
      titleBar: '#1f2937',
    },
  },

  // OG Image generation settings
  ogImage: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #e6f9f1 50%, #0D9373 100%)',
    titleColor: '#0f172a',
    sectionColor: '#0D9373',
    logoUrl: 'https://docs.mantrachain.io/logo-light.svg',
  },
}

// Export CSS variable values for use in Tailwind
export function getCSSVariables(mode: 'light' | 'dark') {
  const colors = themeConfig.colors[mode]
  return {
    '--accent': colors.accent,
    '--accent-foreground': colors.accentForeground,
    '--accent-muted': colors.accentMuted,
  }
}

/**
 * Get the site URL dynamically.
 * Priority: NEXT_PUBLIC_SITE_URL > VERCEL_PROJECT_PRODUCTION_URL > VERCEL_URL > siteConfig.url
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return siteConfig.url
}
