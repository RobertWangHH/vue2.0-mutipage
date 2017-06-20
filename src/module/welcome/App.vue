<template>
    <div class="preImg" id="welcome">
        <img src='../../assets/images/splash.png' />
    </div>
</template>
<script>
import o from 'assets/js/openWin'
import c from 'assets/js/conf'
import p from 'assets/js/public'
mui.plusReady(function(){
    plus.navigator.closeSplashscreen();
    p.setLocal(c.PREFIX + '_DEVICEID',plus.device.uuid);
    let uInfo = p.getLocal(c.PREFIX + '_USERINFO');
    
    setTimeout(function(){
        if(!uInfo){
            o.openWin({
                id: 'login.html',
                url: 'login.html',
                waiting:{
                    autoShow: false
                }
            }) 
        }else{
            o.openWin({
                id: 'index.html',
                url: 'index.html',
                waiting:{
                    autoShow: false
                }
            })
        }         
    },2000);
});
</script>

<style lang="less" scoped>
@import (reference) '../../assets/less/public.less';
.preImg { width: @h; height: 100%; }
.preImg img { width: 100%; height: 100%; }
</style>