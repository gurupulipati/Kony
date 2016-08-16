/*
 * 
 *
 */
//var dataDirectoryPath1 = kony.io.FileSystem.getDataDirectoryPath() + constants.FILE_PATH_SEPARATOR;
var dataDirectoryPath = "/Library/"
var passPath = dataDirectoryPath+"BoardingPass1.pkpass";

function loadAllZipUnzipClasses() {
     OZZipFile = objc.import('OZZipFile');
     NSString = objc.import('NSString');
     NSData = objc.import('NSData');
     NSMutableData = objc.import('NSMutableData');
     NSFileManager = objc.import('NSFileManager');
     sharedFM = NSFileManager.defaultManager();
     possibleURLs = sharedFM.URLsForDirectoryInDomains(NSApplicationSupportDirectory, NSUserDomainMask);
     appSupportDir = null;
     appDirectory = null;
     if (possibleURLs.length >= 1) {
         // Use the first directory (if multiple are returned)
         appSupportDir = possibleURLs[0];
     }
     // If a valid app support directory exists, add the
     // app's bundle ID to it to specify the final directory.
     if (appSupportDir) {
         var NSBundle = objc.import('NSBundle');
         var appBundleID = NSBundle.mainBundle().bundleIdentifier;
         appDirectory = appSupportDir.URLByAppendingPathComponent(appBundleID);
     }
}


function isPassLibraryAvailable() {
    return com.kony.isPassLibraryAvailable();
}
// pass library global instance
var passLibrary = null;
var i10nPassPath = dataDirectoryPath+"CouponI10N.pkpass";
/*
 *
 *  
 */
function createPassLibrary() {
    if (isPassLibraryAvailable) {
        if (passLibrary == null) {
            passLibrary = new com.kony.PassLibrary();
        }
    }
  kony.print("Pass Library Created");
//}

//function hh(){
  var gHttpClient = null;

//function downloadFile(){
  var url = 'http://10.10.20.21:8080/kpns/pass/e/8005772322096044010';
  kony.print("URL: "+url);
  gHttpClient = new kony.net.HttpRequest();
   kony.print('Header');
  gHttpClient.onReadyStateChange = httpClientCallback;
  gHttpClient.open(constants.HTTP_METHOD_GET, url);
  gHttpClient.setRequestHeader('Content-Type', 'application/vnd.apple.pkpass');
  kony.print('sending request');
  gHttpClient.send();
//}

function httpClientCallback(){
  kony.print('Callback');
  var status = gHttpClient.status;
  var responseType = gHttpClient.responseType;
  kony.print('Status: '+status);
  if(status == 200){
   kony.print('Applying');
   //if(responseType == constants.HTTP_RESPONSE_TYPE_RAWDATA){
    //frmHome['img'+imgcount].rawBytes = gHttpClient.response; 
   // imageObj = gHttpClient.response; 
  }
  if (constants.HTTP_READY_STATE_DONE == gHttpClient.readyState) {
    var TAG = "HHHH: ";
    var filepath = kony.io.FileSystem.getDataDirectoryPath() + constants.FILE_PATH_SEPARATOR + 'BoardingPass1.pkpass';
	kony.print(TAG+": Writing to file "+filepath);
	var file = new kony.io.File(filepath);
    file.createFile();
	file.write(gHttpClient.response);
    
    kony.print(gHttpClient.response);
    kony.print(TAG+file.exists());
    kony.print(TAG+file.size);
    addPassWithPath(filepath, true, function(){
    	alert("Pass Added");
    });
  }
}

}
/*
 *
 *  
 */
function createPassFromFile(path_to_pkpass_file) {
	kony.print("Pass to path: "+ path_to_pkpass_file);	
    var aPass = new com.kony.Pass(path_to_pkpass_file);
    kony.print("---After Creating Pass Object---");
    return aPass;
}

function createPassFromFileDel() {
  	var path_to_pkpass_file = dataDirectoryPath+"BoardingPass1.pkpass";
	kony.print("Pass to path: "+ path_to_pkpass_file);	
    var aPass = new com.kony.Pass(path_to_pkpass_file);
    kony.print("---After Creating Pass Object---");
    //kony.print('Pass: '+aPass);
    return aPass;
}

