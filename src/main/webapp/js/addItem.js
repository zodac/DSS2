function addItem(){
	var task = document.forms["additem"]["task"].value;
	var username = document.cookie.split(",")[1];
	
	if(task.length > 255){
		alertify.error("Task must be less than 255 characters long!");
		document.forms["additem"]["task"].focus();
	} else{
		var request = new XMLHttpRequest();
		var location = "./webservice/ToDoList/Add/" + username + "/" + encodeURIComponent(task);
		request.open("GET", location, false);
		request.send(null);
		alertify.success("Task '" + task + "' added!");
		document.getElementById("additem").reset();
	}
}