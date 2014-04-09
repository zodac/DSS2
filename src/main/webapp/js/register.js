function registerUser(){
	var username = document.forms["registerform"]["userName"].value;
	var password = document.forms["registerform"]["password"].value;
	var confirm = document.forms["registerform"]["confirm"].value;
	
	if(makeJSONObject("./webservice/Users/" + username) != ""){
		alertify.error("Username taken!");
		document.forms["registerform"]["userName"].focus();
	} else if(password.length < 4){
		alertify.error("Password must be at least 4 characters long!");
		document.forms["registerform"]["password"].focus();
	} else if(password != confirm){
		alertify.error("Passwords must match!");
		document.forms["registerform"]["password"].focus();
	} else {
		var request = new XMLHttpRequest();
		var location = "./webservice/Users/" + username + "/" + password;
		request.open("GET", location, false);
		request.send(null);
		alertify.success("'" + username + "' registered!");
		document.getElementById("registerform").reset();
	}
}

function makeJSONObject(location) {
	var request = new XMLHttpRequest();
	request.open("GET", location, false);
	request.send(null);
	
	if(request.responseText != "") {
		return eval("(" + request.responseText + ")");
	} else{
		return "";
	}
}