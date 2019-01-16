// executa quando o documento terminar de carregar .ready
$(document).ready(function(){


    $("#cadastrar").click(function(){
               
        var cidade = $("#cidade").val();
        var conteudo = "<li>"+cidade+"</li>";

        $("#lista-cidades").append(conteudo);


    }); //fim fo click botao 

    $(".del").click(function(){
        $(this).parent().remove();                 //"this" aquele clicado no momento 
    }); // fim click dell
    
}); //fim do ready


