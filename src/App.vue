<template>
  <div id="app">
    <header class="page-header">
      <AppHeader />
      <SearchBar />
    </header>

    <main class="page-body" :class="{'black-body-background': darkModeOn}">
      <router-view />
    </main>

    <footer class="page-footer">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader.vue';
import AppFooter from '@/components/footer/AppFooter.vue';
import SearchBar from '@/components/header/SearchBar.vue';
import { mapGetters  } from 'vuex';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    SearchBar,
  },
  computed: {
    ...mapGetters([
      'darkModeOn',
    ]),
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
.page-body {
  background-color: #E5E5E5;
  flex-grow: 1;
}
</style>
