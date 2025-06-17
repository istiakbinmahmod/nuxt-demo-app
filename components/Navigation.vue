<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 font-bold text-xl text-gray-900">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Icon name="lucide:zap" class="w-5 h-5 text-white" />
          </div>
          <span>Nexus</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            :class="[
              'text-sm font-medium transition-colors hover:text-blue-600',
              $route.path === item.href ? 'text-blue-600' : 'text-gray-700'
            ]"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2"
          @click="isOpen = !isOpen"
        >
          <Icon v-if="isOpen" name="lucide:x" class="w-6 h-6" />
          <Icon v-else name="lucide:menu" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isOpen" class="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          :class="[
            'block px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600',
            $route.path === item.href ? 'text-blue-600' : 'text-gray-700'
          ]"
          @click="isOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const isOpen = ref(false);
</script>