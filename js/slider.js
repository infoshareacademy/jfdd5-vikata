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


