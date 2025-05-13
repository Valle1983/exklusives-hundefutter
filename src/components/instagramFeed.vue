<template>
  <div class="instagram-section">
    <h2 class="text-center text-h5 text-white text-weight-bold q-mb-lg">
      Unsere Instagram-Seite
    </h2>

    <q-carousel
      v-model="slideIndex"
      animated
      navigation="false"
      arrows
      height="auto"
      class="instagram-slider"
    >
      <q-carousel-slide
        v-for="(item, index) in instagramData?.data || []"
        :key="item.id"
        :name="index"
        class="carousel-slide q-pa-lg"
      >
        <div class="row-wrap">
          <!-- Medien (9:16) -->
          <div class="media-wrapper">
            <q-img
              v-if="
                item.media_type === 'IMAGE' ||
                item.media_type === 'CAROUSEL_ALBUM'
              "
              :src="item.media_url"
              :alt="item.caption"
              class="media-content"
            />
            <video
              v-else
              controls
              :poster="item.thumbnail_url"
              class="media-content"
            >
              <source :src="item.media_url" type="video/mp4" />
            </video>
          </div>

          <!-- Text -->
          <div class="caption-box">
            <div class="caption-title">Beitrag</div>
            <div class="caption-text">
              {{ item.caption || 'Keine Beschreibung verfügbar.' }}
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
  accessToken: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 6,
  },
});

const instagramData = ref(null);
const slideIndex = ref(0);

const fetchInstaData = async () => {
  try {
    const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&limit=${props.count}&access_token=${props.accessToken}`;
    const response = await axios.get(url);
    instagramData.value = response.data;
  } catch (err) {
    console.error('Instagram Feed Fehler:', err);
  }
};

onMounted(fetchInstaData);
</script>

<style lang="scss" scoped>
@import '../css/quasar.variables.scss';
.instagram-section {
  background: $dark;
  color: black;
  padding: 40px 20px;
}

.instagram-slider {
  max-width: 1440px;
  background: $dark;
  margin: 0 auto;
}

.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}

.row-wrap {
  display: flex;
  gap: 40px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.media-wrapper {
  width: 230px;
  height: 460px;
  border-radius: 20px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: $dark;
}

.media-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.caption-box {
  max-width: 600px;
  background: transparent;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  line-height: 1.5;
}

.caption-title {
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.q-carousel__navigation {
  display: none !important;
}

/* 📱 Mobil-Optimierung */
@media (max-width: 768px) {
  .row-wrap {
    flex-direction: column;
  }

  .media-wrapper {
    width: 180px;
    height: 360px;
  }

  .caption-box {
    text-align: center;
  }
}
</style>
