<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center justify-center mb-6">
            <div class="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles class="w-4 h-4" />
              <span>Trusted by 500+ Companies</span>
            </div>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Digital Solutions
            <span class="gradient-text"> That Drive Results</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            We create exceptional digital experiences that transform businesses and connect with audiences in meaningful ways.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NuxtLink
              to="/services"
              class="group btn-primary"
            >
              <span>Explore Services</span>
              <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
            
            <NuxtLink
              to="/about"
              class="btn-secondary"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Nexus Digital?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine creativity, technology, and strategy to deliver solutions that exceed expectations and drive meaningful growth.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 card-hover">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Growth Focused</h3>
            <p class="text-gray-600 leading-relaxed">
              Every solution is designed with your growth in mind. We create scalable digital products that evolve with your business needs.
            </p>
          </div>

          <div class="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 card-hover">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
            <p class="text-gray-600 leading-relaxed">
              Our diverse team of designers, developers, and strategists brings years of experience across multiple industries.
            </p>
          </div>

          <div class="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 card-hover">
            <div class="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
            <p class="text-gray-600 leading-relaxed">
              We measure success by your success. Our track record speaks for itself with satisfied clients and measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your digital goals and create something extraordinary together.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 group"
        >
          <span>Start Your Project</span>
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, CheckCircle, Sparkles, TrendingUp, Users } from 'lucide-vue-next'

useHead({
  title: 'Nexus Digital - Modern Digital Solutions',
  meta: [
    { name: 'description', content: 'Cutting-edge digital solutions for modern businesses. Web development, design, and consulting services.' }
  ]
})
</script>