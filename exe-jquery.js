$('h2').click(function()
{
    var cor = $("#cor").val();
    $(this).css("color", cor);
});

$('.exe2').hover(function(){
    $(this).css("color", "gold");
});

$('#text-cor').keyup(function(){
    var cor = $(this).val();
    $('#box-cor').css('background-color', cor);
});

$("#add-cor").click(function(){
    var cor = $('#text-cor').val();
    var opt = '<option>'+ cor +'</option>';

    $('#cor').append(opt);
});
