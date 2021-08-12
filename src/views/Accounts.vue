<template>
  <b-container>
    <AccountsList />
  </b-container>
</template>

<script>
import AccountsList from '@/components/accounts/AccountsList.vue';

export default {
  name: 'Accounts',
  components: { AccountsList },
};
</script>
