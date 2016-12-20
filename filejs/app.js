$(document).ready(function(){
$(".cereal").click(function(){
$(".footer").show();
$(".footing").hide();
$(".foody").hide();
$(".fofo").hide();

$(".flower").click(function(){
$(".footing").show();
$(".footer").hide();
$(".foody").hide();
$(".fofo").hide();

$(".machine").click(function(){
$(".foody").show();
$(".footer").hide();
$(".footing").hide();
$(".fofo").hide();

$(".candy").click(function(){
$(".fofo").show();
$(".footing").hide();
$(".foody").hide();
$(".footer").hide();

});
});
});
});



$(".cross").click(function(){
$(".footer").hide();
});
$(".crossing").click(function(){
$(".footing").hide();
});
$(".croix").click(function(){
$(".foody").hide();
});
$(".crux").click(function(){
$(".fofo").hide();
});




$(function(){
  $("select[name=price]").change(function(){     
      if($(this).val() == "1"){

        $(".optu").hide();
        $(".opta").hide();
        $(".opto").hide();
        $(".opt").hide();
      
      }

      else if($(this).val() == ""){
        $(".optu").show();
        $(".opta").show();
        $(".opto").show();
        $(".opt").show();
     }  
     
     else if($(this).val() == "2"){
        $(".optu").show();
        $(".opta").hide();
        $(".opto").hide();
        $(".opt").show();
     }  
     
     else if($(this).val() == "3"){
        $(".optu").hide();
        $(".opta").show();
        $(".opto").show();
        $(".opt").hide();
     }   
        
     else if($(this).val() == "4"){
        $(".optu").hide();
        $(".opta").hide();
        $(".opto").show();
        $(".opt").hide();
     }   

   

   });
 });



   $("ol").mouseenter(function () {
        $("li").css("color", "#002b5a");
        $(".pics").css("opacity", "0.3");
    });

    $("ol").mouseleave(function () {
        $("li").css("color", "");
        $(".pics").css("opacity", "");
    });
   

    $(".pics").mouseenter(function () {
        $(".pics").css("opacity", "0.3");
        $("li").css("color", "#002b5a");
    });
   
   $(".pics").mouseleave(function () {
        $(".pics").css("opacity", "");
        $("li").css("color", "")
    });




});

$(document).ready(function(){

$(".flower").click(function(){
$(".footing").show();
$(".footer").hide();
$(".foody").hide();
$(".fofo").hide();

});

$(".machine").click(function(){
$(".foody").show();
$(".footer").hide();
$(".footing").hide();
$(".fofo").hide();
});



$(".candy").click(function(){
$(".fofo").show();
$(".footing").hide();
$(".foody").hide();
$(".footer").hide();
});




});








