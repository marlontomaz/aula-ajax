// executa quando o documento terminar de carregar .ready
$(document).ready(function(){


    $("#cadastrar").click(function(){
               
        var cidade = $("#cidade").val();
        var cep = $("#CEP").val();
        
        var conteudo = "<li>"+cidade
        + '-CEP:' + cep
        + ' <span class="del"> [x]</span></li>';

        $("#lista-cidades").append(conteudo);


    }); //fim fo click botao 

    $("#lista-cidades").on("click", ".del", function(){
        $(this).parent().fadeOut(800, function(){
            $(this).remove();

        });    //"this" aquele clicado no momento 
    });
    
}); //fim do ready


