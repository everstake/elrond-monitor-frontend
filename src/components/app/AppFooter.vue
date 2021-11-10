<template>
  <div
    :class="{
      footer: true,
      'black-background': darkModeOn,
      'white-background': !darkModeOn,
    }"
  >
    <div class="footer__top-group">
      <h2 class="footer__copyright">
        Copyright {{ currentYear }} -
        <a href="https://everstake.one/" target="_blank">everstake.one</a>
      </h2>

      <div class="footer__media">
        <a
          href="https://www.facebook.com/everstake.one/"
          class="footer__icon-link"
          target="_blank"
        >
          <img
            src="~@/assets/img/media/facebook.svg"
            alt="facebook"
            class="footer__icon"
          />
        </a>
        <a
          href="https://twitter.com/Everstake_pool/"
          class="footer__icon-link"
          target="_blank"
        >
          <img
            src="~@/assets/img/media/twitter.svg"
            alt="twitter"
            class="footer__icon"
          />
        </a>
      </div>
    </div>
    <div class="footer__navbar navbar">
      <ul class="navbar__list">
        <li class="navbar__item">
          <router-link to="/calculator" class="navbar__link">
            APR calculator
          </router-link>
        </li>
        <li class="navbar__item">
          <a
            href="https://medium.com/everstake/tagged/egld"
            target="_blank"
            class="navbar__link"
          >
            Staking guides
          </a>
        </li>
        <li class="navbar__item">
          <a
            href="https://wallet.elrond.com/"
            target="_blank"
            class="navbar__link"
          >
            Web wallet
          </a>
        </li>
        <li class="navbar__item">
          <a href="https://maiar.com/" target="_blank" class="navbar__link">
            Maiar wallet
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Footer',
  computed: {
    ...mapGetters(['darkModeOn']),
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 26px 0px;

  &__icon {
    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.3);
    }
  }

  &__copyright {
    @include font(14px, $font-black, 500);
  }

  &__top-group,
  &__media,
  &__icon-link {
    display: flex;
    align-items: center;
  }

  &__top-group {
    gap: 40px;
  }

  &__media {
    gap: 20px;
  }
}
.navbar {
  &__list {
    display: flex;
    gap: 45px;
  }
  &__link {
    @include font(14px, $font-black, 500);
    line-height: 24px;

    &:hover {
      color: $blue;
    }
  }
}
</style>
