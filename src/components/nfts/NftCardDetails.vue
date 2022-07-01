<template>
  <table-info :fields="fields" :items="nftDetails" :loading="loadingNft">
    <template #header>NFT Details</template>

    <template #name="{ item }">{{ item }}</template>
    <template #identity="{ item }">{{ item }}</template>
    <template #type="{ item }">{{ item }}</template>
    <template #collection="{ item }">
      <router-link
        :to="{ name: 'NftCollection', params: { id: item } }"
        class="row-info__text--blue"
      >
        {{ item }}
      </router-link>
    </template>
    <template #owner="{ item }">
      <router-link
        :to="{ name: 'AccountDetails', params: { id: item } }"
        class="row-info__text--blue"
      >
        {{ item | trimHashFromTo }}
      </router-link>
    </template>
    <template #creator="{ item }">
      <router-link
        :to="{ name: 'AccountDetails', params: { id: item } }"
        class="row-info__text--blue"
      >
        {{ item | trimHashFromTo }}
      </router-link>
    </template>
    <template #minted="{ item }">
      <div>
        <b-icon icon="clock" :class="darkModeClassFonts" />

        {{ item | formatMsToDate }}
      </div>
    </template>

    <template #royalties="{ item }">{{ item }}%</template>

    <template #assets="{ item }">
      <div v-if="item.length" class="row-info__text row-info__text-wrapper">
        <span
          v-for="(asset, index) in item"
          :key="index"
          class="row-info__text--blue"
        >
          <a :href="decod(asset)" target="_blank" rel="noreferrer">
            {{ decod(asset) | trimHashFromTo(10, -15) }}
          </a>
        </span>
      </div>
    </template>
  </table-info>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '../TableInfo.vue';

export default {
  components: { TableInfo },
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
          label: 'Identifier',
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
          key: 'collection',
          label: 'Collection',
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
          key: 'creator',
          label: 'Creator',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'minted',
          label: 'Minted',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'royalties',
          label: 'Royalties',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'assets',
          label: 'Assets',
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
    ...mapGetters(['loadingNft', 'nftDetails', 'darkModeClassFonts']),
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchNftDetails(this.$route.params.id);
      },
    },
  },
  methods: {
    ...mapActions(['fetchNftDetails']),
    decod(elem) {
      return atob(elem);
    },
  },
};
</script>

<style></style>
