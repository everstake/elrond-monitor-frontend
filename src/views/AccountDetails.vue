<template>
  <div class="container-lg account-details">
    <AccountCard />

    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AccountCard from '@/components/accounts/AccountCard.vue';
import AccountTransactionsList from '@/components/accounts/AccountTransactionsList.vue';
import StakingProvider from '../components/accounts/StakingProvider.vue';

export default {
  components: {
    StakingProvider,
    AccountTransactionsList,
    AccountCard,
  },
  computed: {
    ...mapGetters(['activeTab']),
    activeComponent() {
      switch (this.activeTab.key) {
        case 'transactions':
          return 'AccountTransactionsList';
        case 'staking_providers':
          return 'StakingProvider';
        default:
          return 'AccountTransactionsList';
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
