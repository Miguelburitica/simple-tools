<script setup lang="ts">
import '@fontsource-variable/anybody';
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-screen h-screen bg-blue-marguerite-700 text-white">
    <RouterView />
  </div>
</template>

<style>
* {
  font-family: 'Anybody Variable', system-ui;
}
</style>
