<!DOCTYPE html>
<html>
<head>
<title>Login page</title>

<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/customBootstrap.css" rel="stylesheet">
<link href="css/alertify.core.css" rel="stylesheet">
<link href="css/alertify.default.css" rel="stylesheet">
<script src="js/bootstrap.js"></script>
<script src="js/jquery.tools.min.js"></script>
<script src="js/login.js"></script>
<script src="js/alertify.min.js"></script>

<script>
	$(function() {
		$("#password, #userName").tooltip({
			position : "center right",
			offset : [ -2, 10 ],
			effect : "fade",
			opacity : 0.7
		});
	});
</script>
<script>
	$(function() {
		$('#loginform').submit(function(event) {
			event.preventDefault();
			loginUser();
		});
	});
</script>
</head>

<body>
	<div class="container">
		<div class="content">
			<div class="row">
				<div class="login-form">
					<h2>Login here</h2>
					<form name="loginform" id="loginform">
						<fieldset>
							<div class="control-group">
								<input id="userName" type="text" name="userName"
									placeholder="Username" title="Not case-sensitive" required />
							</div>
							<div class="control-group">
								<input id="password" type="password" name="password"
									placeholder="Password" title="Case-sensitive" required />
							</div>
							<input class="btn btn-primary" type="submit" value="Login" /> <a
								href="register.jsp">
								<button class="btn btn-primary" type="button">Register</button>
							</a>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>