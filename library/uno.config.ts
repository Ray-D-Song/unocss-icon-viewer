import { defineConfig } from 'unocss'
import { icons } from '@iconify-json/fe/index.js'
import presetIcons from '@unocss/preset-icons'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  presets: [presetIcons(), presetWind()],
  safelist: Object
    .keys(icons.icons)
    .slice(0, 40)
    .map(icon => `i-fe-${icon}`),
})
