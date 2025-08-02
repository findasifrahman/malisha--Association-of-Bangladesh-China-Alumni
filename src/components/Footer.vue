<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <!-- Quick Links Section -->
        <div class="footer__section">
          <h3 class="footer__title">
            <span class="material-icons">link</span>
            {{ $t('message.quickLinks') }}
          </h3>
          <div class="footer__links">
            <a 
              v-for="(link, index) in quickLinks" 
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >
              <span class="material-icons">arrow_forward</span>
              <span>{{ link.label }}</span>
            </a>
          </div>
        </div>

        <!-- Follow Us Section -->
        <div class="footer__section">
          <h3 class="footer__title">
            <span class="material-icons">share</span>
            {{ $t('message.followUs') }}
          </h3>
          <div class="footer__social">
                         <a 
               v-for="(social, index) in socialLinks" 
               :key="index"
               :href="social.url"
               target="_blank"
               rel="noopener noreferrer"
               class="footer__social-link"
               :class="`footer__social-link--${social.name}`"
             >
               <div class="social__icon">
                 <svg v-if="social.name === 'facebook'" viewBox="0 0 24 24" class="social__svg">
                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                 </svg>
                 <svg v-else-if="social.name === 'youtube'" viewBox="0 0 24 24" class="social__svg">
                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                 </svg>
                 <svg v-else-if="social.name === 'telegram'" viewBox="0 0 24 24" class="social__svg">
                   <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                 </svg>
               </div>
               <span class="social__text">{{ getSocialLabel(social.name) }}</span>
             </a>
          </div>
        </div>

                 <!-- Contact Info Section -->
         <div class="footer__section">
           <h3 class="footer__title">
             <span class="material-icons">contact_support</span>
           </h3>
           <div class="footer__contact">
             <div class="footer__contact-item">
               <span class="material-icons">phone</span>
               <div class="contact__details">
                 <span class="contact__label">Phone</span>
                 <span class="contact__value">+8618613114366</span>
               </div>
             </div>
             <div class="footer__contact-item">
               <span class="material-icons">email</span>
               <div class="contact__details">
                 <span class="contact__label">Email</span>
                 <span class="contact__value">info@malishaedu.com</span>
               </div>
             </div>
           </div>
         </div>
      </div>

      <!-- Copyright Section -->
      <div class="footer__bottom">
        <div class="footer__divider"></div>
        <div class="footer__copyright">
          <p>{{ footerData.text }}</p>
          <div class="footer__badges">
            <span class="footer__badge">🇧🇩 Bangladesh</span>
            <span class="footer__badge">🇨🇳 China</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Footer',
  setup() {
    const { locale } = useI18n()
    
    const footerData = ref({
      en: {
        text: "©2025 MalishaEdu. All Rights Reserved"
      },
      zh: {
        text: "©2025 MalishaEdu. 保留所有权利"
      }
    })

    const quickLinks = ref([
      { label: "About MalishaEdu", url: "https://malishaedu.com/company-details" },
      { label: "Belt & Road Chinese Center (BRCC)", url: "https://brccbd.com/" },
      { label: "Belt & Road Initiative", url: "https://eng.yidaiyilu.gov.cn/" },
      { label: "Chinese Government Scholarship", url: "https://www.campuschina.org/" },
      { label: "CIS Scholarship", url: "https://www.chinese.cn/page/#/pcpage/mainpage" },
      { label: "National Immigration (China)", url: "https://en.nia.gov.cn/" },
      { label: "Study in China (CSCSE)", url: "https://www.studyinchina.edu.cn/" }
    ])

    const socialLinks = ref([
      { name: 'facebook', url: "https://www.facebook.com/gz.malishaedu" },
      { name: 'youtube', url: "https://www.youtube.com/@MalishaEdu" },
      { name: 'telegram', url: "https://t.me/+8618613114366" }
    ])
    
    const currentData = computed(() => footerData.value[locale.value] || footerData.value.en)
    
    const getSocialIcon = (name) => {
      const icons = {
        facebook: 'facebook',
        youtube: 'smart_display',
        telegram: 'send'
      }
      return icons[name] || 'link'
    }
    
    const getSocialLabel = (name) => {
      const labels = {
        facebook: 'Facebook',
        youtube: 'YouTube',
        telegram: 'Telegram'
      }
      return labels[name] || name
    }
    
    return {
      footerData: currentData,
      quickLinks,
      socialLinks,
      getSocialIcon,
      getSocialLabel
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 60px 0 20px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="footer-pattern" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23footer-pattern)"/></svg>');
  opacity: 0.3;
  pointer-events: none;
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.footer__section {
  display: flex;
  flex-direction: column;
}

.footer__title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: white;
}

.footer__title .material-icons {
  font-size: 1.5rem;
  color: #3498db;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 0;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 8px 12px;
}

.footer__link:hover {
  background: rgba(52, 152, 219, 0.2);
  transform: translateX(8px);
  color: #3498db;
}

.footer__link .material-icons {
  font-size: 1rem;
  color: #3498db;
  transition: transform 0.3s ease;
}

.footer__link:hover .material-icons {
  transform: translateX(4px);
}

.footer__social {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__social-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.footer__social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.footer__social-link--facebook:hover {
  background: linear-gradient(135deg, #1877f2, #0d6efd);
}

.footer__social-link--youtube:hover {
  background: linear-gradient(135deg, #ff0000, #cc0000);
}

.footer__social-link--telegram:hover {
  background: linear-gradient(135deg, #0088cc, #006699);
}

.social__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.social__svg {
  width: 24px;
  height: 24px;
  fill: #3498db;
  transition: fill 0.3s ease;
}

.footer__social-link--facebook:hover .social__svg {
  fill: white;
}

.footer__social-link--youtube:hover .social__svg {
  fill: white;
}

.footer__social-link--telegram:hover .social__svg {
  fill: white;
}

.social__text {
  color: white;
  font-weight: 500;
}

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.footer__contact-item .material-icons {
  font-size: 1.2rem;
  color: #3498db;
  flex-shrink: 0;
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.contact__label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  line-height: 1.2;
}

.contact__value {
  font-size: 1.1rem;
  color: white;
  font-weight: 600;
  line-height: 1.3;
}

.footer__bottom {
  position: relative;
  z-index: 1;
}

.footer__divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  margin-bottom: 30px;
}

.footer__copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer__copyright p {
  font-size: 1rem;
  color: white;
  margin: 0;
  font-weight: 500;
}

.footer__badges {
  display: flex;
  gap: 12px;
}

.footer__badge {
  padding: 6px 12px;
  background: rgba(52, 152, 219, 0.2);
  border-radius: 20px;
  font-size: 0.9rem;
  color: white;
  border: 1px solid rgba(52, 152, 219, 0.3);
  transition: all 0.3s ease;
}

.footer__badge:hover {
  background: rgba(52, 152, 219, 0.3);
  transform: translateY(-2px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }
  
  .footer__content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer__title {
    font-size: 1.3rem;
  }
  
  .footer__title .material-icons {
    font-size: 1.3rem;
  }
  
  .footer__copyright {
    flex-direction: column;
    text-align: center;
  }
  
  .footer__badges {
    justify-content: center;
  }
}
</style> 