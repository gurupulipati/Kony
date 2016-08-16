/*
 * 
 *
 */
//var dataDirectoryPath1 = kony.io.FileSystem.getDataDirectoryPath() + constants.FILE_PATH_SEPARATOR;
var dataDirectoryPath = "PassBookSample.app/"

function isPassLibraryAvailable() {
    return com.kony.isPassLibraryAvailable();
}
// pass library global instance
var passLibrary = null;
var passPath = dataDirectoryPath+"BoardingPass1.pkpass";
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
/*
 *
 *  
 */
function addPassToPassLibrary() {
	removeAPass(passPath);
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
    	var identifier = "pass.com.kony.venkatdist";
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
			var identifier = "pass.com.kony.venkatdist";
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
	var identifier = "pass.com.kms.pass3";
	var serailNumber = "6674814038959883164";
	var pass = passLibrary.getPassWithTypeIdentifierAndSerialNumber(identifier, serailNumber);
	var data = "Auth Token\n Expected: vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc\nActual: "+ pass.getAuthenticationToken() +"\n"+
			   "Localized Description\n Expected: Kony Generic Pass Test\nActual: "+ pass.getLocalizedDescription()	+"\n"+
			   "Localized Name\n Expected: Kony Pass\nActual: "+ pass.getLocalizedName() +"\n"+
			   "Organization Name\n Expected: Kony Toys Town\nActual:"+ pass.getOrganizationName() +"\n"+
			   "passTypeIdentifier\n Expected: pass.com.kms.pass3\nActual:"+ pass.getPassTypeIdentifier() +"\n"+
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
	        alert("passTypeIdentifier\n Expected: pass.com.kms.pass3\nActual:"+ pass.getPassTypeIdentifier());
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
    createPassLibrary();
    if (passLibrary.containsPass(aPass) == false) {
    	var flag  = false;
        passLibrary.addPassWithCompletionCallback(aPass, function(addPassStatus) {
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