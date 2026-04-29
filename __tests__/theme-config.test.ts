import { describe, it, expect } from 'vitest'
import { siteConfig, themeConfig, getCSSVariables } from '../lib/theme-config'

describe('theme-config', () => {
  describe('siteConfig', () => {
    it('should have required fields', () => {
      expect(siteConfig.name).toBeDefined()
      expect(siteConfig.description).toBeDefined()
      expect(siteConfig.url).toBeDefined()
    })

    it('should have logo configuration', () => {
      expect(siteConfig.logo).toBeDefined()
      expect(siteConfig.logo.src).toBeDefined()
      expect(siteConfig.logo.width).toBeGreaterThan(0)
      expect(siteConfig.logo.height).toBeGreaterThan(0)
    })

    it('should be branded for mantraUSD', () => {
      expect(siteConfig.name).toMatch(/mantraUSD/i)
      expect(siteConfig.url).toBe('https://docs.mantrachain.io')
    })

    it('should expose the Mintlify navbar links and primary CTA', () => {
      expect(siteConfig.navbar?.primary?.href).toBe('https://mantrausd.com')
      expect(
        siteConfig.navbar?.links?.some((l) => l.href === 'https://x.com/mantraUSD')
      ).toBe(true)
    })

    it('should preserve the global anchors from docs.json', () => {
      const hrefs = siteConfig.anchors?.map((a) => a.href) ?? []
      expect(hrefs).toContain('https://app.lotusdex.io/swap')
      expect(
        hrefs.some((h) => h.includes('quickswap.exchange'))
      ).toBe(true)
    })
  })

  describe('themeConfig', () => {
    it('should have light and dark color schemes', () => {
      expect(themeConfig.colors.light).toBeDefined()
      expect(themeConfig.colors.dark).toBeDefined()
    })

    it('should have accent colors', () => {
      expect(themeConfig.colors.light.accent).toBeDefined()
      expect(themeConfig.colors.dark.accent).toBeDefined()
    })

    it('should map mantraUSD brand colors', () => {
      expect(themeConfig.colors.light.accent).toBe('#0D9373')
      expect(themeConfig.colors.dark.accent).toBe('#07C983')
    })

    it('should have OG image configuration', () => {
      expect(themeConfig.ogImage).toBeDefined()
      expect(themeConfig.ogImage.gradient).toBeDefined()
      expect(themeConfig.ogImage.titleColor).toBeDefined()
    })
  })

  describe('getCSSVariables', () => {
    it('should return CSS variables for light mode', () => {
      const vars = getCSSVariables('light')
      expect(vars['--accent']).toBe(themeConfig.colors.light.accent)
    })

    it('should return CSS variables for dark mode', () => {
      const vars = getCSSVariables('dark')
      expect(vars['--accent']).toBe(themeConfig.colors.dark.accent)
    })
  })
})
