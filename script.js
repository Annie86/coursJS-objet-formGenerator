
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

function addQuestion() {
	myForm.addQuestion(new question($('#questionText').val(), $('#questionType').val()));
	$('#questionText').val('');
	displayForm();
}

	// initialisation function
function init() {

	$('#debug').click(function() {
		console.log(myForm);
	});

	$('#formName')
		.keyup(changeFormName)
		.val(myForm.name);

	$('#addQuestion').click(addQuestion);

	$('#questionText').keypress(function (event) {
		if ( event.keyCode == 13 ) {
			addQuestion();
		}
	});

}

$(init);

	// display the form inside formContent

function displayForm() {
	var HTML = '';

	for( i = 0 ; i < myForm.questions.length ; i++ ) {
		var thisQuestion = myForm.questions[i];
		HTML += '<h4>'+thisQuestion.text+'</h4>';
		HTML += '<hr>';
	}

	$('#formContent').html(HTML);
}

