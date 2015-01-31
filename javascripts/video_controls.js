$(document).ready(function(){
  video_tag = $(".bg_video").get(0);
  $(".bg_video").bind("ended", function(){
    v = this.src;
    this.src = '';
    this.autoplay=false;
    this.controls=false;
    this.src = v;
  });

  $(".nav a.event").bind("click", function(e){
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
      progress.width((this.currentTime*100/this.duration).toString() + "%");
    };
  })());

  $("a.hd-switch").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("hd").toggleClass("non-hd");
    if($(this).hasClass("hd")){
      video_tag.src = "video/animoto_720p.mp4";
    } else{
      video_tag.src = "video/animoto_high_res.mp4";
    }
    video_tag.play();
  });

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
