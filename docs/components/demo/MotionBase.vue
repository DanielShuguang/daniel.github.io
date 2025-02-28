<script setup lang="ts">
import { Motion } from 'motion-v'
import { NCard } from 'naive-ui'
</script>

<template>
  <n-card class="w-full h-[200px] mb-[15px]" content-class="flex justify-center items-center">
    <Motion
      as="div"
      class="bg-[#00cf56] size-20 aspect-square rounded-2xl text-center leading-20"
      :animate="{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ['0%', '0%', '50%', '50%', '0%']
      }"
      :transition="{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }">
      Hello
    </Motion>
  </n-card>
</template>
