<template>
  <AppSpinner v-if="loadStatsValidDetails" :size-bool="true" />

  <div v-else :class="['validators-card', darkModeClassBackground]">
    <div class="validators-card__title-wrapper">
      <img
        v-if="validatorDetails.avatar"
        :src="validatorDetails.avatar"
        width="32"
        height="32"
        alt="Avatar"
      />

      <img
        v-else
        src="~@/assets/img/elrondLogo.svg"
        width="32"
        height="32"
        alt="Avatar"
      />

      <div class="validators-card__title">
        <h1 :class="[darkModeClassTitle]">{{ validatorDetails.name }}</h1>

        <span>{{ validatorDetails.description }} </span>

        <span v-if="validatorDetails.providers">
          Staking provider:
          <router-link
            :to="{
              name: 'StakingProviderDetails',
              params: { provider: validatorDetails.providers[0] }
            }"
          >
            {{ validatorDetails.providers[0] }}
          </router-link>
        </span>
      </div>
    </div>

    <div>
      <b-table :fields="fields" :items="items">
        <template #cell(identity)="data">
          {{ reformatName(data.item.identity) }}
        </template>

        <template #cell(locked)="data">{{
          data.item.locked | formatToken
        }}</template>

        <template #cell(validators)="data">{{ data.item.validators }}</template>

        <template #cell(top_up)="data">
          {{ data.item.top_up | formatToken }}
        </template>

        <template #cell(avg_uptime)="data">
          {{ data.item.avg_uptime | formatPercent }}
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppSpinner from '../../app/AppSpinner.vue';
import { sliceStringFromTo } from '../../../helpers/slice.string.helper';

export default {
  name: 'ValidatorDetailsCard',
  components: { AppSpinner },
  data() {
    return {
      fields: [
        {
          key: 'identity',
          label: 'Identity',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'locked',
          label: 'Stake',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'validators',
          label: 'Nodes',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'top_up',
          label: 'Top-up amount',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'avg_uptime',
          label: 'Average uptime',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'darkModeClassBackground',
      'darkModeClassTitle',
      'validatorDetails',
      'darkModeOn',
      'loadStatsValidDetails',
    ]),
    items() {
      return [this.validatorDetails];
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(e) {
        this.fetchValidator(e.params);
      },
    },
  },
  methods: {
    ...mapActions(['fetchValidator']),
    reformatName(name) {
      if (name.length > 15) {
        return sliceStringFromTo(
          name.replace(name[0], name[0].toLocaleUpperCase()),
          5,
          -5,
        );
      }
      return name.replace(name[0], name[0].toLocaleUpperCase());
    },
  },
};
</script>

<style lang="scss">
.validators-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: $border-radius-card;
  padding: 12px 30px;
  overflow-x: scroll;

  &__title-wrapper {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  &__title {
    display: flex;
    flex-direction: column;
    gap: 9px;

    & span {
      @include font($fs-14, $dark-gary);

      & a {
        color: $main-blue;
      }
    }
  }
}
</style>
