<template>
    <div>
        <vhead :titles='titles' :head-btn='headBtn' @dropdown="ondropdown"></vhead>
        <footer class="bp_bar mui-bar-tab">
            <a id="tabConsumers" class="mui-tab-item mui-active" @tap='tabTap(1)'>
                <span class="iconfont icon-zhangdan"></span>
                <span class="tab_label">消费者</span>
            </a>
            <a id="tabBusi" class="mui-tab-item" @tap='tabTap(2)'>
                <span class="iconfont icon-26"></span>
                <span class="tab_label">商家</span>
                <div class="billMsg">
                    <em id="billNum"></em>
                </div>
            </a>
            <a id="tabAgent" class="mui-tab-item" @tap='tabTap(3)'>
                <span class="iconfont icon-yidaili"></span>
                <span class="tab_label">代理商</span>
            </a>
            <a id="tabChart" class="mui-tab-item" @tap='tabTap(4)'>
                <span class="iconfont icon-monitor"></span>
                <span class="tab_label">运营</span>
            </a>
            <a class="mui-tab-item" @tap='tabTap(5)'>
                <span class="iconfont icon-wode"></span>
                <span class="tab_label">我的</span>
            </a>
        </footer>
    </div>
</template>
<script>
import c from '../../assets/js/conf'
import vhead from '../../components/common/Head'
let subpages = ['tabBill.html', 'tabStore.html', 'tabAgent.html', 'tabChart.html', 'tabPersonal.html'];
let sublable = ['首页', '商家', '代理商', '运营', '个人中心'];
let subpage_style = {
    top: '44px',
    bottom: '51px'
}
let self = null;
let aniShow = {};
//当前激活选项
let activeTab = subpages[0];
mui.plusReady(function() {
    self = plus.webview.currentWebview();

    // 关闭侧滑返回功能
    self.setStyle({
        'popGesture': 'none'
    });

    let temp = {};
    let sub = plus.webview.create(subpages[0], subpages[0], subpage_style);

    temp[subpages[0]] = true;
    mui.extend(aniShow, temp);
    self.append(sub);

})
export default {
    data() {
        return {
            titles: sublable[0],
            headBtn: '1'
        }
    },
    methods: {
        tabTap: function(tabId) {
            let targetTab = subpages[tabId - 1];
            if (targetTab == activeTab) {
                return false;
            }
            this.titles = sublable[tabId - 1];
            this.headBtn = tabId;
            if (tabId > 1) {
                if (!plus.webview.getWebviewById(targetTab)) {
                    plus.nativeUI.showWaiting('', {
                        background: 'rgba(100,100,100,0.8)'
                    });
                    let sub = plus.webview.create(targetTab, targetTab, subpage_style);

                    self.append(sub);

                    //关闭等待窗口
                    sub.onloaded = function() {
                        plus.nativeUI.closeWaiting();
                    }
                }
            }

            //显示目标选项卡
            //若为ios平台或非首次显示，则直接显示
            if (mui.os.ios || aniShow[targetTab]) {
                plus.webview.show(targetTab);
            } else {
                //否则，使用fade-in动画，且保存变量
                let temp = {};
                temp[targetTab] = 'true';
                mui.extend(aniShow, temp);
                plus.webview.show(targetTab, 'fade-in', 300);
            }
            //隐藏当前
            plus.webview.hide(activeTab);
            //更改当前活跃的选项卡
            activeTab = targetTab;
        },
        ondropdown: function() {
            let view = plus.webview.getWebviewById('tabStore.html')
            mui.fire(view, 'abc')
        }
    },
    components: {
        vhead
    }
}
</script>
<style scoped>
.bp_bar {
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    height: 44px;
    padding: 0 10px;
    background: #fff;
    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, .3);
    box-shadow: 0 0 2px rgba(0, 0, 0, .3);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.bp_bar.c_footer {
    padding: 0 5%;
}

.bp_bar .mui-tab-item {
    position: relative;
}

.mui-bar-tab .mui-tab-item.mui-active {
    color: #3e75c7;
}

.mui-tab-item .iconfont {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    font-size: 22px;
    width: 22px;
    height: 22px;
    margin-top: 5px;
}

.mui-tab-item .iconfont.icon-zhangdan {
    font-size: 21px;
}

.mui-tab-item .iconfont.icon-26 {
    font-size: 23px;
}

.mui-tab-item .iconfont.icon-yidaili {
    font-size: 25px;
}

.mui-tab-item .tab_label {
    display: block;
    font-size: 11px;
}

.billMsg {
    position: absolute;
    top: 0;
    left: 50%;
    font-size: 10px;
    min-width: 16px;
    height: 16px;
    margin: 3px 0 0 3px;
    padding: 0 5px;
    background: #eb3232;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    display: none;
}

#billNum {
    color: #fff;
    line-height: 18px;
}

.index_scan span {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    font-size: 22px;
    width: 22px;
    height: 22px;
    margin-top: 5px;
    width: 60px;
    height: 40px;
    background: #3e75c7;
    color: #fff;
    font-size: 30px;
    margin-top: 0;
    padding-top: 6px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}

.index_scan {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
</style>
