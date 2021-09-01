<template>
  <div class="container-lg account-details">
    <AccountCard @selectedTab="selectedTab" />

    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import AccountCard from '@/components/accounts/AccountCard.vue';
import AccountTransactionsList from '@/components/accounts/AccountTransactionsList.vue';
import StakingProvider from '../components/accounts/StakingProvider.vue';

export default {
  components: {
    StakingProvider,
    AccountTransactionsList,
    AccountCard,
  },
  data() {
    return {
      activeComponent: 'AccountTransactionsList',
    };
  },
  methods: {
    selectedTab(tab) {
      switch (tab.key) {
        case 'transactions':
          this.activeComponent = 'AccountTransactionsList';
          break;
        case 'staking_providers':
          this.activeComponent = 'StakingProvider';
          break;
        default:
      }
    },
  },
};
</script>

<style lang="scss">
.account-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
