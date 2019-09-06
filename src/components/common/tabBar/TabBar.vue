<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tabBar {
    display: flex;
    background: #f2f2f2;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 1px rgba(100, 100, 100, .15);
  }



</style>
