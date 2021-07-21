<template>
  <div class="accounts wrapper">
    <TableCard :items="accounts" :fields="fields">
      <template #header> Accounts </template>
    </TableCard>
  </div>
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { mapGetters, mapActions } from 'vuex';
import { tableFields } from '@/constants/tables';

export default {
  name: 'Accounts',
  components: {
    TableCard,
  },
  computed: {
    ...mapGetters(['accounts']),
    fields() {
      return tableFields.accountFields;
    },
  },
  async mounted() {
    await this.fetchAccounts();
  },
  methods: {
    ...mapActions(['fetchAccounts'])
  }
};
</script>

<style lang="scss">
</style>
