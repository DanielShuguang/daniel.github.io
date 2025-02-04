import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|md|mdx?|astro|elm|php|phtml|html)($|\?)/]
    }
  }
})
