
function logFiles(myfolder) {
    var files = myfolder.files;
    files.sort();
    for(var i=0; i<files.length; i++)
        console.log(files[i].name);
}

var myfolder = Folder("C:/tempo");
logFiles(myfolder);