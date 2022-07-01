<template>
  <div class="container-lg token-wrap">
    <token-card @selectedTab="selectedTab" />

    <component :is="activeComponent"></component>
  </div>
</template>

<script>
import TokenCard from '../components/tokens/TokenCard.vue';
import TokensAccounts from '../components/tokens/TokensAccounts.vue';
import TokensTransactions from '../components/tokens/TokensTransactions.vue';

export default {
  name: 'TokenDetails',
  components: { TokenCard, TokensAccounts, TokensTransactions },
  data() {
    return {
      activeTab: '',
    };
  },
  computed: {
    activeComponent() {
      switch (this.activeTab.key) {
        case 'transactions':
          return 'TokensTransactions';
        case 'accounts':
          return 'TokensAccounts';
        default:
          return 'TokensTransactions';
      }
    },
  },
  methods: {
    selectedTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style lang="scss">
.token-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
