/**
 * Created by Michal Lacki on 2016-11-30.
 * Our Team rotation
 */


//  $('.rotate>div').click(function () {
//    console.log("kliknieta sekcja teamu");
//
//  });

// var x = $("#our-team).offset();
//  console.log(x.top);

//$("#our-team).offset();
//  console.log(x.top);

var playedRotation = false;

$(window).scroll(function () {
    console.log("scroll happened");

    if ($(document).scrollTop() > $("#our-team").offset().top && !playedRotation) {
        console.log("Scroll value:" + $(document).scrollTop());
        playedRotation = true;
        $(".oval-1").parent().addClass('force-show');

        setTimeout(function () {
            $(".oval-1").parent().removeClass('force-show');
        }, 3000);
    }
});

