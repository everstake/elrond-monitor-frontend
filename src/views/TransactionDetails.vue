<template>
  <b-container>
    <TransactionsCard />
  </b-container>
</template>

<script>
import TransactionsCard from '@/components/transactions/TransactionCard.vue';

export default {
  name: 'TransactionDetails',
  components: { TransactionsCard },
};
</script>
