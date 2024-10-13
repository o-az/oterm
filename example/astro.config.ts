import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  server: _ => ({
    /**
     * required for webcontainer
     * @see https://webcontainers.io/guides/quickstart
     */
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  })
})
