<template>
    <ul class="store_ul cl">
        <li>
            <a @tap="featureTap('infomation.html')">
                <span class="iconfont icon-26"></span>
                <p>商家信息</p>
            </a>
        </li>
        <li>
            <a @tap="featureTap('income_code.html')">
                <span class="iconfont icon-erweima"></span>
                <p>收款二维码</p>
            </a>
        </li>
        <li>
            <a @tap="featureTap('c_bill.html')">
                <span class="iconfont icon-zhangdan"></span>
                <p>账单管理</p>
            </a>
        </li>
        <li>
            <a @tap="featureTap('check_bill.html')">
                <span class="iconfont icon-iconduizhangdan"></span>
                <p>对账功能</p>
            </a>
        </li>
        <li>
            <a @tap="featureTap('employ_manage.html')">
                <span class="iconfont icon-tubiao66"></span>
                <p>店员管理</p>
            </a>
        </li>
        <li>
            <a @tap="featureTap('secondTo.html')">
                <span class="iconfont icon-miaosha"></span>
                <p>秒到</p>
            </a>
        </li>
        <li>
            <a @tap="featureTap('scan_amount.html')">
                <span class="iconfont icon-iconfontscan"></span>
                <p>扫一扫</p>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                permissions:[]
            }
        },
        methods:{
            featureTap:function(id){
                mui.alert(id)
            }
        }
    }
</script>

<style scoped>
.store_ul { background: #fff; padding: 6px 3px 15px; border-bottom: 1px solid #dcdcdc; }
.store_ul li { position: relative; float: left; width: 25%; height: 88px; overflow: hidden; }
.store_ul li a { display: block; width: 100%; padding: 15px 0 0; }
.store_ul li a:active { background: whitesmoke; }
.store_ul li p { line-height: 24px; margin-top: 4px; text-align: center; color: #555; }
.store_ul li span { display: block; width: 44px; height: 44px; color: #fff; font-size: 26px; margin: 0 auto; padding: 9px; border-radius: 50%; -webkit-border-radius: 50%; }
.store_ul li span.icon-26 { background: #ec6841;}
.store_ul li span.icon-erweima { background: #53b24c;}
.store_ul li span.icon-zhangdan { background: #4e8cd9;}
.store_ul li span.icon-iconduizhangdan { background: #36b9ab; font-size: 32px; padding: 6px; }
.store_ul li span.icon-tixian { background: #36b9ab;}
.store_ul li span.icon-tubiao66 { background: #637ada; font-size: 32px; padding: 6px; }
.store_ul li span.icon-miaosha { background: #d85e5d; font-size: 32px; padding: 6px; }
.store_ul li span.icon-iconfontscan { background: #508ae0; font-size: 32px; padding: 6px; }
</style>
