import moment from 'moment';

export default {
  methods: {
    $_epochPercent(val) {
      if (!val) {
        return 0;
      }
      return Math.round(val);
    },
    $_since(val) {
      if (!val) {
        return 0;
      }
      return moment(val * 1000).format('DD.MM.YYYY');
    },
  },
};
