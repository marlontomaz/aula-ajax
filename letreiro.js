
function letreiro()
{
    var letreiro = document.getElementById("letreiro");
    var texto = letreiro.innerHTML;

    var letra = texto.charAt(0);

    var novo = texto.substr(1) + letra;

    letreiro.innerHTML = novo;
}

function ligar()
{
    setInterval(letreiro, 300);
}