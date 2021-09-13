<template>
  <div class="btn__wrapper">
    <b-button :class="['btn-back', darkModeClassBackground]" variant="outline-primary" @click="onBack">
      <b-icon class="btn-back__icon" icon="arrow-left" />
    </b-button>

    <span :class="darkModeClassFonts">Back</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'BtnBack',
  computed: {
    ...mapGetters(['darkModeClassFonts', 'darkModeClassBackground'])
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &-back {
    border-color: $gray;
    border-radius: $border-radius-card;
    &__icon {
      color: $dark-gary;
    }

    &:hover {
      background-color: transparent;
      border-color: $blue;
    }
  }

}
</style>
