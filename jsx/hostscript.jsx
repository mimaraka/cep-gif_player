/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function savePath(gif_path) {
    var fold = new Folder(Folder.myDocuments.fsName + "/AeExtention_GifPlayer");

    if(fold.exists != true){
		Folder(fold).create();
	}

    var file = new File(Folder.myDocuments.fsName + "/AeExtention_GifPlayer/gif_path.txt");

    file.open("w");
    file.write(decodeURI(gif_path));
    file.close();
}


function initialize() {
    var file = new File(Folder.myDocuments.fsName + "/AeExtention_GifPlayer/gif_path.txt");

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
    var path = File.openDialog("Select a GIF file", "GIF animation:*.gif").fsName.replace(/\\/g, "\\\\");
    
    if (path != "") {
        return path;
    }
    else {
        return false;
    }
}