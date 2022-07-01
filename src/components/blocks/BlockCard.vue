<template>
  <table-info
    :fields="fields"
    :items="block"
    :request-name="fetchBlockNonce"
    :loading="loadingBlock"
  >
    <template #header>Block details</template>

    <template #nonce="{ item }">
      <span>{{ item }}</span>
    </template>

    <template #hash="{ item }">
      <span>{{ item }}</span>

      <BtnCopy :address="item" class="pl-1" />
    </template>

    <template #epoch="{ item }">
      <span>{{ item }}</span>
    </template>

    <template #timestamp="{ item }">
      <div>
        <b-icon icon="clock" :class="darkModeClassFonts" />

        <span>
          {{ item | formatTime }}
        </span>

        <span>({{ item | formatMsToDate }})</span>
      </div>
    </template>

    <template #tx_count="{ item }">
      <span>{{ item }} transactions in the block</span>
    </template>

    <template #shard="{ item }">
      <span>{{ item | formatShard }}</span>
    </template>

    <template #size="{ item }">
      <span>{{ item | formatSize }}</span>
    </template>

    <template #proposer="{ item }">
      <span> {{ item | trimHashFromTo(50, -50) }}</span>
    </template>

    <template #validators="{ item }">
      <div class="row-info__text-wrapper">
        <b-btn v-b-toggle.collapse-validators variant="link" class="p-0">
          {{ item.length }} validators (See all)
        </b-btn>

        <b-collapse id="collapse-validators">
          <div class="row-info__text mt-3">
            <span
              v-for="(validator, index) in item"
              :key="index"
              class="row-info__text--blue"
            >
              {{ validator | trimHashFromTo(20, -20) }}
            </span>
          </div>
        </b-collapse>
      </div>
    </template>

    <template #state_root_hash="{ item }">
      <span>{{ item }}</span>
    </template>

    <template #miniblocks="{ item }">
      <div v-if="item.length" class="row-info__text row-info__text-wrapper">
        <span
          v-for="(miniBlock, index) in item"
          :key="index"
          class="row-info__text--blue"
        >
          <router-link
            :to="{ name: 'MiniblockDetails', params: { id: miniBlock } }"
          >
            {{ miniBlock | trimHashFromTo(10, -10) }}
          </router-link>
        </span>
      </div>

      <span v-else>N/A</span>
    </template>

    <template #prev_hash="{ item }">
      <span>{{ item }}</span>
    </template>

    <template #pub_key_bitmap="{ item }">
      <span>{{ item }}</span>
    </template>

    <template #block-nav>
      <div class="table-info__btn">
        <b-btn
          variant="link"
          class="table-info__btn--position"
          @click="onNavigation('prev')"
        >
          <b-icon icon="chevron-left" />
          Prev
        </b-btn>

        <b-btn
          variant="link"
          class="table-info__btn--position"
          @click="onNavigation('next')"
        >
          Next
          <b-icon icon="chevron-right" />
        </b-btn>
      </div>
    </template>
  </table-info>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '@/components/TableInfo.vue';
import BtnCopy from '@/components/BtnCopy.vue';

export default {
  name: 'BlockCard',
  components: {
    TableInfo,
    BtnCopy,
  },
  data() {
    return {
      fields: [
        {
          key: 'nonce',
          label: 'Block Height',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'hash',
          label: 'Block Hash',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'epoch',
          label: 'Epoch',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'timestamp',
          label: 'Age',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'tx_count',
          label: 'Transaction',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'shard',
          label: 'Shard',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'size',
          label: 'Size',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'proposer',
          label: 'Proposer',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'validators',
          label: 'Consensus Group',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'state_root_hash',
          label: 'State Root Hash',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'miniblocks',
          label: 'Miniblocks',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'prev_hash',
          label: 'Previous Hash',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'pub_key_bitmap',
          label: 'Public Keys Bitmap',
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
    ...mapGetters(['block', 'loadingBlock', 'darkModeClassFonts']),
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchBlock(this.$route.params.id);
      },
    },
  },
  methods: {
    ...mapActions(['fetchBlock', 'fetchBlockNonce']),
    async onNavigation(position) {
      try {
        switch (position) {
          case 'prev':
            await this.fetchBlockNonce({
              nonce: this.block.nonce - 1,
              shard: this.block.shard,
            });
            break;
          case 'next':
            await this.fetchBlockNonce({
              nonce: this.block.nonce + 1,
              shard: this.block.shard,
            });
            break;
          default:
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (this.$route.params.id !== this.block.hash) {
          this.$router.push(this.block.hash);
        }
      }
    },
  },
};
</script>

<style scoped></style>
