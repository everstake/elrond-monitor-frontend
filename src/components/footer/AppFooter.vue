<template>
  <div
    :class="{
      'footer': true,
      'black-background': darkModeOn,
      'white-background': !darkModeOn,
    }"
  >
    <div class="footer__top-group">
      <h2 class="footer__copyright">Copyright 2021 - everstake.com</h2>

      <div class="footer__media">
        <a href="#" class="footer__icon-link">
          <img
            src="~@/assets/img/media/facebook.svg"
            alt="facebook"
            class="footer__icon"
          />
        </a>
        <a href="#" class="footer__icon-link">
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
          <router-link to="/guides" class="navbar__link">
            Staking guides
          </router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/web-wallet" class="navbar__link">
            Web wallet
          </router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/maiar-wallet" class="navbar__link">
            Maiar wallet
          </router-link>
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
    ...mapGetters([
      'darkModeOn',
    ]),
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

  &__copyright {
    @include font($roboto-font, 14px, $font-black, 500);
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
    @include font($roboto-font, 14px, $font-black, 500);
    line-height: 24px;

    &:hover {
      color: $blue;
    }
  }
}
</style>
