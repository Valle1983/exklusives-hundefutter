<template>
  <div ref="mapContainer" :center="center" class="map-container"></div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export default {
  name: 'OpenMap',
  mounted() {
    new Map({
      target: this.$refs.mapContainer,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [988500, 6788700.57],
        zoom: 14,
      }),
    });
  },
  setup() {
    return {
      center: [988500, 6788700.57],
    };
  },
};
</script>

<style>
.map-container {
  width: 100%;
  height: 250px;
}
</style>
