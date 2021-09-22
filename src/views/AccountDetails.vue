<template>
  <div class="container-lg account-details">
    <AccountCard @selectedTab="selectedTab" />

    <component :is="activeComponent"></component>
  </div>
</template>

<script>
import AccountCard from '@/components/accounts/account-details/AccountCard.vue';
import AccountTransactionsList from '@/components/accounts/account-details/AccountTransactionsList.vue';
import AccountStakingProviders from '../components/accounts/account-details/AccountStakingProviders.vue';
import AccountStakingEvents from '../components/accounts/account-details/AccountStakingEvents.vue';

export default {
  components: {
    AccountStakingProviders,
    AccountTransactionsList,
    AccountCard,
    AccountStakingEvents,
  },
  data() {
    return {
      activeTab: '',
    };
  },
  computed: {
    activeComponent() {
      switch (this.activeTab.key) {
        case 'transactions':
          return 'AccountTransactionsList';
        case 'staking_providers':
          return 'AccountStakingProviders';
        case 'staking_events':
          return 'AccountStakingEvents';
        default:
          return 'AccountTransactionsList';
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
.account-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