/*
 *
 *  
 */
function addPassToPassLibrary() {
	//removeAPass(passPath);
  kony.print('Hiii');
    addPassWithPath(passPath, true, function(){
    	alert("Pass Added");
    });
}

/*
 *
 *  
 */
function addExistingPassToPassLibrary() {
	removeAPass(passPath);
    addPassWithPath(passPath, true, function(){
    	alert("Pass Added");
    });
    addPassWithPath(passPath, true, function(){
    	alert("Existing Pass added again!!");
    });
}

function addPassToPassLibraryWOextension() {
    addPassWithPath( +"BoardingPass2", true);
}
function addPassToPassLibraryInvalidContent() {
    addPassWithPath(dataDirectoryPath+"Invalid.pkpass", true);
}
/*
 *
 *  
 */
function addPassToPassLibraryWithoutAnimation() {
	removeAPass(passPath);
    addPassWithPath(passPath, false, function(){
    	alert("Pass added to the Passbook");
    });
}

/*
 *
 *  
 */
function addExistingPassToPassLibraryWithoutAnim() {
	removeAPass(passPath);
    addPassWithPath(passPath, false, function(){
    	alert("Pass Added");
    });
    addPassWithPath(passPath, false, function(){
    	alert("Existing Pass added again!!");
    });
}

/*
 *
 *  
 */
function addPassesToPassLibrary() {
	var path1 = dataDirectoryPath+"Generic.pkpass";
	var path2 = dataDirectoryPath+"Coupon.pkpass";
	removeAPass(path1);
	removeAPass(path2);
	var aPass1 = createPassFromFile(path1);
	var aPass2 = createPassFromFile(path2);
	var passes = new Array();
	passes[0] = aPass1;
	passes[1] = aPass2;
    addPassesWithPath(passes, true, function(){alert("Two Passes added to the Passbook")});
}

/*
 *
 *  
 */
function passesVCStatusCallback(status) {
    if (status == "KonyPKAddPassesViewControllerFinished") {
        alert("view controller finished adding passes");
        // Dismiss, you must !
        this.dismissAnimated(true);
    } else if (status == "KonyPKAddPassesViewControllerShown") {
        alert("view controller shown to add passes");
    } else if (status == "KonyPKAddPassesViewControllerDismissed") {
        alert("view controller dismissed");
    }
}
/*
 *
 *  
 */
function presentViewControllerForPassWithAnimation(aPass) {
	if(!(Object.prototype.toString.call(aPass) === '[object Array]')){
    	aPass = [aPass];
    }
    var addpassesview = new com.kony.AddPassesViewController(aPass, passesVCStatusCallback);
    addpassesview.presentAnimated(true);
}
/*
 *
 *  
 */
function presentViewControllerForPassWithoutAnimation(aPass) {
    var addpassesnoview = new com.kony.AddPassesViewController([aPass], passesVCStatusCallback);
    addpassesnoview.presentAnimated(false);
}
/*
 *
 *  
 */
function passWithIdentifierAndSerialNumber() {
	//removeAllPasses();
	var path = passPath;
    createPassLibrary();
    addPassWithPath(path,true, function(){
    	var aPass = createPassFromFile(path);
	    var passFromLibrary = passLibrary.getPassWithTypeIdentifierAndSerialNumber(aPass.getPassTypeIdentifier(), aPass.getSerialNumber());
	    alert("Pass with passTypeIdentifier "+ aPass.getPassTypeIdentifier(), " and serialNumber : "+ aPass.getSerialNumber());
	    alert("Pass object type : "+ kony.type(passFromLibrary));
    });
}
/*
 *
 *
 */
function libraryContainsPass() {
	var path = passPath;
	removeAPass(path);
    addPassWithPath(path,true,function(){
    	var aPass = createPassFromFile(path);
	 	var passIsInLibrary = passLibrary.containsPass(aPass);
		alert("Is Pass added in the library? : "+ passIsInLibrary);
	});
}
/*
 *
 *
 */   
