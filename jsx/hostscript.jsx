/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function savePath(gif_path, script_dir) {
    var file = new File(script_dir + "gif_path.txt");

    file.open("w");
    file.write(gif_path);
    file.close();
    alert(script_dir);
}


function initialize(script_dir) {
    var file = new File(script_dir + "gif_path.txt");

    if(file.exists == true){
        file.open("r");
        var path = file.read();
        file.close();
        if (path != "") {
            return path;
        }
    }
    return false;
}


function openGif() {
    var path = File.openDialog("Select a GIF file", "GIF animation:*.gif").fsName.replace(/\\/g, "\\\\").fsName.replace(/%20/g, " ");
    
    if (path != "") {
        return path;
    }
    else {
        return false;
    }
}