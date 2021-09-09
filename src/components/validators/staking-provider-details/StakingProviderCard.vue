<template>
  <section :class="['staking-card', darkModeClassBackground]">
    <div class="staking-card__block-1">
      <ul :class="[darkModeClassFonts]">
        <li>
          <span>Address</span>
          <p>
            {{ stakingProviderDetails.provider | trimHash }}
            <BtnCopy :address="stakingProviderDetails.provider" />
          </p>
        </li>
        <li>
          <span>Stake</span>
          <p>{{ stakingProviderDetails.stake | formatToken }}</p>
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
        <li v-if="!stakingProviderDetails.delegation_cap">
          <span>Filled</span>
          <p>{{ getFilled | formatPercent }}</p>
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
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BtnCopy from '../../BtnCopy.vue';

export default {
  name: 'StakingProviderCard',
  components: { BtnCopy },
  computed: {
    ...mapGetters([
      'darkModeClassBackground',
      'stakingProviderDetails',
      'darkModeClassFonts',
    ]),
    getFilled() {
      return (
        (this.stakingProviderDetails.stake /
          this.stakingProviderDetails.delegation_cap) *
        100
      );
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
  justify-content: space-between;
  column-gap: 5%;
  border-radius: $border-radius-card;
  padding: 12px 30px;

  @include md-down {
    flex-direction: column;
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
