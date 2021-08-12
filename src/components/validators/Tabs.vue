<template>
  <div class="tabs">
    <p
      v-for="tab in tabsList"
      :key="tab"
      :class="{'tabs__tab--active': currentTab === tab}"
      class="tabs__tab"
      @click="choiseTab(tab)"
    >
      {{ tab }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'Tabs',
  props: {
    tabsList: {
      type: Array,
      default: () => ['Validators', 'Staking Providers', 'Nodes', 'Ranking'],
    },
  },
  data() {
    return {
      currentTab: this.tabsList[0],
    }
  },
  methods: {
    choiseTab(tab) {
      this.currentTab = tab;
      this.$emit('tabChoised', tab);
    },
  },
}
</script>

<style lang="scss">
.tabs {
  width: 100%;
  padding: 40px 50px 2px 50px;
  display: flex;
  gap: 45px;

  &__tab {
    padding: 0px 9px 5px;
    @include font($inter-font, 16px, $font-black, 500);
    cursor: pointer;

    &--active {
      color: $main-blue;
      border-bottom: 2px solid $main-blue;
    }
  }
}


</style>
