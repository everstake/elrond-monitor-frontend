<template>
  <TableInfo
    :fields="fields"
    :items="block"
    :request-name="fetchBlockNonce"
    :loading="loadingBlock"
  >
    <template #header>Block details</template>

    <template #nonce="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
    </template>

    <template #hash="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}

          <BtnCopy :address="item" class="pl-1" />
        </span>
      </div>
    </template>

    <template #epoch="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
    </template>

    <template #timestamp="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>

        <div>
          <b-icon icon="clock" />

          <span>
            {{ item | formatMsToDays }}
            {{ item | formatMsToHours }}
            {{ item | formatMsToMinutes }}
            {{ item | formatMsToSeconds }}
          </span>

          <span>({{ item | formatMsToDate }})</span>
        </div>
      </div>
    </template>

    <template #tx_count="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
    </template>

    <template #shard="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item | formatShard }}
        </span>
      </div>
    </template>

    <template #size="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
    </template>

    <template #proposer="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item | trimHashFromTo(50, -50) }}
        </span>
      </div>
    </template>

    <template #validators="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>

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
      </div>
    </template>

    <template #state_root_hash="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
    </template>

    <template #miniblocks="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <div v-if="item.length" class="row-info__text">
          <span v-for="(miniBlock, index) in item" :key="index">
            {{ miniBlock | trimHash }}
          </span>
        </div>

        <span>N/A</span>
      </div>
    </template>

    <template #prev_hash="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
    </template>

    <template #pub_key_bitmap="{ item, label }">
      <div class="row-info">
        <div class="row-info__label">{{ label }}</div>
        <span>
          {{ item }}
        </span>
      </div>
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
