
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

function answer(text) {
	this.text = text;
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

function removeQuestion(questionId) {
    myForm.questions.splice(questionId, 1);
    displayForm();
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function addAnswer(questionId) {
	myForm.questions[questionId].answers.push(new answer($('#answerText'+questionId).val()));
	displayForm();
}

function displayForm() {
	var HTML = '';

	for( i = 0 ; i < myForm.questions.length ; i++ ) {
		var thisQuestion = myForm.questions[i];
		HTML += '<h4>'
			+ htmlEntities(thisQuestion.text)
			+ '<input type="button" onclick="removeQuestion('+i+')" value="supprimer"/>'
			+ '</h4>';

		for ( j = 0 ; j < myForm.questions[i].answers.length ; j++ ) {
			HTML += '<div>'
				+ '<input type="'+myForm.questions[i].type+'">'
				+ myForm.questions[i].answers[j].text
				+ '</div>';
		}

		HTML += '<div><input type="text" id="answerText'+i+'">'
			+ '<input type="button" onclick="addAnswer('+i+');" value="add answer"></div>'
			+ '<hr>';
	}

	$('#formContent').html(HTML);
}

