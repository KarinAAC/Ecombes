/* ===========================
   JS DE DAVID
   =========================== */

$(document).on('ready', function () {
	$('.modal').on('show.bs.modal', centerModal);
  $(window).on('resize', centerModal);
})

new WOW().init();

function centerModal () {
	$('.modal').each(function(i){
    var $clone = $(this).clone().css('display', 'block').appendTo('body');
    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
    top = top > 0 ? top : 0;
    $clone.remove();
    $(this).find('.modal-content').css("margin-top", top);
  });
}

(function(){
	/* BG Image Parallax */
  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset - 300,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

  // window.onload = function () {
  // 	new WOW().init();
  // }

})();