<template>
  <div class="wrapper">
    <TableInfo
      :fields="fields"
      :items="block"
      :request-name="fetchBlockNonce"
      :loading="loading"
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
          <span>
            {{ item }}
          </span>
        </div>
      </template>

      <template #transactions="{ item, label }">
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
            {{ item }}
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
            {{ item }}
          </span>
        </div>
      </template>

      <template #consensus="{ item, label }">
        <div class="row-info">
          <div class="row-info__label">{{ label }}</div>
          <span>
            {{ item }}
          </span>
        </div>
      </template>

      <template #state="{ item, label }">
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
          <div class="row-info__text">
            <span v-for="miniBlock in item" :key="miniBlock">
              {{ miniBlock | trimHash }}
            </span>
          </div>
        </div>
      </template>

      <template #previous_hash="{ item, label }">
        <div class="row-info">
          <div class="row-info__label">{{ label }}</div>
          <span>
            {{ item }}
          </span>
        </div>
      </template>

      <template #public_bitmap="{ item, label }">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '../components/tables/TableInfo.vue';
import { tableFields } from '../constants/tables';
import BtnCopy from '../components/BtnCopy.vue';

export default {
  name: 'BlockDetails',
  components: { BtnCopy, TableInfo },
  computed: {
    ...mapGetters(['block', 'loading']),
    fields() {
      return tableFields.blockFields;
    },
    hashAddress() {
      return this.$route.params.id;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchBlock(this.hashAddress);
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

        this.$router.replace(this.block.hash);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss"></style>
