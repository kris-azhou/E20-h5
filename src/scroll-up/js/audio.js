$(document).ready(function() {
    var musicPush=document.getElementById("music");
    function autoPlayAudio() {
        wx.config({
            debug: false
        });
        wx.ready(function() {
            musicPush.pause();
        });
    }
    $(".music-btn").on("tap",function(){
        if($(this).attr("class")=="music-btn"){
            musicPush.play();
            $(".music-btn").addClass("rotate");
        }else if($(this).attr("class")=="music-btn rotate"){
            musicPush.pause();
            $(".music-btn").removeClass("rotate");
        }
    });
    autoPlayAudio();
});
