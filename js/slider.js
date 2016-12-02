/**
 * Created by mlacki on 01.12.16.
 */
$("#home").addClass("slider1");
var sliderClasses = ["slider1", "slider2", "slider3"];
var slideId =0;

function slideRight () {
    $("#home").removeClass(sliderClasses[slideId]);
    slideId = (slideId + 1) % sliderClasses.length;
    $("#home").addClass(sliderClasses[slideId]);
}

var counter = setInterval(slideRight, 5000);

$('.dot1').click(function(){
    $("#home").removeClass(sliderClasses[slideId]);
    slideId = 0;
    $("#home").addClass(sliderClasses[slideId]);
}



);



