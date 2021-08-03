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
    },
  ],
  transactionFields: [
    {
      key: 'hash',
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
      tdClass: ['table__cell--common table__cell--blue'],
    },
    {
      key: 'status',
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
      key: 'valueEGLD',
      label: 'Value EGLD',
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
    },
  ],
  validatorsFields: [
    {
      key: 'name',
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
      key: 'cumulativeStake',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'nodes',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
  ],
  blocksFields: [
    {
      key: 'nonce',
      label: 'Block',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common table__cell--blue'],
    },
    {
      key: 'shard',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'transaction',
      label: 'Txns',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'size',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'time',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'provider',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
  ],
  blockFields: [
    {
      key: 'nonce',
      label: 'Block Height',
      class: ['row-info'],
    },
    {
      key: 'hash',
      label: 'Block Hash',
      class: ['table__cell'],
    },
    {
      key: 'epoch',
      label: 'Epoch',
      class: ['table__cell'],
    },
    {
      key: 'timestamp',
      label: 'Age',
      class: ['table__cell'],
    },
    {
      key: 'transactions',
      label: 'Transaction',
      class: ['table__cell'],
    },
    {
      key: 'shard',
      label: 'Shard',
      class: ['table__cell'],
    },
    {
      key: 'size',
      label: 'Size',
      class: ['table__cell'],
    },
    {
      key: 'proposer',
      label: 'Proposer',
      class: ['table__cell'],
    },
    {
      key: 'consensus',
      label: 'Consensus Group',
      class: ['table__cell'],
    },
    {
      key: 'state',
      label: 'State Root Hash',
      class: ['table__cell'],
    },
    {
      key: 'miniblocks',
      label: 'Miniblocks',
      class: ['table__cell'],
    },
    {
      key: 'previous_hash',
      label: 'Previous Hash',
      class: ['table__cell'],
    },
    {
      key: 'public_bitmap',
      label: 'Public Keys Bitmap',
      class: ['table__cell'],
    },
  ],
};
