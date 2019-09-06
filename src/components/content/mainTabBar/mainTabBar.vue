<template>
  <tab-bar>
    <TabBarItem path="/home" activeColor="#e23c49">
      <img slot="item-icon" src="~assets/img/tabbar/home.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="#e23c49">
      <img slot="item-icon" src="~assets/img/tabbar/goods.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/goods-active.png">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="#e23c49">
      <img slot="item-icon" src="~assets/img/tabbar/carts.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/carts-active.png">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="#e23c49">
      <img slot="item-icon" src="~assets/img/tabbar/my.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/my-active.png">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabBar/TabBar"
    import TabBarItem from "components/common/tabBar/TabBarItem";
    export default {
        name: "mainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
