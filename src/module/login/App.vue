<template>
    <div>
	<vhead titles='用户登录'></vhead>
    <div class="wrapper">
        <div class="login_tab">
            <div class="login_row flex_card">
                <span class="iconfont icon-wode"></span>
                <p class="flex_box">
                    <input id="lgPhone" type="tel" v-model='telPhone' maxlength="11" placeholder="手机号/昵称/邮箱" />
                </p>
            </div>
            <div class="login_row flex_card">
                <span class="iconfont icon-mima"></span>
                <p class="flex_box">
                    <input id="lgPassword" type="password" v-model='pwd' placeholder="请输入您的密码" />
                </p>
            </div>
        </div>
        <div class="btnDiv">
            <input id="loginSub" type="button" class="aa" @tap='loginTap' value="登录" v-if="telPhone && pwd">
            <input id="loginSub" type="button" class="aa" @tap='loginTap' value="登录" v-else disabled="disabled">
        </div>
        <p class="loginB">
            <a data-href="register.html" :click="demoTag()">注册账号</a>
            <a data-href="password_back.html" href="./welcome.html">找回密码</a>
        </p>
    </div>
    </div>
</template>
<script>
import c from '../../assets/js/conf'
import v from '../../assets/js/validation'
import o from '../../assets/js/openWin'
import p from '../../assets/js/public'
import vhead from '../../components/common/Head'
mui.plusReady(function(){
	plus.nativeUI.closeWaiting();

	self = plus.webview.currentWebview();

	self.setStyle({
		'softinputMode': "adjustResize", // 弹出软键盘时自动改变webview的高度
		'popGesture':'none'// 关闭侧滑返回功能
	});

});

export default {
    data() {
        return {
            telPhone: '',
            pwd: ''
        }
    },
    methods: {
        loginTap: function() {
            let tel = this.telPhone;
            let pwd = this.pwd;
            let url = c.URL + '/index/login/login'

            if (!v.isTel(tel)) {
                mui.toast('请输入正确的手机号码！')
                return false
            }
            mui.ajax(url, {
                data: {
                    deviceid: p.getLocal(c.PREFIX + '_DEVICEID'),
                    username: tel,
                    password: pwd
                },
                dataType: 'json', //服务器返回json格式数据
                type: 'post', //HTTP请求类型
                timeout: 10000, //超时时间设置为10秒；
                success: function(data) {
                    //console.log(data);
                    let d = JSON.parse(data);
                    if (d.msg == '0') {
                        mui.toast(d.info);
                    } else {
                        p.setLocal(c.PREFIX + '_USERINFO',d.data);
                        p.setLocal(c.PREFIX + '_PHONE',tel);
                        if(!plus.webview.getWebviewById('index.html')){
							mui.toast('登录成功')
							o.openWin({
								id: 'index.html',
								url: 'index.html',
								waiting:{
									autoShow: true,
									options:{
										background:'rgba(100,100,100,0.8)'
									}
								}
							});
						}
                    }

                },
                error: function(xhr, type, errorThrown) {
                    console.log(errorThrown)
                }
            });
        }
        ,
        demoTag:function () {
          let url = c.URL + '/sell/all'
          mui.ajax(url, {
            data: {
              page: 1
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            success: function(data) {
              console.log(data);
            },
            error: function(xhr, type, errorThrown) {
              console.log(errorThrown)
            }
          });
        }
    },
    components:{
    	vhead
    }
}
</script>


<style scoped>
/*登录*/
.wrapper { position: absolute; top: 44px; right: 0; left: 0; bottom: 0; width: 100%; display: block; overflow-y: auto; -webkit-overflow-scrolling: touch; }
.body { background: #fff; }
.flex_box { -webkit-box-flex: 1;  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;}
.login_tab { margin: 0 12px 36px; border-top: 1px solid #dcdcdc; }
.login_row { height: 76px; padding-top: 18px; line-height: 58px; border-bottom: 1px solid #dcdcdc; }
.login_row span { display: inline-block; width: 60px; height: 100%; font-size: 30px; color: #999999; padding: 12px 0 0 12px; }
.login_row span.icon-wode { font-size: 28px; }
.login_row p { padding: 15px 8px 0; }
.login_row p input { display: block; width: 100%; height: 28px; line-height: 28px; color: #666; font-size: 15px; }

.loginB { padding: 15px 20px; }
.loginB a { float: left; width: 50%; height: 16px; line-height: 16px; text-align: center; color: #448aca; }
.loginB a:first-child { border-right: 1px solid #ccc; }

.btnDiv { margin: 24px 20px 0; }
.btnDiv input.aa { display: block; width: 100%; height: 44px; line-height: 44px; text-align: center; color: #fff; font-size: 16px; background: #518ae1; -webkit-border-radius: 5px; border-radius: 5px; }
.btnDiv input.aa:active { background: #5d97ee; }
.btnDiv input { display: block; width: 100%; height: 44px; line-height: 44px; text-align: center; color: #fff; font-size: 16px; background: #ccc; -webkit-border-radius: 5px; border-radius: 5px; }
.btnDiv input:active { background: #5d97ee; }
#aBankSub { display: block; width: 92%; height: 44px; line-height: 44px; margin: 24px auto 0; text-align: center; color: #fff; font-size: 18px; background: #518ae1; -webkit-border-radius: 5px; border-radius: 5px; }
#aBankSub:active { background: #5d97ee; }
.btnDiv input.btn { display: block; width: 100%; height: 44px; line-height: 44px; text-align: center; color: #fff; font-size: 16px; background: #518ae1; -webkit-border-radius: 5px; border-radius: 5px; }
.btnDiv input.btn:active { background: #5d97ee; }

</style>
