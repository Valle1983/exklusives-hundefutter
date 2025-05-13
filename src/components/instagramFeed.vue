<template>
  <div class="bg-dark text-white">
    <div v-if="isLoading" class="q-pa-xl text-center">
      <q-spinner color="primary" size="50px" />
      <div class="q-mt-md">
        {{ $t('instagramFeed.loading') || 'Lade Instagram-Beiträge...' }}
      </div>
    </div>

    <div v-else-if="hasError" class="q-pa-xl text-center text-negative">
      <p>Fehler beim Laden des Instagram-Feeds.</p>
    </div>

    <div
      v-else-if="instagramData?.data?.length > 0"
      class="q-pt-xl q-pb-xl text-h4 text-center"
    >
      {{ $t('instagramFeed.title') || 'Instagram Feed' }}
    </div>

    <div
      v-if="!isLoading && instagramData?.data?.length"
      class="row bg-dark justify-center items-start q-pa-md q-gutter-md"
    >
      <div
        v-if="usePagination && paginationPrevUrl"
        class="col-auto flex flex-center"
      >
        <q-btn
          round
          flat
          size="lg"
          icon="navigate_before"
          color="primary"
          aria-label="Previous"
          @click="handlePaginationPrev"
        />
      </div>

      <div
        v-for="image in instagramData.data"
        :key="image.id"
        class="col-xs-12 col-sm-6 col-md-3"
      >
        <q-img
          v-if="
            image.media_type === 'IMAGE' ||
            image.media_type === 'CAROUSEL_ALBUM'
          "
          :src="image.media_url"
          :alt="image.caption"
          class="instagram-gallery-image"
        />
        <video
          v-else
          controls
          width="100%"
          class="q-mt-sm shadow-10 rounded-borders"
          :poster="image.thumbnail_url"
        >
          <source :src="image.media_url" type="video/mp4" />
        </video>
        <div
          v-if="showCaption && image.caption"
          class="q-mt-sm instagram-caption"
        >
          {{ image.caption }}
        </div>
      </div>

      <div
        v-if="usePagination && paginationNextUrl"
        class="col-auto flex flex-center"
      >
        <q-btn
          round
          flat
          size="lg"
          icon="navigate_next"
          color="primary"
          aria-label="Next"
          @click="handlePaginationNext"
        />
      </div>
    </div>
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
  pagination: {
    type: Boolean,
    default: true,
  },
  caption: {
    type: Boolean,
    default: false,
  },
});

const isLoading = ref(true);
const hasError = ref(false);
const instagramData = ref(null);
const usePagination = ref(props.pagination);
const showCaption = ref(props.caption);
const paginationNextUrl = ref('');
const paginationPrevUrl = ref('');

const fetchInstaData = async (url) => {
  isLoading.value = true;
  hasError.value = false;

  try {
    const response = await axios.get(url);
    instagramData.value = response.data;

    paginationNextUrl.value = response.data?.paging?.next || '';
    paginationPrevUrl.value = response.data?.paging?.previous || '';
  } catch (err) {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  const baseUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&limit=${props.count}&access_token=${props.accessToken}`;
  fetchInstaData(baseUrl);
});

const handlePaginationNext = () => {
  if (paginationNextUrl.value) fetchInstaData(paginationNextUrl.value);
};

const handlePaginationPrev = () => {
  if (paginationPrevUrl.value) fetchInstaData(paginationPrevUrl.value);
};
</script>

<style scoped>
.instagram-gallery-image {
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
}
.instagram-caption {
  color: #fff;
  font-size: 0.9rem;
}
</style>
