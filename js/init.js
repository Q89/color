
//Markup external link;
jQuery(function ($){
	$("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])").addClass("external").attr("target","_blank");
});

(function($){
  var cid=0;
  function showCopyText(txt,e){
    $('body').append('<div class="copyTip">'+txt+'</div>');
    cid=setTimeout(function (){
      $('.copyTip').addClass('show');
      $('.copyTip').css({
        left:e.clientX - 20,
        top:e.clientY - 40
      });
    },50);
    cid=setTimeout(function (){
      $('.copyTip').removeClass('show');
    },500);
    cid=setTimeout(function (){
      $('.copyTip').remove();
    },1000);
  }

  $('body').on('click','.copy-click',function (e){
    clearTimeout(cid);
    $('.copyTip').remove();
    var target=$(this).children('.copy-content');
    target.select();
    document.execCommand("copy");
    var txt='色值已复制';
    if ($(this).hasClass('copy-code')) {
      txt='CSS已复制';
    }
    showCopyText(txt,e);
    return false;
  });
})(jQuery);