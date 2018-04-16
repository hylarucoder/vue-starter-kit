<template>
    <div>
      MG的编程小屋
    <el-menu @open="handleOpen" @close="handleClose" :collapse="isCollapse"  class="el-menu-vertical-siderbar" >
        <template v-for="(route, index) in $router.options.routes[$router.options.routes.length - 2].children">
          <div :index="route.name" :key="index"
              v-if="$route.path.indexOf(route.path) === 0">
            <el-submenu
                :path="route.path + '/' + cRoute.path"
                :index="cRoute.name"
                v-for="(cRoute, cIndex) in route.children"
                :route="cRoute.path"
                :key="cIndex"
                :disabled="cRoute.disabled">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">
                    {{cRoute.name}}
                    </span>
                  </template>
                  <el-menu-item v-for="(subRoute) in cRoute.children" :index="subRoute.name" :key="subRoute.name">
                    <router-link :to="{ name: subRoute.name}">
                        {{subRoute.name}}
                    </router-link>
                  </el-menu-item>
            </el-submenu>
          </div>
        </template>
    </el-menu>
    </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
// 初始值传进来了,
@Component({
  props: {
    isCollapse: Boolean
  },
  components: {}
})
export default class Header extends Vue {
  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }
  mounted() {}
  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}
</script>
<style>
.el-menu-vertical-siderbar:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
