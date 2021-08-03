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

    <div>
      <div v-for="(item, index) in fields" :key="index">
        <slot :name="item.key" :item="items[item.key]" :label="item.label" />
      </div>
    </div>

    <div class="table-info__btn">
      <b-btn variant="link">
        <b-icon icon="chevron-left" />
        Back
      </b-btn>

      <b-btn variant="link">
        <div>
          Next
          <b-icon icon="chevron-right" />
        </div>
      </b-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TableInfo',
  props: {
    items: {
      type: Object,
    },
    fields: {
      type: Array,
      default: () => [],
    },
    requestName: {
      type: Function,
      default: () => null,
    },
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(['darkModeOn']),
  },
};
</script>

<style lang="scss">
.table-info {
  border-radius: 8px;
  padding: 0px 50px 32px;
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
  }
}
.row-info {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $gray;

  &__label {
    color: $font-grey;
    flex: 0 1 300px;
    padding: 20px 10px;
  }

  & span {
    color: $font-black;
  }
}
</style>
