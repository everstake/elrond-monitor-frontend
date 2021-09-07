<template>
  <NodesTable :request="fetchNodes" :address="identity" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { tableFields } from '@/constants/tables';
import NodesTable from '../validators-tables/NodesTable.vue';

export default {
  name: 'ValidatorDetailsTable',
  components: { NodesTable },
  computed: {
    ...mapGetters(['nodes']),
    fields() {
      return tableFields.validatorsFields.nodesFields;
    },
    identity() {
      return { identity: this.$route.params.identity };
    },
  },
  methods: {
    ...mapActions(['fetchNodes']),
  },
};
</script>

<style scoped></style>
