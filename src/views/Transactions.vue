<template>
  <b-container>
    <div class="transactions">
      <TransactionsList />
    </div>
  </b-container>
</template>

<script>
import TransactionsList from '@/components/transactions/TransactionsList.vue';

export default {
  name: 'Transactions',
  components: { TransactionsList },
};
</script>

<style lang="scss"></style>
