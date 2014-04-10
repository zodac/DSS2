function addItem(){
	var task = document.forms["additem"]["task"].value;
	var username = "zodac"; //TODO Get from cookie
	
	if(task.length > 255){
		alertify.error("Task must be less than 255 characters long!");
		document.forms["additem"]["task"].focus();
	} else{
		var request = new XMLHttpRequest();
		var location = "./webservice/ToDoList/Add/" + task + "/" + username;
		request.open("GET", location, false);
		request.send(null);
		alertify.success("Task added!");
		document.getElementById("additem").reset();
	}
}