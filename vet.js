
var vetor = new Array();

function cadastrar()
{
    var input = document.getElementById("texto");    
        
    vetor.push( input.value );

    exibir();
}

function ordenar()
{
    vetor.sort();
    exibir();
    
}

function exibir()
{
    var resultado = document.getElementById("resultado");
    
    resultado.innerHTML = "";

    for(var i = 0; i < vetor.length; i++)
    {
        resultado.innerHTML += "<li>"+ vetor[i] + "</li>";
    }
}