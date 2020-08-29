$(document).ready(function(){
    $("p").click(function(){
        $("p").show();
    });
});

$(document).ready(function(){
    $("p").click(function(){
        $(".words-showing").toggle();
        $(".words-hidden").toggle();
    });
});