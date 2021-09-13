<template>
  <AppSpinner v-if="loadingValidators" :size-bool="true" />

  <section v-else :class="['staking-card', darkModeClassBackground]">
    <div :class="['staking-card__address', darkModeClassFonts]">
      <span>Address:</span>
      <p>
        {{ stakingProviderDetails.provider }}
      </p>
      <BtnCopy :address="stakingProviderDetails.provider" />
    </div>

    <div class="staking-card__wrapper">
      <div class="staking-card__block-1">
        <ul :class="[darkModeClassFonts]">
          <li>
            <span>Stake</span>
            <p>{{ stakingProviderDetails.locked | formatToken }}</p>
          </li>
          <li>
            <span>Nodes</span>
            <p>{{ stakingProviderDetails.num_nodes }}</p>
          </li>
          <li>
            <span>APR</span>
            <p>{{ stakingProviderDetails.apr | formatPercent }}</p>
          </li>
          <li>
            <span>Service fee</span>
            <p>{{ stakingProviderDetails.service_fee | formatPercent }}</p>
          </li>
          <li>
            <span>Delegation cap</span>
            <p v-if="stakingProviderDetails.delegation_cap === '0'">Uncapped</p>

            <p v-else>
              {{ stakingProviderDetails.delegation_cap | formatToken }}
            </p>
          </li>
        </ul>
      </div>

      <div class="staking-card__block-2">
        <ul :class="[darkModeClassFonts]">
          <li>
            <span>Top-up amount</span>
            <p>{{ stakingProviderDetails.top_up | formatToken }}</p>
          </li>
          <li>
            <span>Average uptime</span>
            <p>{{ stakingProviderDetails.avg_uptime | formatPercent }}</p>
          </li>
          <li>
            <span>Delegators</span>
            <p>{{ stakingProviderDetails.num_users }}</p>
          </li>
          <li>
            <span>Cumulated rewards</span>
            <p>{{ stakingProviderDetails.cumulated_rewards | formatToken }}</p>
          </li>
          <li>
            <span>Filled</span>
            <p>{{ getFilled }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BtnCopy from '../../BtnCopy.vue';
import AppSpinner from '../../app/AppSpinner.vue';

export default {
  name: 'StakingProviderCard',
  components: { BtnCopy, AppSpinner },
  computed: {
    ...mapGetters([
      'darkModeClassBackground',
      'stakingProviderDetails',
      'darkModeClassFonts',
      'loadingValidators',
    ]),
    getFilled() {
      if (this.stakingProviderDetails.delegation_cap <= 0) {
        return '-';
      }
      return `${
        (this.stakingProviderDetails.stake /
          this.stakingProviderDetails.delegation_cap) *
        100
      }%`;
    },
  },
  async mounted() {
    await this.fetchStakingProviderDetails(this.$route.params);
  },
  methods: {
    ...mapActions(['fetchStakingProviderDetails']),
  },
};
</script>

<style lang="scss" scoped>
.staking-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: $border-radius-card;
  padding: 1rem 30px;

  &__address {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-left: 14px;
    font-size: 18px;

    @include md-down {
      & p {
        width: 400px;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;

    @include md-down {
      flex-direction: column;
    }
  }

  &__block-1,
  &__block-2 {
    flex: 0 0 45%;
  }

  & li {
    display: flex;
    justify-content: space-between;
    padding: 14px;
    border-bottom: 1px solid $gray;
  }
}
</style>
