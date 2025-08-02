<template>
  <section class="programs" id="programs">
    <div class="container">
      <div class="programs__header">
        <h2 class="programs__title">
          <span class="material-icons">video_library</span>
          {{ $t('programs.title') }}
        </h2>
        <div class="programs__description-card">
          <p class="programs__description-text">
            MalishaEdu, in collaboration with the <strong>𝗔𝘀𝘀𝗼𝗰𝗶𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵-𝗖𝗵𝗶𝗻𝗮 𝗔𝗹𝘂𝗺𝗻𝗶</strong>, successfully Organized <strong>𝗧𝗵𝗲 𝗙𝗼𝗿𝘂𝗺 𝗳𝗼𝗿 𝗖𝗵𝗶𝗻𝗮-𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵 𝗛𝗶𝗴𝗵𝗲𝗿 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 𝗘𝘅𝗰𝗵𝗮𝗻𝗴𝗲𝘀 𝗣𝗿𝗼𝗴𝗿𝗮𝗺</strong> on 11th July, 2025 🎉✅<br><br>
            Hosted by the <strong>𝗘𝗺𝗯𝗮𝘀𝘀𝘆 𝗼𝗳 𝘁𝗵𝗲 𝗣𝗲𝗼𝗽𝗹𝗲'𝘀 𝗥𝗲𝗽𝘂𝗯𝗹𝗶𝗰 𝗼𝗳 𝗖𝗵𝗶𝗻𝗮 𝗶𝗻 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵</strong> 🇧🇩🤝🇨🇳
          </p>
        </div>
      </div>
      
      <div class="programs__content">
        <div class="programs__video-section">
          <video 
            class="programs__video" 
            autoplay 
            loop 
            muted 
            playsinline
          >
            <source src="/assets/video.mp4" type="video/mp4">
            {{ $t('programs.videoNotSupported') }}
          </video>
        </div>
        
        <div class="programs__text-section">
          <div class="programs__text-card">
            <h3 class="programs__text-title">{{ $t('programs.description.title') }}</h3>
            <div class="programs__delegates">
              <div class="delegate-item">
                <span class="delegate-text">Attended the Program</span>
              </div>
              <div class="delegate-item">
                <span class="material-icons delegate-icon">school</span>
                <span class="delegate-text">UGC Chairman</span>
              </div>
              <div class="delegate-item">
                <span class="material-icons delegate-icon">school</span>
                <span class="delegate-text">VC, Rajshahi University</span>
              </div>
              <div class="delegate-item">
                <span class="material-icons delegate-icon">school</span>
                <span class="delegate-text">VC, Jahangirnagar University</span>
              </div>
              <div class="delegate-item">
                <span class="material-icons delegate-icon">school</span>
                <span class="delegate-text">VC, IUT </span>
              </div>

              <div class="delegate-item">
                <span class="material-icons delegate-icon">school</span>
                <span class="delegate-text">VC, Khulna University </span>
              </div>
              <div class="delegate-item">
                <span class="material-icons delegate-icon">school</span>
                <span class="delegate-text">Faculty, Dhaka University</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Section -->
      <div class="programs__gallery">
        <h3 class="programs__gallery-title">
          <span class="material-icons">photo_library</span>
          
        </h3>
        
        <div class="programs__gallery-grid">
          <div 
            v-for="(item, index) in galleryItems" 
            :key="index"
            class="programs__gallery-item"
          >
            <div class="programs__gallery-image-container">
              <img 
                :src="item.img" 
                :alt="item.caption"
                class="programs__gallery-image"
                loading="lazy"
              />
            </div>
            <p class="programs__gallery-caption">{{ item.caption }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Programs',
  data() {
    return {
      galleryItems: [
        { img: '/assets/ugc-chairman.jpg', caption: 'UGC Chairman' },
        { img: '/assets/rajshahi-vc.jpg', caption: 'VC, Rajshahi University' },
        { img: '/assets/jahangirnagar-vc.jpeg', caption: 'VC, Jahangirnagar University' },
        { img: '/assets/du-faculty.jpg', caption: 'Faculty, Dhaka University' }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.programs {
  padding: 100px 0;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;
}

.programs__header {
  text-align: center;
  margin-bottom: 60px;
}

.programs__title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 40px 0;
  font-family: 'Poppins', sans-serif;
}

.programs__title .material-icons {
  font-size: 3rem;
  color: #3498db;
}

.programs__description-card {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-radius: 16px;
  padding: 30px 40px;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.programs__description-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ffd700, #ffed4e);
}

.programs__description-text {
  font-size: 1.1rem;
  color: #ffffff;
  line-height: 1.8;
  font-weight: 400;
  text-align: center;
  margin: 0;
}

.programs__description-text strong {
  color: #ffd700;
  font-weight: 600;
}

.programs__content {
  display: flex;
  gap: 0;
  max-width: 1400px;
  margin: 0 auto 80px;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.programs__video-section {
  flex: 3;
  position: relative;
  overflow: hidden;
}

.programs__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.programs__text-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.programs__text-card {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  border-radius: 16px;
  padding: 30px 25px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.programs__text-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ffd700, #ffed4e);
}

.programs__text-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffd700;
  margin-bottom: 25px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.programs__delegates {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.delegate-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.delegate-item:last-child {
  border-bottom: none;
}

.delegate-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

.delegate-icon {
  font-size: 20px;
  color: #00ff88;
  flex-shrink: 0;
  width: 24px;
  text-align: center;
}

.delegate-text {
  font-size: 0.9rem;
  color: #ffffff;
  line-height: 1.4;
  font-weight: 400;
  flex: 1;
}

/* Gallery Section */
.programs__gallery {
  margin-top: 60px;
}

.programs__gallery-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 50px;
  font-family: 'Poppins', sans-serif;
}

.programs__gallery-title .material-icons {
  font-size: 2.5rem;
  color: #3498db;
}

.programs__gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.programs__gallery-item {
  text-align: center;
  transition: transform 0.3s ease;
}

.programs__gallery-item:hover {
  transform: translateY(-8px);
}

.programs__gallery-image-container {
  width: 200px;
  height: 200px;
  margin: 0 auto 16px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.programs__gallery-item:hover .programs__gallery-image-container {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.programs__gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.programs__gallery-item:hover .programs__gallery-image {
  transform: scale(1.05);
}

.programs__gallery-caption {
  font-size: 1.1rem;
  font-weight: 500;
  color: #2c3e50;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .programs {
    padding: 60px 0;
  }
  
  .programs__title {
    font-size: 2.5rem;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }
  
  .programs__title .material-icons {
    font-size: 2.5rem;
  }
  
  .programs__description-card {
    padding: 25px 20px;
    margin: 0 20px;
  }
  
  .programs__description-text {
    font-size: 1rem;
  }
  
  .programs__content {
    flex-direction: column;
    height: auto;
    margin: 0 20px 60px;
  }
  
  .programs__video-section {
    height: 300px;
  }
  
  .programs__text-section {
    padding: 20px;
  }
  
  .programs__text-card {
    padding: 25px 20px;
  }
  
  .programs__text-title {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  
  .programs__delegates {
    gap: 15px;
  }
  
  .delegate-item {
    gap: 10px;
    padding: 10px 0;
  }
  
  .delegate-icon {
    font-size: 18px;
    width: 20px;
  }
  
  .delegate-text {
    font-size: 0.85rem;
  }
  
  .programs__gallery-title {
    font-size: 2rem;
    gap: 12px;
    margin-bottom: 40px;
  }
  
  .programs__gallery-title .material-icons {
    font-size: 2rem;
  }
  
  .programs__gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    padding: 0 20px;
  }
  
  .programs__gallery-image-container {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 480px) {
  .programs__title {
    font-size: 2rem;
  }
  
  .programs__title .material-icons {
    font-size: 2rem;
  }
  
  .programs__description-card {
    padding: 20px 15px;
  }
  
  .programs__description-text {
    font-size: 0.9rem;
  }
  
  .programs__video-section {
    height: 250px;
  }
  
  .programs__text-card {
    padding: 20px 15px;
  }
  
  .programs__text-title {
    font-size: 1.2rem;
    margin-bottom: 18px;
  }
  
  .programs__delegates {
    gap: 12px;
  }
  
  .delegate-item {
    gap: 8px;
    padding: 8px 0;
  }
  
  .delegate-icon {
    font-size: 16px;
    width: 18px;
  }
  
  .delegate-text {
    font-size: 0.8rem;
  }
  
  .programs__gallery-title {
    font-size: 1.8rem;
    gap: 10px;
    margin-bottom: 30px;
  }
  
  .programs__gallery-title .material-icons {
    font-size: 1.8rem;
  }
  
  .programs__gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 25px;
  }
  
  .programs__gallery-image-container {
    width: 120px;
    height: 120px;
  }
  
  .programs__gallery-caption {
    font-size: 1rem;
  }
}
</style> 