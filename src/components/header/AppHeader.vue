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
            <router-link to="web-wallet" class="navbar__link">
              Web wallet
            </router-link>
          </li>
          <li class="navbar__item">
            <router-link to="/maiar-wallet" class="navbar__link">
              Maiar wallet
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="header__options">
        <button class="header__option-btn">
          <img src="~@/assets/img/optionsIcon/moon.svg" alt="night mode">
        </button>
        <b-dropdown variant="link" id="dropdown-right" no-caret offset="100">
          <template #button-content>
            <button class="header__option-btn">
              <img src="~@/assets/img/optionsIcon/menu.svg" alt="menu">
            </button>
          </template>
          <b-dropdown-item href="#">Elrond website</b-dropdown-item>
          <b-dropdown-item href="#">Maiar exchange</b-dropdown-item>
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
    gap: 10px;
    align-items: center;

    &__subtitle {
      font-size: 12px;
      color: #1f95ff;
    }

    &__title {
      line-height: 16px;
    }

    &__img {
      height: 40px;
    }
  }

  .navbar {
    &__list {
      display: flex;
      align-items: center;
      gap: 45px;
    }
  }
}
</style>