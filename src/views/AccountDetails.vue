<template>
  <b-container class="account-details">
    <AccountCard />

    <AccountTransactionsList />
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import AccountCard from '@/components/accounts/AccountCard.vue';
import AccountTransactionsList from '@/components/accounts/AccountTransactionsList.vue';

export default {
  components: {
    AccountTransactionsList,
    AccountCard,
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchAccount(this.$route.params.id);
        this.fetchTransactions(this.$route.params.id);
      },
    },
  },
  methods: {
    ...mapActions(['fetchTransactions', 'fetchAccount']),
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
