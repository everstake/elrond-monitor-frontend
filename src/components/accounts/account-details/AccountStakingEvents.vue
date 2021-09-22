<template>
  <CommonTable
    :items="stakingEvents"
    :fields="fields"
    :request-name="fetchStakingEvents"
    :total-items="$_totalRows(totalItems)"
    :loading="loadingStaking"
    :fetch-params="fetchParams"
  >
    <template #cell(tx_hash)="{ item: { tx_hash } }">
      <router-link
        :to="{ name: 'TransactionDetails', params: { id: tx_hash } }"
      >
        {{ tx_hash | trimHash }}
      </router-link>
    </template>

    <template #cell(type)="{ item: { type } }">
      {{ type }}
    </template>

    <template #cell(validator)="{ item: { validator } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: validator } }">
        {{ validator | trimHash }}
      </router-link>
    </template>

    <template #cell(delegator)="{ item: { delegator } }">
      <router-link to="">
        {{ delegator | trimHash }}
      </router-link>
    </template>

    <template #cell(epoch)="{ item: { epoch } }">
      {{ epoch }}
    </template>

    <template #cell(amount)="{ item: { amount } }">
      {{ amount | formatToken }}
    </template>

    <template #cell(created_at)="{ item: { created_at } }">
      {{ created_at | formatMsToDate }}
    </template>
  </CommonTable>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CommonTable from '../../CommonTable.vue';
import pagination from '../../../mixins/pagination';
import { tableFields } from '../../../constants/tables';

export default {
  name: 'AccountStakingEvents',
  components: { CommonTable },
  mixins: [pagination],
  computed: {
    ...mapGetters(['stakingEvents', 'totalItems', 'loadingStaking']),
    fields() {
      return tableFields.stakingEventsFields;
    },
    fetchParams() {
      return {
        delegator: this.$route.params.id,
      };
    },
  },
  methods: {
    ...mapActions(['fetchStakingEvents']),
  },
};
</script>

<style scoped></style>
