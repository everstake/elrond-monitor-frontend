<template>
  <b-container>
    <div class="validators">
      <ValidatorsCard @selectedTab="selectedTab" />

      <TableCard
        :items="items"
        :fields="fields"
        :request-name="requestName"
        :total-items="totalItems"
        :loading="loadingValidators"
      >
        <template #cell(name)="{ item: { avatar, name } }">
          <div>
            <img v-if="!avatar" src="~@/assets/img/elrondLogo.svg" alt="" />
            <img v-else :src="avatar" alt="" width="32" height="32" />

            <span class="ml-2">{{ name }}</span>
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

<!--        <template #cell()="{ item: {} }"> </template>-->

<!--        <template #cell()="{ item: {} }"> </template>-->

<!--        <template #cell()="{ item: {} }"> </template>-->

<!--        <template #cell()="{ item: {} }"> </template>-->
      </TableCard>
    </div>
  </b-container>
</template>

<script>
import ValidatorsCard from '@/components/validators/ValidatorsCard.vue';
import TableCard from '@/components/TableCard.vue';
import { mapGetters, mapActions } from 'vuex';
import { tableFields } from '@/constants/tables';

export default {
  name: 'Validators',
  components: {
    ValidatorsCard,
    TableCard,
  },
  data() {
    return {
      activeTab: '',
    };
  },
  computed: {
    ...mapGetters([
      'stakingProviders',
      'nodes',
      'validators',
      'totalItems',
      'loadingValidators',
    ]),
    fields() {
      switch (this.activeTab.key) {
        case 'validators':
          return tableFields.validatorsFields.validators;
        case 'stakingProviders':
          return tableFields.validatorsFields.stakingProviders;

        // case 'nodes':
        //   return tableFields.validatorsFields.;
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
        default:
          return this.fetchValidators;
      }
    },
  },
  async mounted() {
    await this.fetchStatsValidators();
  },
  methods: {
    ...mapActions([
      'fetchValidators',
      'fetchStatsValidators',
      'fetchStakingProviders',
    ]),
    selectedTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style lang="scss">
.validators {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__progress {
    display: flex;
    align-items: center;
    color: $blue;

    &--bar {
      width: 200px;
    }
  }
}
</style>
