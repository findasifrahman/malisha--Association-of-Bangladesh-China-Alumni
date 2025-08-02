<template>
  <section class="about-us" id="about">
    <div class="container">
      <div class="about-us__header">
        <h2 class="about-us__title">
          <span class="material-icons">groups</span>
          {{ aboutData.title }}
        </h2>
        <div class="about-us__intro-card">
          <p class="about-us__intro">{{ aboutData.intro }}</p>
        </div>
      </div>

      <div class="about-us__benefits">
        <div class="benefits__column">
          <div 
            v-for="(benefit, index) in aboutData.benefits.slice(0, 2)" 
            :key="index"
            class="benefit-card"
          >
            <div class="benefit-card__header">
              <div class="benefit-card__icon">
                <svg v-if="benefit.icon === 'school'" viewBox="0 0 24 24" class="benefit-svg">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
                <svg v-else-if="benefit.icon === 'public'" viewBox="0 0 24 24" class="benefit-svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <svg v-else-if="benefit.icon === 'psychology'" viewBox="0 0 24 24" class="benefit-svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <svg v-else-if="benefit.icon === 'handshake'" viewBox="0 0 24 24" class="benefit-svg">
                  <path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.76-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5c.83 0 1.5.67 1.5 1.5S8.33 10 7.5 10 6 9.33 6 8.5 6.67 7 7.5 7zm9 5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S15 9.33 15 8.5 15.67 7 16.5 7z"/>
                </svg>
              </div>
              <h3 class="benefit-card__title">{{ benefit.title }}</h3>
            </div>
            <div class="benefit-card__content">
              <p class="benefit-card__description">{{ benefit.description }}</p>
            </div>
          </div>
        </div>

        <div class="benefits__column">
          <div 
            v-for="(benefit, index) in aboutData.benefits.slice(2, 4)" 
            :key="index + 2"
            class="benefit-card"
          >
            <div class="benefit-card__header">
              <div class="benefit-card__icon">
                <svg v-if="benefit.icon === 'school'" viewBox="0 0 24 24" class="benefit-svg">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
                <svg v-else-if="benefit.icon === 'public'" viewBox="0 0 24 24" class="benefit-svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <svg v-else-if="benefit.icon === 'psychology'" viewBox="0 0 24 24" class="benefit-svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <svg v-else-if="benefit.icon === 'handshake'" viewBox="0 0 24 24" class="benefit-svg">
                  <path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.76-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5c.83 0 1.5.67 1.5 1.5S8.33 10 7.5 10 6 9.33 6 8.5 6.67 7 7.5 7zm9 5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S15 9.33 15 8.5 15.67 7 16.5 7z"/>
                </svg>
              </div>
              <h3 class="benefit-card__title">{{ benefit.title }}</h3>
            </div>
            <div class="benefit-card__content">
              <p class="benefit-card__description">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-us__conclusion">
        <p>{{ aboutData.conclusion }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import aboutUsEn from '../content/about-us.js'
import aboutUsZh from '../content/about-us-zh.js'

export default {
  name: 'AboutUs',
  setup() {
    const { locale } = useI18n()
    
    const aboutData = computed(() => {
      return locale.value === 'zh' ? aboutUsZh : aboutUsEn
    })
    
    return {
      aboutData
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.about-us {
  padding: 100px 0;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  font-family: 'Poppins', sans-serif;
  position: relative;
}

.about-us::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="about-pattern" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23about-pattern)"/></svg>');
  opacity: 0.3;
  pointer-events: none;
}

.about-us__header {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 1;
}

.about-us__title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif;
}

.about-us__title .material-icons {
  font-size: 3.5rem;
  color: #ffd700;
}

.about-us__intro-card {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 215, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.about-us__intro-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ffd700, #ffed4e);
}

.about-us__intro {
  font-size: 1.3rem;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 400;
  text-align: center;
}

.about-us__benefits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}

.benefits__column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.benefit-card {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.benefit-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #00ff88, #00cc6a);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  border-color: rgba(0, 255, 136, 0.3);
}

.benefit-card:hover::before {
  transform: scaleX(1);
}

.benefit-card__header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.benefit-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  flex-shrink: 0;
}

.benefit-svg {
  width: 28px;
  height: 28px;
  fill: #00ff88;
  transition: fill 0.3s ease;
}

.benefit-card:hover .benefit-svg {
  fill: #00cc6a;
}

.benefit-card__title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffd700;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

.benefit-card__content {
  text-align: left;
}

.benefit-card__description {
  font-size: 1rem;
  color: #bdc3c7;
  line-height: 1.7;
  margin: 0;
  font-weight: 400;
}

.about-us__conclusion {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.about-us__conclusion p {
  font-size: 1.2rem;
  color: #ffffff;
  line-height: 1.8;
  font-weight: 500;
  padding: 30px;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .about-us {
    padding: 60px 0;
  }
  
  .about-us__title {
    font-size: 2.5rem;
    flex-direction: column;
    gap: 15px;
  }
  
  .about-us__title .material-icons {
    font-size: 2.5rem;
  }
  
  .about-us__intro-card {
    padding: 30px 25px;
    margin: 0 20px;
  }
  
  .about-us__intro {
    font-size: 1.1rem;
  }
  
  .about-us__benefits {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 0 20px;
  }
  
  .benefits__column {
    gap: 25px;
  }
  
  .benefit-card {
    padding: 25px 20px;
  }
  
  .benefit-card__header {
    gap: 12px;
  }
  
  .benefit-card__icon {
    width: 45px;
    height: 45px;
  }
  
  .benefit-svg {
    width: 24px;
    height: 24px;
  }
  
  .benefit-card__title {
    font-size: 1.3rem;
  }
  
  .about-us__conclusion p {
    font-size: 1.1rem;
    padding: 25px 20px;
    margin: 0 20px;
  }
}

@media (max-width: 480px) {
  .about-us__title {
    font-size: 2rem;
  }
  
  .about-us__title .material-icons {
    font-size: 2rem;
  }
  
  .about-us__intro-card {
    padding: 25px 20px;
  }
  
  .about-us__intro {
    font-size: 1rem;
  }
  
  .benefit-card {
    padding: 20px 15px;
  }
  
  .benefit-card__header {
    gap: 10px;
  }
  
  .benefit-card__icon {
    width: 40px;
    height: 40px;
  }
  
  .benefit-svg {
    width: 20px;
    height: 20px;
  }
  
  .benefit-card__title {
    font-size: 1.2rem;
  }
  
  .about-us__conclusion p {
    font-size: 1rem;
    padding: 20px 15px;
  }
}
</style> 