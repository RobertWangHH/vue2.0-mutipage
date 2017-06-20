<template>
    <div class="wrapper">
        <p class="slideDown">
            <span>下拉可刷新</span>
        </p>
        <div class="scan_scroll">
            <div class="bill_scroll">
                <home-head></home-head>
                <div class="bill_all">
                    <h3>账单记录</h3>
                </div>
                <bill :bills="bills"></bill>
            </div>
        </div>
    </div>
</template>


<script>
import c from '../../assets/js/conf'
import p from '../../assets/js/public'
import bill from '../../components/common/bill'
import homeHead from '../../components/tabBill/homeHead'
export default {
    data(){
        return {
            bills:{}
        }
    },
    created(){
        let _this = this;
        upAjax(1);
        function upAjax(isplus){
            let url = c.URL + '/app/user/getUserTradeList';
            
            let data = {
                    deviceid: p.getLocal(c.PREFIX + '_DEVICEID'),
                    username: p.getLocal(c.PREFIX + '_USERINFO').username,
                    payType: '',
                    startTime: '',
                    lastTime: '',
                    page: 1
                }
            mui.ajax(url, {
                data: data,
                dataType: 'json', //服务器返回json格式数据
                type: 'post', //HTTP请求类型
                timeout: 10000, //超时时间设置为10秒；
                success: function(data) {
                    //console.log(data);
                    let d = JSON.parse(data);
                    if (d.msg == '0') {
                        mui.toast(d.info);
                    } else if(d.msg == '3'){
                        p.loginView(d);
                    } else {
                        let obj = {};
                        for(let i = 0; i < d.data.length; i++){
                            if(obj[d.data[i].ddCreateDate]){
                                obj[d.data[i].ddCreateDate].push(d.data[i])
                            }else{
                                obj[d.data[i].ddCreateDate]= [d.data[i]]
                            } 
                        }
                        _this.bills = obj
                    }
                },
                error: function(xhr, type, errorThrown) {
                    console.log(errorThrown)
                }
            });
        }
    },
    components: {
        "bill":bill,
        "home-head":homeHead
    }
}
</script>

<style scoped>
.bill_all { padding: 8px 20px; height: 42px; text-align: right; background: #fff; }
.bill_all h3 { float: left; font-size: 16px; line-height: 26px; color: #555; }
.bill_all span { float: right; display: inline-block; padding: 0 5px; height: 26px; line-height: 26px; text-align: center; border: 1px solid #3e76c9; color: #3e76c9; font-size: 13px; background: #fff; -webkit-border-radius: 5px; border-radius: 5px; overflow: hidden; }
.bill_all span:active { color: #fff; background: #3e76c9; }
</style>