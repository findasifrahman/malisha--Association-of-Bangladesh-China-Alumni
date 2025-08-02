<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__left">
        <div class="navbar__menu">
          <a 
            v-for="link in links" 
            :key="link.key"
            :href="link.href"
            class="navbar__link"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ $t(`menu.${link.key}`) }}
          </a>
        </div>
        
        <div class="navbar__language">
          <button 
            @click="toggleLanguage" 
            class="language-toggle"
          >
            {{ currentLanguage === 'en' ? '中文' : 'EN' }}
          </button>
        </div>
      </div>
      
      <div class="navbar__brand">
        <h1 class="navbar__title">Association of Bangladesh-China Alumni</h1>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Navbar',
  setup() {
    const { locale } = useI18n()
    
    const links = [
      { key: 'home', href: '#home' },
      { key: 'news', href: '#news' },
      { key: 'programs', href: '#programs' },
      { key: 'aboutUs', href: '#about' },
      { key: 'members', href: '#members' }
    ]
    
    const currentLanguage = computed(() => locale.value)
    
    const toggleLanguage = () => {
      locale.value = locale.value === 'en' ? 'zh' : 'en'
    }
    
    const scrollToSection = (sectionId) => {
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    
    return {
      links,
      currentLanguage,
      toggleLanguage,
      scrollToSection
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  padding: 15px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__left {
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;
}

.navbar__brand {
  flex-shrink: 0;
}

.navbar__title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #95a5a6; /* Grey color as requested */
  margin: 0;
  white-space: nowrap;
}

.navbar__menu {
  display: flex;
  gap: 30px;
  align-items: center;
}

.navbar__link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
}

.navbar__link:hover {
  color: #3498db;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #3498db;
  transition: width 0.3s ease;
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar__language {
  display: flex;
  align-items: center;
}

.language-toggle {
  background: rgba(52, 152, 219, 0.2);
  color: white;
  border: 1px solid rgba(52, 152, 219, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-toggle:hover {
  background: rgba(52, 152, 219, 0.3);
  transform: translateY(-2px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 15px;
  }
  
  .navbar__left {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
  
  .navbar__title {
    font-size: 1rem;
    text-align: center;
  }
  
  .navbar__menu {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .navbar__link {
    font-size: 0.9rem;
  }
  
  .navbar__language {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .navbar__menu {
    gap: 15px;
  }
  
  .navbar__link {
    font-size: 0.8rem;
  }
  
  .language-toggle {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style> 