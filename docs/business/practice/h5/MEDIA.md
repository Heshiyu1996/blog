# 常用媒体查询兼容方案
```less
@base: 100 / 1080vw;

/* PC 兼容 */
@media screen and (min-width: 600px) {
    html {
        font-size: 55.5555555px;
    }
}

/* iphone xr & iphone x & iphone xs */
@media screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3),
screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2),
screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .m-playlist {
        // padding-bottom: 20px;
    }

    .act-modal-container .mrc-modal-container .m-act-modal .u-btn-close {
        bottom: -180 * @base;
    }

    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 15px;
        p {
            font-size: 15px;
        }
    }
}

/* ip7 plus */
@media screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
    .m-bubble {
        .box {
            // top: -20vw
            top: -12vw
        }
    }
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 16px;
        p {
            font-size: 16px;
        }
    }
}

/* ip6 */
@media screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    .m-bubble {
        .box {
            top: -10vw
        }
    }
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 15px;
        p {
            font-size: 15px;
        }
    }
}

/* ip6s plus： ip6的分辨率&DPR 是 3 */
@media screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 3) {
    .m-bubble {
        .box {
            top: -10vw
        }
    }
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 15px;
        p {
            font-size: 15px;
        }
    }
}

/* ip5 se */
@media screen and (max-width: 320px) {
    .m-bubble {
        .box {
            top: -8vw
        }
    }
    .m-playlist .playlist-top .count.f-vc {
        left: 112px;
    }
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 13px;
        p {
            font-size: 13px;
        }
    }
}

/* 常规安卓1080P标准屏 */
@media screen and (device-width: 360px) and (device-height: 640px) {
    .m-bubble {
        .box {
            top: -8vw
        }
    }
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 14px;
        p {
            font-size: 14px;
        }
    }
}

/* ==== 普通安卓360P设备 start ==== */
@media screen and (device-width: 360px) and (max-height: 630px) {
    .m-bubble {
        .box {
            top: -8vw
        }
    }
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 14px;
        p {
            font-size: 14px;
        }
    }
}

@media screen and (device-width: 360px) and (max-height: 605px) {
    .m-bubble {
        .box {
            top: -13vw
        }
        .ctrl.f-hc {
            bottom: 9vw;
        }
    }
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 14px;
        p {
            font-size: 14px;
        }
    }
}

@media screen and (device-width: 360px) and (max-height: 590px) {
    .m-bubble {
        .box {
            top: -13vw
        }
        .ctrl.f-hc {
            bottom: 3vw;
        }
    }
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 14px;
        p {
            font-size: 14px;
        }
    }
}

/* ==== 普通安卓360P设备 end ==== */

/* 安卓1080P长屏 */
@media screen and (device-width: 360px) and (min-height: 700px) and (-webkit-device-pixel-ratio: 3){
    .m-bubble {
        .box {
            top: -6vw
        }
    }
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 14px;
        p {
            font-size: 14px;
        }
    }
}

/* 华为P30 pro */
@media screen and (device-width: 360px) and (device-height: 780px) and (-webkit-device-pixel-ratio: 3){
    .m-bubble {
        .box {
            top: -2vw;
        }
    }

    .m-playlist .playlist-top .count.f-vc {
        left: 128px;
    }

    .m-playlist .playlist-box .playlist-item .info .song-artist.f-thide {
        bottom: 10px;
    }

    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 14px;
        p {
            font-size: 14px;
        }
    }
}

/* 魅族 某古老机型 */
@media screen and (device-width: 384px) and (device-height: 640px) {
    .m-bubble {
        .box {
            top: -12vw
        }
    }
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 14px;
        p {
            font-size: 14px;
        }
    }
}

/* 小米 8 */
@media screen and (device-width: 393px) and (device-height: 818px) {
    // 滑动引导子项
    .u-slide-box.z-new2 .msg-item {
        height: 14px;
        p {
            font-size: 14px;
        }
    }
}
```