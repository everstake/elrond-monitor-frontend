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
      class: ['table__cell', 'w-180'],
      thClass: ['table__title'],
      tdClass: ['table__cell--blue'],
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
      tdClass: ['table__cell--common', 'table__cell--blue'],
    },
    {
      key: 'to',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'age',
      class: ['table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'fee',
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
  accountsTransactionsFields: [
    {
      key: 'hash',
      label: 'Txn Hash',
      class: ['w-180', 'table__cell'],
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
      class: ['w-180', 'table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common', 'table__cell--blue'],
    },
    {
      key: 'status',
      class: ['w-70', 'table__cell'],
      thClass: ['table__title table__title--disable'],
      tdClass: ['table__cell--common'],
    },
    {
      key: 'to',
      class: ['w-180 table__cell'],
      thClass: ['table__title'],
      tdClass: ['table__cell--common table__cell--blue'],
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
      key: 'tx_count',
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
      key: 'validators',
      label: 'Consensus Group',
    },
    {
      key: 'state_root_hash',
      label: 'State Root Hash',
    },
    {
      key: 'miniblocks',
      label: 'Miniblocks',
    },
    {
      key: 'prev_hash',
      label: 'Previous Hash',
    },
    {
      key: 'pub_key_bitmap',
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
      key: 'from',
      label: 'From',
    },
    {
      key: 'to',
      label: 'To',
    },
    {
      key: 'value',
      label: 'Value (EGLD / $)',
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
      key: 'gas_price',
      label: 'Gas Price',
    },
    {
      key: 'scResults',
      label: 'Smart Contract Result',
    },
  ],
  miniblockFields: [
    {
      key: 'hash',
      label: 'Miniblock Hash',
    },
    {
      key: 'shard_from',
      label: 'Sender Shard',
    },
    {
      key: 'shard_to',
      label: 'Receiver Shard',
    },
    {
      key: 'block_sender',
      label: 'Sender Block',
    },
    {
      key: 'block_receiver',
      label: 'Receiver Block',
    },
    {
      key: 'type',
      label: 'Type',
    },
  ],
};
