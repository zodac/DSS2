function loadToDoList(){
	var username = "zodac";
	var results = makeJSONObject("./webservice/ToDoList/" + username);
	
	
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