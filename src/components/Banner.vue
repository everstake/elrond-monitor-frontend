<template>
  <div :class="['banner']">
    <b-container>
      <a href="https://nation.io/dao/ukraine" target="_blank" rel="noreferrer">
        <img src="~@/assets/img/banner.jpg" :class="['image']" />
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
</style>
