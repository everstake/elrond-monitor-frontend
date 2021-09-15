<template>
  <AppSpinner v-if="loadingAcc" :size-bool="true" />

  <div v-else class="account-card" :class="[darkModeClassBackground]">
    <h1 class="account-card__title account-card__item">Account details</h1>
    <div class="account-card__address-group account-card__item">
      <p class="account-card__address">
        {{ account.address }}
      </p>

      <BtnCopy :address="account.address" />
    </div>

    <div class="account-card__info-group">
      <div class="account-card__info">
        <p class="account-card__info-item">Balance</p>
        <p class="account-card__info-item">
          {{ account.balance | formatToken }}
        </p>
      </div>

      <div class="account-card__info">
        <p class="account-card__info-item">Stake</p>
        <p class="account-card__info-item">{{ account.delegated }}</p>
      </div>

      <div class="account-card__info">
        <p class="account-card__info-item">Unstake</p>
        <p class="account-card__info-item">{{ account.undelegated }}</p>
      </div>

      <div class="account-card__info">
        <p class="account-card__info-item">Total rewards</p>
        <p class="account-card__info-item">{{ account.rewards_claimed }}</p>
      </div>
    </div>

    <div class="tabs">
      <p
        v-for="tab in accountTabs"
        :key="tab.key"
        :class="[
          'tabs__tab',
          darkModeClassFonts,
          { 'tabs__tab--active': currentTab === tab },
        ]"
        @click="chooseTab(tab)"
      >
        {{ tab.label }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BtnCopy from '../../BtnCopy.vue';
import AppSpinner from '../../app/AppSpinner.vue';

const accountTabs = [
  {
    key: 'transactions',
    label: 'Transactions',
  },
  {
    key: 'staking_providers',
    label: 'Staking providers',
  },
];

export default {
  name: 'AccountCard',
  components: {
    AppSpinner,
    BtnCopy,
  },
  data() {
    return {
      accountTabs,
      currentTab: accountTabs[0],
    };
  },
  computed: {
    ...mapGetters([
      'darkModeOn',
      'account',
      'darkModeClassFonts',
      'darkModeClassBackground',
      'loadingAcc',
    ]),
  },
  watch: {
    $route: {
      handler() {
        this.fetchAccount(this.$route.params.id);
      },
    },
  },
  created() {
    this.fetchAccount(this.$route.params.id);
  },
  methods: {
    ...mapActions(['fetchAccount']),
    chooseTab(tab) {
      this.currentTab = tab;
      this.$emit('selectedTab', tab);
    },
  },
};
</script>

<style lang="scss">
.account-card {
  padding: 15px 40px 0;
  border-radius: $border-radius-card;
  @include font(16px, $font-grey, 400);
  &__item {
    padding: 18px 10px;
    border-bottom: 1px solid $gray;
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    @include lg-down {
      min-width: 150px;
    }
  }
  &__btn {
    background: none;
  }
  &__address-group {
    display: flex;
    gap: 10px;
    align-self: center;
  }
  &__info-group {
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>