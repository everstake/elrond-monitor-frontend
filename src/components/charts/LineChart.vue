<script>
import { Line, mixins } from 'vue-chartjs';
// import numeral from 'numeral';

const { reactiveProp } = mixins;

export default {
  extends: Line,
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

    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, options);
  },
};
</script>
