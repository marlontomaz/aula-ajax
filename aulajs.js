//js

function grande()
{
	var input = document.getElementById("texto");
	var resultado = document.getElementById("resultado");

	var texto = input.value;

	resultado.innerHTML = texto.toUpperCase();

}

function cidade()
{
	var cidade = document.getElementById("cidade");
	var lista = document.getElementById("lista");

	var novo = '<li>'+ cidade.value +'</li>';
	

	lista.innerHTML += novo;
}
