/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/


function absolutePath(path) {
    var e = document.createElement('span');
    e.innerHTML = '<a href="' + path + '" />';
    return e.firstChild.href;
}

// Gif画像を読み込み
function loadGif(path) {
    var image = document.getElementById("gifimage");
    image.src = decodeURI(path);
}


// Gif画像をスケーリング
function scaleGif(scale) {
    var image = document.getElementById("gifimage");
    const w = Number(image.style.width.slice(0, -1));
    image.style.width = String(w + scale) + "%";
}


(function () {
    'use strict';

    var csi = new CSInterface();
    
    function init() {
        themeManager.init();

        // 初期化処理(設定を読み込む)
        csi.evalScript('getPath()', function (path) {
            if (path)
                loadGif(path);
        });
        csi.evalScript('getWidth()', function (width) {
            if (width)
                document.getElementById("gifimage").style.width = width;
        });


        // 画像をダブルクリックしたときの挙動
        $("#content").dblclick(function () {
            // Gifファイルをオープン
            csi.evalScript('openGif()', function (path) {
                if (path) {
                    // Gifを読み込み
                    loadGif(path);
                    // パスを保存
                    csi.evalScript('savePath("' + path + '")');
                }
            });
        });

        // スクロール時の挙動
        document.onwheel = (function (e) {
            if (e.ctrlKey) {
                e.preventDefault();
                // 画像をスケーリング
                scaleGif(-e.deltaY * 0.01);
                // 幅情報を保存
                const new_width = document.getElementById("gifimage").style.width;
                csi.evalScript('saveWidth("' + new_width +'")')
            }
        });
    }

    init();

}());