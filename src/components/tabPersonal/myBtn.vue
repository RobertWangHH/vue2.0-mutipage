<template>
    <div class="per_fu">
        <a class="toBoss" @tap="onLink('completeInfo.html')"><span class="iconfont icon-shangdian_tianchong"></span>我要当老板</a>
        <a class="toEmp" @tap="onLink('invite_code.html')"><span class="iconfont icon-invite"></span>我要当店员</a>
    </div>
</template>
<script>
export default {
    methods:{
        onLink(name){
            mui.alert(name)
        }
    }
}
</script>
<style scoped>
.per_fu { height: 57px; margin-bottom: 12px; border-bottom: 1px solid #dcdcdc; background: #fff; }
.per_fu a { float: left; width: 50%; height: 56px; line-height: 56px; text-align: center; font-size: 16px; }
.per_fu a:first-child { border-right: 1px solid #dcdcdc; }
.per_fu a.toBoss { color: #da5454; }
.per_fu a.toEmp { color: #36b9ab; }
.per_fu a:active { background: whitesmoke; }
.per_fu span { display: inline-block; font-size: 24px; vertical-align: middle; margin: -2px 8px 0 0; }
</style>