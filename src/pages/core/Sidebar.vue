<template>
    <div>
    <el-menu @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <template v-for="(route, index) in $router.options.routes[$router.options.routes.length - 2].children">
        <el-submenu :index="route.name" :key="index">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ route.name }}</span>
            </template>
            <el-menu-item-group >
            <span slot="title">分组一</span>
            {{ isCollapse }}
            <el-menu-item
                :path="route.path + '/' + cRoute.path"
                :index="cRoute.name"
                v-for="(cRoute, cIndex) in route.children"
                :route="cRoute.path"
                :key="cIndex"
                :disabled="cRoute.disabled">
                {{cRoute.name}}
            </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
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
  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}
</script>
