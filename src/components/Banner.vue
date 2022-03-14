<template>
  <div :class="['banner']">
    <b-container>
      <a
        href="https://donate.thedigital.gov.ua/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="~@/assets/img/banner.jpg" :class="['image', 'img-war']" />
        <img
          src="~@/assets/img/banner-mobile.jpg"
          :class="['image', 'img-war-mobile']"
        />
      </a>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style scoped>
.banner {
  width: 100%;
}

.image {
  width: 100%;
}

@media (max-width: 767px) {
  .img-war {
    display: none;
  }
}
@media (min-width: 767px) {
  .img-war-mobile {
    display: none;
  }
}
</style>
