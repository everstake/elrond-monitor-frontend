<template>
  <div class="container-lg transactions">
    <TransactionsList />
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
