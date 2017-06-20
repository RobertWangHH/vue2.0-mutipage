export default {
    //验证非空
    notEmpty: function(obj, str) {
        var val = this.trim(obj.value);
        if (!val) {
            mui.toast(str + '不能为空！');
            return false;
        } else {
            return true;
        }
    },
    //去掉首尾空格
    trim: function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    //验证邮箱
    isEmail: function(str) {
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
        return reg.test(str);
    },
    //验证手机号码
    isTel: function(str) {
        let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        return reg.test(str);
    },
    //验证非法字符
    isCharacter: function(str) {
        let reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
        return reg.test(str);
    },
    //验证长度
    isLength: function(str, long) {
        return str.length > long 
    },
    //验证全数字
    isMath: function(str) {
        let reg = /^\d+$/
        return reg.test(str);
    },
    //验证全字母
    isLetter: function(str) {
        let reg = /^[a-zA-Z]+$/
        return reg.test(str);
    },
    //验证是否包含大写字母
    isBletter: function(obj, str) {
        let reg = /[A-Z]+/g
        return reg.test(str);
    },
    //验证是否包含小写字母
    isSletter: function(obj, str) {
        let reg = /[a-z]+/g
        return reg.test(str);
    }
}
