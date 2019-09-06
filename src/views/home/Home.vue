<template>
  <div id="home">
     <nav-bar class="home-nav">
         <div slot="center">购物街</div>
     </nav-bar>
  </div>
</template>

<script>
    import navBar from 'components/common/navBar/NavBar'
    import {getHomeMulidata} from 'network/home'
    export default {
        name: "Home",
        components:{
            navBar
        },
        methods: {

        },
        created() {
            getHomeMulidata().then(res=>{
                console.log(res)
            })
        }
    }
</script>

<style scoped>
.home-nav{
    background: var(--color-tint);
    color:var(--color-background);
}
</style>
