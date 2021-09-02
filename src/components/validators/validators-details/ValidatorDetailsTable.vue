<template>
<!--  <TableCard-->
<!--    :fields="fields"-->
<!--    :items="nodes"-->
<!--    :address="address"-->
<!--    :request-name="fetchNodes"-->
<!--  >-->
<!--  </TableCard>-->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { tableFields } from '@/constants/tables';
// import TableCard from '@/components/TableCard.vue';

export default {
  name: 'ValidatorDetailsTable',
  // components: { TableCard },
  computed: {
    ...mapGetters(['nodes']),
    fields() {
      return tableFields.validatorsFields.nodesFields;
    },
    address() {
      return this.$route.params.identity;
    },
  },
  methods: {
    ...mapActions(['fetchNodes']),
  },
};
</script>

<style scoped></style>
