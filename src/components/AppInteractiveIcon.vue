<template>
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfbjxY7kaxNV9hp90LszzBORwFlB-HK3epYnWlehRZhTvFXRA/viewform?usp=sf_link"
    class="icon"
    target="_blank"
    :style="{
      top: options.top,
      left: options.left,
      opacity: options.opacity || 0.1,
      zIndex: options.zIndex || 0,
    }"
  >
    <img
      v-if="darkModeOn"
      src="~@/assets/img/Everstake-Logo white.svg"
      :width="size"
      :height="size"
      alt="logo-everstake"
    />
    <img
      v-else
      src="~@/assets/img/Everstake-Logo Black.svg"
      :width="size"
      :height="size"
      alt="logo-everstake"
    />
  </a>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppInteractiveIcon',
  props: {
    options: {
      type: Object,
      default: () => {},
    },
    size: {
      type: Number,
      default: 25,
    },
  },
  computed: {
    ...mapGetters(['darkModeOn']),
  },
};
</script>

<style lang="scss" scoped>
.icon {
  //z-index: 0;
  position: absolute;
  transition: all 0.3s linear;

  &:hover {
    z-index: 100 !important;
    transform: scale(1.6);
    opacity: 1 !important;
  }
}
</style>
