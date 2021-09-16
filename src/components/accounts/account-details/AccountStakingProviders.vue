<template>
  <div :class="['staking-providers', darkModeClassBackground]">
    <div v-if="!items" class="text-center">Not data</div>

    <b-table
      v-else
      :items="items"
      :fields="fields"
      :tbody-class="darkModeClassFonts"
    >
      <template #cell(provider)="data">
        {{ data.item.provider }}

        <BtnCopy :address="data.item.provider" class="ml-2" />
      </template>

      <template #cell(stake)="data">
        {{ data.item.stake | formatToken }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BtnCopy from '../../BtnCopy.vue';

export default {
  name: 'StakingProvider',
  components: {
    BtnCopy,
  },
  data() {
    return {
      fields: [
        {
          key: 'provider',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'stake',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['account', 'darkModeClassBackground', 'darkModeClassFonts']),
    items() {
      return this.account.staking_providers;
    },
  },
};
</script>

<style lang="scss" scoped>
.staking-providers {
  border-radius: $border-radius-card;
  padding: 10px 32px;
}
</style>
