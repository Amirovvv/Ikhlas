<script setup lang="ts">
import { useTelegram } from '@/services';
import { onMounted } from 'vue';

const { ready } = useTelegram()

onMounted(() => {
  ready()
});
</script>

<template>
  <RouterView />
</template>
