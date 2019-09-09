<template>
    <div ref="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 1
            },
            pullUpLoad: {//是否滚动到底部
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: {}
            }
        },
        mounted() {
            // 1.初始化BScroll对象
            // if (!this.$refs.wrapper) return
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: true,
                pullUpLoad: this.pullUpLoad
            }),
                // 2.将监听事件回调
                this.scroll.on('scroll', position => {
                    this.$emit('scroll', position)
                })

            // 3.监听上拉到底部
            this.scroll.on('pullingUp', () => {
                console.log('滚动到底部')
                this.$emit('pullingUp')
            })
            // console.log(this.scroll)
            // this.scroll.refresh()
        },
        methods: {
            refresh() {
                console.log(('~~~~~~'))
                //重新计算高度 刷新一次
                this.scroll && this.scroll.refresh && this.scroll.refresh()
            },
            finishPullUp() {
                //完成下拉加载更多
                this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
            },
            scrollTo(x, y, time) {
                this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            },
            getScrollY:function () {
                return this.scroll?this.scroll.y:0
            }
            // ref
        },
        watch: {
            data() {
                setTimeout(this.refresh, 20)
            }
        }
    }
</script>

<style scoped>

</style>
