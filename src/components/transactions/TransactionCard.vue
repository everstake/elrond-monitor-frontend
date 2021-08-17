<template>
  <TableInfo :fields="fields" :items="transaction" :loading="loadingTx">
    <template #header>Transaction Details</template>

    <template #hash="{ item }">
      <span>{{ item }}</span>

      <BtnCopy :address="item" class="pl-1" />
    </template>

    <template #status="{ item }">
      <span>{{ item }}</span>
    </template>

    <template #timestamp="{ item }">
      <div>
        <b-icon icon="clock" />

        <span>
          {{ item | formatTime }}
        </span>

        <span>({{ item | formatMsToDate }})</span>
      </div>
    </template>

    <template #from="{ item }">
      <span class="row-info__text--blue">
        <router-link :to="{ name: 'AccountDetails', params: { id: item } }">
          {{ item }}
        </router-link>
      </span>

      <BtnCopy :address="item" class="pl-1" />
    </template>

    <template #to="{ item }">
      <span class="row-info__text--blue">
        <router-link :to="{ name: 'AccountDetails', params: { id: item } }">
          {{ item }}
        </router-link>
      </span>

      <BtnCopy :address="item" class="pl-1" />
    </template>

    <template #value="{ item }">
      <span
        >{{ item | formatToken }} ( = {{ $_exchange(item) | formatUSD }})</span
      >
    </template>

    <template #fee="{ item }">
      <span>{{ item }}</span>
    </template>

    <template #gas_used="{ item }">
      <span>{{ item | formatAmount }}</span>
    </template>

    <template #gas_price="{ item }">
      <span>{{ item | formatAmount }}</span>
    </template>

    <template #scResults="{ item }">
      <div v-if="Object.keys(item).length" class="row-info__item">
        <div v-for="(elem, i) in item" :key="i" class="contract-info">
          <div class="contract-info__item">
            <span>From</span>

            <span>
              {{ elem.from }}
              <BtnCopy :address="elem.from" class="pl-1" />
            </span>
          </div>

          <div class="contract-info__item">
            <span>To</span>
            <span>
              {{ elem.to }}
              <BtnCopy :address="elem.to" class="pl-1" />
            </span>
          </div>

          <div class="contract-info__item">
            <span>Value</span>
            <span>{{ elem.value }}</span>
          </div>

          <div class="contract-info__item">
            <span>Data</span>

            <span>{{ elem.data }}</span>
          </div>
        </div>
      </div>

      <span v-else>N/A</span>
    </template>
  </TableInfo>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '@/components/TableInfo.vue';
import { tableFields } from '@/constants/tables';
import BtnCopy from '@/components/BtnCopy.vue';
import exchangeTokenForUSD from '../../mixins/exchangeTokenForUSD';

export default {
  name: 'TransactionsCard',
  components: { TableInfo, BtnCopy },
  mixins: [exchangeTokenForUSD],
  computed: {
    ...mapGetters(['transaction', 'loadingTx']),
    fields() {
      return tableFields.transactionFields;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchTransaction(this.$route.params.id);
      },
    },
  },
  created() {
    this.fetchTransaction(this.$route.params.id);
  },
  methods: {
    ...mapActions(['fetchTransaction']),
  },
};
</script>

<style lang="scss">
.contract-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0 1rem 1rem;
  @include border(left, 1px);
  @include border(bottom, 1px);

  &:last-child {
    border-bottom: none;
  }

  &__item {
    display: flex;

    & span:nth-child(1) {
      width: 100px;
    }

    & span:last-child {
      max-width: 700px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
