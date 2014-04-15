function loadToDoList(){
	var username = document.cookie.split(",")[1];
	var results = makeJSONObject("./webservice/ToDoList/" + username);
	
	document.title = username + "'s To-Do List";
	document.getElementById("header").innerHTML = username + "'s To-Do List";
	
	var mainNode = document.getElementById("todolist");
	while (mainNode.lastChild) {
		mainNode.removeChild(mainNode.lastChild);
	}
	
	var containerDiv = document.createElement("div");
	containerDiv.setAttribute("class", "container");
	containerDiv.setAttribute("style", "width: 900px");
	
	var contentDiv = document.createElement("div");
	contentDiv.setAttribute("class", "content");
	
	var tableDiv = document.createElement("div");
	tableDiv.setAttribute("style", "max-height: 535px; overflow: auto;");
	
	var table = document.createElement("table");
	table.setAttribute("class", "table table-striped table-condensed table-bordered");
	table.setAttribute("cellpadding", "5");
	table.setAttribute("border", "1");
	table.setAttribute("style", "table-layout: fixed;");
	
	var thead = document.createElement("thead");
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var b = document.createElement("b");
	b.innerHTML = "Timestamp";
	td.setAttribute("style", "width: 130px;");
	td.appendChild(b);
	tr.appendChild(td);
	
	td = document.createElement("td");
	b = document.createElement("b");
	b.innerHTML = "Task Description";
	td.appendChild(b);
	tr.appendChild(td);
	
	td = document.createElement("td");
	b = document.createElement("b");
	b.innerHTML = "Edit Task";
	td.setAttribute("style", "width: 85px;");
	td.appendChild(b);
	tr.appendChild(td);
	
	td = document.createElement("td");
	b = document.createElement("b");
	b.innerHTML = "Remove Task";
	td.setAttribute("style", "width: 120px;");
	td.appendChild(b);
	tr.appendChild(td);
	
	thead.appendChild(tr);
	table.appendChild(thead);
	
	var tbody = document.createElement("tbody");
	var monthNames = [ "January", "February", "March", "April", "May", "June",
	                   "July", "August", "September", "October", "November", "December" ];
	
	for(var i = 0; i < results.length; i++){
		tr = document.createElement("tr");
		
		var date = new Date(results[i][1]);
		var id = results[i][0];
		var day = date.getDate();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var dateString = day;
		
		td = document.createElement("td");
		
		if(day == 1 || day == 21 || day == 31){
			dateString += "st ";
		} else if(day == 2 || day == 22){
			dateString += "nd ";
		} else if(day == 3 || day == 23){
			dateString += "rd ";
		} else{
			dateString += "th ";
		}
		
		dateString += monthNames[date.getMonth()] + " - ";
		
		if(hours < 10){
			dateString += "0" + hours + ":";
		} else{
			dateString += hours + ":";
		}
		
		if(minutes < 10){
			dateString += "0" + minutes;
		} else{
			dateString += minutes;
		}
		
		td.innerHTML = dateString;
		td.setAttribute("style", "width: 130px;");
		tr.appendChild(td);
		
		td = document.createElement("td");
		td.innerHTML = results[i][2];
		td.setAttribute("style", "width:150px; word-wrap:break-word;");
		tr.appendChild(td);
		
		td = document.createElement("td");
		td.innerHTML = '<td style="width:85px;"><button class="btn btn-warning" onclick="editTask(' + id + ')" >Edit Task</button></td>';
		tr.appendChild(td);
		
		td = document.createElement("td");
		td.innerHTML = '<tdstyle="width:100px;"><button class="btn btn-danger" onclick="removeTask(' + id + ')" >Remove Task</button></td>';
		tr.appendChild(td);
		
		tbody.appendChild(tr);
	}
	
	table.appendChild(tbody);
	tableDiv.appendChild(table);
	contentDiv.appendChild(tableDiv);
	containerDiv.appendChild(contentDiv);
	document.getElementById("todolist").appendChild(containerDiv);
}

function addTask(){
	var user = document.cookie.split(",")[1];
	alertify.set({ buttonReverse: true });
	alertify.set({ labels: {
	    ok     : "Add Task",
	    cancel : "Cancel"
	} });
	alertify.prompt("Task Description", function (e, str) {
	    if(e){
	    	if(str.length < 255){
		    	makeJSONObject("./webservice/ToDoList/Add/" + user + "/" + str);
		    	alertify.log("Task added!");
		    	loadToDoList();
	    	} else{
	    		alertify.error("Task description too long!");
	    	}
	    }
	});
}

function editTask(itemID){
	alertify.set({ buttonReverse: true });
	alertify.set({ labels: {
	    ok     : "Edit Task",
	    cancel : "Cancel"
	} });
	alertify.prompt("Task Description", function (e, str) {
	    if(e){
	    	if(str.length < 255){
		    	makeJSONObject("./webservice/ToDoList/Edit/" + itemID + "/" + str);
		    	alertify.log("Task changed!");
		    	loadToDoList();
	    	} else{
	    		alertify.error("Task description too long!");
	    	}
	    }
	});
}

function removeTask(itemID){
	makeJSONObject("./webservice/ToDoList/Remove/" + itemID);
	alertify.error("Task removed!");
	loadToDoList();
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