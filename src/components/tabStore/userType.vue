<template>
    <div class="store_role opacity" v-if="userBtn">
        <template v-for="(item,index) in userType">
        <a :class="{'active':index==bool}" @tap="userTap(index)">{{item.name}}</a>
        </template>
    </div>
</template>
<script>
import c from '../../assets/js/conf'
import p from '../../assets/js/public'
export default {
    data(){
        return {
            userType:[],
            bool:0
        }
    },
    props:["userBtn"],
    created(){
        let _this = this;
        let url = c.URL + '/app/user/getUserRole';
        let data = {
                deviceid: p.getLocal(c.PREFIX + '_DEVICEID'),
                username: p.getLocal(c.PREFIX + '_USERINFO').username
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
                    _this.userType = d.data
                }
            },
            error: function(xhr, type, errorThrown) {
                console.log(errorThrown)
            }
        });
    },
    methods:{
        userTap(index){
            this.bool = index;
        }
    }
}
</script>
<style scoped>
/*切换角色*/
.store_role { position: absolute; top: 0; left: 0; width: 100%; min-height: 70px; padding: 12px 0 18px; background: #fff; z-index: 130; display: block; }
.store_role a { float: left; width: 28%; height: 34px; line-height: 32px; margin: 6px 0 0 4%; color: #666666; text-align: center; border: 1px solid #dcdcdc; -webkit-border-radius: 3px; border-radius: 3px; overflow: hidden; }
.store_role a.active { color: #3e75c7; border: 1px solid #3e75c7; background: url(../../assets/images/select.png) right bottom no-repeat; background-size: 16px auto; -webkit-background-size: 16px auto; }

</style>