<template>
<el-container>
  <el-aside width="200px">
    <fed-sidebar :is-collapse="isCollapse"></fed-sidebar>
  </el-aside>
  <el-container>
    <fed-header @on-collapse-changed="handleCollapsedChanged">
    </fed-header>
    <el-main>
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
    console.log("-------->");
    console.log(this);
    console.log(value);
    console.log("<--------");
    this.isCollapse = value;
  }
}
</script>
