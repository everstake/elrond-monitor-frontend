<template>
  <TableCard
    :items="items"
    :fields="fields"
    :request-name="requestName"
    :total-items="totalItems"
    :loading="loadingValidators"
  >
    <template #cell(name-validator)="{ item: { avatar, name, identity } }">
      <div>
        <img
          v-if="!avatar"
          src="~@/assets/img/elrondLogo.svg"
          alt="Avatar"
          width="32"
          height="32"
        />
        <img v-else :src="avatar" alt="Avatar" width="32" height="32" />

        <router-link :to="{ name: 'ValidatorsDetails', params: { identity } }">
          <span class="ml-2">{{ name }}</span>
        </router-link>
      </div>
    </template>

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

    <template #cell(stake_percent)="{ item: { stake_percent } }">
      <div class="validators__progress">
        <b-progress
          :value="stake_percent"
          max="100"
          class="validators__progress--bar mr-2"
        />

        <span>{{ stake_percent | formatPercent }}</span>
      </div>
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

    <template #cell(publicKey)="{ item: { publicKey } }">
      <router-link :to="{ params: { id: publicKey } }">
        {{ publicKey | trimHashFromTo(7, -10) }}
      </router-link>
    </template>

    <template #cell(nodeDisplayName)="{ item: { nodeDisplayName } }">{{
      nodeDisplayName
    }}</template>

    <template #cell(shardId)="{ item: { shardId } }">{{
      shardId | formatShard
    }}</template>

    <template #cell(versionNumber)="{ item: { versionNumber } }">
      {{ versionNumber }}
    </template>

    <template #cell(upTime)="{ item: { upTime } }">{{
      upTime | formatPercent
    }}</template>

    <template #cell(isActive)="{ item: { isActive } }">
      <span v-if="isActive" class="status--online">Online</span>
      <span v-else class="status--offline">Offline</span>
    </template>

    <template #cell(rating)="{ item: { rating } }">{{ rating }}</template>
  </TableCard>
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { tableFields } from '@/constants/tables';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ValidatorsTabsLists',
  components: {
    TableCard,
  },
  computed: {
    ...mapGetters([
      'stakingProviders',
      'nodes',
      'validators',
      'totalItems',
      'loadingValidators',
      'activeTab',
    ]),
    fields() {
      switch (this.activeTab.key) {
        case 'validators':
          return tableFields.validatorsFields.validators;
        case 'stakingProviders':
          return tableFields.validatorsFields.stakingProviders;
        case 'nodes':
          return tableFields.validatorsFields.nodesFields;
        //
        //   case 'ranking':
        //     return tableFields.validatorsFields.;
        default:
          return tableFields.validatorsFields.validators;
      }
    },
    items() {
      switch (this.activeTab.key) {
        case 'validators':
          return this.validators;
        case 'stakingProviders':
          return this.stakingProviders;
        case 'nodes':
          return this.nodes;
        default:
          return this.validators;
      }
    },
    requestName() {
      switch (this.activeTab.key) {
        case 'validators':
          return this.fetchValidators;
        case 'stakingProviders':
          return this.fetchStakingProviders;
        case 'nodes':
          return this.fetchNodes;
        default:
          return this.fetchValidators;
      }
    },
  },
  methods: {
    ...mapActions(['fetchValidators', 'fetchStakingProviders', 'fetchNodes']),
  },
};
</script>

<style lang="scss" scoped>
.status {
  &--online {
    color: $light-green;
  }
  &--offline {
    color: $orange;
  }
}
</style>
