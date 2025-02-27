import { App, defineComponent, h, inject } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { darkTheme, NConfigProvider } from 'naive-ui'
import { setup } from '@css-render/vue3-ssr'

const { Layout } = DefaultTheme

const CssRenderStyle = defineComponent({
  setup() {
    const collect = inject<() => any>('css-render-collect')
    return {
      style: collect?.()
    }
  },
  render() {
    return h('css-render-style', {
      innerHTML: this.style
    })
  }
})

const VitepressPath = defineComponent({
  setup() {
    const route = useRoute()
    return () => {
      return h('vitepress-path', null, [route.path])
    }
  }
})

export const NaiveUIProvider = defineComponent({
  data() {
    return {
      isDark: false,
      observer: null as MutationObserver | null
    }
  },
  methods: {
    getSystemTheme() {
      this.isDark = document.documentElement.classList.contains('dark')
    }
  },
  mounted() {
    this.getSystemTheme()
    const observer = new MutationObserver(() => this.getSystemTheme())
    observer.observe(document.documentElement, {
      attributeFilter: ['class']
    })
    this.observer = observer
  },
  unmounted() {
    this.observer?.disconnect()
  },
  render() {
    return h(
      NConfigProvider,
      { abstract: true, inlineThemeDisabled: true, theme: this.isDark ? darkTheme : undefined },
      {
        default: () => [
          h(Layout, null, { default: this.$slots.default?.() }),
          (import.meta as any).env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null
        ]
      }
    )
  }
})

export function mountNaive(app: App<any>) {
  if ((import.meta as any).env.SSR) {
    const { collect } = setup(app)
    app.provide('css-render-collect', collect)
  }
}
