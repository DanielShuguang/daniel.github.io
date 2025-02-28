import { App, defineComponent, h, inject, onMounted, onUnmounted, ref, shallowRef } from 'vue'
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
    return () => h('vitepress-path', null, [route.path])
  }
})

export const NaiveUIProvider = defineComponent({
  setup(_, { slots }) {
    const isDark = ref(false)
    const observer = shallowRef<MutationObserver | null>(null)

    function getSystemTheme() {
      isDark.value = document.documentElement.classList.contains('dark')
    }

    onMounted(() => {
      observer.value = new MutationObserver(getSystemTheme)
      observer.value.observe(document.documentElement, {
        attributeFilter: ['class']
      })

      getSystemTheme()
    })

    onUnmounted(() => {
      observer.value?.disconnect()
    })

    return () =>
      h(
        NConfigProvider,
        { abstract: true, inlineThemeDisabled: true, theme: isDark.value ? darkTheme : undefined },
        {
          default: () => [
            h(Layout, null, { default: slots.default?.() }),
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
