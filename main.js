function playVideo(el) {
    var videoId = el.data('video');
    var video = document.getElementById(videoId);

    if (video.paused) {
        // Play the video
        video.play();
        el.removeClass('paused').addClass('playing');
    }
    else {
        // Pause the video
        video.load();
        el.removeClass('playing').addClass('paused');
    }
}

$(document).on('click', '.js-video-control', function(e) {
  playVideo($(this));
  e.preventDefault();
});


// Tabs
$(document).ready(function(){

$('ul.tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
})
})
