<template>
  <section class="members" id="members">
    <div class="container">
      <div class="members__header">
        <h2 class="members__title">
          <span class="material-icons">groups</span>
          {{ $t('members.title') }}
        </h2>
        <p class="members__subtitle">{{ $t('members.subtitle') }}</p>
      </div>
      
      <div class="members__grid">
        <div 
          v-for="(member, index) in members" 
          :key="index"
          class="member-card"
        >
          <div class="member-card__image-container">
            <img 
              :src="member.image" 
              :alt="member.name"
              class="member-card__image"
              loading="lazy"
            />
          </div>
          <div class="member-card__content">
            <h3 class="member-card__name">{{ member.name }}</h3>
            <p class="member-card__description">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Members',
  data() {
    return {
      members: [
        {
          image: '/assets/member-1.png',
          name: 'Sheikh Korban Ali',
          description: 'Graduated from China, Chairman Malisha Edu'
        },
        {
          image: '/assets/member-2.jpeg',
          name: 'Dr. Maruf',
          description: 'Graduated from China, Managing Director, Malisha Group'
        },
        {
          image: '/assets/member-3.jpeg',
          name: 'Dr. Rashed',
          description: 'Graduated from China, Chairman, BRCC'
        },
        {
          image: '/assets/member-4.jpg',
          name: 'Dr. Komol',
          description: 'Graduated from China, Director, Malisha Edu'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.members {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  font-family: 'Poppins', sans-serif;
}

.members__header {
  text-align: center;
  margin-bottom: 80px;
}

.members__title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 20px 0;
  font-family: 'Poppins', sans-serif;
}

.members__title .material-icons {
  font-size: 3rem;
  color: #3498db;
}

.members__subtitle {
  font-size: 1.3rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
}

.members__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.member-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.member-card__image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.member-card:hover .member-card__image {
  transform: scale(1.05);
}

.member-card__content {
  padding: 25px 20px;
  text-align: center;
}

.member-card__name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 12px 0;
  font-family: 'Poppins', sans-serif;
}

.member-card__description {
  font-size: 0.9rem;
  color: #6c757d;
  line-height: 1.5;
  margin: 0;
  font-weight: 400;
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .members__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    padding: 0 20px;
  }
  
  .member-card__image-container {
    height: 180px;
  }
  
  .member-card__content {
    padding: 20px 15px;
  }
  
  .member-card__name {
    font-size: 1.1rem;
  }
  
  .member-card__description {
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .members {
    padding: 60px 0;
  }
  
  .members__title {
    font-size: 2.5rem;
    flex-direction: column;
    gap: 15px;
  }
  
  .members__title .material-icons {
    font-size: 2.5rem;
  }
  
  .members__subtitle {
    font-size: 1.1rem;
    padding: 0 20px;
  }
  
  .members__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 20px;
  }
  
  .member-card__image-container {
    height: 160px;
  }
  
  .member-card__content {
    padding: 18px 15px;
  }
  
  .member-card__name {
    font-size: 1rem;
  }
  
  .member-card__description {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .members__title {
    font-size: 2rem;
  }
  
  .members__title .material-icons {
    font-size: 2rem;
  }
  
  .members__subtitle {
    font-size: 1rem;
  }
  
  .members__grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 15px;
  }
  
  .member-card__image-container {
    height: 180px;
  }
  
  .member-card__content {
    padding: 20px 15px;
  }
  
  .member-card__name {
    font-size: 1.1rem;
  }
  
  .member-card__description {
    font-size: 0.9rem;
  }
}
</style> 