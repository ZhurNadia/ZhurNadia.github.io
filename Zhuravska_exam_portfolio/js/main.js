$(document).ready(function(){

    /*  Events Slider  */
	$('#tslider').carouFredSel({
            circular : true,
            infinite: false,
            responsive : true,
            scroll : {
                items : 1,
                fx : "fade"
            },
            pagination: {
				container:	"#ev_navigation",
				anchorBuilder:	function(nr){
					return '<a href="#'+nr+'"></a>';
				}
			}
    });


    /*  hide-show mobile menu  */
    $("#menu_icon").click(function(){
        $("#nav_menu").toggleClass("show_menu");
        return false;
    });

});




 /* Header stopper */


/* $(document).ready(function(){

    var BillHeight = $('.about').height() / 2;

    $(window).scroll(function(){
        if ($(window).scrollTop() < BillHeight) {
            $( "header.fixed_nav" ).stop().animate({
                marginTop : '-81px'
            }, 200);

            console.log($(window).scrollTop());

        } else {
            $( "header.fixed_nav" ).stop().animate({
                marginTop : 0
            }, 200);
        }

    });

});

*/



/* for scrolling up the page */

window.onload = function() { // after web-page have loaded

    var scrollUp = document.getElementById('scrollup'); // find element by id

    scrollUp.onmouseover = function() { // adding an opacity
        scrollUp.style.opacity=0.9;
        scrollUp.style.filter  = 'alpha(opacity=90)';
    };

    scrollUp.onmouseout = function() { // removing an opacity with hover
        scrollUp.style.opacity = 0.4;
        scrollUp.style.filter  = 'alpha(opacity=40)';
    };

    scrollUp.onclick = function() { // parcing the scroll on mouse click
        window.scrollTo(0,0);
    };

// show button
    window.onscroll = function () { // when scrolling - display and hide block
        if ( window.pageYOffset > 0 ) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    };
};



/* for smoothing scroll to menu anchors */

$(document).ready(function() {
    $('a[href*="#"]').click(function () {  // for all tag a with href
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 1200 ); // time of smoothing scroll
        return false;
    });
});



/* subscription */
$(document).ready(function(){

    //Code to center the subscription pup-up box
    $box = $('#box');
    $box.css({
        'left' : '50%',
        'top' : '50%',
        'margin-left' : -$box.width()/2 + 'px',
        'margin-top' : -$box.height()/2 + 'px'
    });


    //Subscription pup-up
    $('.start_btn').click(function(){
        $('#lightbox').width($(window).width()).height($(window).height()).fadeIn(200);
        $('#box').fadeIn(200);

        return false;
    });

    $('#lightbox, .close').click(function(){
        $('#lightbox').width(0).height(0).fadeOut(200);
        $('#box').fadeOut(200);

        return false;
    });


});