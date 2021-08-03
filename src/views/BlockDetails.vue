<template>
  <div class="wrapper">
    <TableInfo :fields="fields" :items="block">
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
          <span>
            {{ item }}
          </span>
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
    </TableInfo>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '../components/tables/TableInfo.vue';
import { tableFields } from '../constants/tables';
import BtnCopy from '../components/BtnCopy';

export default {
  name: 'BlockDetails',
  components: { BtnCopy, TableInfo },
  computed: {
    ...mapGetters(['block']),
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
    ...mapActions(['fetchBlock']),
  },
};
</script>

<style lang="scss"></style>
