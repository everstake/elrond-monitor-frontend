<template>
  <div class="header">
    <b-navbar type="dark" variant="dark">
      <b-container>
        <b-col cols="5">
          <b-navbar-nav>
            <b-nav-item :to="'/calculator'">APR calculator</b-nav-item>
            <b-nav-item :to="'/guides'">Staking guides</b-nav-item>
            <b-nav-item :to="'/web-wallet'">Web wallet</b-nav-item>
            <b-nav-item :to="'/maiar-wallet'">Maiar wallet</b-nav-item>
          </b-navbar-nav>
        </b-col>

        <b-col cols="3">
          <div class="header__search-group">
            <b-input-group>
              <b-form-input class="mr-sm-2" placeholder="Search" />
            </b-input-group>
            <b-button>
              <b-icon icon="search" />
            </b-button>
          </div>
        </b-col>

        <b-col cols="2">
          <div class="header__options-group">
            <b-button class="header__option-btn">
              <b-icon scale="1.3" icon="moon" />
            </b-button>
             <b-dropdown
                variant="link"
                id="dropdown-right"
                no-caret
                offset="100"
              >
              <template #button-content>
                <b-button class="header__option-btn">
                  <b-icon icon="three-dots-vertical" />
                </b-button>
              </template>
              <b-dropdown-item href="#">Elrond website</b-dropdown-item>
              <b-dropdown-item href="#">Maiar exchange</b-dropdown-item>
              <b-dropdown-item href="#">Whitepaper</b-dropdown-item>
              <b-dropdown-item href="#">Elrond blog</b-dropdown-item>
              <b-dropdown-item href="#">Elrond Docs</b-dropdown-item>
            </b-dropdown>
            
          </div>
        </b-col>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss">
  .header {
    &__search-group, &__options-group {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
    &__option-btn {
      background: none !important;
      border: none !important;
    }
  }
</style>