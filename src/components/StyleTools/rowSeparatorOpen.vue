<template>
  <div>
    <div class="separator">
      <svg
        id=""
        preserveAspectRatio="xMidYMax meet"
        class="svg-separator sep5"
        viewBox="0 0 1600 200"
        style="display: block"
        data-height="200"
      >
        <polygon
          class=""
          style="fill: #f5f5f5"
          points="1488,134 1304,100 1068,152 909.935,92.044 672,198 364,142 242,32 -4,95 -4,204 1604,204 1604,0 "
        ></polygon>
        <polygon
          class=""
          style="opacity: 1; fill: #48610b"
          points="672,198 364,142 242,32 -4,95 -4,82.333 242,32 374,136 "
        ></polygon>
        <polygon
          class=""
          style="opacity: 1; fill: #87ad25"
          points="894,86 672,198 909.935,92.044 "
        ></polygon>
        <polygon
          class=""
          style="opacity: 1; fill: #48610b"
          points="1068,152 1302,86 1486,126 1604,0 1488,134 1304,100 "
        ></polygon>
      </svg>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

.separator {
  width: 100%;
  /*height: 100%;*/
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
}

/* -- SVG CSS -- */

.svg-separator {
  display: block;
  background: 0 0;
  position: absolute;
  top: 0;
  z-index: 1;
  -webkit-transform: translateY(-100%) translateY(2px);
  transform: translateY(-100%) translateY(2px);
  width: 100%;
}

.svg-separator.bottom {
  top: auto;
  bottom: 0;
}

.sep5 {
  transform: translateY(-100%) translateY(2px) scale(1, 1);
  transform-origin: top;
}
</style>
