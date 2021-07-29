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
    <b-table
      id="my-table"
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
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
      @change="onChangePage"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    fields: {
      type: Array,
      default: () => [],
    },
    totalItems: {
      type: Number,
    },
  },
  name: 'TableCard',
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
  methods: {
    onChangePage(val) {
      this.$emit('changedPage', { page: 1, limit: this.perPage * val });
    },
  },
};
</script>

<style lang="scss">
.table-card {
  border-radius: 8px;
  padding: 0px 50px;
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
}
.table {
  &__title {
    @include font($roboto-font, 16px, $font-grey, 500);
    line-height: 14px;
  }
  &__cell {
    border-bottom: 1px solid #e8e8e8 !important;
    @include font($roboto-font, 16px, $font-black, 500);
    line-height: 24px;

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
.posit-img {
  vertical-align: middle;
}
</style>
