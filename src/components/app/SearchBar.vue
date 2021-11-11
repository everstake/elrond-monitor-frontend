<template>
  <div :class="['search-bar', darkModeClassBgLightBlue]">
    <div class="container-lg">
      <b-form class="search-bar__wrapper" @submit.prevent="searchBat(isSearch)">
        <button class="search-bar__btn search-bar__btn--search" type="submit">
          <b-icon icon="search" class="search-bar__img" />
        </button>

        <input
          type="text"
          :class="['search-bar__input', darkModeClassBackground]"
          placeholder="Search for block, accounts, transactions and validators..."
          :value="isSearch"
          @input="isSearch = $event.target.value.trim()"
        />

        <button
          v-show="isSearch.length"
          class="search-bar__btn search-bar__btn--clear"
          @click.prevent="clearField"
        >
          <b-icon icon="x" scale="1.8" class="search-bar__img" />
        </button>

        <div v-show="isSearch.length && validatorList.length" class="list">
          <span
            v-for="{ name, identity } in validatorList"
            :key="identity"
            class="list__item"
            @click.prevent="searchBat(identity)"
          >
            {{ name }}
          </span>
        </div>
      </b-form>
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
    validatorList() {
      const validators = JSON.parse(localStorage.getItem('Validators'));

      return validators.filter((item) => {
        return item.name.indexOf(this.isSearch.toLocaleLowerCase()) !== -1;
      });
    },
  },
  methods: {
    async searchBat(validator) {
      if (!this.isSearch || !this.isSearch.length) return;

      const name = validator.toLocaleLowerCase();

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
            if (this.$route.params.identity !== name) {
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

    clearField() {
      this.isSearch = '';
    },
  },
};
</script>

<style lang="scss">
.search-bar {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 15px 0;

  &__img {
    color: $dark-gary;
  }

  &__wrapper {
    position: relative;
  }

  &__btn {
    position: absolute;
    background: none;
    top: 50%;
    transform: translateY(-50%);

    &--search {
      left: 10px;
    }

    &--clear {
      right: 10px;
    }
  }

  &__input {
    width: 100%;
    height: 30px;
    outline: none;
    border-radius: 8px;
    padding: 0 50px;
    @include font(14px, #969696, 400);
    line-height: 24px;

    @include sm-down {
      padding: 0 35px;
    }
  }
}

.list {
  z-index: 10;
  position: absolute;
  top: 40px;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  max-width: 500px;

  border-radius: $border-radius-card;
  border: 1px solid $gray;
  background-color: #fff;

  &__item {
    &:hover {
      cursor: pointer;
      background-color: $light-blue;
    }
  }
}
</style>
