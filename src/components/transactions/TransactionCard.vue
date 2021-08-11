<template>
  <TableInfo :fields="fields" :items="transaction">
    <template #header>Transaction Details</template>

    <template #hash="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}

          <BtnCopy :address="item" class="pl-1" />
        </span>
      </div>
    </template>

    <template #status="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
    </template>

    <template #timestamp="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <div>
          <b-icon icon="clock" />

          <span>
            {{ item | formatMsToDays }}
            {{ item | formatMsToHours }}
            {{ item | formatMsToMinutes }}
            {{ item | formatMsToSeconds }}
          </span>

          <span>({{ item | formatMsToDate }})</span>
        </div>
      </div>
    </template>

    <template #miniblock_hash="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}

          <BtnCopy :address="item" class="pl-1" />
        </span>
      </div>
    </template>

    <template #from="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}

          <BtnCopy :address="item" class="pl-1" />
        </span>
      </div>
    </template>

    <template #to="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}

          <BtnCopy :address="item" class="pl-1" />
        </span>
      </div>
    </template>

    <template #value="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
    </template>

    <template #fee="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
    </template>

    <template #gas_used="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
    </template>

    <template #scResults="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <div v-if="item.length" class="row-info__item">
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
      </div>
    </template>
  </TableInfo>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '@/components/TableInfo.vue';
import { tableFields } from '@/constants/tables';
import BtnCopy from '@/components/BtnCopy.vue';

export default {
  name: 'TransactionsCard',
  components: { TableInfo, BtnCopy },
  computed: {
    ...mapGetters(['transaction']),
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
      width: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
