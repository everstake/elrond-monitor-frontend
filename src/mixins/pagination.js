export default {
  methods: {
    $_totalRows(total) {
      if (total > 4000) {
        return 4000;
      }
      return total;
    },
  },
};
