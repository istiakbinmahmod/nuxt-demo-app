<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>Contact Us</h1>
      <p>Get in touch with our team for inquiries or support</p>
    </div>
    
    <div class="contact-container">
      <div class="contact-form-section">
        <h2>Send a Message</h2>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              placeholder="Your name"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="Your email address"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              placeholder="Message subject"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              placeholder="Your message"
              rows="6"
              required
            ></textarea>
          </div>
          
          <button type="submit" class="submit-button" :disabled="submitting">
            {{ submitting ? 'Sending...' : 'Send Message' }}
          </button>
          
          <div v-if="formStatus" class="form-status" :class="formStatus.type">
            {{ formStatus.message }}
          </div>
        </form>
      </div>
      
      <div class="contact-info-section">
        <h2>Contact Information</h2>
        <div class="contact-info">
          <div class="info-item">
            <div class="icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="details">
              <h3>Address</h3>
              <p>123 Business Avenue, Suite 400<br>New York, NY 10001</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="details">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="details">
              <h3>Email</h3>
              <p>contact@yourcompany.com</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="details">
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM<br>Saturday & Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div class="social-media">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitting: false,
      formStatus: null
    }
  },
  methods: {
    submitForm() {
      this.submitting = true;
      this.formStatus = null;
      
      // Simulate API call with timeout
      setTimeout(() => {
        // Success simulation
        this.submitting = false;
        this.formStatus = {
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        };
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        
        // Clear success message after a few seconds
        setTimeout(() => {
          this.formStatus = null;
        }, 5000);
        
      }, 1500);
      
      // For an actual implementation, you would use something like:
      /*
      try {
        await this.$axios.post('/api/contact', this.form);
        this.submitting = false;
        this.formStatus = {
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        };
        this.form = { name: '', email: '', subject: '', message: '' };
      } catch (error) {
        this.submitting = false;
        this.formStatus = {
          type: 'error',
          message: 'There was an error sending your message. Please try again.'
        };
      }
      */
    }
  },
  head() {
    return {
      title: 'Contact Us',
      meta: [
        { hid: 'description', name: 'description', content: 'Contact our team for inquiries, support, or to discuss your project' }
      ]
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 2rem;
  padding-top: 6rem; /* Added to prevent navbar overlap */
  max-width: 1200px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.contact-header p {
  font-size: 1.2rem;
  color: #666;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-form-section h2,
.contact-info-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
}

/* Form Styles */
.contact-form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #3498db;
  outline: none;
}

.submit-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-button:hover:not(:disabled) {
  background: #2980b9;
}

.submit-button:disabled {
  background: #97c7eb;
  cursor: not-allowed;
}

.form-status {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 4px;
  font-weight: 500;
}

.form-status.success {
  background: #e6f7e9;
  color: #2ecc71;
}

.form-status.error {
  background: #fae9e9;
  color: #e74c3c;
}

/* Contact Info Styles */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-item .icon {
  font-size: 1.5rem;
  color: #3498db;
  min-width: 2rem;
  text-align: center;
}

.info-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.info-item p {
  color: #666;
  line-height: 1.6;
}

.social-media {
  margin-top: 2.5rem;
}

.social-media h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #3498db;
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: transform 0.3s, background 0.3s;
}

.social-links a:hover {
  transform: translateY(-3px);
  background: #2980b9;
}

@media (max-width: 900px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .contact-info-section {
    order: -1;
  }
}
</style>