<!DOCTYPE html>
<html>
<head>
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/customBootstrap.css" rel="stylesheet">
<link href="css/alertify.core.css" rel="stylesheet">
<link href="css/alertify.default.css" rel="stylesheet">
<script src="js/bootstrap.js"></script>
<script src="js/toDoList.js"></script>
<script src="js/alertify.min.js"></script>
</head>

<body onload="loadToDoList()">
	<div style="position: absolute; top: 10; right: 0; margin-right: 10px;">
		<form id="logout" name="logout">
			<input class="btn btn-logout" type="submit" value="Logout" />
		</form>
	</div>
	
	<h3 id="header" style="text-align: center;"></h3>

 	<div id="todolist"></div>
 	<br />
	<div style="position: relative; text-align: center">
		<a href="addItem.jsp">
			<button style="position: relative; text-align: center"
				class="btn btn-success" type="button">Add Item</button>
		</a>
	</div>
</body>
</html>