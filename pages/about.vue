<template>
  <div class="about-page">
    <div class="about-header">
      <h1>About Us</h1>
      <p>Learn more about our company and our team</p>
    </div>
    
    <div class="about-content">
      <div class="company-section">
        <h2>Our Story</h2>
        <p>Founded in 2018, our company has been at the forefront of technological innovation. We started with a small team of passionate developers and designers who shared a vision to create exceptional digital experiences.</p>
        <p>Today, we've grown into a full-service digital agency with clients across multiple industries. Our commitment to quality, innovation, and client satisfaction remains at the core of everything we do.</p>
        
        <div class="mission-vision">
          <div class="mission">
            <h3>Our Mission</h3>
            <p>To deliver innovative digital solutions that empower businesses to achieve their goals and exceed their expectations.</p>
          </div>
          <div class="vision">
            <h3>Our Vision</h3>
            <p>To be recognized globally as a leader in digital transformation, setting new standards for excellence and creativity.</p>
          </div>
        </div>
      </div>
      
      <div class="team-section">
        <h2>Meet Our Team</h2>
        <div class="team-grid">
          <div v-for="(member, index) in team" :key="index" class="team-member">
            <div class="member-image">
              <img :src="member.image" :alt="member.name">
            </div>
            <h3>{{ member.name }}</h3>
            <p class="position">{{ member.position }}</p>
            <p class="bio">{{ member.bio }}</p>
            <div class="social-links">
              <a v-for="(link, i) in member.social" :key="i" :href="link.url" target="_blank" rel="noopener noreferrer">
                <i :class="link.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      team: [
        {
          name: 'Jane Doe',
          position: 'CEO & Founder',
          bio: 'With over 15 years of experience in technology and business leadership, Jane leads our company vision and strategy.',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          social: [
            { icon: 'fab fa-twitter', url: '#' },
            { icon: 'fab fa-linkedin', url: '#' }
          ]
        },
        {
          name: 'John Smith',
          position: 'CTO',
          bio: 'John brings technical expertise and innovation to our projects, ensuring we stay ahead of the technology curve.',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          social: [
            { icon: 'fab fa-github', url: '#' },
            { icon: 'fab fa-linkedin', url: '#' }
          ]
        },
        {
          name: 'Emily Johnson',
          position: 'Design Director',
          bio: 'Emily leads our design team with her exceptional eye for detail and understanding of user experience.',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          social: [
            { icon: 'fab fa-dribbble', url: '#' },
            { icon: 'fab fa-instagram', url: '#' }
          ]
        },
        {
          name: 'Michael Chen',
          position: 'Lead Developer',
          bio: 'Michael specializes in creating robust, scalable applications using the latest technologies.',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          social: [
            { icon: 'fab fa-github', url: '#' },
            { icon: 'fab fa-stack-overflow', url: '#' }
          ]
        }
      ]
    }
  },
  head() {
    return {
      title: 'About Us',
      meta: [
        { hid: 'description', name: 'description', content: 'Learn more about our company, mission, and team' }
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
  padding: 2rem;
  padding-top: 6rem; /* Added to prevent navbar overlap */
  max-width: 1200px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.about-header p {
  font-size: 1.2rem;
  color: #666;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.company-section h2,
.team-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.company-section p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
}

.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.mission, .vision {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.mission h3, .vision h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2.5rem;
}

.team-member {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.team-member:hover {
  transform: translateY(-5px);
}

.member-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member h3 {
  font-size: 1.3rem;
  margin: 1rem 0 0.5rem;
  padding: 0 1.5rem;
  color: #333;
}

.position {
  font-size: 1rem;
  color: #3498db;
  font-weight: 600;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
}

.bio {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem 1.5rem;
}

.social-links a {
  color: #555;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #3498db;
}

@media (max-width: 768px) {
  .mission-vision {
    grid-template-columns: 1fr;
  }
}
</style>