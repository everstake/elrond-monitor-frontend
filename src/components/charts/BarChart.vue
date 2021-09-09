<script>
import { HorizontalBar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: {
    propsOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        xAxes: [
          {
            stacked: true,
            gridLines: {
              borderDash: [5, 10],
              borderColor: '#969696',
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            gridLines: {
              borderDash: [5, 10],
              borderColor: '#969696',
            },
          },
        ],
      },
      legend: {
        display: true,
        labels: {
          fontColor: '#969696'
        }
      },
    };
    const options = {
      ...defaultOptions,
      ...this.propsOptions,
    };
    this.renderChart(this.chartData, options);
  },
};
</script>
