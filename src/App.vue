<template>
  <div id="app">
    <header class="page-header">
      <AppHeader />
    </header>
    <main class="page-body">
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  }
  
}
</script>
<style lang="scss">

</style>
