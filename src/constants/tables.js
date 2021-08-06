// eslint-disable-next-line import/prefer-default-export
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
  transactionsFields: [
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
      thClass: ['table__title table__title--disable'],
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
      tdClass: ['table__cell--block table__cell--blue'],
    },
    {
      key: 'shard',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block'],
    },
    {
      key: 'transaction',
      label: 'Txns',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block'],
    },
    {
      key: 'size',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block'],
    },
    {
      key: 'time',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block'],
    },
    {
      key: 'provider',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--block'],
    },
  ],
  blockFields: [
    {
      key: 'nonce',
      label: 'Block Height',
    },
    {
      key: 'hash',
      label: 'Block Hash',
    },
    {
      key: 'epoch',
      label: 'Epoch',
    },
    {
      key: 'timestamp',
      label: 'Age',
    },
    {
      key: 'transactions',
      label: 'Transaction',
    },
    {
      key: 'shard',
      label: 'Shard',
    },
    {
      key: 'size',
      label: 'Size',
    },
    {
      key: 'proposer',
      label: 'Proposer',
    },
    {
      key: 'consensus',
      label: 'Consensus Group',
    },
    {
      key: 'state',
      label: 'State Root Hash',
    },
    {
      key: 'miniblocks',
      label: 'Miniblocks',
    },
    {
      key: 'previous_hash',
      label: 'Previous Hash',
    },
    {
      key: 'public_bitmap',
      label: 'Public Keys Bitmap',
    },
  ],
  transactionFields: [
    {
      key: 'hash',
      label: 'Transaction Hash',
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'timestamp',
      label: 'Age',
    },
    {
      key: 'miniblock_hash',
      label: 'Miniblock',
    },
    {
      key: 'from',
      label: 'From',
    },
    {
      key: 'to',
      label: 'To',
    },
    {
      key: 'value',
      label: 'Value',
    },
    {
      key: 'fee',
      label: 'Transaction Fee',
    },
    {
      key: 'gas_used',
      label: 'Gas Used',
    },
    {
      key: 'scResults',
      label: 'Smart Contract Result',
    },
  ],
};
