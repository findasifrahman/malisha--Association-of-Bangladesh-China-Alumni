<template>
  <section class="hero" id="home">
    <div class="hero__container" style="background: #2c3e50;">
      <!-- Split Layout - 3/4 left, 1/4 right -->
      <div class="hero__split">
        <!-- Left Side - Image Carousel (3/4 width) -->
        <div class="hero__left">
          <div class="hero__carousel">
            <div 
              v-for="(image, index) in heroImages" 
              :key="index"
              class="hero__slide"
              :class="{ 'hero__slide--active': currentSlide === index }"
              @click="openLightbox(index)"
            >
              <img 
                :src="image.src" 
                :alt="image.alt"
                :loading="index === 0 ? 'eager' : 'lazy'"
                class="hero__image"
                @load="onImageLoad"
              />
              <div class="hero__slide-overlay">
                <div class="hero__slide-content">
                  <h3>{{ image.title }}</h3>
                  <p>{{ image.description }}</p>
                </div>
              </div>
            </div>
            
            <!-- Carousel Navigation -->
            <div class="hero__carousel-nav">
              <button 
                v-for="(image, index) in heroImages" 
                :key="index"
                class="hero__carousel-dot"
                :class="{ 'hero__carousel-dot--active': currentSlide === index }"
                @click="goToSlide(index)"
                :aria-label="`Go to slide ${index + 1}`"
              />
            </div>
            
            <!-- Carousel Controls -->
            <button 
              class="hero__carousel-btn hero__carousel-btn--prev"
              @click="previousSlide"
              :aria-label="'Previous slide'"
            >
              <span class="material-icons">chevron_left</span>
            </button>
            <button 
              class="hero__carousel-btn hero__carousel-btn--next"
              @click="nextSlide"
              :aria-label="'Next slide'"
            >
              <span class="material-icons">chevron_right</span>
            </button>
          </div>
        </div>

        <!-- Right Side - AI Generated Bullet Points Card (1/4 width) -->
        <div class="hero__right" style="background: #2c3e50;">
          <div class="hero__card" style="background: #2c3e50; ;">
            <div class="hero__card-header">
              <h1 class="hero__title">𝗔𝘀𝘀𝗼𝗰𝗶𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵-𝗖𝗵𝗶𝗻𝗮 𝗔𝗹𝘂𝗺𝗻𝗶</h1>
            </div>

            <div class="hero__points" style="background: #2c3e50;">
              <div 
                v-for="(point, index) in heroContent.points" 
                :key="index"
                class="hero__point"
                :style="{ '--point-color': point.color, background: '#2c3e50' }"
              >
                <div class="hero__point-content">
                  <p style="color: white;">{{ point.text }}</p>
                </div>
              </div>
            </div>

            <!-- Logo Centered in Right Column -->
            <div class="hero__logo">
              <img 
                src="/src/assets/logo.png" 
                alt="BD-CN Alumni Association Logo"
                class="hero__logo-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- News Ticker Footer - Simple LED Style
    <div class="hero__news-ticker">
      <div class="hero__news-container">
        <div class="hero__news-scroll">
          <div class="hero__news-marquee">
            <div class="hero__news-content">
              <span>{{ newsTicker.items[0].text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
-->
    <!-- Lightbox Modal -->
    <div 
      v-if="lightboxOpen" 
      class="hero__lightbox"
      @click="closeLightbox"
    >
      <div class="hero__lightbox-content" @click.stop>
        <button class="hero__lightbox-close" @click="closeLightbox">
          <span class="material-icons">close</span>
        </button>
        <img 
          :src="heroImages[currentSlide].src" 
          :alt="heroImages[currentSlide].alt"
          class="hero__lightbox-image"
        />
        <div class="hero__lightbox-info">
          <h3>{{ heroImages[currentSlide].title }}</h3>
          <p>{{ heroImages[currentSlide].description }}</p>
        </div>
        <button 
          class="hero__lightbox-btn hero__lightbox-btn--prev"
          @click="previousSlide"
        >
          <span class="material-icons">chevron_left</span>
        </button>
        <button 
          class="hero__lightbox-btn hero__lightbox-btn--next"
          @click="nextSlide"
        >
          <span class="material-icons">chevron_right</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Hero',
  setup() {
    const currentSlide = ref(0)
    const lightboxOpen = ref(false)
    const newsOffset = ref(0)
    const autoSlideInterval = ref(null)
    const newsScrollInterval = ref(null)

    // Hero Images with specific names
    const heroImages = ref([
      {
        src: '/src/assets/gallery-1.png',
        alt: 'Alumni Meeting',
        title: 'Annual Alumni Gathering',
        description: 'Connecting alumni from Bangladesh and China through shared experiences'
      },
      {
        src: '/src/assets/gallery-2.png',
        alt: 'Cultural Exchange',
        title: 'Cultural Exchange Program',
        description: 'Promoting understanding and collaboration between diverse communities'
      },
      {
        src: '/src/assets/gallery-3.png',
        alt: 'Professional Network',
        title: 'Professional Networking',
        description: 'Building bridges across industries and borders'
      },
      {
        src: '/src/assets/gallery-4.png',
        alt: 'Graduation Ceremony',
        title: 'Graduation Ceremony',
        description: 'Celebrating academic achievements and lifelong learning'
      },
      {
        src: '/src/assets/gallery-5.png',
        alt: 'International Conference',
        title: 'International Conference',
        description: 'Global collaboration and knowledge sharing'
      },
      {
        src: '/src/assets/gallery-6.png',
        alt: 'Community Service',
        title: 'Community Service',
        description: 'Giving back to society through volunteer work'
      }
    ])

    // Updated Hero content with new bullet points
    const heroContent = ref({
      points: [
        {
          text: "Fostering lifelong connections between Bangladeshi and Chinese graduates.",
          color: "#E57373"
        },
        {
          text: "Promoting cultural exchange through seminars & workshops.",
          color: "#64B5F6"
        },
        {
          text: "Supporting alumni career growth with mentorship programs.",
          color: "#81C784"
        },
        {
          text: "Showcasing joint research & educational achievements.",
          color: "#FFD54F"
        },
        {
          text: "Building a network of future bilateral leaders.",
          color: "#BA68C8"
        },
        {
            text: "Unlock exclusive funding opportunities—both merit-based and need-based",
            color: "#3498db"
        },
        {
            text: "Teacher Training and Exchange Programmes through members collaboration of both countries",
            color: "#3498db"
        }
      ],
      cta: {
        primary: {
          text: "Join Us",
          href: "#join",
          icon: "person_add"
        },
        secondary: {
          text: "Learn More",
          href: "#about",
          icon: "info"
        }
      }
    })

    // Updated News ticker data
    const newsTicker = ref({
      title: "",
      items: [
        {
          text: "MalishaEdu, in collaboration with the 𝗔𝘀𝘀𝗼𝗰𝗶𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵-𝗖𝗵𝗶𝗻𝗮 𝗔𝗹𝘂𝗺𝗻𝗶, successfully Organized 𝗧𝗵𝗲 𝗙𝗼𝗿𝘂𝗺 𝗳𝗼𝗿 𝗖𝗵𝗶𝗻𝗮-𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵 𝗛𝗶𝗴𝗵𝗲𝗿 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 𝗘𝘅𝗰𝗰𝗵𝗮𝗻𝗴𝗲𝘀 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 on 11th July, 2025",
          date: "2025-07-11"
        }
      ]
    })

    // Auto-slide functionality
    const startAutoSlide = () => {
      autoSlideInterval.value = setInterval(() => {
        if (!lightboxOpen.value) {
          nextSlide()
        }
      }, 4000) // Faster auto-slide
    }

    const stopAutoSlide = () => {
      if (autoSlideInterval.value) {
        clearInterval(autoSlideInterval.value)
      }
    }

    // Slide navigation
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % heroImages.value.length
    }

    const previousSlide = () => {
      currentSlide.value = currentSlide.value === 0 
        ? heroImages.value.length - 1 
        : currentSlide.value - 1
    }

    const goToSlide = (index) => {
      currentSlide.value = index
    }

    // Lightbox functionality
    const openLightbox = (index) => {
      currentSlide.value = index
      lightboxOpen.value = true
      stopAutoSlide()
    }

    const closeLightbox = () => {
      lightboxOpen.value = false
      startAutoSlide()
    }

    // News ticker scroll
    const startNewsScroll = () => {
      // Use CSS animation instead of JavaScript for smoother scrolling
      // The animation is handled by CSS keyframes
    }

    const stopNewsScroll = () => {
      if (newsScrollInterval.value) {
        clearInterval(newsScrollInterval.value)
      }
    }

    // Image load handler for lazy loading
    const onImageLoad = (event) => {
      event.target.classList.add('hero__image--loaded')
    }

    // Keyboard navigation
    const handleKeydown = (event) => {
      if (lightboxOpen.value) {
        switch (event.key) {
          case 'Escape':
            closeLightbox()
            break
          case 'ArrowLeft':
            previousSlide()
            break
          case 'ArrowRight':
            nextSlide()
            break
        }
      }
    }

    // Lifecycle hooks
    onMounted(() => {
      startAutoSlide()
      document.addEventListener('keydown', handleKeydown)
    })

    onUnmounted(() => {
      stopAutoSlide()
      document.removeEventListener('keydown', handleKeydown)
    })

    return {
      currentSlide,
      lightboxOpen,
      newsOffset,
      heroImages,
      heroContent,
      newsTicker,
      nextSlide,
      previousSlide,
      goToSlide,
      openLightbox,
      closeLightbox,
      onImageLoad
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: calc(100vh - 120px); /* Increased height for better desktop visibility */
  background: var(--background);
  overflow: hidden;
  margin-top: 0;
  display: flex;
  flex-direction: column;
}

.hero__container {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.hero__split {
  display: grid;
  grid-template-columns: 3fr 1fr; /* 3/4 left, 1/4 right */
  height: 100%; /* Use full height of parent */
  flex: 1;
}

.hero__left {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.hero__carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero__slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  cursor: pointer;
}

.hero__slide--active {
  opacity: 1;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16/9; /* Maintain 16:9 aspect ratio */
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hero__image--loaded {
  opacity: 1;
}

.hero__slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 60px 40px 40px;
}

.hero__slide-content h3 {
  font-size: 2rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.hero__slide-content p {
  font-size: 1.125rem;
  opacity: 0.9;
  line-height: 1.4;
}

.hero__carousel-nav {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.hero__carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero__carousel-dot--active {
  background: white;
}

.hero__carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  padding: 16px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.hero__carousel-btn:hover {
  background: rgba(255,255,255,0.3);
}

.hero__carousel-btn--prev {
  left: 20px;
}

.hero__carousel-btn--next {
  right: 20px;
}

.hero__right {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  background: var(--surface);
  height: 100%;
  overflow-y: auto;
}

.hero__card {
  max-width: 100%;
  width: 100%;
}

.hero__card-header {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;
}

.hero__title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 16px;
  line-height: 1.2;
  font-weight: 600;
}

.hero__points {
  margin-bottom: 30px;
}

.hero__point {
  margin-bottom: 20px;
  padding: 12px;
  border-radius: var(--border-radius);
  background: white;
  box-shadow: var(--shadow-1);
  transition: all 0.3s ease;
  border-left: 4px solid var(--point-color);
}

.hero__point:hover {
  box-shadow: var(--shadow-2);
  transform: translateY(-2px);
}

.hero__point-content p {
  font-size: 0.9rem;
  color: var(--text-primary);
  line-height: 1.4;
  margin: 0;
}

.hero__cta {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero__logo {
  text-align: center;
  margin-top: 20px;
}

.hero__logo-img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 50%;
  background: white;
  padding: 12px;
  box-shadow: var(--shadow-2);
}

.hero__news-ticker {
  background: var(--primary-color);
  color: white;
  padding: 16px 0;
  overflow: hidden;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
  border-top: 2px solid rgba(255,255,255,0.2);
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  flex-shrink: 0;
  width: 100%;
}

.hero__news-container {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 16px;
  position: relative;
}

.hero__news-header {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  background: rgba(255,255,255,0.2);
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.3);
  z-index: 2;
}

.hero__news-header h4 {
  font-size: 1rem;
  margin: 0;
}

.hero__news-scroll {
  flex: 1;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
}

.hero__news-marquee {
  display: flex;
  white-space: nowrap;
  animation: scroll-news 30s linear infinite;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: max-content;
  height: auto;
  align-items: center;
}

.hero__news-content {
  display: flex;
  gap: 200px;
}

.hero__news-content span {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
  font-weight: 600;
  font-size: 1.1rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  white-space: nowrap;
}

.hero__news-content span:hover {
  opacity: 0.8;
}

/* Lightbox */
.hero__lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.hero__lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.hero__lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.hero__lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.hero__lightbox-info {
  color: white;
  text-align: center;
  margin-top: 20px;
}

.hero__lightbox-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  padding: 16px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero__lightbox-btn:hover {
  background: rgba(255,255,255,0.3);
}

.hero__lightbox-btn--prev {
  left: -60px;
}

.hero__lightbox-btn--next {
  right: -60px;
}

/* Simple News Scroll Animation */
@keyframes scroll-news {
  0% {
    transform: translateY(-50%) translateX(100%);
  }
  100% {
    transform: translateY(-50%) translateX(-100%);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    height: calc(100vh - 140px); /* Adjusted for tablet */
  }
  
  .hero__split {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
  }
  
  .hero__right {
    padding: 20px;
  }
  
  .hero__title {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: calc(100vh - 150px);
  }
  
  .hero__news-ticker {
    height: 100px;
    padding: 20px 0;
    border-top: 3px solid rgba(255,255,255,0.3);
  }
  
  .hero__news-content span {
    font-size: 0.9rem;
  }
  
  .hero__split {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    height: auto;
  }
  
  .hero__left {
    height: 400px;
    min-height: 400px;
  }
  
  .hero__right {
    padding: 20px;
    height: auto;
    overflow-y: visible;
    align-items: flex-start;
    justify-content: flex-start;
  }
  
  .hero__slide-overlay {
    padding: 40px 20px 20px;
  }
  
  .hero__slide-content h3 {
    font-size: 1.5rem;
  }
  
  .hero__slide-content p {
    font-size: 1rem;
  }
  
  .hero__carousel-btn {
    padding: 12px;
  }
  
  .hero__news-container {
    flex-direction: column;
    gap: 12px;
  }
  
  .hero__logo {
    margin-top: 15px;
  }
  
  .hero__logo-img {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .hero__cta {
    flex-direction: column;
  }
  
  .hero__point {
    text-align: center;
  }
  
  .hero__lightbox-btn {
    display: none;
  }
}
</style> 