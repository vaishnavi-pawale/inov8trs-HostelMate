<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
	<form action="/log" method="post">
		<div class="input-group">
			<label for="login-username">Username</label> <input type="text"
				id="login-username" name="username" required>
		</div>
		<div class="input-group">
			<label for="login-password">Password</label> <input type="password"
				id="login-password" name="password" required>
		</div>
		<button type="submit">Login</button>
	</form>
	<p>
		Don't have an account? <a href="#" onclick="showRegisterForm()">Register
			here</a>
	</p>
	</div>
</body>
</html>