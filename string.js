
function letra()
{
	var input = document.getElementById("texto");
	var resultado = document.getElementById("resultado");

	var texto = input.value;

  var res = texto.toLowerCase();

  var letra = texto.charAt(0).toUpperCase();

  resultado.innerHTML = letra + res.substr(1);
    

}


function reverso()
{
	var input = document.getElementById("texto");
	var resultado = document.getElementById("resultado");

	var texto = input.value;
    var tam = texto.length;
    var res = "";

    for (var i = tam - 1 ; i >= 0; i--)
    {
        res = res + texto.charAt(i);
    }

    resultado.innerHTML = res;
}


  

