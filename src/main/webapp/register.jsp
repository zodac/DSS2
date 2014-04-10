<!DOCTYPE html>
<html>
<head>
<title>Registration Page</title>

<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/customBootstrap.css" rel="stylesheet">
<link href="css/alertify.core.css" rel="stylesheet">
<link href="css/alertify.default.css" rel="stylesheet">
<script src="js/validation.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/jquery.tools.min.js"></script>
<script src="js/register.js"></script>
<script src="js/alertify.min.js"></script>

<script>
	$(function() {
		$("#password, #confirm, #userName").tooltip({
			position : "center right",
			offset : [ -2, 10 ],
			effect : "fade",
			opacity : 0.7
		});
	});
</script>
<script>
	$(function() {
		$('#registerform').submit(function(event) {
			event.preventDefault();
			registerUser();
		});
	});
</script>
</head>

<body>
	<div class="container">
		<div class="content">
			<div class="row">
				<div class="login-form">
					<h2>Register here</h2>
					<form id="registerform" name="registerform">
						<fieldset>
							<div class="control-group">
								<input id="userName" type="text" name="userName"
									placeholder="Username" title="Must be a unique username"
									required />
							</div>
							<div class="control-group">
								<input id="password" type="password" name="password"
									placeholder="Password" title="Must have at least 4 characters"
									required />
							</div>
							<div class="control-group">
								<input id="confirm" type="password" name="confirm"
									placeholder="Confirm password"
									title="Must match above password" required />
							</div>

							<input class="btn btn-primary" type="submit"
								value="Register here" /> <a href="index.jsp">
								<button class="btn btn-warning" type="button">Back to Login</button>
							</a>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>