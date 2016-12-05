/**
 * Created by mlacki on 05.12.16.
 */


$(window).scroll(function(){
  var position = $(this).scrollTop();

    $('section').each(function () {
      var target = $(this).offset().top;
      var id = $(this).attr('id');



     if (position >= target) {
       // console.log('podswietlam ID', id)
        $('ul.nav li').removeClass('active');
        $('ul.nav li > a[href="#' + id + '"]').parent().addClass('active');


      }

    }
  )


}
)
