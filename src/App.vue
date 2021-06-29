<template>
  <div id="app">
    <header class="page-hader">
      <AppHeader />
    </header>
    <router-view/>
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
