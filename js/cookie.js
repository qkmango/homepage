function setCookie(name, value, expirationDay) {
    if (expirationDay == undefined) {
        expirationDay = 30;
    }
    var exp = new Date();
    exp.setTime(exp.getTime() + expirationDay * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    return null;
}