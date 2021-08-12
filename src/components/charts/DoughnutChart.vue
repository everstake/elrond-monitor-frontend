<script>
import { Doughnut, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: {
    propsOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    const options = {
      ...this.propsOptions,
    };
    this.renderChart(this.chartData, options);
  },
};
</script>
