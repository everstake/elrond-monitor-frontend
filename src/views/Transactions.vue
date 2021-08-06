<template>
  <div class="wrapper">
    <div class="transactions">
      <TransactionsList />
    </div>
  </div>
</template>

<script>
import TransactionsList from '@/components/transactions/TransactionsList.vue';

export default {
  name: 'Transactions',
  components: { TransactionsList },
};
</script>

<style lang="scss"></style>
