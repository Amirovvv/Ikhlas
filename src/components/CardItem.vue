<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  title: string,
  link?: string | undefined,
}>()

const router = useRouter()

const navigate = () => {
  const link = props.link ?? '/';
  router.push(link);
} 
</script>


<template>
  <div class="card-item" @click="navigate">
    <div class="card-item__content">
      <slot name="icon" />
      <h3 class="card-item__content">{{ title }}</h3>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  /* background-color: #1b1a1b; */
  background-color: #1c1c1c;
  /* background-color: #232527 */
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
</style>