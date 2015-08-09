$(document).on('pageinit', function() {
	$("#cameraButton").click(function(){
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
		    destinationType: Camera.DestinationType.FILE_URI
		});
	});

	$(".exit").click(function(){
		navigator.app.exitApp();
	});
});

function onSuccess(imageURI) {
	$("#imageContainer").append('<img src="'+imageURI+'" style="width:auto;height:120px;"></img>');
}

function onFail(message) {
}