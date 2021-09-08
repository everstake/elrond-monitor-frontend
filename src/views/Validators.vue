<template>
  <b-container>
    <div class="validators">
      <ValidatorsCard />

      <router-view />
    </div>
  </b-container>
</template>

<script>
import ValidatorsCard from '@/components/validators/ValidatorsCard.vue';

export default {
  name: 'Validators',
  components: {
    ValidatorsCard,
  },
};
</script>

<style lang="scss">
.validators {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__progress {
    display: flex;
    align-items: center;
    color: $blue;

    &--bar {
      width: 200px;
    }
  }
}

.details__wrapper {
  display: flex;
  flex-direction: column;
  gap: 23px;
}
</style>