function libraryContainsPassAfterDelete() {
	var path = passPath;
	removeAPass(path);
    createPassLibrary();
    addPassWithPath(path, true, function(){
		var aPass = createPassFromFile(passPath);
		passLibrary.removePass(aPass);
	    var passIsInLibrary = passLibrary.containsPass(aPass);
	    alert("Pass is in the library After Delete? : "+ passIsInLibrary);
    });
}
/*
 *
 *  
 */
function removePassFromLibrary() {
	var path = passPath;
	removeAPass(path);
    var couponPassPath = passPath;
    
    addPassWithPath(path,true, function(){
    	var aPass = createPassFromFile(couponPassPath);
	    passLibrary.removePass(aPass);
	    if(!passLibrary.containsPass(aPass))
	    	alert("Removed Pass From Library");
	    else
	    	alert("Pass still exists in Passbook.\n Couldn't able to remove Pass.");
    });
}

function removeMissingPassFromLibrary() {
	var path = passPath;
	removeAPass(path);
    var couponPassPath = passPath;
	var aPass = createPassFromFile(couponPassPath);
    passLibrary.removePass(aPass);
    if(!passLibrary.containsPass(aPass))
    	alert("No Errors , if we tried to remove an already removed pass");
    else
    	alert("Pass still exists in Passbook.\n Couldn't able to remove Pass.");
}
/*
 *
 *
 */
function replacePassInLibrary() {
	createPassLibrary();
    var pass1 = dataDirectoryPath+"StoreCard1.pkpass";
    var pass2 = dataDirectoryPath+"StoreCard2.pkpass";
    removeAPass(pass1);
    removeAPass(pass2);
    
    addPassWithPath(pass1,true, function(){
    	var replacePassPath = dataDirectoryPath+"StoreCard2.pkpass";
		var aPass = createPassFromFile(replacePassPath);
	    var status = passLibrary.replacePassWithPass(aPass);
	    alert("Pass1 replaced With Pass2, status : "+ status);
    });
}
/*
 *
 *
 */
function replaceMissingPassInLibrary() {
	createPassLibrary();
    var pass1 = dataDirectoryPath+"StoreCard1.pkpass";
    var pass2 = dataDirectoryPath+"StoreCard2.pkpass";
    removeAPass(pass1);
    removeAPass(pass2);
	var replacePassPath = dataDirectoryPath+"StoreCard2.pkpass";
	var aPass = createPassFromFile(replacePassPath);
    var status = passLibrary.replacePassWithPass(aPass);
    alert("Tried to replace missing pass, status : "+ status);
}

function replaceDifferentPassInLibrary() {
	createPassLibrary();
    var pass1 = dataDirectoryPath+"StoreCard1.pkpass";
     removeAllPasses();
	 addPassWithPath(pass1,true, function(){
    	var identifier = "pass.com.kony.jsbs";
		var serailNumber = "6674814038959883164";
		var aPass = passLibrary.getPassWithTypeIdentifierAndSerialNumber(identifier, serailNumber);
	    var status = passLibrary.replacePassWithPass(aPass);
	    alert("Pass1 replaced with Pass2 having different identifier and serial number, status : "+ status);
    });
}
/*
 *
 *  
 */

function showPasses() {
    createPassLibrary();
    removeAllPasses();
	kony.print("Pass Path: "+dataDirectoryPath+"CouponI10N.pkpass");
    addPassWithPath(dataDirectoryPath+"CouponI10N.pkpass", true, function(){
    	var passes = passLibrary.getPasses();
    	var pass = passes[0];
        alert(" authenticationToken : "+ pass.getAuthenticationToken()+"\n passURL : "+ pass.getPassURL()+"\n serialNumber : "+ pass.getSerialNumber());
        alert(" passTypeIdentifier : "+ pass.getPassTypeIdentifier()+"\n getLocalizedName : "+ pass.getLocalizedName()+"\n getLocalizedDescription : \
        "+ pass.getLocalizedDescription()+"\n getOrganizationName : "+ pass.getOrganizationName()+"\n userInfo : "+ pass.getUserInfo());
        alert(" Localized ValueFor Valid Key For Device Locale: "+ pass.getLocalizedValueForKeyForDeviceLocale("offer"));
        //alert("localizedValue For Invalid Key For DeviceLocale : "+ pass.getLocalizedValueForKeyForDeviceLocale("no key"))
	});
}

