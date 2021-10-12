<template>
  <div class="container-lg account-details" style="position: relative">
    <AccountCard @selectedTab="selectedTab" style="z-index: 5" />

    <AppInteractiveIcon
      v-if="
        !loadingAcc &&
        account.address ===
          'erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqplllst77y4l' &&
        darkModeOn
      "
      :options="{ top: '-0.4%', left: '95%', opacity: 0.2 }"
    />

    <component :is="activeComponent"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AccountCard from '../components/accounts/account-details/AccountCard.vue';
import AccountTransactionsList from '../components/accounts/account-details/AccountTransactionsList.vue';
import AccountStakingProviders from '../components/accounts/account-details/AccountStakingProviders.vue';
import AccountStakingEvents from '../components/accounts/account-details/AccountStakingEvents.vue';
import AppInteractiveIcon from '../components/AppInteractiveIcon.vue';

export default {
  components: {
    AppInteractiveIcon,
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
    ...mapGetters(['account', 'loadingAcc', 'darkModeOn']),
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
