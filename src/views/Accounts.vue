<template>
  <div class="container-lg">
    <AccountsList />
  </div>
</template>

<script>
import AccountsList from '@/components/accounts/AccountsList.vue';

export default {
  name: 'Accounts',
  components: { AccountsList },
};
</script>
