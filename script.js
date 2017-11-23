
	// javascript objects for the form, questions and answers

function form(name) {
	this.name = name;
	this.questions = [];
	this.addQuestion = function(question) {
		this.questions.push(question);
	};
}

function question(text, type) {
	this.text = text;
	this.type = type;
	this.answers = [];
}

function answer() {
	this.text;
}

	// instance of form
var myForm = new form('my first form');

	// change form name
function changeFormName(){
	myForm.name = $(this).val();
}

	// initialisation function
function init() {

	$('#debug').click(function() {
		console.log(myForm);
	});

	$('#formName')
		.keyup(changeFormName)
		.val(myForm.name);

	$('#addQuestion').click(function () {
		myForm.addQuestion(new question($('#questionText').val(), $('#questionType').val()));
	});

}

$(init);
