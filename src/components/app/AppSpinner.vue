<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <b-spinner
      variant="primary"
      :class="{ 'spinner__size--big': sizeBool }"
    ></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'AppSpinner',
  props: {
    sizeBool: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.spinner {
  &__size--big {
    width: 5rem;
    height: 5rem;
  }
}
</style>
