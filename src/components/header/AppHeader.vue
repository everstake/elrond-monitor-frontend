<template>
  <div class="header white-background">
    <div class="header__wrapper wrapper">
      <div class="header__logo logo">
        <img src="~@/assets/img/elrondLogo.svg" alt="logo" class="logo__img" />
        <div class="logo__title-group">
          <p class="logo__title">
            Elrond monitor <br />
            <span class="logo__subtitle"> by Everstake </span>
          </p>
        </div>
      </div>

      <nav class="header__navbar navbar">
        <ul class="navbar__list">
          <li class="navbar__item">
            <router-link to="/blocks" class="navbar__link">
              Blocks
            </router-link>
          </li>
          <li class="navbar__item">
            <router-link to="/epoch" class="navbar__link"> Epoch </router-link>
          </li>
          <li class="navbar__item">
            <router-link to="/transactions" class="navbar__link">
              Transactions
            </router-link>
          </li>
          <li class="navbar__item">
            <router-link to="/accounts" class="navbar__link">
              Accounts
            </router-link>
          </li>
          <li class="navbar__item">
            <router-link to="/validators" class="navbar__link">
              Validators
            </router-link>
          </li>
          <li class="navbar__item">
            <b-dropdown
              variant="link"
              toggle-class="text-decoration-none"
              right
            >
              <template #button-content>
                <a class="navbar__link"> Deep dive </a>
              </template>
              <b-dropdown-item href="#">Network</b-dropdown-item>
              <b-dropdown-item href="#">APR calculator</b-dropdown-item>
            </b-dropdown>
          </li>
        </ul>
      </nav>

      <div class="header__options">
        <button class="header__option-btn">
          <img src="~@/assets/img/optionsIcon/moon.svg" alt="night mode" />
        </button>
        <b-dropdown variant="link" right no-caret>
          <template #button-content>
            <button class="header__option-btn">
              <img src="~@/assets/img/optionsIcon/menu.svg" alt="menu" />
            </button>
          </template>
          <b-dropdown-item href="#">Elrond website</b-dropdown-item>
          <b-dropdown-item href="#">Maiar exchange</b-dropdown-item>
          <b-dropdown-item href="#">Web wallet</b-dropdown-item>
          <b-dropdown-item href="#">Maiar wallet</b-dropdown-item>
          <b-dropdown-item href="#">Staking guides</b-dropdown-item>
          <b-dropdown-item href="#">Whitepaper</b-dropdown-item>
          <b-dropdown-item href="#">Elrond blog</b-dropdown-item>
          <b-dropdown-item href="#">Elrond Docs</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid #e8e8e8;
  height: 60px;

  &__options {
    display: flex;
    align-items: center;
    gap: 30px;
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
  .logo {
    display: flex;
    gap: 20px;
    align-items: center;

    &__subtitle {
      @include font($inter-font, 11px, #0085ff, 500);
    }

    &__title {
      line-height: 13px;
      @include font($inter-font, 14px, #969696, 700);
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
      gap: 45px;
    }
    &__link {
      @include font($inter-font, 16px, $font-black, 500);
      line-height: 24px;

      &:hover {
        color: #0085ff;
      }
    }
  }
}
</style>
