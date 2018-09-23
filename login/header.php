<?phpg5
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<title>Project Coast</title>
</head>


<body>
<div id="videoBackground">
	<video autoplay loop>	
		<source src="https://sustainablecoastlineshawaii.org/wp-content/uploads/2018/05/uajb8-7ma0i.mp4" type="video/mp4">
	</video>
</div>
<header>
	<nav id="container">
		<div id="miniContainer">
		<!--	<ul>
				<li><a href="index.php">HOME</a></li>
			</ul>
		-->

			<h1 id="websiteName">Project Coast</h1>
			<div id="login">
				<?php 
					if (isset($_SESSION['u_id'])) {
						echo '
						<form action="includes/logout.inc.php" method="POST">
							<button type="submit" name="submit">Logout</button>
						</form>
						';
					}
					
					else{
						echo '
						<form action="includes/login.inc.php" method="POST">
							<input class="userInputs" type="text" name="uid" placeholder="username/email">
							<input class="userInputs" type="password" name="pwd" placeholder="password">
							
						
							
							<br/>
						

							<div id="button">
							<button id="submitButton" type="submit" name="submit">LOGIN</button> 
								&nbsp &nbsp
								<button id="guestButton">
								<a href="http://localhost:8080/login/hackathon/main.php" id="guestButtonChild">Guest</a>
								</button>
							</div>

							<br/>

							<div id="signUpLink">
								<a href="signup.php">Dont have an account? Sign up!</a>
								
							</div>
							
						</form>
						
						';

						//<a href="signup.php">SIGN UP</a>
						//This code goes in the else above
					}
				?>
				


				
			</div>
		</div>

	
	</nav>
</header>
