//  toggle
$(document).ready(function () {
    $("#design").click(function(){
        $("#designImage").toggle(); 
        $("#designText").toggle();
    });
    $("#development").click(function(){
        $("#developmentImage").toggle(); 
        $("#developmentText").toggle();
    });
    $("#projectMgt").click(function(){
        $("#projectMgtImage").toggle(); 
        $("#projectMgtText").toggle();
    });
});



