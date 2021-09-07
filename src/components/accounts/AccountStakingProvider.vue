<template>
  <TableCard :items="items" :fields="fields"> </TableCard>
</template>

<script>
import { mapGetters } from 'vuex';
import TableCard from '../TableCard.vue';

export default {
  name: 'StakingProvider',
  components: {
    TableCard,
  },
  data() {
    return {
      fields: [
        {
          key: 'provider',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'stake',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['account']),
    items() {
      return this.account.staking_providers;
    },
  },
};
</script>

<style scoped></style>
