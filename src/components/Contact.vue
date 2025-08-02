<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact__header">
        <h2>
          <span class="material-icons">contact_mail</span>
          {{ $t('message.contactUs') }}
        </h2>
        <p>{{ $t('message.contactDescription') }}</p>
      </div>
      
      <div class="contact__grid">
        <!-- Contact Information -->
        <div class="contact__info">
          <div class="contact__card">
            <div class="contact__item">
              <div class="contact__icon">
                <span class="material-icons">phone</span>
              </div>
              <div class="contact__details">
                <h3>{{ $t('message.phone') }}</h3>
                <a :href="`tel:${contactData.phone}`" class="contact__link">{{ contactData.phone }}</a>
              </div>
            </div>
            
            <div class="contact__item">
              <div class="contact__icon">
                <span class="material-icons">email</span>
              </div>
              <div class="contact__details">
                <h3>{{ $t('message.email') }}</h3>
                <a :href="`mailto:${contactData.email}`" class="contact__link">{{ contactData.email }}</a>
              </div>
            </div>
            
            <div class="contact__item">
              <div class="contact__icon">
                <span class="material-icons">location_on</span>
              </div>
              <div class="contact__details">
                <h3>{{ $t('message.address') }}</h3>
                <div class="contact__map">
                  <img 
                    src="../assets/map.jpg" 
                    alt="Dhaka, Bangladesh Map"
                    class="map__image"
                    loading="lazy"
                  />
             
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- QR Codes -->
        <div class="contact__qr-section">
          <div class="qr-codes__grid">
            <div class="qr-code__item">
              <div class="qr-code__image-container">
                <img 
                  src="../assets/qrcode_malishaedu.jpg" 
                  alt="MalishaEdu QR Code"
                  class="qr-code__image"
                  loading="lazy"
                />
              </div>
              <p class="qr-code__label">{{ $t('message.scanForInfo') }}</p>
            </div>
            
            <div class="qr-code__item">
              <div class="qr-code__image-container">
                <img 
                  src="../assets/qrcode_whatsapp.jpg" 
                  alt="WhatsApp QR Code"
                  class="qr-code__image"
                  loading="lazy"
                />
              </div>
              <p class="qr-code__label">{{ $t('message.scanForWhatsApp') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Contact',
  setup() {
    const { locale } = useI18n()
    
    const contactData = ref({
      en: {
        phone: "+8618613114366",
        email: "info@malishaedu.com"
      },
      zh: {
        phone: "+8618613114366",
        email: "info@malishaedu.com"
      }
    })
    
    const currentData = computed(() => contactData.value[locale.value] || contactData.value.en)
    
    return {
      contactData: currentData
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23000" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
  pointer-events: none;
}

.contact__header {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 1;
}

.contact__header h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
}

.contact__header h2 .material-icons {
  font-size: 3rem;
  color: #3498db;
}

.contact__header p {
  font-size: 1.2rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: stretch;
  position: relative;
  z-index: 1;
}

.contact__info {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.contact__card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.contact__item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid #e9ecef;
}

.contact__item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.contact__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  border-radius: 16px;
  flex-shrink: 0;
}

.contact__icon .material-icons {
  font-size: 2rem;
  color: white;
}

.contact__details h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.contact__link {
  color: #3498db;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.contact__link:hover {
  color: #2980b9;
}

.contact__details p {
  color: #6c757d;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

.contact__map {
  margin-top: 12px;
}

.map__image {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 2px solid #e9ecef;
}

.contact__qr-section {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.qr-codes__grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  justify-content: center;
}

.qr-code__item {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.qr-code__item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.qr-code__image-container {
  margin-bottom: 20px;
}

.qr-code__image {
  width: 180px;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid #e9ecef;
}

.qr-code__label {
  font-size: 1rem;
  color: #6c757d;
  margin: 0;
  font-weight: 500;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }
  
  .contact__header h2 {
    font-size: 2.5rem;
  }
  
  .contact__header h2 .material-icons {
    font-size: 2.5rem;
  }
  
  .contact__grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .contact__card {
    padding: 30px;
  }
  
  .contact__item {
    padding: 20px 0;
  }
  
  .contact__icon {
    width: 50px;
    height: 50px;
  }
  
  .contact__icon .material-icons {
    font-size: 1.5rem;
  }
  
  .qr-code__image {
    width: 150px;
    height: 150px;
  }
}
</style> 