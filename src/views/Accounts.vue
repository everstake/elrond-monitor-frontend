<template>
  <div class="accounts wrapper">
    <TableCard :items="items"  :fields="fields">
      <template #header> Accounts </template>
    </TableCard>
  </div>
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Accounts',
  components: {
    TableCard,
  },
  data() {
    return {
      fields: [
        {
          key: 'address',
          class: ['w-390', 'table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--blue'],
        },
        {
          key: 'balance',
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
        {
          key: 'unstake',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        }
      ],
      items: [
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
        {
          address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0...',
          balance: '1245.6',
          stake: 0,
          unstake: 0,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['accounts']),
  },
};
</script>

<style lang="scss">
</style>
