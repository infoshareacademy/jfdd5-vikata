/**
 * Created by mlacki on 05.12.16.
 */


$(window).scroll(function(){
  var position = $(this).scrollTop();

     $('section').each(function () {
      var target = $(this).offset().top - 500;
      var id = $(this).attr('id');

     if (position >= target) {
        $('ul.nav li').removeClass('active-element');
        $('ul.nav li > a[href="#' + id + '"]').parent().addClass('active-element');
      }
    }
  )
}
)
