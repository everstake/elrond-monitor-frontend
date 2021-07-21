<template>
  <div class="account-details">
    <AccountCard />
    <TableCard :fields="fields" :items="items" />
  </div>
</template>

<script>
import AccountCard from '@/components/accounts/AccountCard.vue';
import TableCard from '@/components/TableCard.vue';
export default {
  components: {
    AccountCard,
    TableCard,
  },
  data() {
    return {
      items: [
        {
          address: 'hx0d50e...8a602dc4a8',
          age: '1hr',
          shard: 'Shard 0 -> Metachain',
          from: 'erd0d50e...8a602dc4a8',
          to: 'erd1qqqq...lpllst77y',
          valueERLD: '2.70 EGLD',
          valueUSD: '12345 $',
        },
        {
          address: 'hx0d50e...8a602dc4a8',
          age: '1hr',
          shard: 'Shard 0 -> Metachain',
          from: 'erd0d50e...8a602dc4a8',
          to: 'erd1qqqq...lpllst77y',
          valueERLD: '2.70 EGLD',
          valueUSD: '12345 $',
        },
        {
          address: 'hx0d50e...8a602dc4a8',
          age: '1hr',
          shard: 'Shard 0 -> Metachain',
          from: 'erd0d50e...8a602dc4a8',
          to: 'erd1qqqq...lpllst77y',
          valueERLD: '2.70 EGLD',
          valueUSD: '12345 $',
        },
        {
          address: 'hx0d50e...8a602dc4a8',
          age: '1hr',
          shard: 'Shard 0 -> Metachain',
          from: 'erd0d50e...8a602dc4a8',
          to: 'erd1qqqq...lpllst77y',
          valueERLD: '2.70 EGLD',
          valueUSD: '12345 $',
        },
        {
          address: 'hx0d50e...8a602dc4a8',
          age: '1hr',
          shard: 'Shard 0 -> Metachain',
          from: 'erd0d50e...8a602dc4a8',
          to: 'erd1qqqq...lpllst77y',
          valueERLD: '2.70 EGLD',
          valueUSD: '12345 $',
        },
        {
          address: 'hx0d50e...8a602dc4a8',
          age: '1hr',
          shard: 'Shard 0 -> Metachain',
          from: 'erd0d50e...8a602dc4a8',
          to: 'erd1qqqq...lpllst77y',
          valueERLD: '2.70 EGLD',
          valueUSD: '12345 $',
        },
        {
          address: 'hx0d50e...8a602dc4a8',
          age: '1hr',
          shard: 'Shard 0 -> Metachain',
          from: 'erd0d50e...8a602dc4a8',
          to: 'erd1qqqq...lpllst77y',
          valueERLD: '2.70 EGLD',
          valueUSD: '12345 $',
        },
      ],
      fields: [
        {
          key: 'address',
          label: 'Txn Hash',
          class: ['table__cell w-180'],
          thClass: ['table__title'],
          tdClass: ['table__cell--blue'],
        },
        {
          key: 'age',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'shard',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'from',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'to',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'valueERLD',
          label: 'Value ERLD',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'valueUSD',
          label: 'Value $',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        }
      ],
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