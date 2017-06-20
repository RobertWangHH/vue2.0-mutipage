<template>
    <div class="home_hd cl">
        <a @tap='aTap("scan.html")'>
            <span class="iconfont icon-iconfontscan"></span>
            <p>扫一扫</p>
        </a>
        <a @tap='aTap("paymentCode.html")'>
            <span class="iconfont icon-erweima"></span>
            <p>付款码</p>
        </a>
        <a @tap='aTap("barkcard.html")'>
            <span class="iconfont icon-yinxingqia"></span>
            <p>银行卡</p>
        </a>
    </div>
</template>

<script>
import c from '../../assets/js/conf'
import p from '../../assets/js/public'

export default {
    methods: {
        aTap:function(id){
            if(id == 'barkcard.html'){

            }else{
                var url = c.URL + '/index/member/checkBindCard'; 
                mui.ajax(url,{
                    data:{
                        deviceid: p.getLocal(c.PREFIX + '_DEVICEID'),
                        username: p.getLocal(c.PREFIX + '_USERINFO').username
                    },
                    dataType:'json',//服务器返回json格式数据
                    type:'post',//HTTP请求类型
                    timeout:10000,//超时时间设置为10秒；
                    success:function(data){
                        var d = JSON.parse(data);
                        if(d.msg == '1'){
                            console.log('已经绑了银行卡');
                            
                        }else if(d.msg == '3'){
                            p.loginView(d)
                        }else{

                        }
                    },
                    error:function(xhr,type,errorThrown){
                        console.log(errorThrown)
                    }
                });    
            }            
        }
    }
}

</script>
<style scoped>
.home_hd { padding: 16px 0 22px; background: #508ae0; }
.home_hd a { float: left; width: 33%; text-align: center; }
.home_hd a span { display: inline-block; width: 80px; height: 80px; font-size: 64px; color: #fff; padding-top: 17px; }
.home_hd a p { font-size: 18px; color: #fff; text-align: center; margin-top: 8px; } 
</style>