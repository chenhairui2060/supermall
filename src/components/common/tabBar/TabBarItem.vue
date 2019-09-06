<template>
  <div class="tabBar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- :class="{active:isActive}"-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!--    <img src="../../assets/img/tabbar/home.png">-->
    <!--    <div>首页</div>-->
  </div>
</template>

<script>
    export default {
        name: "tabBarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                return this.isActive?{color:this.activeColor}:{}
            }
        },
        data() {
            return {}
        },
        methods: {
            itemClick() {
                console.log("itemClick");
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
  .tabBar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }

  .tabBar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    margin-bottom: 3px;
    vertical-align: middle;
  }

  /*.active {*/
  /*  color: red;*/
  /*}*/
</style>

