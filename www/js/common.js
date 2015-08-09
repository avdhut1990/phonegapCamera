$(document).on('pageinit', function() {
	$("#cameraButton").click(function(){
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
		    destinationType: Camera.DestinationType.FILE_URI
		});
	});
});

function onSuccess(imageURI) {
	$("#cameraPic").remove();
	$("#main").append('<img src="'+imageURI+'" id="cameraPic" style="width:auto;height:120px;"/>');
}

function onFail(message) {
    $("#cameraPic").remove();
}