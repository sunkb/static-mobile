function fullscreen(elem) {
    let prefix = 'webkit';
    if (elem[prefix + 'EnterFullScreen']) {
        return prefix + 'EnterFullScreen';
    } else if (elem[prefix + 'RequestFullScreen']) {
        return prefix + 'RequestFullScreen';
    };
    return false;
}
function isIPad() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/iPad/i) == "ipad") {
        return true;
    } else {
        return false;
    }
}
function exitScreen(elem) {
    if (elem.webkitExitFullScreen || elem.exitFullScreen) {
        elem.webkitExitFullScreen && elem.webkitExitFullScreen();
        elem.exitFullScreen && elem.exitFullScreen();
    }
}
//仅支持ipad
export const videoPlayerEvent = (v) => {
    let video = v,
        doc = document;
    //监听video已经开始播放时全屏显示
    if (/Android|webOS|iPhone|iPad|BlackBerry|iPod/i.test(navigator.userAgent)) {
        // 移动端操作
        video.play();
        if (isIPad()) {
            video.addEventListener('play', () => {
                var fullscreenvideo = fullscreen(video);
                video[fullscreenvideo]();
            });
            //退出全屏暂停视频
            video.addEventListener("webkitfullscreenchange", function (e) {
                if (!doc.webkitIsFullScreen) {
                    video.pause();
                };
            }, false);
            video.addEventListener("fullscreenchange ", function (e) {
                if (!doc.webkitIsFullScreen) {
                    video.pause();
                };
            }, false);
            //播放完毕，退出全屏
            video.addEventListener('ended', function () {
                this.webkitExitFullScreen();
            }, false);
        }
        
    } else {
        video.requestFullscreen();
        video.play();

        video.addEventListener('play', () => {
            var fullscreenvideo = fullscreen(video);
            video[fullscreenvideo]();
        });
        //退出全屏暂停视频
        video.addEventListener("webkitfullscreenchange", function (e) {
            if (!doc.webkitIsFullScreen) {
                video.pause();
            };
        }, false);
        video.addEventListener("fullscreenchange ", function (e) {
            if (!doc.webkitIsFullScreen) {
                video.pause();
            };
        }, false);
        //播放完毕，退出全屏
        video.addEventListener('ended', function () {
            this.webkitExitFullScreen();
        }, false);
        // PC端操作
    }
}