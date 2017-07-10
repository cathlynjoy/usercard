$(document).ready(function(){

  $(".userCard1").click(function(){
          var div = $(".userCard1");
          div.animate({width: '700px'}, "4000");
          div.animate({height: '540px'}, "4000");
  });

  $(".userCard1").mouseleave(function(){
          var div = $(".userCard1");
          div.animate({width: '180px'}, "fast");
          div.animate({height: '180px'}, "fast");
  });

  $(".userCard2").click(function(){
          var div2 = $(".userCard2");
          div2.animate({width: '700px'}, "4000");
          div2.animate({height: '540px'}, "4000");
  });

  $(".userCard2").mouseleave(function(){
          var div2 = $(".userCard2");
          div2.animate({width: '180px'}, "fast");
          div2.animate({height: '180px'}, "fast");
  });

  $(".userCard3").click(function(){
          var div3 = $(".userCard3");
          div3.animate({width: '700px'}, "4000");
          div3.animate({height: '540px'}, "4000");
  });

  $(".userCard3").mouseleave(function(){
          var div3 = $(".userCard3");
          div3.animate({width: '180px'}, "fast");
          div3.animate({height: '180px'}, "fast");
  });

  $(".userCard4").click(function(){
          var div4 = $(".userCard4");
          div4.animate({width: '700px'}, "4000");
          div4.animate({height: '540px'}, "4000");
  });

  $(".userCard4").mouseleave(function(){
          var div4 = $(".userCard4");
          div4.animate({width: '180px'}, "fast");
          div4.animate({height: '180px'}, "fast");
  });
});
