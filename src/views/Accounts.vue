<template>
  <div class="accounts wrapper">
    <TableCard>
      <template #header>
        Accounts
      </template>
    </TableCard>
  </div>
</template>

<script>
import TableCard from '@/components/TableCard.vue';

export default {
  name: 'Accounts',
  components: {
    TableCard,
  }

}
</script>

<style lang="scss">
.accounts {
}
</style>