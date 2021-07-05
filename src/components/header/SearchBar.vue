<template>
  <div class="search-bar light-blue-background">
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
        class="search-bar__input"
        placeholder="Search for block, accounts, transactions, programs, tokens and validators..."
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
}
</script>

<style lang="scss">
.search-bar {
  display: flex;
  justify-content: center;
  padding: 10px 0;

  &__wrapper {
    position: relative;
  }

  &__btn {
    position: absolute;
    background: none;
    top: 9px;
    left: 25px;
  }

  &__input {
    width: 100%;
    outline: none;
    height: 40px;
    border-radius: 8px;
    padding: 0 40px;
    @include font($roboto-font, 14px, #969696, 400);
    line-height: 24px;
  }
}
</style>
