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
    $("li.play-status.playing").toggleClass("playing").toggleClass("paused");
  });

  $("li.play-status").on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    if($(this).hasClass("playing")){
      video_tag.pause();
    } else{
      video_tag.play();
    }
  });

  $(video_tag).on("play", function(){
    console.log('play');
    $("div.mobile-play").hide();
  })

  $(video_tag).on("playing", function(){
    console.log("playing");
    $("div.mobile-play").hide();
    $("li.play-status.paused").toggleClass("paused").toggleClass("playing");
  });

  $(video_tag).on("timeupdate", (function(){
    var progress = $(".progress.playing");
    return function(e){
      progress.width((this.currentTime*100/this.duration).toString() + "%");

      if(this.currentTime < 116){
        this.volume = 0.15;
      } else {
        this.volume = 1;
      }
    };
  })());

  $("li.hd-switch a").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("hd").toggleClass("non-hd");
    if($(this).hasClass("hd")){
      video_tag.src = "http://vcdn.slidesharecdn.com/animoto360p2-150207200234-conversion-gate02-video-HD.mp4";
    } else{
      video_tag.src = "http://vcdn.slidesharecdn.com/animoto360p2-150207200234-conversion-gate02-video-SD.mp4";
    }
    video_tag.play();
  });

  $(video_tag).on("error", function(e){
    console.log("loadedata");
  });

  $(video_tag).bind("progress", function(e){
    var bufferedTime = this.buffered.end(0);
    $(".progress.buffered").width((bufferedTime*100/this.duration).toString() + '%');
  })
  
  $(video_tag).on("loadeddata", function(e){
    console.log("loadeddata");
  });

  $(video_tag).on("loadedmetadata", function(e){
    console.log("loadedmetadata");
  });

  $("div.mobile-play").click(function(e){
    video_tag.play();
    $(this).hide();
  })
});
