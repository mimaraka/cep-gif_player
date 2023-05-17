/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


// パスを読み込み
function getPath() {
    if (app.settings.haveSetting("GifPlayer", "path"))
        return app.settings.getSetting("GifPlayer", "path");
    else return false;
}

// 幅情報を読み込み
function getWidth() {
    if (app.settings.haveSetting("GifPlayer", "width"))
        return app.settings.getSetting("GifPlayer", "width");
    else return false;
}

// パス情報を保存
function savePath(path) {
    app.settings.saveSetting("GifPlayer", "path", path);
}

// 幅情報を保存
function saveWidth(width) {
    app.settings.saveSetting("GifPlayer", "width", width);
}

// Gifファイルをオープン
function openGif() {
    var path = File.openDialog("Select a GIF file", "GIF animation:*.gif").fsName.replace(/\\/g, "\\\\");
    
    if (path != "")
        return path;
    else
        return false;
}