<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'
import { NButton, NCard } from 'naive-ui'
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <n-card class="flex flex-col items-center w-full">
    <n-button class="mb-[15px]" @click="show = !show">切换</n-button>
    <div class="size-40">
      <AnimatePresence>
        <Motion
          v-show="show"
          class="bg-[#00cf56] aspect-square rounded-2xl leading-40 text-center"
          :initial="{ scale: 0 }"
          :animate="{ rotate: 180, scale: 1 }"
          :exit="{ rotate: 0, scale: 0 }">
          Hello
        </Motion>
      </AnimatePresence>
    </div>
  </n-card>
</template>
