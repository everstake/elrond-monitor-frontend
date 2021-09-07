<template>
  <NodesTable :address="provider" :request="fetchNodes" />
</template>

<script>
import { mapActions } from 'vuex';
import NodesTable from '../validators-tables/NodesTable.vue';

export default {
  name: 'StakingProviderTable',
  components: { NodesTable },
  computed: {
    provider() {
      return { provider: this.$route.params.provider };
    },
  },
  methods: {
    ...mapActions(['fetchNodes']),
  },
};
</script>

<style scoped></style>
