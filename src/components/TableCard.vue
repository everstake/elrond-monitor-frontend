<template>
  <div
    :class="{
      'table-card': true,
      'white-background': !darkModeOn,
      'black-background': darkModeOn,
    }"
  >
    <h1 class="table-card__title">
      <slot name="header" />
    </h1>
    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      responsive
    ></b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TableCard',
  computed: {
    ...mapGetters([
      'darkModeOn',
    ]),
  },
  data() {
    return {
      perPage: 18,
      currentPage: 1,
      items:[
          {
            address: 'erd195fe57d7fm5h33585sc7wl8trqhrmy85z3dg6f6mqd0724ymljxq3zjemc', balance: '1245',
            stake: 0,
            unstake: 0
          },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
          { address: 'hx0d50e8a602dc4a8dcbdd306ef9195a0', balance: '1245', stake: 0, unstake: 0 },
        ]
    }
  }

}
</script>

<style lang="scss">
.table-card {
  border-radius: 8px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__title {
    text-align: center;
    @include font($roboto-font, 36px, $body-dark, 500);
  }
}
</style>

<!-- 
<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>
!--> 