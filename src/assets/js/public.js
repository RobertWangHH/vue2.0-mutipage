import o from '../../assets/js/openWin'
export default {
    // 获取localstorage缓存
    getLocal(name) {
        let value = null;
        try {
            value = JSON.parse(localStorage.getItem(name))
        } catch (err) {
            value = localStorage.getItem(name)
        }
        return value
    },
    // 设置localstorage缓存
    setLocal(name, val) {
        let value = null;
        if (val instanceof Object) {
            value = JSON.stringify(val)
        }else{
            value = val
        }
        localStorage.setItem(name, value)
    },
    // 删除localstorage缓存
    removeLocal(name) {
        localStorage.removeItem(name);
    },
    // 打开登录窗口
    loginView(d){
        plus.nativeUI.closeWaiting();
        mui.toast(d.info);
        localStorage.removeItem('userInfo');
        localStorage.removeItem('identType');                             
        var loginView = plus.webview.getWebviewById('login.html');
        if(loginView){
            plus.webview.show(loginView, 300);
        }else{
            o.openWin({
                id: 'login.html',
                url: 'login.html',
                waiting:{
                    autoShow: true,
                    options:{
                        background:'rgba(100,100,100,0.8)'
                    }
                }
            });
        }
        return false;
    }
}
