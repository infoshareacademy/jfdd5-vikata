/**
 * Created by mlacki on 01.12.16.
 */
$("#home").addClass("slider1");
var sliderClasses = ["slider1", "slider2", "slider3"];
var slideId =0;
function slide () {
    $("#home").removeClass(sliderClasses[slideId]);
    slideId = (slideId + 1) % sliderClasses.length;
    $("#home").addClass(sliderClasses[slideId]);
}

setInterval(slide, 10000);


//
// $("#home").removeClass();
// $("#home").addClass("slider2");
//
// $("#home").removeClass();
// $("#home").addClass("slider3");




//
//
// $(document).ready(function()
// {
//     $("#home").click(function()
//     {
//
//         $(this).removeClass();
//         $(this).addClass("slider")
//     })
//     $("#prova.show").click(function()
//     {
//
//         $(this).removeClass();
//         $(this).addClass("hide")
//     })
//
// })