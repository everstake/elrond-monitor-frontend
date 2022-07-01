export default {
  methods: {
    $_filterProps(obj, propList) {
      return Object.entries(obj).filter((e) => propList.includes(e[0]));
    },
  },
};
