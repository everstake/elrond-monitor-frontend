export default {
  methods: {
    // eslint-disable-next-line consistent-return
    $_getDates(day, today, limit = 30) {
      let sevenDaysAgo;
      let oneMonthAgo;
      let threeMonthAgo;
      let sixMonthAgo;
      let oneYearAgo;

      switch (day) {
        case '7d':
          sevenDaysAgo = Math.round(today - 604800);
          return {
            limit,
            from: sevenDaysAgo,
            to: today,
          };
        case '1m':
          oneMonthAgo = Math.round(today - 2592000);
          return {
            limit,
            from: oneMonthAgo,
            to: today,
          };
        case '3m':
          threeMonthAgo = Math.round(today - 7776000);
          return {
            limit,
            from: threeMonthAgo,
            to: today,
          };
        case '6m':
          sixMonthAgo = Math.round(today - 15552000);
          return {
            limit,
            from: sixMonthAgo,
            to: today,
          };
        case '1y':
          oneYearAgo = Math.round(today - 31536000);
          return {
            limit,
            from: oneYearAgo,
            to: today,
          };
        default:
      }
    },
  },
};
