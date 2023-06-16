//This lines of codes are to get items inputted in localstorage
let us = localStorage.getItem("username");
let em = localStorage.getItem("email");
let ps = localStorage.getItem("password");
//This variable will be of use for later, this tracks if the user has already logged in before or not.
let logCheck = localStorage.getItem("loggedIn");
checker();
//Login function
function login(){
	const login = [us, em, ps];
	let cred1 = document.getElementById('username').value;
	let cred2 = document.getElementById('password').value;
	console.log(cred1);
	console.log(cred2);
	if(cred1 == login[0] || cred1 == login[1]){
		if(cred2 == login[2]){
			localStorage.setItem("loggedIn", "True");
			window.location.href = "index.html";
		}
		else{
			document.getElementById('error').innerText = "Error: Incorrect Password.";
			document.getElementById('error').style.display = "block";
		}
	}
	else{
		document.getElementById('error').innerText = "Error: Credentials not found.";
		document.getElementById('error').style.display = "block";
	}
}
//Logout function
function logout(){
	localStorage.setItem("loggedIn", "False");
	window.location.href = "index.html";
}
//checks if the user remains logged in
function checker(){
	if(logCheck == "True"){
		document.getElementById('getstart').style.display = "none";
		document.getElementById('user').style.display = "block";
		document.getElementById('usrnm').innerHTML = localStorage.getItem("username");
	}
	else{
		document.getElementById('getstart').style.display = "block";
		document.getElementById('user').style.display = "none";
	}
}
function passChange(){
	let username = document.getElementById('username').value;
	let npassword = document.getElementById('password').value;
	let npassword2 = document.getElementById('ppassword').value;
	if(username == us || username == em){
		if(npassword == npassword2){
			localStorage.setItem("password", npassword);
			window.alert("successfully changed password!");
			window.location.href = "login.html";
		}
		else{
			document.getElementById('error').style.display = "block";
			document.getElementById('error').innerHTML = "Error: Passwords are missmatched.";
		}
	}
	else{
		document.getElementById('error').style.display = "block";
		document.getElementById('error').innerHTML = "Error: Unknown username/password";
	}
}
//Registration function
function register(){
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let repassword = document.getElementById('repassword').value;
	let email = document.getElementById('email').value;
//checks if the reinput of the password is equal to the password.
	if(password == repassword){
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		localStorage.setItem("email", email);
		window.alert("You have successfully registered!");
		window.location.href = "index.html";
	}
//if not, they will warn you.
	else{
		window.alert("Your passwords are mismatched.")
	}
}
