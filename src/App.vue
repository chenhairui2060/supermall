<template>
  <div id="app">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
      <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from 'components/content/mainTabBar/mainTabBar'
export default {
  name: 'app',
  components:{
    mainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>

