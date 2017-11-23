
	// javascript objects for the form, questions and answers

function form() {
	this.name = 'my first form';
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

var myForm = new form();

function changeFormName(){
	myForm.name = $(this).val();
}

function init() {

	$('#debug').click(function() {
		console.log(myForm);
	});

	$('#formName')
		.keyup(changeFormName)
		.val(myForm.name);

}

$(init);
