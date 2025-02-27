// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { mountNaive, NaiveUIProvider } from '../../utils/naive-ui'
import './style.css'
import 'virtual:uno.css'

export default {
  extends: DefaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp: ({ app }) => {
    mountNaive(app)
  }
} satisfies Theme
