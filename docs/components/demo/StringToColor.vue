<script lang="ts" setup>
import { ref } from 'vue'
import { NInput, NCard, NButton, NInputNumber, NForm, NFormItem, NSwitch } from 'naive-ui'
import { stringToColor } from '../../utils/color/stringToColor'

interface StringToColorConfig {
  /** 颜色亮度，如果是深色尽量保持在 40 以下 */
  lightness: number
  /** 是否使用复杂的哈希算法，如果字符串长度较长，建议使用复杂的哈 */
  complex: boolean
}

const inputValue = ref('hello world')
const config = ref<StringToColorConfig>({ complex: false, lightness: 60 })

const currentColor = ref('')

function handleClick() {
  currentColor.value = inputValue.value
    ? stringToColor(inputValue.value, config.value) || 'transparent'
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
      <n-button :disabled="!inputValue" @click="handleClick">生效</n-button>
    </n-form>

    <div class="size-20" :style="{ background: currentColor }"></div>
  </n-card>
</template>
