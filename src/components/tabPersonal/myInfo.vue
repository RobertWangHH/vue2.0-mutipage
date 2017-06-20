<template>
    <div class="per_hd">
        <a @tap="onLink('c_myInfo.html')">
            <div class="per_img fl">
                <img src="../../assets/images/cust_head.png" />
            </div>
            <em></em>
            <h4>{{ telPhone }}</h4>
        </a>
    </div>
</template>
<script>
import c from '../../assets/js/conf'
import p from '../../assets/js/public'
export default {
    data(){
        return {
            telPhone:p.getLocal(c.PREFIX + '_PHONE')
        }
    },
    methods:{
        onLink(name){
            mui.alert(name)
        }
    }
}
</script>
<style scoped>
.per_hd { position: relative; height: 111px; background: #3e75c7; border-bottom: 1px solid #dcdcdc; }
.per_hd a { display: block; width: 100%; height: 100%; padding: 20px; }
.per_img { width: 70px; height: 70px; -webkit-border-radius: 50%; border-radius: 50%; background: #fff; overflow: hidden; }
.per_img img { width: 100%; height: 100%; }
.per_hd h4 { margin: 23px 12px 0 90px; line-height: 24px; font-size: 18px; color: #fff; }
.per_hd em { float: right; margin: 30px 8px 0 0; display: inline-block; -webkit-transform: rotate(-45deg); transform: rotate(-45deg); width: 12px; height: 12px; border-width: 0 2px 2px 0; border-color: #fff; border-style: solid; }
</style>