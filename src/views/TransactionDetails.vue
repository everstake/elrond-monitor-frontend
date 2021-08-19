<template>
  <div class="container-lg">
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
