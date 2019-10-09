/*
获取地址栏参数
*/

export function getQueryString(name) {
    if (window) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        var r = window.location.search.substr(1).match(reg)
        if (r != null) return unescape(r[2])
        return null
    }

}

/*
解决安卓手机播放结束后出现广告问题
*/

function fullscreen(elem) {
    let prefix = 'webkit';
    if (elem[prefix + 'EnterFullScreen']) {
        return prefix + 'EnterFullScreen';
    } else if (elem[prefix + 'RequestFullScreen']) {
        return prefix + 'RequestFullScreen';
    };
    return false;
}

function exitScreen(elem) {
    if (elem.webkitExitFullScreen || elem.exitFullScreen) {
        elem.webkitExitFullScreen && elem.webkitExitFullScreen();
        elem.exitFullScreen && elem.exitFullScreen();
    }
}