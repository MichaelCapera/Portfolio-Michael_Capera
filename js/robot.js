var input = document.querySelector('#input');
var output = document.querySelector('#output');
var stringIn = "";
var stringOut = "";
var button = document.querySelector("button");

window.addEventListener('keydown', keyDownHandler, false);

button.addEventListener('click', clickHandler, false);

function keyDownHandler(event){

	if(event.keyCode === 13){
		checkInput()
	}
}

function clickHandler()
{
	checkInput();
}	


function checkInput()
{
	stringIn = input.value;

	if(stringIn === "buenos días" ||stringIn === "Buenos días" ||stringIn === "Buenos dias"
		||stringIn === "buenos dias"||stringIn === "Buenas tardes"||stringIn === "buenas tardes"
		||stringIn === "buenas noches"||stringIn === "Buenas noches"||stringIn === "Buenas"
		||stringIn === "buenas"||stringIn === "Hola"||stringIn === "hola"){
		stringOut = "Hola soy Bitbot, ¿comó estás?";
	}
	else if(stringIn.includes("bien"))
	{
		stringOut = "Que bueno me alegro, ingresa un comando para asesorarte ";
	}
	else if(stringIn.includes("mal"))
	{
		stringOut = "Espero que tu día mejore :) ¿te puedo ayudar?  ";
	}
	else if(stringIn.includes("idioma"))
	{
		stringOut = "Yo soy un robot, aprendiendo a hablar con humanos";
	}
	else if(stringIn.includes("hombre"))
	{
		stringOut = "Yo soy un robot, aprendiendo a hablar con humanos";
	}
	else if(stringIn.includes("web"))
	{
		stringOut = "Yo hablo Javascript estoy aprendiendo python";
	}	
	
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else if(stringIn === "hola"){
		stringOut = "Hola soy bit en que te puedo ayudar  ";
	}
	else {
		stringOut = "Lo siento mucho solicitud erronea, \n ingresa un código del 1 al 3, aun estoy aprendiendo  ";
	}
output.innerHTML = stringOut;
input.value = "";
input.focus();


}

