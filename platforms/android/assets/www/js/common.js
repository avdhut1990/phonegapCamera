$(document).on('pageinit', function() {
	$("#cameraButton").click(function(){
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
		    destinationType: Camera.DestinationType.FILE_URI
		});
	});
});

function onSuccess(imageURI) {
	/*navigator.notification.alert(
	    'Your Photo has been uploaded', // message
	    okay,                           // callback
	    'Photo Uploaded',               // title
	    'OK'                            // buttonName
	);*/
	$("#cameraPic").remove();
	$("#main").append('<img src="'+imageURI+'" id="cameraPic"/>');
}

function onFail(message) {
    $("#cameraPic").remove();
    /*navigator.notification.alert(
	    message, 						// message
	    okay,                           // callback
	    'Photo Upload Failed',          // title
	    'OK'                            // buttonName
	);*/
}