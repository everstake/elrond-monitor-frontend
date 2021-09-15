<template>
  <section class="details__wrapper">
    <BtnBack />

    <ValidatorDetailsCard />

    <NodesTable :request="fetchNodes" :address="identity" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ValidatorDetailsCard from './ValidatorDetailsCard.vue';
import BtnBack from '../../BtnBack.vue';
import NodesTable from '../common-tables/NodesTable.vue';

export default {
  name: 'ValidatorsDetails',
  components: {
    NodesTable,
    BtnBack,
    ValidatorDetailsCard,
  },
  computed: {
    ...mapGetters(['nodes']),
    identity() {
      return { identity: this.$route.params.identity };
    },
  },
  methods: {
    ...mapActions(['fetchNodes']),
  },
};
</script>

<style lang="scss"></style>
