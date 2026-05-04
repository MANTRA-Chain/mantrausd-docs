import { createMDX } from 'fumadocs-mdx/next'
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withMDX = createMDX()

// Make Cloudflare bindings available during `next dev`.
// This is a no-op in production and outside the Cloudflare environment.
initOpenNextCloudflareForDev()

export default withMDX(nextConfig)
