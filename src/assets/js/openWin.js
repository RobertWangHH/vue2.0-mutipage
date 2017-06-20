import c from '../../assets/js/conf'
/*
打开新窗口方法：当打开新窗口时，判断当前存在窗口数里，如超出指定数量，将关闭打开时间最早的多余窗口
*/
export default {
    openWin:function(obj) {
        if(plus){
            mui.openWindow(obj)
            let wvs = plus.webview.all();
            if (wvs.length >= c.WINNUM) {
                let num = wvs.length - c.WINNUM;
                for (let i = 0; i < num; i++) {
                    wvs[i].close();
                }
            } 
        }else{
            mui.openWindow(obj)
        }
        
    }
}
