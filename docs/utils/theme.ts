import { useMutationObserver } from '@vueuse/core'
import { ref } from 'vue'

export function useVitepressTheme() {
  const isDark = ref(false)

  function getSystemTheme() {
    isDark.value = document.querySelector('html')?.className.includes('dark') || false
  }

  useMutationObserver(document.querySelector('html'), () => getSystemTheme, {
    attributeFilter: ['class']
  })

  getSystemTheme()

  return { isDark }
}
