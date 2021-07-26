<template>
  <div
    class="validators-card"
    :class="{
      'white-background': !darkModeOn,
      'black-background': darkModeOn,
    }"
  >
    <h1
      class="table-card__title validators-card__title"
      :class="{
        'white-font-main': darkModeOn,
        'black-font-main': !darkModeOn,
      }"
    >
      Validators
    </h1>
    <div
      class="validators-card__info-line info-line"
      :class="{
        'light-blue-background': !darkModeOn,
        'dark-blue-bakcground': darkModeOn,
      }"
    >
      <div class="info-line__group">
        <p class="info-line__text">
          Current leader
        </p>
        <img
          src="~@/assets/img/avatar.svg"
          alt=""
          class="info-line__img"
        >
      </div>

      <div class="info-line__group">
        <p class="info-line__text">
          Validators
        </p>
        <p class="info-line__value">
          695
        </p>
      </div>

      <div class="info-line__group">
        <p class="info-line__text">
          Observer nodes
        </p>
        <p class="info-line__value">
          407
        </p>
      </div>

      <div class="info-line__group">
        <p class="info-line__text">
          Staking APR
        </p>
        <p class="info-line__value">
          60.675
        </p>
      </div>

       <div class="info-line__group">
        <p class="info-line__text">
          Block time
        </p>
        <p class="info-line__value">
          6
        </p>
      </div>
    </div>
    <Tabs @tabChoised="choisedTab" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Tabs from '@/components/validators/Tabs.vue';
export default {
  name: 'ValidatorsCard',
  components: {
    Tabs,
  },
  computed: {
   ...mapGetters(['darkModeOn']),
 },
 methods: {
   choisedTab(tab) {
     this.$emit('choisedTab', tab);
   }
 }
}
</script>

<style lang="scss">
.validators-card {
  border-radius: 8px;
  &__title {
    text-align: center;
    padding: 25px 0;
  }
  .info-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;

    &__group {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    &__text {
      padding-top: 5px;
      @include font($roboto-font, 16px, $font-black, 400);
    }
    &__value {
      @include font($roboto-font, 30px, $main-black, 500);
      line-height: 60px;
    }
  }
}

</style>