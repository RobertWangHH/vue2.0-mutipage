<template>
    <div class="wrapper">
        <info></info>
        <btn></btn>       
        <ul class="per_ul">
            <li>
                <a @tap="onLink('account.html')">
                    <span class="iconfont icon-mima2"></span>
                    <p>修改密码</p>
                    <em class="arrow12"></em>
                </a>
            </li>
            <li>
                <a @tap="onLink('help.html')">
                    <span class="iconfont icon-bangzhu1"></span>
                    <p>使用帮助</p>
                    <em class="arrow12"></em>
                </a>
            </li>
            <li>
                <a @tap="onLink('suggest.html')">
                    <span class="iconfont icon-jianyi"></span>
                    <p>优化建议</p>
                    <em class="arrow12"></em>
                </a>
            </li>
            <li>
                <a @tap="onLink('dail')" >
                    <span class="iconfont icon-kefu1"></span>
                    <p>联系客服</p>
                    <em class="arrow12"></em>
                </a>
            </li>
            <li>
                <a @tap="onLink('share.html')">
                    <span class="iconfont icon-fenxiang1"></span>
                    <p>分享下载</p>
                    <em class="arrow12"></em>
                </a>
            </li>
            <li>
                <a @tap="onLink('c_about.html')">
                    <span class="iconfont icon-icon168"></span>
                    <p>关于我们</p>
                    <em class="arrow12"></em>
                </a>
            </li>
        </ul>
        <div class="switch" id="b-switch" style="display: none;">
            <span class="iconfont icon-kg"></span>
            <label>功能开关</label>
            <div class="mui-switch b-switch" id="mySwitch">
                <div class="mui-switch-handle"></div>
            </div>
        </div>
        <div class="h20"></div>
    </div>
</template>
<script>
import c from '../../assets/js/conf'
import p from '../../assets/js/public'
import info from '../../components/tabPersonal/myInfo'
import btn from '../../components/tabPersonal/myBtn'
export default {
    methods:{
        onLink(name){
            mui.alert(name)
        }
    },
    components:{
        info,
        btn
    }
}
</script>
<style scoped>
.per_ul { background: #fff; border-top: 1px solid #dcdcdc; border-bottom: 1px solid #dcdcdc; }
.per_ul li { position: relative; height: 50px; line-height: 50px; }
.per_ul li:before { content: ''; position: absolute; right: 12px; left: 12px; top: 0; height: 1px; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #dcdcdc; }
.per_ul li:first-child:before { height: 0; }
.per_ul li a { padding: 0 20px; display: -webkit-box;  display: -webkit-flex; display: -ms-flexbox;  display: flex; }
.per_ul li a:active { background: whitesmoke; }
.per_ul li span { width: 24px; height: 24px; margin: 13px 12px 0 0; font-size: 24px; color: #3e75c7; -webkit-border-radius: 50%; border-radius: 50%; }
.per_ul li span.icon-bangzhu1 { font-size: 25px; }
.per_ul li span.icon-jianyi { font-size: 23px; }
.per_ul li p { font-size: 16px; color: #555; -webkit-box-flex: 1;  -webkit-flex: 1;  -ms-flex: 1;  flex: 1; }
.per_ul li em { margin: 19px 6px 0; }
.switch{ position: relative; height: 50px; line-height: 50px; border-bottom: 1px solid #dcdcdc; background: #fff; padding: 0 20px;}
.switch span { position: absolute; top: 14px; width: 24px; height: 24px; font-size: 24px; color: #3e75c7; -webkit-border-radius: 50%; border-radius: 50%; }
.switch label{ color: #555; font-size: 16px; padding-left: 36px;}
.b-switch{ float: right; margin-top: 14px; width: 64px; height: 22px;}
.b-switch::before{ line-height: 22px; top: -2px;}
.b-switch .mui-switch-handle{ width: 20px; height: 20px; border-radius: 50%;}
</style>