<template>
  <b-btn
    variant="link"
    class="p-0"
    v-clipboard:copy="address"
    v-clipboard:success="onCopy"
  >
    <img
      src="~@/assets/img/optionsIcon/clipboard.svg"
      alt="clipboard"
      class="account-card__img"
    />
  </b-btn>
</template>

<script>
export default {
  name: 'BtnCopy',
  props: {
    address: {
      type: String,
      default: '',
    },
  },
  methods: {
    onCopy() {
      this.$bvToast.toast('Success', {
        title: 'Copied!',
        autoHideDelay: 2000,
        variant: 'success',
      });
    },
  },
};
</script>

<style scoped></style>
