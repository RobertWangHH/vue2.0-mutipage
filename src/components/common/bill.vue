<template>        
    <div class="bill_height">
        <div class="bill_bd">
        <template v-for='(value,key) in bills'>
            <div class="bill_date opacity">
                <span>支出：￥{{ value[0].dateMoney/100 | floatNum }}</span>
                <p>{{ key }}</p>
            </div>
            <div class="bill_row opacity" v-for="item in value">
                <a>
                    <div class="bill_pic fl">
                        <span :class="item.tChannel | iconType"></span>
                    </div>
                    <div class="bill_des">
                        <h6>{{ item.productInfo }}</h6>
                        <p>{{ item.ddCreatetime.substr(11,8) }} {{ item.ddStatus=='1'?'付款成功':'付款失败' }}</p>
                        <em class="pfail" v-if="item.ddStatus!='1'">{{ item.allFee/100 | floatNum }}</em>
                        <em  v-else>-{{ item.allFee/100 | floatNum }}</em>
                        <i v-if="item.refundFee == item.allFee - item.refundFee">已全部退款</i>
                        <i v-if="item.allFee > item.allFee - item.refundFee">部分退款（{{ item.refundFee/100 | floatNum }}）</i>
                    </div>
                </a>
            </div>
        </template>
        </div>
        <p class="loadMore"></p>
    </div>
</template>

<script>
import c from '../../assets/js/conf'
import p from '../../assets/js/public'
export default {
    props:["bills"],
    filters:{//过滤器
        floatNum:function(val){
            val = val +'';
            var b = val.indexOf('.');
            
            if(b < 0){
                return (val +'.00');
            }else{
                if(val.length - b == '2'){
                    return (val +'0');
                }else{
                    return val.substr(0, b+3);
                }
            }
        },
        iconType:function(val){
            switch(val){
                case '0': return 'way_zhi'; break;
                case '1': return 'way_wechat'; break;
                case '2': return 'way_yin'; break;
                case '3': return 'way_yin'; break;
                case '40T0': return 'way_zhi'; break;
                case '41T0': return 'way_wechat'; break;
                case '40T1': return 'way_zhi'; break;
                case '41T1': return 'way_wechat'; break;
                default: return 'way_yin'; break;
            }
        }
    }
}
</script>

<style scoped>
/*账单记录样式*/
.bill_bd { background: #fff; border-top: 1px solid #dcdcdc; -webkit-box-shadow: 0 1px 1px #eee; box-shadow: 0 1px 1px #eee; }
.custd_bd { background: #fff; -webkit-box-shadow: 0 0 3px #dfdfdf; box-shadow: 0 0 3px #dfdfdf; }
.bill_date { height: 40px; line-height: 40px; padding: 0 20px; background: #eeeeee; }
.bill_date p, .bill_date span { font-size: 15px; color: #666; }
.bill_date span { float: right; }

.bill_row { position: relative; }
.bill_row:before { content: ''; position: absolute; right: 0; left: 20px; top: 0; height: 1px; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #dcdcdc; }
.bill_row a { display: block; width: 100%; padding: 12px 20px; }
.bill_row a:active { background: whitesmoke;}
.bill_pic { position: relative; width: 30px; height: 30px; margin-top: 7px; }
.bill_pic img { width: 100%; height: 100%; border-radius: 3px; -webkit-border-radius: 3px; }
.bill_pic span { display: block; width: 100%; height: 100%; background: url(../../assets/images/icon_pay.png) no-repeat; -webkit-background-size: 30px auto; background-size: 30px auto; -webkit-border-radius: 5px; border-radius: 5px; }
.bill_pic span.way_yin { background-position: 0 0; }
.bill_pic span.way_wechat { background-position:  0 -33px; }
.bill_pic span.way_zhi { background-position: 0 -66px; }
.bill_pic .bill_tag { position: absolute; top: -3px; right: -3px; width: 10px; height: 10px; -webkit-border-radius: 50%; border-radius: 50%; background: #eb3232; }

.bill_des { position: relative; min-height: 44px; margin-left: 50px; padding-right: 60px; } 
.bill_des h6 { font-size: 15px; color: #333; padding-top: 1px; overflow:hidden; text-overflow:ellipsis; -webkit-text-overflow:ellipsis; white-space:nowrap; }
.bill_des h6.tfail { color: #999; }
.bill_des p { color: #999; }
.bill_des em { position: absolute; top: 0; right: 0; font-size: 18px; line-height: 24px; }
.bill_des em.pfail { color: #ce2f3b; } 
.bill_des i { position: absolute; top: 24px; right: 0; font-size: 11px; line-height: 24px; color: #ce2f3b; }
</style>