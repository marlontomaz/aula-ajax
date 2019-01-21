// executa quando o documento terminar de renderizar
$(document).ready(function(){ 

    $("#cadastrar").click(function(){
        
        var cidade = $("#cidade").val();
        var cep = $("#cep").val();
        var conteudo = "<li>"+ cidade 
            + ' - CEP: ' + cep
            + ' <span class="del">[X]</span> </li>';

        $("#lista-cidades").append(conteudo);

    }); // fim do click botão


    $("#lista-cidades").on("click", ".del", function(){
        $(this).parent().fadeOut(800, function(){
            $(this).remove();
        });
    });

}); //fim do ready



