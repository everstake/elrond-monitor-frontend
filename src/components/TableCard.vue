<template>
  <div
    :class="{
      'table-card': true,
      'white-background': !darkModeOn,
      'black-background': darkModeOn,
    }"
  >
    <h1 
      class="table-card__title"
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
      <template #cell(address)="data">
        <router-link to="/account-details">
          <p class="table__address">
            {{ data.item.address }}
          </p>
        </router-link>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="items.length"
      :per-page="perPage"
      align="right"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    items: {
      type: Array,
      default: () => [1,1],
    },
    fields: {
      type: Array,
      default: () => [],
    },
  },
  name: 'TableCard',
  computed: {
    ...mapGetters(['darkModeOn']),
  },
  data() {
    return {
      perPage: 9,
      currentPage: 1,
    };
  },
};
</script>

<style lang="scss">
.table-card {
  border-radius: 8px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__title {
    text-align: center;
    @include font($roboto-font, 36px, $body-dark, 500);
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

  &__address {
    padding: 12px 0;
  }
}
.w-390 {
  width: 390px;
}
.w-180 {
  width: 180px;
}
</style>