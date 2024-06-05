<script setup lang="ts">
import { onMounted } from 'vue'
import { useTelegram } from '@/composables'

const { ready } = useTelegram()

onMounted(() => {
  ready()
})
</script>

<template>
  <RouterView />
</template>
