<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__brand">
        <span class="material-icons">school</span>
        <h1>{{ title }}</h1>
      </div>
      
      <div class="navbar__nav">
        <ul class="navbar__menu">
          <li v-for="link in links" :key="link.key">
            <a :href="link.href">{{ $t(`menu.${link.key}`) }}</a>
          </li>
        </ul>
        
        <div class="navbar__lang">
          <button 
            v-for="lang in languages" 
            :key="lang.code"
            :class="{ active: currentLocale === lang.code }"
            @click="changeLanguage(lang.code)"
          >
            {{ lang.label }}
          </button>
        </div>
        
        <button class="navbar__toggle" @click="toggleMenu">
          <span class="material-icons">{{ isMenuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Navbar',
  props: {
    title: {
      type: String,
      default: 'Association of Bangladesh-China Alumni'
    }
  },
  setup() {
    const { locale } = useI18n()
    const isMenuOpen = ref(false)
    const currentLocale = computed(() => locale.value)
    
    const links = [
      { key: 'home', href: '#home' },
      { key: 'news', href: '#news' },
      { key: 'programs', href: '#programs' },
      { key: 'aboutUs', href: '#about' },
      { key: 'contactUs', href: '#contact' }
    ]
    
    const languages = [
      { code: 'en', label: 'EN' },
      { code: 'zh', label: '中文' }
    ]
    
    const changeLanguage = (lang) => {
      locale.value = lang
      isMenuOpen.value = false
    }
    
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    
    return {
      links,
      languages,
      currentLocale,
      isMenuOpen,
      changeLanguage,
      toggleMenu
    }
  }
}
</script>

<style scoped>
.navbar {
  background: white;
  box-shadow: var(--shadow-1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar__brand h1 {
  font-size: 1.25rem;
  color: var(--primary-color);
  margin: 0;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.navbar__menu {
  display: flex;
  list-style: none;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.navbar__menu a {
  color: var(--text-primary);
  text-decoration: none;
  padding: 12px 16px;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
}

.navbar__menu a:hover {
  color: var(--primary-color);
  background: var(--surface);
}

.navbar__lang {
  display: flex;
  gap: 8px;
}

.navbar__lang button {
  padding: 8px 12px;
  border: 1px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.navbar__lang button.active,
.navbar__lang button:hover {
  background: var(--primary-color);
  color: white;
}

.navbar__toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .navbar__menu,
  .navbar__lang {
    display: none;
  }
  
  .navbar__toggle {
    display: block;
  }
}
</style> 