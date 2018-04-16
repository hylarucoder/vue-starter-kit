<template>
  <div>
    <chart :options="chartOption" auto-resize auto-map style="height: 800px;width:700px;"></chart>
  </div>
</template>

<script>
import Component, { mixins } from "vue-class-component";
import { EChartsMixin } from "@/mixins/EChartsMixin";
@Component({
  props: {},
  components: {}
})
export default class SimpleChart extends mixins(EChartsMixin) {
  refetchChartOption(dataObj) {
    if (!dataObj) {
    }

    return {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        }
      ]
    };
  }
}
</script>
