<script lang="ts" setup>
import { darkTheme, NConfigProvider, zhCN } from 'naive-ui'
import { useVitepressTheme } from '../utils/theme'

const { isDark } = useVitepressTheme()
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined" :locale="zhCN">
    <slot></slot>
  </n-config-provider>
</template>
