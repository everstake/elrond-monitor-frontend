<template>
  <div :class="['table-info', darkModeClassBackground]">
    <h1
      class="table-info__title table-info__title--position"
      :class="{
        'white-font-main': darkModeOn,
        'black-font-main': !darkModeOn,
      }"
    >
      <slot name="header" />
    </h1>

    <AppSpinner v-if="loading" :size-bool="true" />

    <div v-else-if="boolItems" class="d-flex justify-content-center mb-3">
      Not data
    </div>

    <div v-else class="wrapper-table-info">
      <div
        v-for="(item, index) in fields"
        :key="index"
        class="wrapper-table-info__row"
      >
        <div :class="['row-info', darkModeClassFonts]">
          <div class="row-info__label">{{ item.label }}</div>

          <slot :name="item.key" :item="items[item.key]" />
        </div>
        <div></div>
      </div>
    </div>

    <slot name="block-nav" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppSpinner from './AppSpinner.vue';

export default {
  name: 'TableInfo',
  components: {
    AppSpinner,
  },
  props: {
    items: {
      type: Object,
      default: () => {},
    },
    fields: {
      type: Array,
      default: () => [],
    },
    requestName: {
      type: Function,
      default: () => null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters([
      'darkModeOn',
      'darkModeClassBackground',
      'darkModeClassFonts',
    ]),
    boolItems() {
      return !Object.keys(this.items).length;
    },
  },
};
</script>

<style lang="scss">
.table-info {
  border-radius: 8px;
  padding: 0 50px 32px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @include md-down {
    padding: 0 10px 20px
  }

  &__title {
    text-align: center;
    @include font($roboto-font, 36px, $body-dark, 500);

    &--position {
      margin-top: 30px;
    }
  }

  &__btn {
    display: flex;
    justify-content: flex-end;

    &--position {
      display: flex;
      align-items: center;
    }
  }
}
.row-info {
  display: flex;
  align-items: center;
  @include border(bottom, 1px);

  &__label {
    align-self: flex-start;
    flex: 0 0 300px;
    @include padding(20px, 10px);
    color: $font-grey;
    font-weight: 500;
  }

  &__item {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
  }

  &__text-wrapper {
    @include padding(20px);
  }

  &__text {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .row-info &--blue {
      color: $main-blue;
    }

    & span {
      width: 45%;

      @include md-down {
        width: auto;
      }
    }
  }
}

.wrapper-table-info {
  overflow-x: auto;
  width: 100%;

  &__row {
    width: 100%;

    @include lg-down {
      width: 1400px;
    }
  }
}
</style>
