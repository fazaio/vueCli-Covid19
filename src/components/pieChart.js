import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    piedata: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.piedata, { responsive: true, maintainAspectRatio: false })
  }
}