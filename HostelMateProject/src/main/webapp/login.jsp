<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>HostelMate</title>
<script type="text/javascript">

/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }
  
  .input-group input,
  .input-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  p {
    text-align: center;
    margin-top: 15px;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }

</script>

</head>
<body>
	<div class="form-container" id="login-form">
		<h2>Login</h2>
		<form action="/login" method="post">
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