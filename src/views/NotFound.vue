<template>
  <div class="not-found">
    <h1>Page not found</h1>
    <b-button variant="primary" to="/" class="m-4">Home</b-button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    @include font(36px, $main-blue, 500);
  }
}
</style>
