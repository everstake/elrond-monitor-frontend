<template>
  <TableCard
    :items="stakingProviders"
    :fields="fields"
    :request-name="fetchStakingProviders"
    :total-items="totalItems"
    :loading="loadingValidators"
  >
    <template #cell(name-provider)="{ item: { avatar, name, provider } }">
      <div>
        <img
          v-if="!avatar"
          src="~@/assets/img/elrondLogo.svg"
          alt="Logo validator"
        />
        <img v-else :src="avatar" alt="" width="32" height="32" />

        <router-link
          :to="{ name: 'StakingProviderDetails', params: { provider } }"
        >
          <span class="ml-2">{{ name }}</span>
        </router-link>
      </div>
    </template>

    <template #cell(stake)="{ item: { stake } }">
      <span>{{ stake | formatToken }}</span>
    </template>

    <template #cell(num_nodes)="{ item: { num_nodes } }">
      <span>{{ num_nodes }} nodes</span>
    </template>

    <template #cell(apr)="{ item: { apr } }">
      {{ apr | formatPercent }}
    </template>

    <template #cell(service_fee)="{ item: { service_fee } }">
      {{ service_fee | formatPercent }}
    </template>

    <template #cell(delegation_cap)="{ item: { delegation_cap } }">
      {{ delegation_cap | formatToken }}
    </template>
  </TableCard>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableCard from '../TableCard.vue';
import { tableFields } from '../../constants/tables';

export default {
  name: 'StakingProviders',
  components: {
    TableCard,
  },
  computed: {
    ...mapGetters(['stakingProviders', 'totalItems', 'loadingValidators']),
    fields() {
      return tableFields.validatorsFields.stakingProviders;
    },
  },
  methods: {
    ...mapActions(['fetchStakingProviders']),
  },
};
</script>

<style scoped></style>
