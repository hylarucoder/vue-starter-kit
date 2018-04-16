<template>
  <div>
    <simple-chart :dataObj="{}"></simple-chart>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    propMessage: String
  },
  components: {
    "simple-chart": () => import("./charts/SimpleChart.vue")
  }
})
export default class App extends Vue {}
</script>
