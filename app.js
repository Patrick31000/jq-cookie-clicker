$(document).ready(function() {
    //votre code
    var x = 0
    $("img").click(function() {
        x++
        $("span").html(x);
    });

});