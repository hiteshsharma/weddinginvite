$(document).ready(function(){
  video_tag = $(".bg_video").get(0);
  $(".bg_video").bind("ended", function(){
    v = this.src;
    this.src = '';
    this.autoplay=false;
    this.controls=false;
    this.src = v;
  });

  $(".nav a").bind("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    seektime = $(this).data("seek");
    video_tag.currentTime = seektime;
    video_tag.pause();
  });
});
