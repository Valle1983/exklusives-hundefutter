<template>
  <div
    v-if="instagramData?.data.length > 0"
    class="bg-grey-2 q-pt-xl q-pb-xl text-primary text-weight-bolder text-h4 text-center justify-center items center"
  >
    Unsere Instagram-Seite
  </div>
  <div
    v-if="!isLoading"
    class="bg-grey-2 row justify-center items-center text-center q-pb-xl q-pa-md"
  >
    <div
      v-if="usePagination"
      class="col-md-4 col-xs-2 justify-center items-center text-center"
    >
      <div v-if="paginationPrevUrl">
        <q-btn
          round
          flat
          size="lg"
          color="secondary"
          icon="navigate_before"
          aria-label="Previous"
          @click="handlePaginationPrev"
        />
      </div>
    </div>
    <div
      v-for="image in instagramData.data"
      :key="image.id"
      class="col-md-1 col-xs-8 justify-center text-center items-center q-pa-xs"
    >
      <q-img
        v-if="
          image.media_type === 'IMAGE' || image.media_type === 'CAROUSEL_ALBUM'
        "
        :src="image.media_url"
        :alt="image.caption"
        :key="image.id"
        class="instagram-gallery-image"
      />
      <video
        v-else
        controls
        width="100%"
        height="100%"
        style="border-radius: 25px"
        class="bg-secondary shadow-10 justify-center text-center items-center q-pa-xs"
        :poster="image.thumbnail_url"
      >
        <source :src="image.media_url" type="video/mp4" />
      </video>
      <span v-if="showCaption" class="instagram-caption">{{
        image.caption
      }}</span>
    </div>
    <div
      v-if="usePagination"
      class="col-md-4 col-xs-2 justify-center items-center text-center q-pa-md"
    >
      <div v-if="paginationNextUrl">
        <q-btn
          round
          flat
          size="lg"
          icon="navigate_next"
          color="secondary"
          aria-label="next"
          @click="handlePaginationNext"
        />
      </div>
    </div>
  </div>
  <div class="q-pb-xl bg-grey-2" />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
  accessToken: String,
  count: Number,
  pagination: Boolean,
  caption: Boolean,
});

const isLoading = ref(true);
const hasError = ref(false);
const instagramData = ref(null);
const usePagination = ref(true);
const showCaption = ref(false);
const paginationNextUrl = ref('');
const paginationPrevUrl = ref('');

const fetchInstaData = (url) => {
  axios
    .get(url)
    .then((response) => {
      if (response.hasOwnProperty('error')) {
        isLoading.value = false;
        hasError.value = true;
      } else {
        instagramData.value = response.data;
        if (response.data !== null) {
          paginationNextUrl.value = response.data.paging.next;
          paginationPrevUrl.value = response.data.paging.previous;
        }
        isLoading.value = false;
      }
    })
    .then(() => {
      if (props.pagination) {
        usePagination.value = props.pagination;
      }
      if (props.caption) {
        showCaption.value = props.caption;
      }
    })
    .catch(() => {
      hasError.value = true;
      isLoading.value = false;
    });
};

onMounted(() => {
  const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,thumbnail_url,caption&limit=${props.count}&access_token=${props.accessToken}`;
  fetchInstaData(url);
});

const handlePaginationNext = () => {
  fetchInstaData(paginationNextUrl.value);
};

const handlePaginationPrev = () => {
  fetchInstaData(paginationPrevUrl.value);
};
</script>

<style scoped>
.instagram-wrapper {
  margin: 0 auto;
  padding: 0 2rem;
}
.instagram-gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem, -1rem;
  padding-bottom: 3rem;
}
.instagram-gallery-item {
  position: relative;
  flex: 1 0 22rem;
  margin: 1rem;
  color: #fff;
  cursor: pointer;
}
.instagram-gallery-image {
  height: 40vh;
  object-fit: cover;
}
.instagram-caption {
  color: black;
  margin-top: -3px;
}
.video:hover {
  background-color: #deaada;
  border-radius: 100px;
}
</style>
