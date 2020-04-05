import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    doughnutdata: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.doughnutdata, { responsive: true, maintainAspectRatio: false })
  }
}