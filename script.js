
	// javascript objects for the form, questions and answers

function form() {
	this.name = 'my first form';
	this.questions = [];
	this.addQuestion = function(question) {
		this.questions.push(question);
	};
}

function question() {
	this.text;
	this.type;
	this.answers = [];
}

function answer() {
	this.text;
}

	// instance of form
var myForm = new form();

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
		var myQuestion =  new question();
		myQuestion.text = $('#questionText').val();
		myQuestion.type = $('#questionType').val();
		myForm.addQuestion(myQuestion);
	});

}

$(init);
