/**
 * Created by mlacki on 01.12.16.
 */
$("#home").addClass("slider1");
var sliderClasses = ["slider1", "slider2", "slider3"];
var sliderDots =  ["li.dot1", "li.dot2", "li.dot3"];
var slideId =0;
$(sliderDots[slideId]).addClass("active");

function slideRight () {
    $("#home").removeClass(sliderClasses[slideId]);
    $("li.active").removeClass("active")
    slideId = (slideId + 1) % sliderClasses.length;
    $("#home").addClass(sliderClasses[slideId]);
    $(sliderDots[slideId]).addClass("active");

}

var counter = setInterval(slideRight, 5000);

$('.dot1').click(function(){
    $("li.active").removeClass("active")
    $(this).addClass('active');


    $("#home").removeClass(sliderClasses[slideId]);
    slideId = 0;
    $("#home").addClass(sliderClasses[slideId]);
});

$('.dot2').click(function(){
    $("li.active").removeClass("active")
    $(this).addClass('active');

    $("#home").removeClass(sliderClasses[slideId]);
    slideId = 1;
    $("#home").addClass(sliderClasses[slideId]);
});

$('.dot3').click(function(){
    $("li.active").removeClass("active")
    $(this).addClass('active');

    $("#home").removeClass(sliderClasses[slideId]);
    slideId = 2;
    $("#home").addClass(sliderClasses[slideId]);
});





