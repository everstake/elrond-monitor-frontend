<template>
  <section class="details__wrapper">
    <BtnBack />

    <StakingProviderCard />

    <NodesTable :address="provider" :request="fetchNodes" />
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import StakingProviderCard from './StakingProviderCard.vue';
import BtnBack from '../../BtnBack.vue';
import NodesTable from '../common-tables/NodesTable.vue';

export default {
  name: 'StakingProviderDetails',
  components: { BtnBack, StakingProviderCard, NodesTable },
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
