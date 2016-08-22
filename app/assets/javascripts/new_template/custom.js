$(document).ready(function(){
  var $elem = $('#content');

  $('#nav_up').fadeIn('slow');
  $('#nav_down').fadeIn('slow');  

  $(window).bind('scrollstart', function(){
    $('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
  });
  $(window).bind('scrollstop', function(){
    $('#nav_up,#nav_down').stop().animate({'opacity':'1'});
  });
  $('#nav_down').click(
  function (e) {
      $('html, body').animate({scrollTop: $elem.height()}, 800);
    }
  );
  $('#nav_up').click(
    function (e) {
        $('html, body').animate({scrollTop: '0px'}, 800);
      }
  );
});

$(document).ready(function(){
  $(".openvideo").click(function(){
      $(".myvideo").toggle();
  });
 $(".report-image1").click(function(){
      $(".report1").toggle(1000);
   $(".home-contact").show(1000);
  });
 $(".report1 .close-frame").click(function(){
      $(".report1").hide();
  });
 $(".report-image2").click(function(){
      $(".report2").toggle(1000);
   $(".home-contact").show(1000);
  });
 $(".report2 .close-frame").click(function(){
      $(".report2").hide();
  });
 $(".capcha").click(function(){
      $(".home-contact").hide();
  });
});

function refreshIframe() {
  var ifr = document.getElementsByName('myIframe')[0];
  ifr.src = ifr.src;
}
var currentSlide;
var rand;
$(document).ready(function() {
  currentSlide = Math.floor((Math.random() * $('.item').length));
  rand = currentSlide;
  $('#myCarousel').fadeIn(1000);
   $('#myCarousel').carousel({
     interval:60000,
     });
  $('#myCarousel').carousel(rand);
  
});
$(document).ready(function() {
  var owl = $("#owl-demo");
  owl.owlCarousel({
    items : 8, //10 items above 1000px browser width
    itemsDesktop : [1100,7], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,4], // betweem 900px and 601px
    itemsTablet: [600,3], //2 items between 600 and 0
    itemsMobile : [375,2], // itemsMobile disabled - inherit from itemsTablet option
     autoPlay: true,
  });
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});

$(document).ready(function() {
  //Sort random function
  function random(owlSelector){
    owlSelector.children().sort(function(){
        return Math.round(Math.random()) - 0.5;
    }).each(function(){
      $(this).appendTo(owlSelector);
    });
  }
  $("#owl-demo1").owlCarousel({
    autoPlay:60000,
     singleItem:true,
    navigation: true,
    navigationText: [
      "<i class='icon-chevron-left icon-white'></i>",
      "<i class='icon-chevron-right icon-white'></i>"
      ],
    beforeInit : function(elem){
      //Parameter elem pointing to $("#owl-demo")
      random(elem);
    }
  });
});

$(document).ready(function(){
    $(".openvideo").click(function(){
        $(".myvideo").toggle();
    });
   $(".report-image1").click(function(){
        //$(".report1").toggle(1000);
     $(".home-contact").show();
    });
   $(".report1 .close-frame").click(function(){
        $(".report1").hide();
    });
   $(".report-image2").click(function(){
        $(".report2").toggle(1000);
     $(".home-contact").show(1000);
    });
   $(".report2 .close-frame").click(function(){
        $(".report2").hide();
    });
   $(".capcha").click(function(){
        $(".home-contact").hide();
    });
});