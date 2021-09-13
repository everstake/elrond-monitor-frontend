<template>
  <TableCard
    :items="nodes"
    :fields="fields"
    :request-name="request"
    :total-items="totalItems"
    :loading="loadingValidators"
    :address="address"
    :custom-class="'title-nodes'"
  >
    <template #header>Nodes</template>

    <template #cell(publicKey)="{ item: { publicKey } }">
      <router-link :to="{ params: { id: publicKey } }">
        {{ publicKey | trimHashFromTo(7, -10) }}
      </router-link>
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
  </TableCard>
</template>

<script>
import { mapGetters } from 'vuex';
import TableCard from '../../TableCard.vue';
import { tableFields } from '../../../constants/tables';

export default {
  name: 'NodesTable',
  components: {
    TableCard,
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
  computed: {
    ...mapGetters(['nodes', 'totalItems', 'loadingValidators']),
    fields() {
      return tableFields.validatorsFields.nodesFields;
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
  text-align: left;
  @include font(24px, $main-black, 400);
}
</style>
