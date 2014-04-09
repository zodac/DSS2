<!DOCTYPE html>
<html><head>
	<link href="css/bootstrap.css" rel="stylesheet">
	<link href="css/customBootstrap.css" rel="stylesheet">
	<script src="js/bootstrap.js"></script>
	<script src="js/toDoList.js"></script>
</head>

<body onload="loadToDoList()">
	<div style="position: absolute; top: 10; right: 0; margin-right: 10px;">
		<form id="logout" name="logout">
				<input class="btn btn-danger" type="submit" value="Logout" />
		</form>
	</div>
	
	<div class="container" style="width: 900px;">
		<div class="content" style="max-height: 535px; overflow: auto;" id="todolist"></div>
	</div>
	
	<div style="position: relative; text-align: center">
		<a href="addItem.jsp">
			<button style="position: relative; text-align:center" class="btn btn-success" type="button">Add Item</button>
		</a>
	</div>
</body></html>