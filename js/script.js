$(document).ready(function() {

$("#option3").click(function () {
    $(".text").toggle();
})

$("#o1").click(function () {
    $("button").css("background", "#310102");
    $(this).css({"opacity": "1", "-webkit-animation": "none"})
    $(this).prop("disabled", true);
    $("#o2").hide();
    $(this).delay(1000)
    .queue(function (next) {
        $("#o1a1").css({"display":"block", "margin-top": "20px"}).append("<p><h1>The first question here might be, who are <i>you?</i></h1></p><p><h3>The writer Kierkegaard suggested that all despair has its origins in the self, a concept he defined (somewhat confusingly!) as follows:</p></h3><p><h4>The human being is spirit. But what is spirit? Spirit is the self. But what is the self? The self is a relation which relates to itself, or that in the relation which is its relating to itself. The self is not the relation but the relation's relating to itself. A human being is the synthesis of the infinite and the finite, of the temporal and the eternal, of freedom and necessity. In short, a synthesis. A synthesis is a relation between the two terms. Looked at in this way a human being is not yet a self.</h4></p><p><h5>-Kierkegaard, The Sickness Unto Death</h5></p>");
        next();
        $(".main").animate({scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1a2").css({"display":"block", "margin-top": "20px"}).append("<p><h3>You know, you could be in despair at this very moment because you might not even have a self! But your concern about your own identity and the life that you&#8217;re living is a promising start. Good for you!</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(2000)
    .queue(function (next) {
    $("#o1-2").css({"display":"block", "margin-top": "20px"}).append("That explanation was terrible! What&#8217;s a self?");
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o2").click(function () {
    $("button").css("background", "#576601")
    $(this).css({"opacity": "1", "-webkit-animation": "none"});
    $(this).prop("disabled", true);
    $("#o1").hide();
    $("h4").css("color", "#576601");
    $("h5").css("color", "#576601");
    $(".userReaction").css("color", "#576601");
    $(this).delay(500)
    .queue(function (next) {
        $("#o2a1").css({"display":"block", "margin-top": "20px"}).append("<p><h3>Why don&#8217;t you elaborate?</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(800)
    .queue(function (next) {
        $("#o2-1").css({"display":"block", "margin-top": "20px"}).append("I don&#8217;t think there's a higher power out there."); 
        next();
        $("#o2-2").css({"display":"block", "margin-top": "20px"}).append("The world makes no sense!");
        $("#o2-3").css({"display":"block", "margin-top": "20px"}).append("What&#8217;s the point?");
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o1-2").click(function () {
    $(this).css("opacity", "1");
    $(this).prop("disabled", true);
    $(this).delay(500)
    .queue(function (next) {
        $("#o1-2a1").css({"display":"block", "margin-top": "20px"}).append ("<p><h3>Kierkegaard was a Christian writer, so his idea of the self was heavily influenced by beliefs about the mind and the body. In short, the self is found in the balanced relationship between the body and the soul, forming its own holy trinity. The self is how one balances the inherent antinomy of the physical and the metaphysical: finitude and infinitude, temporality and eternality, worldly necessity and possibility.</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(2000)
    .queue(function (next) {
        $("#o1-2a2").css({"display":"block", "margin-top": "20px"}).append("<p><h3>According to Kierkegaard it&#8217;s entirely possible to live your life without a self! You can still live a life that other people consider a good life and neither you nor they would realize that you don't have a self.</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-2a3").css({"display":"block", "margin-top": "20px"}).append("<p><h1>In other words, you can seem happy and yet be in despair!</h1></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-3").css({"display":"block", "margin-top": "20px"}).append("<p>...</p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(1000)
    .queue(function (next) {
        $("#o1-4").css({"display":"block", "margin-top": "20px"}).append("Wait, then what&#8217;s despair?"); 
        $("#o1-5").css({"display":"block", "margin-top": "20px"}).append("How do I get a self?");
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o1-4").click(function(){
    $(this).css("opacity", "1");
    $("#o1-5").hide();
    $(this).prop("disabled", true);
    $(this).delay(800)
    .queue(function (next) {
        $("#o1-4a1").css({"display":"block", "margin-top": "20px"}).append("<p>&ldquo;...despair, this sickness in the self, is the sickness unto death&rdquo;!</p>");  
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(2000)
    .queue(function (next) {
        $("#o1-4a2").css({"display":"block", "margin-top": "20px"}).append(" <p><h3>At its core, despair is being bad at living life, especially as yourself. Almost everyone is in despair, and it comes in two main forms:</h3></p><p><h4>To despair over oneself, in despair to want to be rid of oneself, is the formula for all despair. So that the second form of despair&mdash;wanting in despair to be oneself&mdash; can be traced back to the first&mdash;in despair not wanting to be oneself&mdash; rather as in the aforegoing we resolved the form, &ldquo;in despair not wanting to be oneself&rdquo; into &ldquo;wanting in despair to be oneself.&rdquo;</h4></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-6").css({"display":"block", "margin-top": "20px"}).append("Well, can I stop being in despair?"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o1-5").click(function(){
    $("#o1-4").hide();
    $(this).css("opacity", "1")
    $(this).prop("disabled", true);
    $(this).delay(800)
    .queue(function (next) {
        $("#o1-5a1").css({"display":"block", "margin-top": "20px"}).append("<p><h1>Good question!</h1></p><p><h3>There&#8217;s a special trick to it, relating back to Kierkegaard&#8217;s definition of the self. Think of yourself as made of two parts: your physical body and your intangible soul.</h3></p>");
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(2000)
    .queue(function (next) {
        $("#o1-6a2").css({"display":"block", "margin-top": "20px"}).append("<p><h3>Your body represents the world: it&#8217;s finite and grounded. Your soul, on the other hand, represents the infinite and the eternal, the realm of possibility and fantasy. Of course, this might make you think &ldquo;But wait, if both of them are me, that means I&#8217;m both finite and infinite at the same time, and isn&#8217;t that a contradiction?&rdquo;</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-7").css({"display":"block", "margin-top": "20px"});
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o1-6").click(function(){
    $(this).css("opacity", "1");
    $(this).prop("disabled", true);
    $(this).delay(1000)
    .queue(function (next) {
        $("#o1-6a1").css({"display":"block", "margin-top": "20px"}).append("<p><h3>The good news is, yes you can! There&#8217;s a special trick to it, relating back to his definition of the self. Think of yourself as made of two parts: your physical body and your intangible soul.</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-6a2").css({"display":"block", "margin-top": "20px"}).append("<p><h3>Your body represents the world: it&#8217;s finite and grounded. Your soul, on the other hand, represents the infinite and the eternal, the realm of possibility and fantasy. Of course, this might make you think &quot;But wait, if both of them are me, that means I&#8217;m both finite and infinite at the same time, and isn&#8217;t that a contradiction?&quot;</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(5000)
    .queue(function (next) {
        $("#o1-7").css({"display":"block", "margin-top": "20px"}); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o1-7").click(function () {
    $(this).prop("disabled", true);
    $(this).delay(1000)
    .queue(function (next) {
        $("#o1-7a1").css({"display":"block", "margin-top": "20px"}).append("<p><h1>You noticed the contradiction? Good work!</h1></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(3000)
    .queue(function (next) {
        $("#o1-7a2").css({"display":"block", "margin-top": "20px"}).append("<p><h3>Disturbing, isn&#8217;t it? But that&#8217;s exactly how you get a self: you resolve the difference between the infinite you and the regular bodily very-much-finite you. In practical terms, it involves balance. For instance, if you spent all your time fantasizing instead of paying attention to the real world, you&#8217;d be in despair because you&#8217;re ignoring a part of your own identity. On the other hand, if you&#8217;re incredibly worldly and grounded then you&#8217;d be in despair for the same reason.</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(700)
    .queue(function (next) {
        $("#o1-7a3").css({"display":"block", "margin-top": "20px"}).append("<p><h1>Tough, huh?</h1></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(2000)
    .queue(function (next) {
        $("#o1-7a4").css({"display":"block", "margin-top": "20px"}).append("<p><h3>Kierkegaard&#8217;s solution was faith. Faith allows him to bridge this gap, and create the relationship between the body and soul that becomes the self. Note that he also used this to distinguish between true faith and merely going through the motions; he brings up a man who seems like a good Christian who goes to church often, but is too absorbed in the world to ever notice that he himself lacks, well, a self. Faith may not necessarily be your resolution, of course.</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(5000)
    .queue(function (next) {
        $("#fin").css({"display":"block", "margin-top": "20px"}).append("<p><h1>Still feeling an existential crisis?</h1></p><p><h3>You might have a different reason for feeling the way that you do.<a href='index.html'>Perhaps you&#8217;d like to ask another question?</a></h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o2-1").click(function () {
    $(this).css("opacity", "1");
    $(this).prop("disabled", true);
    $("#o2-2").hide();
    $("#o2-3").hide();
    $(this).delay(1000)
    .queue(function (next) {
        $("#o2-1a1").css({"display":"block", "margin-top": "20px"}).append("<p><h3>It&#8217;s funny how much significance we human beings place on the idea of a higher power, huh? For many of us, it&#8217;s incredibly important that our lives be leading toward something else, whether it&#8217;s God&#8217;s will, fate, or some great guidance from the universe.</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(1000)
    .queue(function (next) {
        $("#o2-1a2").css({"display":"block", "margin-top": "20px"}).append("<p><h3>Seeing as you&#8217;re having an existential crisis, it seems that it was important to you too. Unfortunately, it looks like you&#8217;ve just stumbled onto what Camus famously called &ldquo;the absurd.&rdquo;</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o2-2").click(function () {
    $(this).css("opacity", "1");
    $("#o2-1").hide();
    $("#o2-3").hide();
    $(this).prop("disabled", true);
    $(this).delay(1000)
    .queue(function (next) {
        $("#o2-2a1").css({"display":"block", "margin-top": "20px"}).append("<p><h1>You&#8217;re not wrong.</h1></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(1000)
    .queue(function (next) {
        $("#o2-2a2").css({"display":"block", "margin-top": "20px"}).append("<p><h3>The simple truth is, the world doesn&#8217;t really work towards some great end, there&#8217;s no underlying intention to the universe, and life might not hold a specific purpose for you. But don&#8217;t we wish it did?</h3></p><p><h3>Sounds like you&#8217;ve run straight into what Albert Camus famously called &ldquo;the absurd.&rdquo;</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

$("#o2-3").click(function () {
    $(this).css("opacity", "1");
    $("#o2-1").hide();
    $("#o2-2").hide();
    $(this).prop("disabled", true);
    $(this).delay(1000)
    .queue(function (next) {
        $("#o2-3a1").css({"display":"block", "margin-top": "20px"}).append("<h3><p>Always a good question before you begin any undertaking.</p><p>Looked at another way, the sensible response to that is &ldquo;must there be a point?&rdquo;</p></h3>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
    $(this).delay(1000)
    .queue(function (next) {
        $("#o2-3a2").css({"display":"block", "margin-top": "20px"}).append("<p><h3><p><h3>In any case, it appears that you&#8217;re beginning to become aware of what Camus famously called &ldquo;the absurd.&rdquo;</h3></p>"); 
        next();
        $(".main").animate({ scrollTop: $('.main').prop("scrollHeight")}, 1000);
    });
})

});