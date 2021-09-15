<template>
  <NodesTable :request="fetchNodes" />
</template>

<script>
import { mapActions } from 'vuex';
import NodesTable from './common-tables/NodesTable.vue';

export default {
  name: 'Nodes',
  components: { NodesTable },
  methods: {
    ...mapActions(['fetchNodes']),
  },
};
</script>

<style scoped></style>
