<template>
  <b-container>
    <div class="validators">
      <ValidatorsCard @selectedTab="selectedTab" />
      <TableCard :items="items" :fields="fields" />
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
      items: this.$store.getters['validators'],
      fields: tableFields.validatorsFields,
    };
  },
  computed: {
    ...mapGetters(['validators', 'stakingProviders', 'nodes']),
  },
  methods: {
    ...mapActions(['fetchValidators']),
    selectedTab(tab) {
      switch (tab) {
        case 'Validators':
          this.items = this.validators;
          break;
        case 'Staking Providers':
          this.items = this.stakingProviders;
          break;
        case 'Nodes':
          this.items = this.nodes;
          break;
        default:
          this.items = this.validators;
      }
    },
  },
  mounted() {
    this.fetchValidators();
  },
};
</script>

<style lang="scss">
.validators {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
