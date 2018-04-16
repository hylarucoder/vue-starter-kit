<template>
  <div class="fed-breadcumbs">
    <div class="fed-breadcumbs-title">
      <span class="fed-breadcrumb-loc">位置：</span>
      <router-link :to="item.path" v-for="item in breadcrumbs" :key="item.name">
        <span class="fed-breadcrumb-item">
          {{ item.name }}
        </span>
        <span>/</span>
      </router-link>
    </div>
    <p>{{ $route.meta.description }}</p>
  </div>
</template>
<script>
import Vue from "vue";
import Component from "vue-class-component";

let breadcrumb = {
  id: "home",
  name: "首页",
  path: "/"
};

@Component({
  props: {},
  watch: {
    $route(to, from) {
      this.initOrUpdateRoutes();
    }
  },
  components: {}
})
export default class FedBreadcumbs extends Vue {
  breadcrumbs = [breadcrumb];
  initOrUpdateRoutes() {
    let breads =
      (this.$parent && this.$parent.$route && this.$parent.$route.matched) ||
      [];
    if (breads.length === 0) {
    } else {
      this.breadcrumbs = breads.filter(function(x) {
        return Boolean(x.name);
      });
      this.breadcrumbs.unshift(breadcrumb);
    }
  }
  mounted() {
    this.initOrUpdateRoutes();
  }
}
</script>
<style>

</style>
