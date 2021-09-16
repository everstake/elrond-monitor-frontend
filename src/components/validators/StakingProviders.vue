<template>
  <TableCard
    :items="stakingProviders"
    :fields="fields"
    :request-name="fetchStakingProviders"
    :total-items="totalItems"
    :loading="loadingValidators"
  >
    <template #cell(name-provider)="{ item: { name, provider, validator } }">
      <div>
        <img
          v-if="!validator.avatar"
          src="~@/assets/img/elrondLogo.svg"
          alt="Logo validator"
        />
        <img v-else :src="validator.avatar" alt="" width="32" height="32" />

        <router-link
          :to="{ name: 'StakingProviderDetails', params: { provider } }"
        >
          <span v-if="name" class="ml-2">{{ name }}</span>
          <span v-else class="ml-2">{{ provider | trimHash }}</span>
        </router-link>
      </div>
    </template>

    <template #cell(locked)="{ item: { locked } }">
      <span>{{ locked | formatToken }}</span>
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
      <span v-if="delegation_cap === '0'">Uncapped</span>

      <span v-else>{{ delegation_cap | formatToken }}</span>
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
