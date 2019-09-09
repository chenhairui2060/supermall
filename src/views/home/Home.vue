<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control :titles="titles"
                     @tabClick="tabClick"
                     ref="tabControl"
                     :class="{fixed:isTabFixed}"></tab-control>
        <scroll class="content"
                ref="scroll"
                :probe-type="3"
                :pull-up-load="true"
                @pullingUp="loadMore"
                @scroll="contentScroll">
            <home-swiper :banners="banners" @homeLoad="homeLoad"></home-swiper>
            <home-recommend-view :recommends="recommends"></home-recommend-view>
            <feature-view></feature-view>
            <tab-control :titles="titles"
                         @tabClick="tabClick"
                         ref="tabControl"
                         :class="{fixed:isTabFixed}"></tab-control>
            <goods-list :goods="showGoods"></goods-list>
        </scroll>
        <back-top @click.native="backTop" v-show="backTopShow"></back-top>
    </div>
</template>

<script>
    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommendView from "./childComps/HomeRecommendView";
    import FeatureView from "./childComps/FeatureView";

    import navBar from 'components/common/navBar/NavBar'
    import TabControl from "components/content/tabControl/TabControl";
    import GoodsList from "components/content/goods/GoodsList";
    import Scroll from "components/common/scroll/Scroll";
    import BackTop from "components/content/backTop/BackTop";
    import {getHomeMulidata, getHomeGoods} from 'network/home'
    import {debounce} from 'common/utils'

    export default {
        name: "Home",
        components: {
            Scroll,
            BackTop,
            HomeSwiper,
            HomeRecommendView,
            FeatureView,
            navBar,
            TabControl,
            GoodsList,
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            }
        },
        data() {
            return {
                banners: [],
                recommends: [],
                titles: ['流行', '新款', '精选'],
                goods: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                },
                currentType: 'pop',
                backTopShow: false,
                tabOffestTop: 0,//tab-control距离顶部距离
                isTabFixed:true,//是否吸顶
            }
        },
        methods: {
            tabClick(index) {
                console.log(index)
                switch (index) {
                    case 0:
                        this.currentType = 'pop';
                        break
                    case 1:
                        this.currentType = 'new';
                        break
                    case 2:
                        this.currentType = 'sell';
                        break
                }
            },
            backTop() {
                // console.log('点击了')
                this.$refs.scroll.scrollTo(0, 0, 500)
                //回到顶部
            },
            //轮播图是否加载
            homeLoad(){
                console.log(this.$refs.tabControl.$el.offsetTop)
            },
            contentScroll(position) {
                //控制返回顶部的显示隐藏
                this.backTopShow = -position.y > 1000
                this.isTabFixed=(-position)>this.tabOffestTop
            },
            loadMore() {
                console.log('加载更多')
                this.getHomeGoods(this.currentType)
            },
            getHomeMulidata() {
                getHomeMulidata().then(res => {
                    // console.log(res)
                    this.banners = res.data.banner.list
                    this.recommends = res.data.recommend.list
                })
            },
            getHomeGoods(type) {
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    console.log(res)
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                    //完成下拉加载更多
                    this.$refs.scroll.finishPullUp()
                })
            }
        },
        created() {
            this.getHomeMulidata();
            this.getHomeGoods('pop');
            this.getHomeGoods('new');
            this.getHomeGoods('sell');
        },
        mounted() {
            //1.图片加载完成的事件监听
            let refresh = debounce(this.$refs.scroll.refresh, 500)
            this.$bus.$on('itemImageLoad', () => {
                refresh()
            })
            //2.获取tabControl的offsettop
            // 所有的组件都有一个属性$el:用于获取组件中的元素
        }
    }
</script>

<style scoped>
    #home {
        height: 100vh;
        position: relative;
    }

    .home-nav {
        background: var(--color-tint);
        color: var(--color-background);
        /*position: fixed;*/
        /*left: 0;*/
        /*top: 0;*/
        /*right: 0;*/
        /*z-index: 9;*/
    }

    /*.tab-control {*/
    /*    !*到达44的时候变成fixed*!*/
    /*    !*原生的时候生效*!*/
    /*    position: sticky;*/
    /*    top: 44px;*/
    /*    z-index: 9;*/
    /*}*/
    .fixed{
        position: fixed;
        top: 44px;
        right: 0;
        left: 0;
        z-index: 9;
    }
    /*.content{*/
    /*    margin-top: 44px;*/
    /*    height: calc(100% - 93px);*/
    /*    !*background: #ff5777;*!*/
    /*}*/
    .content {
        position: absolute;
        overflow: hidden;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
        background: var(--color-background);
    }
</style>
