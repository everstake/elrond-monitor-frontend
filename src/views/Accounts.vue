<template>
  <div class="wrapper">
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
