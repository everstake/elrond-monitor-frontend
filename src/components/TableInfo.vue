<template>
  <div
    :class="{
      'table-info': true,
      'white-background': !darkModeOn,
      'black-background': darkModeOn,
    }"
  >
    <h1
      class="table-info__title table-info__title--position"
      :class="{
        'white-font-main': darkModeOn,
        'black-font-main': !darkModeOn,
      }"
    >
      <slot name="header" />
    </h1>

    <div v-if="loading" class="d-flex justify-content-center mb-3">
      <b-spinner variant="primary" class="spinner"></b-spinner>
    </div>

    <div v-else-if="items.length" class="d-flex justify-content-center mb-3">
      Not data
    </div>

    <div v-else>
      <div v-for="(item, index) in fields" :key="index">
        <slot :name="item.key" :item="items[item.key]" :label="item.label" />
      </div>
    </div>

    <slot name="block-nav" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TableInfo',
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
    ...mapGetters(['darkModeOn']),
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
    gap: 1rem;

    .row-info &--blue {
      color: $main-blue;
    }

    & span {
      width: 45%;
    }
  }

  & span {
    color: $font-black;
  }
}
</style>
