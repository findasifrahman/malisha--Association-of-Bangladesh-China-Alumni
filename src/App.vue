<template>
  <div id="app">
    <!-- Navigation -->
    <Navbar />
    <!-- Hero Section -->
    <Hero />
    <!-- Events Section -->
    <Events />
    <!-- Programs Section -->
    <Programs />
    <!-- About Us Section -->
    <AboutUs />
    <!-- Members Section -->
    <Members />
    <!-- Contact Section -->
    <Contact />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Events from './components/Events.vue'
import Programs from './components/Programs.vue'
import AboutUs from './components/AboutUs.vue'
import Members from './components/Members.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Events,
    Programs,
    AboutUs,
    Members,
    Contact,
    Footer
  }
}
</script>

<style scoped>
.main-content {
  margin-top: 80px; /* Add space to prevent overlap with news ticker */
}

/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 80px;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
}
</style>
