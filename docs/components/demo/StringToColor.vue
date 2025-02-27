<script lang="ts" setup>
import { ref } from 'vue'
import { NInput, NCard, NButton, NInputNumber, NForm, NFormItem, NSwitch } from 'naive-ui'

interface StringToColorConfig {
  /** 颜色亮度，如果是深色尽量保持在 40 以下 */
  lightness: number
  /** 是否使用复杂的哈希算法，如果字符串长度较长，建议使用复杂的哈 */
  complex: boolean
}

const inputValue = ref('hello world')
const config = ref<StringToColorConfig>({ complex: false, lightness: 60 })

const colorCache = new Map<string, string>()

/**
 * 将字符串转换为颜色
 * 此函数通过字符串生成一个哈希值，然后将该哈希值转换为HSL颜色空间中的颜色，最后转换为RGB格式
 * 这允许将唯一的颜色分配给任何给定的字符串对于相同的输入，生成的颜色将是相同的
 *
 * @param str 输入字符串，用于生成颜色
 * @param config 可选配置对象，包括颜色的亮度和是否使用复杂的哈希算法
 * @returns 生成的RGB颜色字符串
 */
function stringToColor(str: string) {
  // 解构配置对象，设置默认亮度值和复杂模式
  const { lightness, complex } = config.value
  const cacheKey = `${str}-${lightness}-${complex}`

  // 检查缓存中是否已有该字符串对应的颜色，如果有则直接返回
  if (colorCache.has(cacheKey)) {
    return colorCache.get(cacheKey)
  }

  // 初始化哈希值
  let hash = 0
  // 遍历字符串中的每个字符，生成哈希值
  for (let i = 0; i < str.length; i++) {
    // 根据配置选择是否使用复杂的哈希算法
    if (complex) {
      // 复杂哈希算法：使用31作为乘数，累加字符的ASCII值，以产生更均匀的哈希值，根据实际情况可以用更大的素数
      hash = hash * 31 + str.charCodeAt(i)
    } else {
      // 简单哈希算法：使用位移和减法来生成哈希值
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
  }
  // 确保哈希值为正数，并在色相范围内
  const h = Math.abs(hash % 360)
  // 将HSL值转换为RGB值
  const [r, g, b] = hslToRgb(h, 70, lightness)
  // 构造RGB颜色字符串
  const color = `rgb(${r},${g},${b})`
  // 将字符串和生成的颜色存入缓存
  colorCache.set(cacheKey, color)
  // 返回生成的颜色
  return color
}

function hslToRgb(h: number, s: number, l: number) {
  h /= 360
  s /= 100
  l /= 100
  const C = (1 - Math.abs(2 * l - 1)) * s
  const X = C * (1 - Math.abs(((h * 6) % 2) - 1))
  let r: number, g: number, b: number
  if (h * 6 < 1) [r, g, b] = [C, X, 0]
  else if (h * 6 < 2) [r, g, b] = [X, C, 0]
  else if (h * 6 < 3) [r, g, b] = [0, C, X]
  else if (h * 6 < 4) [r, g, b] = [0, X, C]
  else if (h * 6 < 5) [r, g, b] = [X, 0, C]
  else [r, g, b] = [C, 0, X]
  const m = l - C / 2
  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)]
}

const currentColor = ref('')

function handleClick() {
  currentColor.value = inputValue.value
    ? stringToColor(inputValue.value) || 'transparent'
    : 'transparent'
}

handleClick()
</script>

<template>
  <n-card>
    <n-form class="mb-[15px]" label-placement="left">
      <n-form-item label="染色字符串">
        <n-input class="w-[50px] mb-[15px]" v-model:value="inputValue" />
      </n-form-item>
      <n-form-item label="亮度">
        <n-input-number
          class="!w-full w-[50px] mb-[15px]"
          v-model:value="config.lightness"
          :min="0"
          :max="100"
          :show-button="false"
          placeholder="请输入亮度" />
      </n-form-item>
      <n-form-item label="复杂哈希算法">
        <n-switch v-model:value="config.complex" />
      </n-form-item>
      <n-button type="primary" :disabled="!inputValue" @click="handleClick">生效</n-button>
    </n-form>

    <div class="size-20" :style="{ background: currentColor }"></div>
  </n-card>
</template>
