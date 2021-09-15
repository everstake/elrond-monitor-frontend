<template>
  <div class="tabs">
    <router-link
      v-for="tab in tabs"
      :key="tab.key"
      :to="{ name: tab.key }"
      :class="['tabs__tab', darkModeClassFonts]"
    >
      {{ tab.label }}
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const tabs = [
  {
    key: 'Validators',
    label: 'Validators',
  },
  {
    key: 'Staking-providers',
    label: 'Staking Providers',
  },
  {
    key: 'Nodes',
    label: 'Nodes',
  },
  {
    key: 'Ranking',
    label: 'Ranking',
  },
];

export default {
  name: 'Tabs',
  data() {
    return {
      tabs,
    };
  },
  computed: {
    ...mapGetters(['darkModeClassFonts', 'activeTab']),
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  overflow-x: auto;
}
</style>
