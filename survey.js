<!DOCTYPE html>
<html>
<head>
	<title>Friend Finder Pro</title>

	<!-- Link to the jQuery Library -->
  	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

  	<!-- Including Font Awesome Icons -->
  	<script src="https://use.fontawesome.com/b38c8ed4c7.js"></script>

	<!-- Link to reset stylesheet -->
	<link rel="stylesheet" href="css/reset.css">

	<!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

	<!-- Compiled and minified Materialize CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">

	<!-- Compiled and minified Materialize JavaScript -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
          
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
	<header>
		<nav>
			<div class="nav-wrapper pink accent-2">
				<i class="fa fa-address-book-o fa-5x" aria-hidden="true" id=logo-icon></i>
				<a href="/" class="brand-logo" id="logo">Friend Finder</a>
				<ul class="right hide-on-med-and-down" id="head-nav-links">
					<li><a href="/survey">Survey</a></li>
					<li><a href="/api/friends">API Friends List</a></li>
					<li><a href="https://github.com/angrbrd/friend-finder">GitHub Repo</a></li>
				</ul>
			</div>
		</nav>
	</header>

	<main>
		<div class="container">
			<div class="row">
				<div class="col s12 z-depth-5 mainpanel">
					<div id="mainpanel-content">
						<h1>Survey Questions</h1>
						<div class="divider"></div>

						<h3>About You</h3>

						<div class="input-field col s6">
							<h5>Name (Required)</h5>
							<i class="material-icons prefix">account_circle</i>
							<input type="text" class="validate" placeholder="Your Name Here" id="userName">
						</div>

						<div class="input-field col s6">
							<h5>Link to Photo Image (Required)</h5>
							<i class="material-icons prefix">picture_in_picture</i>
							<input type="text" class="validate" placeholder="Photo Link Here" id="userPhoto">
						</div>

						<!-- Survey Questions -->
						<div class="input-field col s12">
							<h3>Question 1</h3>
							<h5>Your mind is always buzzing with unexplored ideas and plans.</h5>
							<select id="question1">
								<option value="" disabled selected>Choose your option</option>
								<option value="1">1 (Strongly Disagree)</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5 (Strongly Agree)</option>
							</select>
						</div>

						<div class="input-field col s12">
							<h3>Question 2</h3>
							<h5>Generally speaking, you rely more on your experience than your imagination.</h5>
							<select id="question2">
								<option value="" disabled selected>Choose your option</option>
								<option value="1">1 (Strongly Disagree)</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5 (Strongly Agree)</option>
							</select>
						</div>

						<div class="input-field col s12">
							<h3>Question 3</h3>
							<h5>You find it easy to stay relaxed and focused even when there is some pressure.</h5>
							<select id="question3">
								<option value="" disabled selected>Choose your option</option>
								<option value="1">1 (Strongly Disagree)</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5 (Strongly Agree)</option>
							</select>
						</div>

						<div class="input-field col s12">
							<h3>Question 4</h3>
							<h5>You rarely do something just out of sheer curiosity.</h5>
							<select id="question4">
								<option value="" disabled selected>Choose your option</option>
								<option value="1">1 (Strongly Disagree)</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5 (Strongly Agree)</option>
							</select>
						</div>

						<div class="input-field col s12">
							<h3>Question 5</h3>
							<h5>People can rarely upset you.</h5>
							<select id="question5">
								<option value="" disabled selected>Choose your option</option>
								<option value="1">1 (Strongly Disagree)</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5 (Strongly Agree)</option>
							</select>
						</div>

						<div class="input-field col s12">
							<h3>Question 6</h3>
							<h5>It is often difficult for you to relate to other people’s feelings.</h5>
							<select id="question6">
								<option value="" disabled selected>Choose your option</option>
								<option value="1">1 (Strongly Disagree)</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5 (Strongly Agree)</option>
							</select>
						</div>

						<div class="input-field col s12">
							<h3>Question 7</h3>
							<h5>In a discussion, truth should be more important than people’s sensitivities.</h5>
							<select id="question7">
								<option value="" disabled selected>Choose your option</option>
								<option value="1">1 (Strongly Disagree)</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5 (Strongly Agree)</option>
							</select>
						</div>

						<div class="input-field col s12">
							<h3>Question 8</h3>
							<h5>You rarely get carried away by fantasies and ideas.</h5>
							<select id="question8">
								<option value="" disabled selected>Choose your option</option>
								<option value="1">1 (Strongly Disagree)</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5 (Strongly Agree)</option>
							</select>
						</div>

						<div class="input-field col s12">
							<h3>Question 9</h3>
							<h5>You think that everyone’s views should be respected regardless of whether they are supported by facts or not.</h5>
							<select id="question9">
								<option value="" disabled selected>Choose your option</option>
								<option value="1">1 (Strongly Disagree)</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5 (Strongly Agree)</option>
							</select>
						</div>

						<div class="input-field col s12">
							<h3>Question 10</h3>
							<h5>You feel more energetic after spending time with a group of people.</h5>
							<select id="question10">
								<option value="" disabled selected>Choose your option</option>
								<option value="1">1 (Strongly Disagree)</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5 (Strongly Agree)</option>
							</select>
						</div>

						<!-- Survey Submit Button -->
						<div>
							<button class="btn waves-effect waves-light" type="submit" name="action" id="submitButton">Submit Responses
								<i class="material-icons right">send</i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>

	<footer class="page-footer pink accent-2">
		<div class="container">
			<div class="row">
				<div class="col l6 s12">
					<h5 class="white-text">Friend Finder App</h5>
					<p class="grey-text text-lighten-4">Thank you for taking the brief survey. Your responses will be used for training purposes only :-].</p>
				</div>
				<div class="col l4 offset-l2 s12">
					<h5 class="white-text">Links</h5>
					<ul>
						<li><a class="grey-text text-lighten-3" href="/api/friends">API Friends List</a></li>
						<li><a class="grey-text text-lighten-3" href="https://github.com/angrbrd/friend-finder">GitHub Repo</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer-copyright">
			<div class="container">
				© 2017 angrbrd entertainment
				<a class="grey-text text-lighten-4 right" href="https://github.com/angrbrd">Reference Work</a>
			</div>
		</div>
	</footer>

	<!-- Modal Dialog Displaying Closest Friend Match -->
	<div id="modal1" class="modal">
		<div class="modal-content">
			<h4>Closest Friend Match</h4>
			<div class="divider"></div>
			<h5 id="userMatch"></h5>
			<img id="userMatchImage" class="materialboxed" width="650" src="">
		</div>
		<div class="modal-footer">
			<a href="/survey" class="modal-action modal-close waves-effect waves-green btn-flat">Fill Again!</a>
		</div>
	</div>

	<script type="text/javascript">
		$(document).ready(function() {
			$('select').material_select();
			$('.modal').modal({
				dismissible: false, // Modal can be dismissed by clicking outside of the modal
				opacity: .5, // Opacity of modal background
				inDuration: 300, // Transition in duration
				outDuration: 200, // Transition out duration
				startingTop: '4%', // Starting top style attribute
				endingTop: '10%' // Ending top style attribute
			});
		});
		// Activate submit button
		$('#submitButton').on('click', function(event) {
			event.preventDefault();
			// Gather user inputs
			var userInput = {
				name: $('#userName').val().trim(),
				photo: $('#userPhoto').val().trim(),
				scores:[
					$('#question1').val().trim(),
					$('#question2').val().trim(),
					$('#question3').val().trim(),
					$('#question4').val().trim(),
					$('#question5').val().trim(),
					$('#question6').val().trim(),
					$('#question7').val().trim(),
					$('#question8').val().trim(),
					$('#question9').val().trim(),
					$('#question10').val().trim()
				]
			};
			// console.log('userInput = ' + JSON.stringify(userInput));
			// Add user inputs to friends list
			$.post('/api/friends', userInput)
      		.done(function(data) {
      			// console.log('response = ' + JSON.stringify(data));
      			// Set the name and image values of friend match
      			$('#userMatch').html(data.matchName);
		    	$("#userMatchImage").attr("src", data.matchImage);
		    	// Pop open the modal dialog
      			$('#modal1').modal('open');
      		});
		});
	</script>
</body>
</html>