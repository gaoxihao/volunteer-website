	let gg = document.getElementById('gg'); //  抓取广告框
    let close = document.getElementById('close');   //  抓取关闭按钮
    let boxHeight = gg.clientHeight, boxWidth = gg.clientWidth;  //  获取广告框的宽度和高度
    let vw = window.innerWidth, vh = window.innerHeight;    //  可视窗口大小
    let mx = 1, my = 1; //  每次移动的像素
    let mw = 0, mh = 0; //  移动总量
    let num = 0;    //  点击关闭次数
    let maxNum = 1; //  关闭几次后消失
    let interval = 0;   //  定时器个数
    let time = 10;   //  定时器时间（运动时）
    let closeTime = 1000;   //  定时器时间（关闭时）
    /*
    * 广告窗移动
    *
    * */
    function autoPlay_gg() {
        interval = 0;
        interval = setInterval(function () {
            mw = mw + mx;
            mh = mh + my;
            if (mw >= vw - boxWidth || mw <= 0) {
                mx = -1 * mx;
            }
            if (mh >= vh - boxHeight || mh <= 0) {
                my = -1 * my;
            }
            gg.style.left = mw + 'px';
            gg.style.top = mh + 'px';
        }, time);
    }
    autoPlay_gg();
    /*
    * 鼠标移动到广告窗上时，暂停移动
    *
    * */
    gg.onmousemove = function () {
        clearInterval(interval);    //  清除定时器
    };
    gg.onmouseleave = function () {
        clearInterval(interval);
        autoPlay_gg();  //  广告窗运动
    };
    /*
    * 点击关闭按钮时
    * 
    * */
    close.onclick = function () {
        gg.style.display = 'none';  //  隐藏广告窗
        num++;
        if (num <= maxNum) {
            setTimeout(function () {
                gg.style.display = 'block'; //  显示广告窗
            }, closeTime)
        } else {
            gg.parentNode.removeChild(gg);  //  删除广告窗
        }

    }