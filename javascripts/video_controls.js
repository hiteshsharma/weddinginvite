$(document).ready(function(){
  $(".bg_video").bind("ended", function(){
    v = this.src;
    this.src = '';
    this.autoplay=false;
    this.controls=false;
    this.src = v;
  });
});
