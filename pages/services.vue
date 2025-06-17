<template>
  <div class="services-page">
    <div class="services-header">
      <h1>Our Services</h1>
      <p>We offer a wide range of services to meet your needs</p>
    </div>
    
    <div class="services-container">
      <div v-for="(service, index) in services" :key="index" class="service-card">
        <div class="service-icon">
          <i :class="service.icon"></i>
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <NuxtLink :to="service.link" class="service-link">Learn more</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      services: [
        {
          title: 'Web Development',
          description: 'Custom websites built with the latest technologies to help your business stand out.',
          icon: 'fas fa-code',
          link: '/services/web-development',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
        },
        {
          title: 'Mobile Apps',
          description: 'Native and cross-platform mobile applications for iOS and Android.',
          icon: 'fas fa-mobile-alt',
          link: '/services/mobile-apps',
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80'
        },
        {
          title: 'UI/UX Design',
          description: 'User-centered design solutions that enhance user experience and engagement.',
          icon: 'fas fa-paint-brush',
          link: '/services/design',
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Digital Marketing',
          description: 'Strategic marketing campaigns to increase your online presence and reach.',
          icon: 'fas fa-bullhorn',
          link: '/services/marketing',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1015&q=80'
        },
        {
          title: 'Cloud Solutions',
          description: 'Scalable and secure cloud infrastructure for your business needs.',
          icon: 'fas fa-cloud',
          link: '/services/cloud',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'Consulting',
          description: 'Expert advice and guidance for your technology projects and decisions.',
          icon: 'fas fa-comments',
          link: '/services/consulting',
          image: 'https://images.unsplash.com/photo-1553867745-6e038d085e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Our Services',
      meta: [
        { hid: 'description', name: 'description', content: 'Explore our wide range of professional services' }
      ]
    }
  }
}
</script>

<style scoped>
.services-page {
  padding: 2rem;
  padding-top: 6rem; /* Added to prevent navbar overlap */
  max-width: 1200px;
  margin: 0 auto;
}

.services-header {
  text-align: center;
  margin-bottom: 3rem;
}

.services-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.services-header p {
  font-size: 1.2rem;
  color: #666;
}

.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #3498db;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.service-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.service-link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.service-link:hover {
  color: #2980b9;
}

@media (max-width: 768px) {
  .services-container {
    grid-template-columns: 1fr;
  }
}
</style>