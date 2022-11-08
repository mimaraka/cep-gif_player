/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

function absolutePath(path) {
    var e = document.createElement('span');
    e.innerHTML = '<a href="' + path + '" />';
    return e.firstChild.href;
}


function loadGif(path) {
    var image = document.getElementById("gifimage");
    image.src = path;
}


(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
        themeManager.init();

        csInterface.evalScript('initialize("' + absolutePath("./") + '")', function (init_path) {
            if (init_path != false) {
                loadGif(decodeURI(init_path));
            }
        });


        $("#content").dblclick(function () {
            csInterface.evalScript('openGif()', function (result) {
                if (result != false) {
                    loadGif(decodeURI(result));
                    csInterface.evalScript('savePath("' + result + '","' + absolutePath("./") + '")');
                }
            });
        });
    }

    init();

}());
