// mixin.js
import Vue from "vue";
import Component from "vue-class-component";

// You can declare a mixin as the same style as components.
@Component({
  props: {
    dataObj: Object
  },
  components: {
    chart: () => import("@/components/vue-echarts/ECharts.vue")
  },
  watch: {
    dataObj: {
      handler(dataObj) {
        this.chartOption = this.refetchChartOption(dataObj);
      },
      deep: true
    }
  }
})
export class EChartsMixin extends Vue {
  chartOption = null;
  mounted() {
    this.chartOption = this.refetchChartOption(this.dataObj);
  }
}
