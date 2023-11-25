/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


// パスを読み込み
function getPath() {
    // After Effects
    if (app.settings) {
        if (app.settings.haveSetting("GifPlayer", "path")) {
            return app.settings.getSetting("GifPlayer", "path");
        }
    }
    // Illustrator
    else if (typeof app.preferences.getStringPreference == "function") {
        try {
            return app.preferences.getStringPreference("GifPlayer-path");
        }
        catch (e) {
            return false;
        }
    }
    // Photoshop
    else if (typeof app.getCustomOptions == "function") {
        try {
            return app.getCustomOptions("GifPlayer-path");
        }
        catch (e) { return false; }
    }
    else return false;
}

// 幅情報を読み込み
function getWidth() {
    // After Effects
    if (app.settings) {
        if (app.settings.haveSetting("GifPlayer", "width")) {
            return app.settings.getSetting("GifPlayer", "width");
        }
    }
    // Illustrator
    else if (typeof app.preferences.getStringPreference == "function") {
        try {
            return app.preferences.getStringPreference("GifPlayer-width");
        }
        catch (e) { return false; }
    }
    // Photoshop
    else if (typeof app.getCustomOptions == "function") {
        try {
            return app.getCustomOptions("GifPlayer-width");
        }
        catch (e) { return false; }
    }
    else return false;
}

// パス情報を保存
function savePath(path) {
    // After Effects
    if (app.settings) {
        app.settings.saveSetting("GifPlayer", "path", path);
    }
    // Illustrator
    else if (typeof app.preferences.setStringPreference == "function") {
        app.preferences.setStringPreference("GifPlayer-path", path);
    }
    // Photoshop
    else if (typeof app.putCustomOptions == "function") {
        app.putCustomOptions("GifPlayer-path", path, true);
    }
}

// 幅情報を保存
function saveWidth(width) {
    // After Effects
    if (app.settings) {
        app.settings.saveSetting("GifPlayer", "width", width);
    }
    // Illustrator
    else if (typeof app.preferences.setStringPreference == "function") {
        app.preferences.setStringPreference("GifPlayer-width", width);
    }
    // Photoshop
    else if (typeof app.putCustomOptions == "function") {
        app.putCustomOptions("GifPlayer-width", width, true);
    }
}

// Gifファイルをオープン
function openGif() {
    var path = File.openDialog("Select a GIF image", "GIF animation:*.gif").fsName.replace(/\\/g, "\\\\");
    
    if (path != "")
        return path;
    else
        return null;
}