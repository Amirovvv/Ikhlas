<script setup lang="ts">
import { defineProps } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';

defineProps<{
  animationData: object
  width: string
  height: string
}>()
</script>

<template>
  <Vue3Lottie :animation-data="animationData" :width="width" :height="height" />
</template>

<style scoped></style>
