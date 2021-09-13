<script>
import { Line, mixins } from 'vue-chartjs';
import numeral from 'numeral';
import moment from 'moment';

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
    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              callback(item) {
                return moment(item * 1000).format('MMM DD');
              },
            },
          },
        ],
        yAxes: [
          {
            display: true,
            ticks: {
              display: true,
              beginAtZero: true,
              callback(label) {
                if (label === 0) {
                  return 0;
                }

                if (label > 999999) {
                  return `${label / 1000 / 1000}M`;
                }
                if (label > 999) {
                  return `${label / 1000}K`;
                }

                return label.toFixed(4);
              },
            },
            gridLines: {
              display: true,
              borderDash: [10, 10],
              color: '#969696',
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      tooltips: {
        mode: 'x-axis',
        enabled: true,
        intersect: false,
        displayColors: false,
        titleFontColor: '#969696',
        bodyFontColor: '#1c1c1c',
        backgroundColor: '#fff',
        bodyAlign: 'start',
        titleAlign: 'start',
        xPadding: 10,
        yPadding: 15,
        cornerRadius: 4,
        callbacks: {
          title(item) {
            return `${moment(item[0].xLabel * 1000).format('dddd, LL')}`;
          },
          label(e) {
            return `Vol: ${numeral(e.yLabel).format('0,0.[0000]')}`;
          },
        },
      },
    };

    const options = {
      ...defaultOptions,
      ...this.propsOptions,
    };

    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, options);
  },
};
</script>
