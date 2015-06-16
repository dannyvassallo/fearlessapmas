function voteResize(){
  var voteOverlay = $('img.full-w.black-and-white').height();
  var h1Height = $('.vote-overlay h1').height();
  $('.vote-overlay h1').css('margin-top',(voteOverlay / 2) - (h1Height / 2));
}

$(window).resize(function(){
  voteResize();
});

function hider(){
  $(this).hide();
}

$(function(){
  $('.white-overlay').each(function(){
    var overlay = $(this).parent().find('.vote-overlay');
    var url = "http://www.altpress.com/static/apmasvote.html"
    $(this).mouseenter(function(){
      overlay.fadeTo( 'slow', 1);
    }).mouseleave(function(){
      overlay.fadeTo( 'slow', 0);
    });
    $(this).on('click', function(){
      window.open(url, '_blank');
    });
  });
});
