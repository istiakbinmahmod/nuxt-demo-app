<template>
  <div class="min-h-screen">
    <Navigation />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navigation from '~/components/Navigation.vue'
</script>