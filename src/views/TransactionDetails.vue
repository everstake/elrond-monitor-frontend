<template>
  <div class="wrapper">
    <TransactionsCard />
  </div>
</template>

<script>
import TransactionsCard from '@/components/transactions/TransactionCard.vue';

export default {
  name: 'TransactionDetails',
  components: { TransactionsCard },
};
</script>
