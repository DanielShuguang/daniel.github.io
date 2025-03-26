<script lang="ts" setup>
import { ref } from 'vue'
import { NInput, NCard, NButton, NInputNumber, NForm, NFormItem, NSwitch } from 'naive-ui'
import { stringToColor, StringToColorConfig } from '../../utils/color/stringToColor'

const inputValue = ref('hello world')
const config = ref<StringToColorConfig>({ complex: false, lightness: 60 })
const prime = ref(31)

const currentColor = ref('')

function handleClick() {
  const correctConfig: StringToColorConfig = {
    ...config.value,
    complex: config.value.complex ? prime.value : false
  }
  currentColor.value = inputValue.value
    ? stringToColor(inputValue.value, correctConfig) || 'transparent'
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
        <n-switch class="mr-[15px]" v-model:value="config.complex" />
        <n-input-number v-if="config.complex" v-model:value="prime" />
      </n-form-item>
      <n-button :disabled="!inputValue" @click="handleClick">生效</n-button>
    </n-form>

    <div class="size-20" :style="{ background: currentColor }"></div>
  </n-card>
</template>
