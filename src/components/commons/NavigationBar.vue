<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
console.log({ lalala: route.path })

const titlesMap: { [key: string]: string } = {
  '/products': 'Facturas?',
  '/products/chores': 'Tareas?'
}
const title = computed(() => {
  return titlesMap[route.path]
})
</script>

<template>
  <header class="
      max-w-[95%] sm:max-w-screen-md mx-auto rounded-2xl
      px-4 pb-2 pt-4 flex justify-between items-center
      shadow-md transition-shadow
    " transition:animate="slide">
    <h1 class="text-2xl font-semibold tracking-widest">
      {{ title }}
    </h1>
    <nav class=" flex justify-end">
      <li>
        <RouterLink :class="`
            px-4 py-2 block rounded-2xl rounded-r-none
            transition-colors
            hover:bg-blue-marguerite-500
            ${route.path === '/products' ? 'bg-blue-marguerite-600' : ''}
          `" to="/products">
          Facturas
        </RouterLink>
      </li>
      <li>
        <RouterLink :class="`
            px-4 py-2 block rounded-2xl rounded-l-none
            transition-colors pointer-events-none
            hover:bg-blue-marguerite-500
            ${route.path === '/products/chores' ? 'bg-blue-marguerite-600' : ''}
          `" to="/products/chores">
          Deberes
        </RouterLink>
      </li>
    </nav>
  </header>
</template>


<style>
li {
  list-style-type: none;
}
</style>
