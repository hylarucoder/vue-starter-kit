<template>
    <el-header style="text-align: right; font-size: 12px; padding: 0;">
        <el-menu mode="horizontal">
            <li role="menuitem" class="el-menu-item" style="border-bottom-color: transparent;">
                <el-radio-group v-model="isMenuCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
            </li>

        <template v-for="(route, index) in $router.options.routes[$router.options.routes.length - 2].children">
        <el-submenu :index="route.name" :key="index">
            <template slot="title">
            <span slot="title">{{ route.name }}</span>
            </template>
            <el-menu-item-group >
            <!-- <span slot="title">分组一</span> -->
                <el-menu-item
                    :path="route.path + '/' + cRoute.path"
                    :index="cRoute.name"
                    v-for="(cRoute, cIndex) in route.children"
                    :route="cRoute.path"
                    :key="cIndex"
                    :disabled="cRoute.disabled">
                    <router-link :to="{ name: cRoute.name}">
                        {{cRoute.name}}
                    </router-link>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </template>
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <!-- <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item> -->
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-menu>
    </el-header>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {},
  watch: {
    isMenuCollapse(value) {
      console.log(value);
      this.$emit("on-collapse-changed", value);
    }
  },
  components: {}
})
export default class Header extends Vue {
  isMenuCollapse = false;
}
</script>
