import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['stats']),
  },
  created() {
    this.fetchStats();
  },
  methods: {
    ...mapActions(['fetchStats']),
    $_exchange(val) {
      return val * this.stats.price;
    },
  },
};
