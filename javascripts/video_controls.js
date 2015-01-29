$(document).ready(function(){
  video_tag = $(".bg_video").get(0);
  $(".bg_video").bind("ended", function(){
    v = this.src;
    this.src = '';
    this.autoplay=false;
    this.controls=false;
    this.src = v;
  });

  $(".menu .marriage").bind("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    video_tag.currentTime = 94;
    video_tag.pause();
  })

  $(".menu .reception").bind("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    video_tag.currentTime = 100;
    video_tag.pause();
  })
});
