function errorMsgFP(e) {
    alert("Exception: " + e)
}
//Below function to write the data in files of data directory path of device.
function storeDataFP(file, data, isRaw) {
    if (file.exists()) {
        file.remove(true);
    }
    file.createFile();
    file.write(data, false);
}
var fullPassPath = "";
//Following function is to ensure the path and create files & directories in the data directory path of device. 
function ensurePathFP(path) {
    var file = null;
    var bPath = kony.io.FileSystem.getDataDirectoryPath() + constants.FILE_PATH_SEPARATOR;
    fullPassPath = bPath + path[0];
    var myfile = new kony.io.File(fullPassPath);
    file = myfile;
    if (!myfile.exists()) {
        if (typeof pth == "string" && pth.indexOf(".") > 0) myfile.createFile();
        else myfile.createDirectory();
    }
    return file;
}

function getFile() {
    frmTwo.scrbId.remove(checkBox);
    var passes = new Array();
    var flag = 0;
    try {
        var mUrl = "http://10.10.5.78:8080/PKPassListing/listPasses";
        var request = new kony.net.HttpRequest();
        request.onReadyStateChange = function() {
            if (request.readyState == constants.HTTP_READY_STATE_DONE) {
                kony.print("response: " + request.response.toString());
                var allFiles = request.response.toString().split(",");
                for (var m = 0; m < allFiles.length; m++) {
                    //if(allFiles[m].indexOf("pkpass", allFiles.length - 6) !== -1){
                    passes.push(allFiles[m]);
                    kony.print("Pass " + allFiles[m]);
                    //}
                }
                kony.print("passes.length " + passes.length);
                for (var k = 0; k < passes.length; k++) {
                    var passSet = [];
                    if (passes[k].indexOf("pkpass", passes[k].length - 6) !== -1) passSet.push(passes[k].substring(0, passes[k].length - 7));
                    else passSet.push(passes[k]);
                    passSet.push(passes[k]);
                    kony.print("passSet.length " + passSet.length);
                    kony.print(passSet);
                    masterPasses.push(passSet);
                    kony.print(masterPasses);
                }
                if (passes.length > 0) {
                    var chkBasic = {
                        id: "checkBox",
                        isVisible: true,
                        masterData: masterPasses,
                        skin: "chkSkin",
                        focusSkin: "chkFocus",
                        onSelection: onSelCallBck
                    };
                    var chkLayout = {
                        containerWeight: 100
                    };
                    var chkPSP = {
                            postOnclickJS: posOnclkJSCallBck
                        }
                        //Creating the CheckBox.
                    checkBox = new kony.ui.CheckBoxGroup(chkBasic, chkLayout, chkPSP);
                    frmTwo.scrbId.add(checkBox);
                }
            }
        };
        request.open("GET", mUrl);
        request.send();
    } catch (e) {
        errorMsgFP(e);
    }
}

function onSelCallBck() {}

function posOnclkJSCallBck() {}

function addPassSavedFromURL() {
    var passesSelected = frmTwo.scrbId.checkBox.selectedKeyValues;
    kony.print("XX :" + passesSelected);
    if (!passesSelected) {
        alert("Please select atleast one pass");
        return;
    }
    for (var x = 0; x < passesSelected.length; x++) {
        try {
            var passesSelectedX = passesSelected[x][1];
            var mUrl = "http://10.10.5.78:8080/PKPassListing/passes/" + passesSelectedX;
            alert("Request URL for pkpass: " + mUrl);
            var request = new kony.net.HttpRequest();
            request.onReadyStateChange = function() {
                if (request.readyState == constants.HTTP_READY_STATE_DONE) {
                    alert("XXXXXX Inside passesSelected " + passesSelectedX);
                    alert("response: " + request.response);
                    storeDataFP(ensurePathFP([passesSelectedX]), request.response, true);
                }
            };
            request.open("GET", mUrl);
            request.send();
        } catch (e) {
            errorMsgFP(e);
        }
    }
}

function addPassesToPassbook() {
    var passesSelected = frmTwo.scrbId.checkBox.selectedKeyValues;
    kony.print("YY :" + passesSelected);
    if (!passesSelected) {
        alert("Please select atleast one pass");
        return;
    }
    if (passesSelected.length == 1) {
        alert("YYYYY Pass Path: " + kony.io.FileSystem.getDataDirectoryPath() + constants.FILE_PATH_SEPARATOR + passesSelected[0][1]);
        var ourfile = new kony.io.File(kony.io.FileSystem.getDataDirectoryPath() + constants.FILE_PATH_SEPARATOR + passesSelected[0][1]);
        alert("Exists: " + ourfile.exists());
        addPassWithPath(kony.io.FileSystem.getDataDirectoryPath() + constants.FILE_PATH_SEPARATOR + passesSelected[0][1], true, function() {
            alert("Pass added from URL");
        });
    } else if (passesSelected.length > 1) {
        var passesFromDisk = new Array();
        for (var f = 0; f < passesSelected.length; f++) {
            kony.print("YYYYY Pass Path: " + kony.io.FileSystem.getDataDirectoryPath() + constants.FILE_PATH_SEPARATOR + passesSelected[f][1]);
            var aPass1 = createPassFromFile(kony.io.FileSystem.getDataDirectoryPath() + constants.FILE_PATH_SEPARATOR + passesSelected[f][1]);
            passesFromDisk[f] = aPass1;
        }
        addPassesWithPath(passesFromDisk, true, function() {
            alert("Two Passes added to the Passbook")
        });
    }
}
var masterPasses = [];
var checkBox = null;