
//motores do browser - chrome
// render do html -> webkit
// executar js -> V8
/*
|------|     |----|
| DOM  |  <- | V8 |
|------|     |----|

*/

$("h2").click(function(){
    $(this).css("color", "gold");
});
