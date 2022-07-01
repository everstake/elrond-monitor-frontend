<template>
  <div :class="['table-card', darkModeClassBackground]">
    <h1
      class="table-card__title table-card__title--position"
      :class="[
        {
          'white-font-main': darkModeOn,
          'black-font-main': !darkModeOn,
        },
        customClass,
      ]"
    >
      <slot name="header" />
    </h1>

    <slot name="filter" />

    <AppSpinner v-if="loading" :size-bool="true" />

    <div
      v-else-if="!items || !items.length"
      :class="[
        'd-flex justify-content-center align-items-center mb-3 h-100',
        darkModeClassFonts,
      ]"
    >
      Not data
    </div>

    <div v-else class="table__wrapper">
      <b-table
        id="my-table"
        :items="items"
        :fields="fields"
        :per-page="totalItems"
        :dark="darkModeOn"
        responsive
      >
        <template
          v-for="key in Object.keys($scopedSlots)"
          #[key]="{ item, index }"
        >
          <slot :name="key" :item="item" :index="index" />
        </template>
      </b-table>

      <div class="nav-pagination">
        <div :class="['nav-pagination__wrapper-input', darkModeClassFonts]">
          <span>Go to</span>
          <b-form-input type="number" placeholder="10" @change="choosePage" />
          <span>page</span>
        </div>

        <b-pagination
          :total-rows="totalItems"
          :per-page="perPage"
          align="right"
          aria-controls="my-table"
          :class="{ 'pagination__page-link--dark': darkModeOn }"
          :value="currentPage"
          @change="onChangePage"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppSpinner from './app/AppSpinner.vue';

export default {
  name: 'CommonTable',
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
    loading: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      required: false,
    },
    fetchParams: {
      type: Object,
      required: false,
      default: () => {},
    },
    socketSendParams: {
      type: Object,
      required: false,
      default: () => {},
    },
    requestWebSocket: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters([
      'darkModeOn',
      'darkModeClassBackground',
      'darkModeClassFonts',
    ]),
  },
  watch: {
    fetchParams: {
      immediate: true,
      async handler() {
        await this.requestName({
          ...this.fetchParams,
          page: 1,
          limit: this.perPage,
        });
        this.currentPage = 1;
      },
    },

    currentPage: {
      immediate: true,
      handler() {
        if (this.currentPage === 1 && this.socketSendParams) {
          this.$webSocketsConnect();
          this.$webSocketsSend(this.socketSendParams);
          this.$webSocketMessage(this.requestWebSocket);
        } else {
          this.$webSocketsDisconnect();
        }
      },
    },
  },
  methods: {
    async choosePage(page) {
      if (page <= 0) {
        this.currentPage = 1;
        await this.requestName({
          ...this.fetchParams,
          page: 1,
          limit: this.perPage,
        });
      } else {
        this.currentPage = page;
        await this.requestName({
          ...this.fetchParams,
          page,
          limit: this.perPage,
        });
      }
    },
    async onChangePage(page) {
      // this.$router.push({ query: { page: page - 1 } });
      // console.log(this.$route.query.page);

      this.currentPage = page;
      await this.requestName({
        ...this.fetchParams,
        page,
        limit: this.perPage,
      });
    },
  },
};
</script>

<style lang="scss">
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

.nav-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include sm-down {
    flex-direction: column;
    gap: 15px;
  }

  &__wrapper-input {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & input {
      width: 64px;
      height: 40px;
      border-radius: 8px;
      background-color: transparent;

      &:active,
      &:focus {
        outline: none;
        box-shadow: none;
        background-color: transparent;
      }
    }
  }
}
</style>
