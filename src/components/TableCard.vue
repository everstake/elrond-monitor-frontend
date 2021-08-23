<template>
  <div :class="['table-card', darkModeClassBackground]">
    <h1
      class="table-card__title table-card__title--position"
      :class="{
        'white-font-main': darkModeOn,
        'black-font-main': !darkModeOn,
      }"
    >
      <slot name="header" />
    </h1>

    <AppSpinner v-if="loading" :size-bool="true" />

    <div v-else-if="!items.length" class="d-flex justify-content-center mb-3">
      Not data
    </div>

    <div v-else class="table__wrapper">
      <b-table
        id="my-table"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :dark="darkModeOn"
      >
        <template
          v-for="key in Object.keys($scopedSlots)"
          #[key]="{ item, index }"
        >
          <slot :name="key" :item="item" :index="index" />
        </template>
      </b-table>
    </div>

    <b-pagination
      v-model="currentPage"
      :total-rows="totalPage"
      :per-page="perPage"
      align="right"
      aria-controls="my-table"
      :class="{ 'pagination__page-link--dark': darkModeOn }"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppSpinner from './AppSpinner.vue';

export default {
  name: 'TableCard',
  components: {
    AppSpinner,
  },
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
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(['darkModeOn', 'darkModeClassBackground']),
    totalPage() {
      return Math.ceil(this.totalItems / this.perPage);
    },
  },
  watch: {
    currentPage: {
      immediate: true,
      async handler(val) {
        await this.requestName({
          address: this.address,
          page: val,
          limit: this.perPage,
        });
      },
    },

    async requestName(func) {
      await func({
        address: this.address,
        page: 1,
        limit: this.perPage,
      });
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss">
.table {
  font-family: $roboto-font;
  color: $font-black;

  &__wrapper {
    overflow-x: auto;
    width: 100%;
  }

  & th,
  td {
    vertical-align: middle;
    border-top: none;
  }

  &-dark {
    background-color: $main-black;
    color: $font-white;
  }

  &-card {
    border-radius: 8px;
    padding: 0 32px 32px;
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

  &__title {
    @include font($roboto-font, 16px, $font-grey, 500);
    line-height: 14px;

    &--disable {
      visibility: hidden;
    }
  }
  &__cell {
    border-bottom: 1px solid $gray !important;
    line-height: 24px;
    vertical-align: middle;
    min-width: 155px;

    & img {
      vertical-align: middle;
    }

    &--blue {
      color: $main-blue;
    }
  }

  &__name,
  &__address {
    padding: 12px 0;
  }
  &__name {
    @include font($roboto-font, 16px, $main-blue, 500);
  }
}

.w-390 {
  width: 390px;
}
.w-180 {
  min-width: 180px;
}
.w-70 {
  min-width: 70px;
}

.pagination {
  &__page-link--dark {
    .page-link,
    .page-item.disabled .page-link {
      background-color: $main-black;
      color: $font-white;
    }
  }
}
</style>
