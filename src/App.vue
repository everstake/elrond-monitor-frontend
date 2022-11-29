<template>
  <div id="app">
    <header class="page-header">
      <AppHeader />
      <AppHeaderMenu />
      <SearchBar />
      <!--      <Banner />-->
    </header>

    <main class="page-body" :class="{ 'black-body-background': darkModeOn }">
      <router-view />
    </main>

    <footer class="page-footer">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppHeader from '@/components/app/AppHeader.vue';
import AppFooter from '@/components/app/AppFooter.vue';
import SearchBar from '@/components/app/SearchBar.vue';
import AppHeaderMenu from '@/components/app/AppHeaderMenu.vue';
// import Banner from './components/Banner.vue';

export default {
  name: 'App',
  components: {
    // Banner,
    AppHeaderMenu,
    AppHeader,
    AppFooter,
    SearchBar,
  },
  computed: {
    ...mapGetters(['darkModeOn']),
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.page {
  &-body {
    background-color: #f7f7f7;
    flex-grow: 1;
    padding: 30px 0;
    display: flex;
    justify-content: center;
  }
}
</style>
