<template>
  <div class="wrapper">
    <div
      class="account-card"
      :class="{
        'white-background': !darkModeOn,
        'black-background': darkModeOn,
      }"
    >
      <h1 class="account-card__title account-card__item">Account details</h1>
      <div class="account-card__address-group account-card__item">
        <p class="account-card__address">
          {{ account.address }}
        </p>
        <button class="account-card__btn">
          <img
            src="~@/assets/img/optionsIcon/clipboard.svg"
            alt="clipboard"
            class="account-card__img"
          />
        </button>
      </div>
      <div class="account-card__info-group">
        <div class="account-card__info">
          <p class="account-card__info-item">Balance</p>
          <p class="account-card__info-item">{{ account.balance | formatAmount }}</p>
        </div>

        <div class="account-card__info">
          <p class="account-card__info-item">Stake</p>
          <p class="account-card__info-item">{{ account.delegated }}</p>
        </div>

        <div class="account-card__info">
          <p class="account-card__info-item">Unstake</p>
          <p class="account-card__info-item">{{ account.undelegated }}</p>
        </div>

        <div class="account-card__info">
          <p class="account-card__info-item">Total rewards</p>
          <p class="account-card__info-item">{{ account.rewards_claimed }}</p>
        </div>

        <div class="account-card__info">
          <p class="account-card__info-item">Staking provider</p>
          <p class="account-card__info-item">Everstake</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AccountCard',
  computed: {
    ...mapGetters(['darkModeOn', 'account']),
  },
};
</script>

<style lang="scss">
.account-card {
  background-color: $font-white-main;
  padding: 15px 40px;
  border-radius: 8px;
  @include font($roboto-font, 16px, $font-grey, 400);
  &__item {
    padding: 18px 10px;
    border-bottom: 1px solid $gray;
  }
  &__btn {
    background: none;
  }
  &__address-group {
    display: flex;
    gap: 20px;
    align-self: center;
  }
  &__info-group {
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
