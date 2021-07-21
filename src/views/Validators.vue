<template>
  <div class="wrapper">
    <div class="validators">
      <ValidatorsCard />
    </div>
  </div>
</template>

<script>
import ValidatorsCard from '@/components/validators/ValidatorsCard.vue';

export default {
  name: 'Validators',
  components: {
    ValidatorsCard,
  }
}
</script>

<style lang="scss">

</style>