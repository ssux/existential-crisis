$(document).ready(function() {

$("#option3").click(function () {
    $(".text").toggle();
})

$("#o1").click(function () {
    $("button").css("background", "#310102");
    $(this).css("opacity", "1")
    $("#o2").hide();
    $(".background").css("background-image", "url(../existential-crisis/images/backgroundKierke.jpg)");
    $(this).delay(400)
    .queue(function (next) {
        $("#o1a1").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 500);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1a2").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 500);
    });
    $(this).delay(2000)
    .queue(function (next) {
        $("#o1-2").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o2").click(function () {
    $("button").css("background", "#576601")
    $(this).css("opacity", "1");
    $(".background").css("background-image", "url(../existential-crisis/images/backgroundCamus.jpg)");
    $("#o1").hide();
    $("h4").css("color", "#576601");
    $("h5").css("color", "#576601");
    $(".userReaction").css("color", "#576601");
    $(this).delay(500)
    .queue(function (next) {
        $("#o2a1").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(800)
    .queue(function (next) {
        $("#o2-1").css("display", "block"); 
        next();
        $("#o2-2").css("display", "block");
        $("#o2-3").css("display", "block");
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o1-2").click(function () {
    $(this).css("opacity", "1");
    $(this).delay(500)
    .queue(function (next) {
        $("#o1-2a1").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(2000)
    .queue(function (next) {
        $("#o1-2a2").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-2a3").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-3").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(1000)
    .queue(function (next) {
        $("#o1-4").css("display", "block"); 
        $("#o1-5").css("display", "block");
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o1-4").click(function(){
    $(this).css("opacity", "1");
    $("#o1-5").hide();
    $(this).delay(800)
    .queue(function (next) {
        $("#o1-4a1").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(2000)
    .queue(function (next) {
        $("#o1-4a2").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-6").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o1-5").click(function(){
    $("#o1-4").hide();
    $(this).css("opacity", "1")
    $(this).delay(800)
    .queue(function (next) {
        $("#o1-5a1").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(2000)
    .queue(function (next) {
        $("#o1-6a2").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-7").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o1-6").click(function(){
    $(this).css("opacity", "1");
    $(this).delay(1000)
    .queue(function (next) {
        $("#o1-6a1").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-6a2").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(5000)
    .queue(function (next) {
        $("#o1-7").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o1-7").click(function () {
    $(this).delay(1000)
    .queue(function (next) {
        $("#o1-7a1").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-7a2").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(700)
    .queue(function (next) {
        $("#o1-7a3").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(2000)
    .queue(function (next) {
        $("#o1-7a4").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(5000)
    .queue(function (next) {
        $("#fin").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o2-1").click(function () {
    $(this).css("opacity", "1");
    $("#o2-2").hide();
    $("#o2-3").hide();
    $(this).delay(1000)
    .queue(function (next) {
        $("#o2-1a1").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(1000)
    .queue(function (next) {
        $("#o2-1a2").css("display", "block"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

});