export const tableFields = {
  accountFields: [
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
  transactionFields: [
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