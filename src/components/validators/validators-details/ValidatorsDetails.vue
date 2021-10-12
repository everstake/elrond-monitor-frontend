<template>
  <section class="details__wrapper" style="position: relative">
    <BtnBack />

    <ValidatorDetailsCard style="z-index: 5" />

    <AppInteractiveIcon
      v-if="!loadingStaking && identity.identity === 'everstake'"
      :options="{ top: '10%', left: '-0.2%', opacity: 0.3 }"
    />

    <NodesTable :request="fetchNodes" :address="identity" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ValidatorDetailsCard from './ValidatorDetailsCard.vue';
import BtnBack from '../../BtnBack.vue';
import NodesTable from '../common-tables/NodesTable.vue';
import AppInteractiveIcon from '../../AppInteractiveIcon.vue';

export default {
  name: 'ValidatorsDetails',
  components: {
    AppInteractiveIcon,
    NodesTable,
    BtnBack,
    ValidatorDetailsCard,
  },
  computed: {
    ...mapGetters(['loadingStaking']),
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
