
	// javascript objects for the form, questions and answers

function form() {
	this.name;
	this.questions = [];
}

function question() {
	this.text;
	this.type;
	this.answers = [];
}

function answer() {
	this.text;
}

	// test the objects with hardcoded instances

var form1 = new form();
form1.name = "formulaire 1";

var question1 = new question();
question1.text = 'ça va ?';
question1.type = 'radio';

var answer1 = new answer();
answer1.text = 'oui';
question1.answers.push(answer1);
var answer2 = new answer();
answer2.text = 'non';
question1.answers.push(answer2);
form1.questions.push(question1);

var question2 = new question();
question2.text = 'oui ou non ?';
question2.type = 'checkbox';
question2.answers.push(answer1);
question2.answers.push(answer2);
form1.questions.push(question2);

console.log(form1);
