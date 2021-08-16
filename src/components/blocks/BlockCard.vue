<template>
  <TableInfo
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
        <b-icon icon="clock" />

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
        <b-btn variant="link" v-b-toggle.collapse-validators class="p-0">
          {{ item.length }} validators (See all)
        </b-btn>

        <b-collapse id="collapse-validators" class="row-info__text mt-3">
          <span
            v-for="(validator, index) in item"
            :key="index"
            class="row-info__text--blue"
          >
            <router-link
              :to="{ name: 'Validators', params: { id: validator } }"
            >
              {{ validator | trimHashFromTo(20, -20) }}
            </router-link>
          </span>
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
  </TableInfo>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '@/components/TableInfo.vue';
import { tableFields } from '@/constants/tables';
import BtnCopy from '@/components/BtnCopy.vue';

export default {
  name: 'BlockCard',
  components: {
    TableInfo,
    BtnCopy,
  },
  computed: {
    ...mapGetters(['block', 'loadingBlock']),
    fields() {
      return tableFields.blockFields;
    },
  },
  created() {
    this.fetchBlock(this.$route.params.id);
  },
  methods: {
    ...mapActions(['fetchBlock', 'fetchBlockNonce']),
    onNavigation(position) {
      try {
        switch (position) {
          case 'prev':
            this.fetchBlockNonce({
              nonce: this.block.nonce - 1,
              shard: this.block.shard,
            });
            break;
          case 'next':
            this.fetchBlockNonce({
              nonce: this.block.nonce + 1,
              shard: this.block.shard,
            });
            break;
          default:
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped></style>
