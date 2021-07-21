<template>
  <div class="account-details">
    <AccountCard />
    <TableCard :fields="fields" :items="items" />
  </div>
</template>

<script>
import AccountCard from '@/components/accounts/AccountCard.vue';
import TableCard from '@/components/TableCard.vue';
import { tableFields } from '@/constants/tables';
import { items } from '@/constants/items';
export default {
  components: {
    AccountCard,
    TableCard,
  },
  computed: {
    fields() {
      return tableFields.transactionFields;
    },
    items() {
      return items.transactions;
    }
  }

}
</script>

<style lang="scss">
.account-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>