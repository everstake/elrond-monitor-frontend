<template>
  <div :class="['header', darkModeClassBackground]">
    <div class="header__wrapper container-lg">
      <router-link to="/" class="header__logo logo">
        <img
          v-if="!darkModeOn"
          src="~@/assets/img/elrondLogo.svg"
          alt="logo"
          class="logo__img"
        />
        <img
          v-else
          src="~@/assets/img/elrondDarkLogo.svg"
          alt="logo"
          class="logo__img"
        />
        <div class="logo__title-group">
          <p class="logo__title">
            Elrond monitor <br />
            <span class="logo__subtitle"> by Everstake </span>
          </p>
        </div>
      </router-link>

      <b-nav class="navbar__list">
        <li class="navbar__item">
          <router-link
            to="/blocks"
            :class="['navbar__link', darkModeClassFonts]"
          >
            Blocks
          </router-link>
        </li>
        <li class="navbar__item">
          <router-link
            to="/epoch"
            :class="['navbar__link', darkModeClassFonts]"
          >
            Epoch
          </router-link>
        </li>
        <li class="navbar__item">
          <router-link
            to="/transactions"
            :class="['navbar__link', darkModeClassFonts]"
          >
            Transactions
          </router-link>
        </li>
        <li class="navbar__item">
          <router-link
            to="/accounts"
            :class="['navbar__link', darkModeClassFonts]"
          >
            Accounts
          </router-link>
        </li>
        <li class="navbar__item">
          <router-link
            to="/validators"
            :class="['navbar__link', darkModeClassFonts]"
          >
            Validators
          </router-link>
        </li>

        <li class="navbar__item">
          <router-link
            to="/calculator"
            :class="['navbar__link', darkModeClassFonts]"
          >
            APR calculator
          </router-link>
        </li>
      </b-nav>

      <div class="header__options">
        <button class="header__option-btn" @click="changeMode">
          <b-icon
            v-if="!darkModeOn"
            icon="moon"
            :class="[darkModeClassFonts]"
          />
          <b-icon
            v-else
            icon="brightness-high-fill"
            :class="[darkModeClassFonts]"
          />
        </button>

        <div
          v-b-toggle.menu-burger-collapse
          class="burger"
          :class="{ 'burger__line--rotate': showMenu }"
        >
          <div
            class="burger__line"
            :class="{ 'burger__line--dark-mode': darkModeOn }"
          />
          <div
            class="burger__line"
            :class="{ 'burger__line--dark-mode': darkModeOn }"
          />
          <div
            class="burger__line"
            :class="{ 'burger__line--dark-mode': darkModeOn }"
          />
        </div>

        <b-dropdown
          variant="link"
          right
          no-caret
          :menu-class="darkModeClassBackground"
        >
          <template #button-content>
            <button class="header__option-btn">
              <b-icon icon="grid-fill" :class="[darkModeClassFonts]" />
            </button>
          </template>
          <b-dropdown-item
            href="https://elrond.com/"
            target="_blank"
            :link-class="darkModeClassFonts"
            >Elrond website</b-dropdown-item
          >
          <b-dropdown-item
            href="https://maiar.exchange/"
            target="_blank"
            :link-class="darkModeClassFonts"
            >Maiar exchange</b-dropdown-item
          >
          <b-dropdown-item
            href="https://wallet.elrond.com/"
            target="_blank"
            :link-class="darkModeClassFonts"
            >Web wallet</b-dropdown-item
          >
          <b-dropdown-item
            href="https://maiar.com/"
            target="_blank"
            :link-class="darkModeClassFonts"
            >Maiar wallet</b-dropdown-item
          >
          <b-dropdown-item
            href="https://medium.com/everstake/tagged/egld"
            target="_blank"
            :link-class="darkModeClassFonts"
            >Staking guides</b-dropdown-item
          >
          <b-dropdown-item
            href="https://elrond.com/assets/files/elrond-whitepaper.pdf"
            target="_blank"
            :link-class="darkModeClassFonts"
            >Whitepaper</b-dropdown-item
          >
          <b-dropdown-item
            href="https://elrond.com/blog/"
            target="_blank"
            :link-class="darkModeClassFonts"
            >Elrond blog</b-dropdown-item
          >
          <b-dropdown-item
            href="https://docs.elrond.com/"
            target="_blank"
            :link-class="darkModeClassFonts"
            >Elrond Docs</b-dropdown-item
          >
        </b-dropdown>

        <b-dropdown
          ref="newtworkDd"
          right
          no-caret
          variant="none"
          class="network"
          :menu-class="darkModeClassBackground"
        >
          <template #button-content>
            <span :class="['network__title', darkModeClassFonts]">
              {{ networkType }}
            </span>
          </template>
          <b-dropdown-item
            href="https://devnet.elrondmonitor.com/"
            :link-class="darkModeClassFonts"
            :disabled="networkType === 'Devnet'"
            @click.native="hideDropDown('Mainnet')"
          >
            <span class="mr-1">Devnet</span>
            <b-icon v-if="!darkModeOn" icon="bezier" />
          </b-dropdown-item>
          <b-dropdown-item
            href="https://elrondmonitor.com/"
            :link-class="darkModeClassFonts"
            :disabled="networkType === 'Mainnet'"
            @click.native="hideDropDown('Mainnet')"
          >
            <span class="mr-1">Mainnet</span>
            <b-icon v-if="!darkModeOn" icon="bezier" />
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  data() {
    return {
      showMenu: false,
      networkType: 'Mainnet',
    };
  },
  computed: {
    ...mapGetters([
      'darkModeOn',
      'darkModeClassBackground',
      'darkModeClassFonts',
    ]),
  },
  mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      if (collapseId === 'menu-burger-collapse') {
        this.showMenu = isJustShown;
        this.$root.$emit('hide', 'links');
      }
    });
  },
  created() {
    // eslint-disable-next-line no-restricted-globals
    if (location.hostname === 'devnet.elrondmonitor.com') {
      this.networkType = 'Devnet';
    }
  },
  methods: {
    ...mapActions({
      changeMode: 'changeMode',
    }),
    hideDropDown(type) {
      if (type === this.networkType) {
        this.$refs.newtworkDd.hide();
      }
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  height: 60px;

  &__logo {
    min-width: 150px;
  }

  &__options {
    display: flex;
    align-items: center;
    gap: 10px;

    @include md-down {
      & .dropdown {
        display: none;
      }
    }

    & .header__option-btn {
      & .b-icon.bi {
        font-size: 1.7rem;
      }
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__option-btn {
    background: none !important;
    border: none !important;
  }

  &__network-btn {
    @include font(24px, $main-blue, 500);
  }

  .logo {
    display: flex;
    gap: 20px;
    align-items: center;

    &:hover {
      text-decoration: none;
    }

    &__subtitle {
      @include font(11px, $main-blue, 500);
    }

    &__title {
      line-height: 13px;
      @include font(14px, #969696, 700);
    }

    &__img {
      height: 26px;
      width: 26px;
    }
  }

  .navbar {
    &__list {
      display: flex;
      align-items: center;
      height: 100%;
      gap: 1rem;

      @include md-down {
        display: none;
      }

      @include lg-down {
        gap: 0.3rem;
      }
    }

    &__item {
      display: flex;
      width: 120px;
      height: 100%;
      white-space: nowrap;

      @include xl-down {
        width: 100px;
      }
    }

    &__link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-bottom: 4px solid transparent;

      &.router-link-exact-active {
        color: $blue;
        border-bottom: 4px solid $blue;
      }

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.burger {
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @include md-down {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  &__line {
    width: 2rem;
    height: 0.1rem;
    background-color: $font-black;
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 5px;

    &--dark-mode {
      background-color: $font-white;
    }

    &--rotate {
      :first-child {
        transform: rotate(45deg);
      }

      :nth-child(2) {
        opacity: 0;
      }

      :nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }
}

.network {
  &__title {
    @include font(18px, $font-black);
  }

  & .dropdown-menu {
    min-width: 1rem;
  }
}
</style>
