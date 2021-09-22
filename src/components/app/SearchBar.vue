<template>
  <div :class="['search-bar', darkModeClassBgLightBlue]">
    <div class="search-bar__wrapper container-lg">
      <button class="search-bar__btn">
        <img
          src="~@/assets/img/searchIcon.svg"
          alt="search"
          class="search-bar__img"
        />
      </button>
      <input
        v-model.trim="isSearch"
        type="text"
        :class="['search-bar__input', darkModeClassBackground]"
        placeholder="Search for block, accounts, transactions and validators..."
        @change="searchBat"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  getBlock,
  getTransaction,
  getMiniblock,
  getValidatorStats,
} from '../../api/services';

export default {
  name: 'SearchBar',
  data() {
    return {
      isSearch: '',
    };
  },
  computed: {
    ...mapGetters(['darkModeClassBackground', 'darkModeClassBgLightBlue']),
  },
  methods: {
    async searchBat() {
      const name = this.isSearch.toLocaleLowerCase();

      switch (this.isSearch.length) {
        case 62:
          if (this.$route.params.id !== name) {
            this.$router.replace({
              name: 'AccountDetails',
              params: { id: name },
            });
          }
          break;

        case 64:
          try {
            if (this.$route.params.id !== name) {
              const resp = await Promise.any([
                getBlock(name),
                getTransaction(name),
                getMiniblock(name),
              ]);
              this.$router.replace(resp.config.url);
            }
          } catch (e) {
            this.$bvToast.toast('Page not found!', {
              title: 'Error!',
              autoHideDelay: 3000,
              variant: 'danger',
            });
          }
          break;

        default:
          try {
            if (this.$route.params.id !== name) {
              await getValidatorStats({ identity: name });
              this.$router.replace({
                name: 'ValidatorsDetails',
                params: { identity: name },
              });
            }
          } catch (e) {
            this.$bvToast.toast('Page not found!', {
              title: 'Error!',
              autoHideDelay: 3000,
              variant: 'danger',
            });
          }
      }

      this.isSearch = '';
    },
  },
};
</script>

<style lang="scss">
.search-bar {
  display: flex;
  justify-content: center;
  padding: 15px 0;

  &__wrapper {
    position: relative;
  }

  &__btn {
    position: absolute;
    background: none;
    top: 4px;
    left: 25px;
  }

  &__input {
    width: 100%;
    height: 30px;
    outline: none;
    border-radius: 8px;
    padding: 0 50px;
    @include font(14px, #969696, 400);
    line-height: 24px;
  }
}
</style>
