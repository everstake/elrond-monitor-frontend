<template>
  <TableCard
    :items="validators"
    :fields="fields"
    :request-name="fetchValidators"
    :total-items="totalItems - 1"
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

        <router-link
          v-if="name"
          :to="{ name: 'ValidatorsDetails', params: { identity } }"
        >
          <span class="ml-2">{{ name }}</span>
        </router-link>

        <span v-else class="ml-2">{{ identity | trimHash }}</span>
      </div>
    </template>

    <template #cell(locked)="{ item: { locked } }">
      <span>{{ locked | formatToken }}</span>
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
  </TableCard>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TableCard from '../TableCard.vue';
import { tableFields } from '../../constants/tables';

export default {
  name: 'ValidatorsTable',
  components: {
    TableCard,
  },
  computed: {
    ...mapGetters(['validators', 'totalItems', 'loadingValidators']),
    fields() {
      return tableFields.validatorsFields.validators;
    },
  },
  methods: {
    ...mapActions(['fetchValidators']),
  },
};
</script>

<style scoped></style>
