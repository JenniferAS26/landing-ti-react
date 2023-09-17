import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassPlugin from 'vite-plugin-sass'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        sassPlugin(),
        tailwindcss('./tailwind.config.js'),
    ],
})
