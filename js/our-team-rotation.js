/**
 * Created by Michal Lacki on 2016-11-30.
 * Our Team Ovals rotation
 */

var playedRotation = false;

$(window).scroll(function () {
    console.log("scroll happened");

    if ($(document).scrollTop() > $("#our-team").offset().top -500 && !playedRotation) {

        playedRotation = true; // Flag indicating that the rotation has been already conducted

        $(".oval-1").parent().addClass('force-show');

        setTimeout(function () {
            $(".oval-1").parent().removeClass('force-show');
        }, 1000);


        setTimeout(function () {
            $(".oval-2").parent().addClass('force-show');
        }, 1500);

        setTimeout(function () {
            $(".oval-2").parent().removeClass('force-show');
        }, 2500);

        setTimeout(function () {
            $(".oval-4").parent().addClass('force-show');
        }, 3000);

        setTimeout(function () {
            $(".oval-4").parent().removeClass('force-show');
        }, 4000);


    }
});

