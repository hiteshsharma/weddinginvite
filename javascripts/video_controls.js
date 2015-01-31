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

  $(video_tag).on("onwaiting", function(){
    console.log("waiting");
  });

  $(video_tag).on("ended", function(){
    console.log("ended");
  });

  $(video_tag).on("pause", function(){
    console.log("paused");
  });

  $(video_tag).on("playing", function(){
    console.log("playing");
  });

  $(video_tag).on("timeupdate", (function(){
    var progress = $(".progress");
    return function(e){
      progress.animate({
        width: this.currentTime*100/this.duration.toString() + "%",
        duration: "fast"
      });
    };
  })());

  $(video_tag).on("error", function(e){
    console.log("loadedata");
  });

  $(video_tag).on("loadeddata", function(e){
    console.log("loadeddata");
  });

  $(video_tag).on("loadedmetadata", function(e){
    console.log("loadedmetadata");
  });

  
});