/*
 *
 *  
 */

function showPassesEmptyValues() {
    createPassLibrary();
    removeAllPasses();
	kony.print("Pass Path: "+dataDirectoryPath+"BPassEmptyValues.pkpass");
    addPassWithPath(dataDirectoryPath+"BPassEmptyValues.pkpass", true, function(){
    	var passes = passLibrary.getPasses();
    	var pass = passes[0];
        alert("authenticationToken : "+ pass.getAuthenticationToken());
        alert("serialNumber : "+ pass.getSerialNumber());
        alert("passTypeIdentifier can't be Empty : "+ pass.getPassTypeIdentifier());
        alert("getLocalizedName : "+ pass.getLocalizedName());
        alert("getLocalizedDescription : "+ pass.getLocalizedDescription());
        alert("getOrganizationName : "+ pass.getOrganizationName());
        alert("userInfo : "+ pass.getUserInfo()+"\n userInfo Object length : "+pass.getUserInfo().length);
	});
}

/*
 *
 *  
 */

function openPassUsingPassURL() {
    createPassLibrary();
    removeAllPasses();
	kony.print("Pass Path: "+dataDirectoryPath+"CouponI10N.pkpass");
    addPassWithPath(dataDirectoryPath+"CouponI10N.pkpass", true, function(){
    	var passes = passLibrary.getPasses();
		kony.application.openURL(passes[0].getPassURL());
	});
}

function openPassUsingInvalidPassURL() {
    createPassLibrary();
    removeAllPasses();
	kony.print("Pass Path: "+dataDirectoryPath+"CouponI10N.pkpass");
    addPassWithPath(dataDirectoryPath+"CouponI10N.pkpass", true, function(){
    	var passes = passLibrary.getPasses();
		kony.application.openURL(passes[0].getPassURL()+"llllllllllllll");
	});
}

function passesCount() {
    createPassLibrary();
    var path1 = dataDirectoryPath+"Generic.pkpass";
	var path2 = dataDirectoryPath+"Coupon.pkpass";
    removeAllPasses();
	var aPass1 = createPassFromFile(path1);
	var aPass2 = createPassFromFile(path2);
	var passes = new Array();
	passes[0] = aPass1;
	passes[1] = aPass2;
    addPassesWithPath(passes, true, 
    	function(){
    		var passes = passLibrary.getPasses();
    		alert("No of Passes in Passbook : "+ passes.length);
    	});    
}

function getZeroPasses() {
    removeAllPasses();
    var passes1 = passLibrary.getPasses();
    alert("No of Passes in Passbook after Deleting All: "+ passes1.length);
}

function removeAllPasses(){
	createPassLibrary();
    var passes = passLibrary.getPasses();
    for (var iter=0;iter < passes.length;iter++) {
        var pass = passes[iter];
        passLibrary.removePass(pass);
    }
}

function removeAPass(passPathStr){
	createPassLibrary();
	var pass = createPassFromFile(passPathStr);
    kony.print("Pass to remove: "+pass);
	passLibrary.removePass(pass);
}
/*
 *
 *  
 */
function getLocalizedString() {
    createPassLibrary();
    removeAllPasses();
    var aPass = createPassFromFile(i10nPassPath);
    addPassWithPath(i10nPassPath,true,function (){
		var passes = passLibrary.getPasses();
	  	var pass = passes[0];
	   	alert("Localized Text\nExpected:(if english set as device locale)\nEnglish: Scanner\n(if spanish set as device locale)\nSpanish:esceres\nActual: "+ pass.getLocalizedValueForKeyForDeviceLocale("offer"));
		
	});
}

