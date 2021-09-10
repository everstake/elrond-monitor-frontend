<template>
  <div class="container-lg m-0 p-0">
    <b-collapse
      id="menu-burger-collapse"
      :class="['burger-menu', darkModeClassBackground, darkModeClassFonts]"
    >
      <b-nav class="burger-menu__nav">
        <li v-b-toggle.menu-burger-collapse>
          <router-link to="/blocks" :class="['navbar__link']">
            Blocks
          </router-link>
        </li>
        <li v-b-toggle.menu-burger-collapse>
          <router-link to="/epoch" :class="['navbar__link']">
            Epoch
          </router-link>
        </li>
        <li v-b-toggle.menu-burger-collapse>
          <router-link to="/transactions" :class="['navbar__link']">
            Transactions
          </router-link>
        </li>
        <li v-b-toggle.menu-burger-collapse>
          <router-link to="/accounts" :class="['navbar__link']">
            Accounts
          </router-link>
        </li>
        <li v-b-toggle.menu-burger-collapse>
          <router-link to="/validators" :class="['navbar__link']">
            Validators
          </router-link>
        </li>

        <li>
          <span v-b-toggle.deep-nav
            >Deep dive <b-icon icon="chevron-down"
          /></span>

          <b-collapse id="deep-nav">
            <div class="burger-menu__collapse-list">
              <a href="#">Network</a>
              <router-link :to="{ name: 'Calculator' }"
                >APR calculator</router-link
              >
            </div>
          </b-collapse>
        </li>

        <li>
          <span v-b-toggle.links>Links <b-icon icon="chevron-down" /></span>

          <b-collapse id="links">
            <div class="burger-menu__collapse-list">
              <a href="https://elrond.com/" target="_blank">Elrond website</a>
              <a href="https://maiar.exchange/" target="_blank"
                >Maiar exchange</a
              >
              <a href="https://wallet.elrond.com/" target="_blank"
                >Web wallet</a
              >
              <a href="https://maiar.com/" target="_blank">Maiar wallet</a>
              <a href="https://medium.com/everstake/tagged/egld" target="_blank"
                >Staking guides</a
              >
              <a
                href="https://elrond.com/assets/files/elrond-whitepaper.pdf"
                target="_blank"
                >Whitepaper</a
              >
              <a href="https://elrond.com/blog/" target="_blank">Elrond blog</a>
              <a href="https://docs.elrond.com/" target="_blank">Elrond Docs</a>
            </div>
          </b-collapse>
        </li>
      </b-nav>
    </b-collapse>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeaderMenu',
  computed: {
    ...mapGetters(['darkModeClassBackground', 'darkModeClassFonts']),
  },
};
</script>

<style lang="scss" scoped>
.burger-menu {
  &__nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem;
  }

  &__collapse-list {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  li .router-link-exact-active {
    color: $blue;
  }
}
</style>
