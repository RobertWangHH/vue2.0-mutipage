<template>
    <header class="bp_bar mui-bar-nav">
        <a class="isType" v-if='headBtn == 2' @tap="dropdown">我是老板<span class="arrow down"></span></a>
        <h1 class="head_title">{{titles}}</h1>
        <a class="screening" v-if='headBtn == 2'>筛选<span class="arrow down"></span></a>
    </header>
</template>
<script>
export default {
    props: ['titles','headBtn'],
    methods:{
        dropdown:function(){
            this.$emit('dropdown')
        }
    }
}
</script>


<!-- 加入scoped是为了防止本组件中的css渗透到其他组件，可以去掉看看结果 -->
<style scoped>
/*头部公共样式*/
.bp_bar { position: fixed; z-index: 10; right: 0; left: 0; height: 44px; padding: 0 10px;  background: #fff; -webkit-box-shadow: 0 0 2px rgba(0,0,0,.3); box-shadow: 0 0 2px rgba(0,0,0,.3); -webkit-backface-visibility: hidden; backface-visibility: hidden;}
.mui-bar-nav { top:0; padding: 0; background: #3e75c7; }
.mui-bar-nav .head_title { position: fixed; top: 0; left: 60px; right: 60px; font-size: 18px; font-weight: 500; line-height: 44px; text-align: center; color: #fff; overflow:hidden; text-overflow:ellipsis; -webkit-text-overflow:ellipsis; white-space:nowrap; }
.mui-bar-nav > a { min-width: 44px; height: 44px; line-height: 44px; text-align: center; color: #fff; }
.mui-bar-nav > a.icon-fanhui { width: 40px; float: left; color: #fff; font-size: 24px; }
.mui-bar-nav > a.screening { float: right; margin-right: 10px; font-size: 15px; }
.mui-bar-nav .head-m-list { position: absolute; right: 8px; top: 40px; text-align: center; width: 66px; padding: 4px 0; background: #3e75c7; border-radius: 3px;}
.mui-bar-nav .head-m-list a { color: #fff; font-size: 15px; line-height: 34px; }
.bp_bar a.isType{ position: relative; float: left; margin-left: 6px; padding: 0 14px 0 6px;}
.mui-bar-nav .arrow{position: absolute; top: 17px;right: 0; width: 7px;height: 7px;display: block;}
.mui-bar-nav .down{border-right: 1px solid #FFFFFF;border-top: 1px solid #FFFFFF; transform: rotate(135deg);-webkit-transform: rotate(135deg);}
.mui-bar-nav .up{border-right: 1px solid #FFFFFF;border-top: 1px solid #FFFFFF;transform: rotate(315deg);-webkit-transform: rotate(315deg);}

</style>