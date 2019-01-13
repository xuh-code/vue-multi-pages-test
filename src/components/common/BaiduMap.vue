<template>
  <baidu-map class="bm-view" ak="aQbLP6y3AFLt4xXWqS45q16G0I2kSjA0">
  </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  components: {
    BaiduMap
  }
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>