let greeting = ("hello world!");alert("greeting");

let age =32; let pi = 3.142; let alphabet = 'a';
posibility = age * pi
console.log(posibility)

number1 =2; 
number2 = 3; 
sum = number2 + number1

console.log(sum)
alert(sum + pi)

function add(number1, number2) {
	let sum = number1 + number2;
	return sum;
}
console.log(sum)
alert(sum)

let fullName = {firstName: 'John', lastName: 'Doe'}
alert(fullName.firstName)

let personDetails = {
	fullName: {
		firstName: 'Emmanuel',
		lastName: 'Oyinloye'
	},
	alertMessage: function(message){
		alert(message)
	}
}


function emailValidate(email) {
	if(email.includes('@')) {
		return true;
	}
	else {
		return false;
	} 
}

function messageValidate(message) {
	if(message.includes('crap')) {
		return false;
	}
	else {
		return true;
	}
} 

// console.log(emailValidate(emailText));

function clicklistener(event) {
	event.preventDefault();

	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value; 
	let messageText = messageInput.value;

	if(emailValidate(emailText) !== true) {
		console.log('The email address must contain @');
		return false;
	}

	if(messageValidate(messageText) !== true) {
		console.log('Not safe for work');
		return false
	}


	console.log(
		// 'email:', 
		// emailText, 
		// 'message:', 
		// messageText
		'Thank you for your message');
	}


let submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', clicklistener);


