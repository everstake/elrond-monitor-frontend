<template>
  <div id="app">
    <header class="page-header">
      <AppHeader />
    </header>

    <main class="page-body">
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

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