function getLocalizedStringBundleMissing() {
    createPassLibrary();
    var i10nPassPath2 = dataDirectoryPath+"CouponI10N.pkpass";
    removeAllPasses();
    var aPass = createPassFromFile(i10nPassPath2);
    addPassWithPath(i10nPassPath,true,function (){
		var passes = passLibrary.getPasses();
	  	var pass = passes[0];
	   	alert("Localized Text\n"+ pass.getLocalizedValueForKeyForDeviceLocale("offer"));
	});
}
    

function getLocalizedStringInvalidKey() {
	createPassLibrary();
    removeAllPasses();
    var aPass = createPassFromFile(i10nPassPath);
    addPassWithPath(i10nPassPath,true, function (){
		var passes = passLibrary.getPasses();
	  	var pass = passes[0];
	    alert("Localized Text For Invalid Key\n"+ pass.getLocalizedValueForKeyForDeviceLocale("offer1"));
    });
}
    

function getPassWithIdentifierAndSerialNumber() {
	createPassLibrary();
	removeAPass(passPath);
	addPassWithPath(passPath, true, 
		function(){
			var identifier = "pass.com.kony.jsbs";
			var serailNumber = "6674814038959883164";
			var aPass = passLibrary.getPassWithTypeIdentifierAndSerialNumber(identifier, serailNumber);
    		alert("Pass's PassTypeIdentifier: \n"+ aPass.getPassTypeIdentifier()+"\nSerial Number : \n"+ aPass.getSerialNumber());
    	}
    );
}

function getPassAttributes(){
	removeAPass(passPath);
    addPassWithPath(passPath, true, function(){
    });
	var identifier = "pass.com.kony.jsbs";
	var serailNumber = "6674814038959883164";
	var pass = passLibrary.getPassWithTypeIdentifierAndSerialNumber(identifier, serailNumber);
	var data = "Auth Token\n Expected: vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc\nActual: "+ pass.getAuthenticationToken() +"\n"+
			   "Localized Description\n Expected: Kony Generic Pass Test\nActual: "+ pass.getLocalizedDescription()	+"\n"+
			   "Localized Name\n Expected: Kony Pass\nActual: "+ pass.getLocalizedName() +"\n"+
			   "Organization Name\n Expected: Kony Toys Town\nActual:"+ pass.getOrganizationName() +"\n"+
			   "passTypeIdentifier\n Expected: pass.com.kony.jsbs\nActual:"+ pass.getPassTypeIdentifier() +"\n"+
			   "passUR\N \nActual: "+ pass.getPassURL() +"\n"+
			   "serialNumber\n Expected: 6674814038959883164\nActual:"+ pass.getSerialNumber() +"\n"+
			   "userInfo\n Expected: Kony Pass user\nActual:"+ pass.getUserInfo() +"\n";
			   alert(data);
			   
   /* alert("Auth Token\n Expected: vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc\nActual: "+ pass.getAuthenticationToken());
    alert("Localized Description\n Expected: Kony Generic Pass Test\nActual: "+ pass.getLocalizedDescription());
    //alert("Localized Name\n Expected: Kony Pass\nActual: "+ pass.getLocalizedName());
    alert("Organization Name\n Expected: Kony Toys Town\nActual:"+ pass.getOrganizationName());
    alert("passTypeIdentifier\n Expected: pass.com.kms.pass3\nActual:"+ pass.getPassTypeIdentifier());
    alert("passUR\N \nActual: "+ pass.getPassURL());
    alert("serialNumber\n Expected: 6674814038959883164\nActual:"+ pass.getSerialNumber());
    alert("userInfo\n Expected: Kony Pass user\nActual:"+ pass.getUserInfo());
    */
}

function getPassesAttributes(){
	removeAllPasses();
	var boardingPassPath = passPath;
    addPassWithPath(boardingPassPath,true,function (){
		var passes = passLibrary.getPasses();
	    for (var iter=0;iter < passes.length;iter++) {
	        var pass = passes[iter];
	        alert("Auth Token\n Expected: vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc\nActual: "+ pass.getAuthenticationToken());
	        alert("Localized Description\n Expected: Kony Generic Pass Test\nActual: "+ pass.getLocalizedDescription());
	        //alert("Localized Name\n Expected: Kony Pass\nActual: "+ pass.getLocalizedName());
	        alert("Organization Name\n Expected: Kony Toys Town\nActual:"+ pass.getOrganizationName());
	        alert("passTypeIdentifier\n Expected: pass.com.kony.jsbs\nActual:"+ pass.getPassTypeIdentifier());
	        alert("passUR\N \nActual: "+ pass.getPassURL());
	        alert("serialNumber\n Expected: 6674814038959883164\nActual:"+ pass.getSerialNumber());
	        alert("userInfo\n Expected: Kony Pass user\nActual:"+ pass.getUserInfo());
	   }
   });
}
/*
 * 
 * 
 */
