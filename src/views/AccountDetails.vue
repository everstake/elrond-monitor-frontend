<template>
  <div class="account-details">
    <AccountCard />

    <AccountTransactionsList />
  </div>
</template>

<script>
import AccountCard from '@/components/accounts/AccountCard.vue';
import AccountTransactionsList from '@/components/accounts/AccountTransactionsList.vue';

export default {
  components: {
    AccountTransactionsList,
    AccountCard,
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
