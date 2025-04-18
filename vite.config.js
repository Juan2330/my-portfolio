import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  assetsInclude: ['**/*.png', '**/*.mp3']
})