function addPassWithPath(path, isAnimated, verificationCallback) {
    var aPass = createPassFromFile(path);
  	kony.print("1");
    //createPassLibrary();
    if (passLibrary.containsPass(aPass) == false) {
        kony.print("1.1");
    	var flag  = false;
        passLibrary.addPassWithCompletionCallback(aPass, function(addPassStatus) {
          	kony.print("1.2");
            if (addPassStatus == "KonyPKPassLibraryDidAddPasses") {
            } else if (addPassStatus == "KonyPKPassLibraryShouldReviewPasses") {
                alert("Pass should get reviewed ... presenting");
                if(isAnimated){
                	presentViewControllerForPassWithAnimation(aPass);
                	return;
                }
                if(!isAnimated){
                	presentViewControllerForPassWithoutAnimation(aPass);
                	return;
                }
            } else if (addPassStatus == "KonyPKPassLibraryDidCancelAddPasses") {
                alert("Pass adding cancelled");
                return;
            } else { // should not happen...!!
                throw "addPasses completionCallback improper : " + addPassStatus
            }
            flag = true;
        });
        callVerification();
        function  callVerification(){
          kony.print("1.1"+flag);
        	if(flag){
        		flag = false;
        		if(typeof verificationCallback === 'function')
            		verificationCallback();
        	}
        	try{
        		kony.timer.schedule(new Date().getTime().toString(),callVerification, 2, false);
        	}catch(err){
    	}
        }
    }
    else
    	if(typeof verificationCallback === 'function')
            	alert("Pass you are trying add is already exists in the Passbook");
}
/*
 * 
 * 
 */
function addPassesWithPath(passes, isAnimated, verificationCallback) {
	createPassLibrary();
	var flag  = false;
	var passPresence = true;
	for(var p=0;p<passes.length;p++){
		passPresence = passPresence && !passLibrary.containsPass(passes[p]);
	}
	if(passPresence){
	    passLibrary.addPassesWithCompletionCallback(passes, function(addPassStatus) {
	        if (addPassStatus == "KonyPKPassLibraryDidAddPasses") {
	        } else if (addPassStatus == "KonyPKPassLibraryShouldReviewPasses") {
	            alert("Pass should get reviewed ... presenting");
	            if(isAnimated){
	            	presentViewControllerForPassWithAnimation(passes);
	            	return;
	            }
	            if(!isAnimated){
	            	presentViewControllerForPassWithoutAnimation(passes);
	            	return;
	            }
	            if(typeof verificationCallback === 'function')
	            	verificationCallback();
	        } else if (addPassStatus == "KonyPKPassLibraryDidCancelAddPasses") {
	            alert("Pass adding cancelled");
	            return;
	        } else { // should not happen...!!
	            throw "addPasses completionCallback improper : " + addPassStatus
	        }
	        flag = true;
	    });
	    callVerification();
	    function  callVerification(){
	    	if(flag){
	    		flag = false;
	    		if(typeof verificationCallback === 'function'){
	            	verificationCallback();
	            	return;
	            }
	    	}
	    	try{
	    		kony.timer.schedule(new Date().getTime().toString(),callVerification, 2, false);
	    	}catch(err){
	    	}
	    }		
    }
    else
    	if(typeof verificationCallback === 'function')
    		alert("Passes trying to add are already exists in the Passbook");
            	//verificationCallback();
}

function isFileExists(filepath){
	var myfile = new kony.io.File(filepath);
        file = myfile;
        if (myfile.exists())
        	alert("File Exists");
        else
        	alert("No File Exists");
}