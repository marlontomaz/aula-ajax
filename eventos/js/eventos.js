$.getJSON("model/eventos_listas.php", function(dados){
   
    dados.forEach(function(valor){

        var tr = " <tr>"
        +"<td>"+ valor.id +"</td>"
        +"<td>"+ valor.nome +"</td>"
        +"<td>"+ valor.datahora +"</td>"
        +"<td>"+ valor.local +"</td>"
        +"<td>[Editar] [Deletar]</td>"
        +"</tr>";
    $("#lista-eventos").append(tr);

    }); //fim do for

}); // fim do getJSON
