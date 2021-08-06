import Vue from 'vue';

// const Errors = []

// eslint-disable-next-line import/prefer-default-export
export const handlerError = (err) => {
  console.error(err);

  const context = new Vue();
  const code = err.response.data.error;

  context.$bvToast.toast(code, {
    title: 'Err',
    autoHideDelay: 5000,
    variant: 'danger',
  });
};
