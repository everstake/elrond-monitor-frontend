<template>
  <div
    :class="{
      'search-bar': true,
      'light-blue-background': !darkModeOn,
      'dark-blue-bakcground': darkModeOn,
    }"
  >
    <div class="search-bar__wrapper wrapper">
      <button class="search-bar__btn">
        <img
          src="~@/assets/img/searchIcon.svg"
          alt="search"
          class="search-bar__img"
        >
      </button>
      <input
        type="text"
        :class="{
          'search-bar__input': true,
          'black-background': darkModeOn,
        }"
        placeholder="Search for block, accounts, transactions, programs, tokens and validators..."
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SearchBar',
  computed: {
    ...mapGetters([
      'darkModeOn'
    ]),
  }
}
</script>

<style lang="scss">
.search-bar {
  display: flex;
  justify-content: center;
  padding: 15px 0;

  &__wrapper {
    position: relative;
  }

  &__btn {
    position: absolute;
    background: none;
    top: 4px;
    left: 25px;
  }

  &__input {
    width: 100%;
    height: 30px;
    outline: none;
    border-radius: 8px;
    padding: 0 40px;
    @include font($roboto-font, 14px, #969696, 400);
    line-height: 24px;
  }
}
</style>
