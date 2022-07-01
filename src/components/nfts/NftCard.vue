<template>
  <table-info :fields="fields" :items="nftCollection" :loading="loadingNft">
    <template #header>Collection Details</template>

    <template #name="{ item }">{{ item }}</template>

    <template #identity="{ item }">{{ item }}</template>

    <template #type="{ item }">{{ item }}</template>

    <template #created_at="{ item }">
      <div>
        <b-icon icon="clock" :class="darkModeClassFonts" />

        {{ item | formatMsToDate }}
      </div>
    </template>

    <template #owner="{ item }">
      <span class="row-info__text--blue">
        <router-link :to="{ name: 'AccountDetails', params: { id: item } }">
          {{ item | trimHashFromTo(10, -10) }}
        </router-link>
      </span>
    </template>

    <template #properties="{ item }">
      <span
        v-for="(value, elem) in $_filterProps(item, [
          'canTransferNFTCreateRole',
          'canPause',
          'canFreeze',
          'canWipe',
        ])"
        :key="elem"
        :class="[
          value[1] ? 'prop__status--true' : 'prop__status--false',
          'prop',
          'prop__status',
        ]"
        >{{ value[0] | splitWord }}</span
      >
    </template>
  </table-info>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '../TableInfo.vue';
import filterProps from '../../mixins/filterProps';

export default {
  components: { TableInfo },
  mixins: [filterProps],
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'identity',
          label: 'Colection',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'type',
          label: 'Type',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'owner',
          label: 'Owner',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'created_at',
          label: 'Created',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'properties',
          label: 'Properties',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['nftCollection', 'loadingNft', 'darkModeClassFonts']),
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchNftCollection(this.$route.params.id);
      },
    },
  },
  methods: {
    ...mapActions(['fetchNftCollection']),
  },
};
</script>

<style lang="scss">
.prop {
  margin-right: 10px;
  font-size: 11px;
  color: $main-black;

  &__status {
    padding: 1px 5px;

    border: 1px solid;
    border-radius: 50px;

    &--true {
      border-color: $light-green;
      background: $light-green;
    }
    &--false {
      border-color: $orange;
      background: $orange;
    }
  }
}
</style>
