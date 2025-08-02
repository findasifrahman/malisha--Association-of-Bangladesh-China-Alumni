<template>
  <section class="events" id="news">
    <div class="container">
      <div class="events__header">
        <h2>
          <span class="material-icons">event</span>
          {{ $t('message.events') }}
        </h2>
        <p>{{ $t('message.eventsDescription') }}</p>
      </div>
      
      <div class="events__content">
        <!-- Left Column - Event Cards -->
        <div class="events__cards">
          <div 
            v-for="(event, index) in events" 
            :key="index"
            class="event-card"
            :style="{ '--event-color': event.color }"
          >
            <div class="event-card__date" v-if="event.date">
              <span class="material-icons">calendar_today</span>
              <span>{{ event.date }}</span>
            </div>
            <h3 class="event-card__title">{{ event.title }}</h3>
            <p class="event-card__description" v-if="event.description">
              {{ event.description }}
            </p>
            <div class="event-card__status" v-if="event.status">
              <span class="status-badge" :class="event.status">
                {{ event.status }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Right Column - Image -->
        <div class="events__image">
          <img 
            src="/assets/dr-maruf.jpg" 
            alt="Dr. Maruf - BRCC Opening Ceremony"
            class="events__image-img"
            loading="lazy"
          />
          <div class="events__image-overlay">
            <h3>Dr. Maruf</h3>
            <p>BRCC Opening Ceremony</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Events',
  setup() {
    const events = ref([
      {
        date: "8 August 2025",
        title: "Opening of BRCC",
        color: "#EF5350",
        description: "Official opening ceremony of the Bangladesh-China Research Collaboration Center",
        status: "upcoming"
      },

      {
        title: "China hospital delegate at BRCC office",
        color: "#66BB6A",
        description: "Visit and collaboration meeting with Chinese hospital representatives",
        status: "scheduled"
      },
      {
        title: "Inauguration of BRCC",
        color: "#AB47BC",
        description: "Grand inauguration ceremony with key stakeholders",
        status: "upcoming"
      }
    ])

    return {
      events
    }
  }
}
</script>

<style scoped>
.events {
  padding: 80px 0;
  background: var(--surface);
}

.events__header {
  text-align: center;
  margin-bottom: 60px;
}

.events__header h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 16px;
}

.events__header p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.events__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.events__cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.event-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 24px;
  box-shadow: var(--shadow-1);
  border-left: 4px solid var(--event-color);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.event-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--event-color);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.event-card:hover {
  box-shadow: var(--shadow-2);
  transform: translateY(-4px);
}

.event-card:hover::before {
  transform: scaleX(1);
}

.event-card__date {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 12px;
}

.event-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.3;
}

.event-card__description {
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 16px;
}

.event-card__status {
  display: flex;
  justify-content: flex-end;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge.upcoming {
  background: #FFF3E0;
  color: #E65100;
}

.status-badge.confirmed {
  background: #E8F5E8;
  color: #2E7D32;
}

.status-badge.scheduled {
  background: #E3F2FD;
  color: #1565C0;
}

.events__image {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-2);
}

.events__image-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.events__image:hover .events__image-img {
  transform: scale(1.05);
}

.events__image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 40px 24px 24px;
  text-align: center;
}

.events__image-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
  font-weight: 600;
}

.events__image-overlay p {
  font-size: 1rem;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .events__content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .events__image {
    order: -1;
  }
  
  .events__image-img {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .events {
    padding: 60px 0;
  }
  
  .events__header h2 {
    font-size: 2rem;
  }
  
  .events__header p {
    font-size: 1rem;
  }
  
  .event-card {
    padding: 20px;
  }
  
  .event-card__title {
    font-size: 1.125rem;
  }
  
  .events__image-img {
    height: 300px;
  }
  
  .events__image-overlay {
    padding: 30px 20px 20px;
  }
  
  .events__image-overlay h3 {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .events__content {
    gap: 30px;
  }
  
  .events__cards {
    gap: 20px;
  }
  
  .event-card {
    padding: 16px;
  }
  
  .events__image-img {
    height: 250px;
  }
}
</style> 