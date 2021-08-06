<template>
  <div
    :class="{
      'table-card': true,
      'white-background': !darkModeOn,
      'black-background': darkModeOn,
    }"
  >
    <h1
      class="table-card__title table-card__title--position"
      :class="{
        'white-font-main': darkModeOn,
        'black-font-main': !darkModeOn,
      }"
    >
      <slot name="header" />
    </h1>
    <b-table id="my-table" :items="items" :fields="fields" :per-page="perPage">
      <template
        v-for="key in Object.keys($scopedSlots)"
        #[key]="{ item, index }"
      >
        <slot :name="key" :item="item" :index="index" />
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalPage"
      :per-page="perPage"
      align="right"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TableCard',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    fields: {
      type: Array,
      default: () => [],
    },
    requestName: {
      type: Function,
      default: () => null,
    },
    totalItems: {
      type: Number,
      default: 1,
    },
    address: {
      type: String,
      required: false,
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
    totalPage() {
      return Math.ceil(this.totalItems / this.perPage);
    },
  },
  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.requestName({
          address: this.address,
          page: val,
          limit: this.perPage,
        });
      },
    },
  },
};
</script>

<style lang="scss">
.table {
  & th,
  td {
    vertical-align: middle;
    border-top: none;
  }
  &__title {
    @include font($roboto-font, 16px, $font-grey, 500);
    line-height: 14px;

    &--disable {
      visibility: hidden;
    }
  }
  &__cell {
    border-bottom: 1px solid $gray !important;
    @include font($roboto-font, 16px, $font-black, 500);
    line-height: 24px;
    vertical-align: middle;

    & img {
      vertical-align: middle;
    }

    &--blue {
      color: #0085ff;
      text-decoration: underline;
    }
  }

  &__name,
  &__address {
    padding: 12px 0;
  }
  &__name {
    @include font($roboto-font, 16px, #0085ff, 500);
  }
}
.w-390 {
  width: 390px;
}
.w-180 {
  width: 180px;
}
</style>
