<template>
  <CommonTable
    :items="nodes"
    :fields="fields"
    :request-name="request"
    :total-items="totalItems"
    :loading="loadingStaking"
    :address="address"
    :custom-class="'title-nodes'"
    :fetch-params="fetchParams"
  >
    <template #header>Nodes</template>

    <template #filter>
      <div class="filter">
        <b-form-select
          v-model="isShard"
          :options="shardList"
          :class="['filter__item', darkModeClassBackground, darkModeClassFonts]"
          value-field="value"
          text-field="name"
        />

        <b-form-select
          v-model="isStatusNode"
          :options="statusList"
          :class="['filter__item', darkModeClassBackground, darkModeClassFonts]"
          value-field="value"
          text-field="name"
        />
      </div>
    </template>

    <template #cell(publicKey)="{ item: { publicKey } }">
      {{ publicKey | trimHashFromTo(7, -10) }}
    </template>

    <template #cell(nodeDisplayName)="{ item: { nodeDisplayName } }">{{
      nodeDisplayName
    }}</template>

    <template #cell(shardId)="{ item: { shardId } }">{{
      shardId | formatShard
    }}</template>

    <template #cell(versionNumber)="{ item: { versionNumber } }">
      {{ versionNumber }}
    </template>

    <template #cell(upTime)="{ item: { upTime } }">{{
      upTime | formatPercent
    }}</template>

    <template #cell(isActive)="{ item: { isActive } }">
      <span v-if="isActive" class="status--online">Online</span>
      <span v-else class="status--offline">Offline</span>
    </template>

    <template #cell(rating)="{ item: { rating } }">{{ rating }}</template>
  </CommonTable>
</template>

<script>
import { mapGetters } from 'vuex';
import CommonTable from '../../CommonTable.vue';
import { tableFields } from '../../../constants/tables';

export default {
  name: 'NodesTable',
  components: {
    CommonTable,
  },
  props: {
    request: {
      type: Function,
      default: () => null,
    },
    address: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      isStatusNode: 'all',
      isShard: 'all',
      statusList: [
        {
          value: 'all',
          name: 'Show all status',
        },
        {
          value: 1,
          name: 'online',
        },
        {
          value: 0,
          name: 'offline',
        },
      ],
      shardList: [
        {
          value: 'all',
          name: 'Show all shards',
        },
        {
          value: 0,
          name: 'Shard 0',
        },
        {
          value: 1,
          name: 'Shard 1',
        },
        {
          value: 2,
          name: 'Shard 2',
        },
        {
          value: 4294967295,
          name: 'Metachain',
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'nodes',
      'totalItems',
      'loadingStaking',
      'darkModeClassBackground',
      'darkModeClassFonts',
    ]),
    fields() {
      return tableFields.validatorsFields.nodesFields;
    },
    fetchParams() {
      if (this.isShard === 'all' && this.isStatusNode === 'all') {
        return {
          ...this.address,
        };
      }
      if (this.isStatusNode !== 'all' && this.isShard === 'all') {
        return {
          ...this.address,
          status: this.isStatusNode,
        };
      }
      if (this.isShard !== 'all' && this.isStatusNode === 'all') {
        return {
          ...this.address,
          shard: this.isShard,
        };
      }
      return {
        ...this.address,
        status: this.isStatusNode,
        shard: this.isShard,
      };
    },
  },
};
</script>

<style lang="scss">
.status {
  &--online {
    color: $light-green;
  }
  &--offline {
    color: $orange;
  }
}

.title-nodes {
  align-self: start;
  @include font(24px, $main-black, 400);
}

.filter {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  &__item {
    flex: 0 0 160px;
  }
}
</style>
