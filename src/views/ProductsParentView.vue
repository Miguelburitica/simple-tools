<script setup lang="ts">
import NavigationBar from '@/components/commons/NavigationBar.vue';
</script>

<template>
  <NavigationBar />
  <main class="max-w-[95%] sm:max-w-xl mx-auto pt-16">
    <RouterView />
  </main>
</template>