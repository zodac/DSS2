<%@ page contentType="text/html" language="java" import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<title>Add Task</title>

<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/customBootstrap.css" rel="stylesheet">
<link href="css/alertify.core.css" rel="stylesheet">
<link href="css/alertify.default.css" rel="stylesheet">
<script src="js/bootstrap.js"></script>
<script src="js/jquery.tools.min.js"></script>
<script src="js/addItem.js"></script>
<script src="js/alertify.min.js"></script>
<%
	/*String userName = null;
	Cookie[] cookies = request.getCookies();
	if (cookies != null) {
		for (Cookie cookie : cookies) {
			if (cookie.getName().equals("user")) {
				userName = cookie.getValue();
			}
		}
	}
	if (userName == null){
		response.getWriter().print("<script>alert(\"Must be logged in to view that page!\");"
								 + "window.location.replace(\"index.jsp\");</script>");
	}*/
%>
<script>
	$(function() {
		$("#task").tooltip({
			position : "center right",
			offset : [ -2, 10 ],
			effect : "fade",
			opacity : 0.7
		});
	});
</script>
<script>
	$(function() {
		$('#additem').submit(function(event) {
			event.preventDefault();
			addItem();
		});
	});
</script>
</head>

<body>
	<div style="position: absolute; top: 10; right: 0; margin-right: 10px;">
		<form id="logout" name="logout">
			<button class="btn btn-logout" type="submit">Logout</button>
		</form>
	</div>

	<div class="container">
		<div class="content">
			<div class="row">
				<div class="login-form">
					<h2>Add Task</h2>
					<form id="additem" name="additem">
						<fieldset>
							<div class="control-group">
								<input id="task" type="text" name="task"
									placeholder="Task Description"
									title="Maximum of 255 characters" required />
							</div>
							<input class="btn btn-success" type="submit" value="Add to list" />
							<a href="toDoList.jsp">
								<button class="btn btn-warning" type="button">Back to
									list</button>
							</a>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>