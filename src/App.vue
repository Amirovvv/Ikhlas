<script setup lang="ts">
import { useTelegram } from '@/composables';
import { onMounted } from 'vue';

const { ready } = useTelegram()

onMounted(() => {
  ready()
})
</script>

<template>
  <RouterView />
</template>
