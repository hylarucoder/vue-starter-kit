<template>
<el-container>
  <aside class="el-aside">
    <fed-sidebar :is-collapse="isCollapse"></fed-sidebar>
  </aside>
  <el-container>
    <fed-header @on-collapse-changed="handleCollapsedChanged">
    </fed-header>
    <el-main>
      <fed-breadcumbs></fed-breadcumbs>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Sidebar from "./Sidebar";
import Header from "./Header";

@Component({
  props: {
    propMessage: String
  },
  components: {
    "fed-sidebar": Sidebar,
    "fed-header": Header
  }
})
export default class DashView extends Vue {
  isCollapse = false;
  handleCollapsedChanged(value) {
    this.isCollapse = value;
  }
}
</script>
