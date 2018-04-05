
// JQuery UI accordion js
$( function() {
  $( "#accordion" ).accordion({
    header: "> div > h3",
    collapsible: true
  });
} );

var marker;
var map;
$(function initMap() {
  var uluru = {lat: 32.771481, lng: -117.189610};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  marker = new google.maps.Marker({
      position: uluru,
      animation: google.maps.Animation.DROP,
      icon: 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png',
    });
    marker.setMap(map);
    map.panTo(marker.position);
  // marker = new google.maps.Marker({
  //   position: uluru,
  //   map: map
  // });
});

  // map.mapTypes.set('map_style', styledMap);
  // map.setMapTypeId('map_style')

   // marker = new google.maps.Marker({
   //     position: new google.maps.LatLng(3.167244, 101.612950),
   //     animation: google.maps.Animation.DROP,
   //     icon: 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png',
   // });


// Change location of pin

function changeMarkerPos(lat, lon){
  myLatLng = new google.maps.LatLng(lat, lon)
  marker.setPosition(myLatLng);
  map.panTo(myLatLng);
}

$(function (){

    "use strict";

    var wind = $(window);

    //smooth scroll
    $('.navbar-nav').singlePageNav({
        speed:1000,
        currentClass:'active',
        offset:60
    });


    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar");

        if(bodyScroll > 300){

            navbar.show();

        }else{

            navbar.hide();
        }
    });


    // typejs
    $('.caption h4 span').typed({
        strings: ["Crease","Cut","Create", "Innovate"],
        loop: true,
        startDelay: 1000,
        backDelay: 2000
    });



    //smooth button scroll
    $('.button-scroll').on('click', function(){

        var scrollTo = $(this).attr('data-scrollTo');

        $('body, html').animate({

        "scrollTop": $('#'+scrollTo).offset().top - 60
        }, 1000 );

    });


    // progress bar
    wind.on('scroll', function () {
        $(".progress-main .progress-bar").each(function () {
            var bottom_of_object =
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });


    // magnificPopup
    $('.v-middle').magnificPopup({
      delegate: 'a',
      type: 'image'
    });


    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });


    // owlCarousel
    $('.blog .owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        dots:false,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    // owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });

    // stellar
    wind.stellar();


    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.item-img2'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter')+ '.item-img';
        var hidden = $('.gallery').find('.item-img').hide();
        var filtered = $('.gallery').find(filterValue).show();
        // for (var i=0;i<items.length;i++) {
        //   if ($(items[i]).hasClass(filterValue)) {
        //     console.log(items,"fell through")
        //   }else{
        //     console.log(items,"was blocked")
        //   }
        //}
          // $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

});


// Preloader

$(window).on("load",function (){

    $(".loading").fadeOut(500);

     // contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});
