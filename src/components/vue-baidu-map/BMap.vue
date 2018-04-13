<template>
  <div class="vue-bmap-wrapper">
    <div id="vue-bmap" class="vue-bmap">
    </div>
  </div>
</template>
<script>
import { BmapService } from "./BmapService";

export default {
  name: "vue-bmap",
  data() {
    return {};
  },
  watch: {},
  methods: {
    initMap(BMap) {
      this.$BMap = BMap;
      this.$emit("ready", BMap);
    }
  },
  created() {
    const { initMap } = this;
    BmapService.getMapScript().then(initMap);
  },
  mounted() {
    this.$on("ready", BMap => {
      let map = new BMap.Map("vue-bmap"); // 创建Map实例
      let point = new BMap.Point(116.404, 39.915); // 创建点坐标
      map.centerAndZoom(point, 15);
      this.bmapService = new BmapService(this.map);
      map.setMapType(BMAP_PERSPECTIVE_MAP); //修改地图类型为3D地图
      map.setCurrentCity("北京市"); //设置当前城市
    });
  }
};
</script>
<style lang="scss">
.vue-bmap-wrapper {
  padding-bottom: 20px;
}

.vue-bmap {
  /*min-width: 800px;*/
  width: 100%;
  height: 800px;
  margin: 0 auto;
}
</style>

