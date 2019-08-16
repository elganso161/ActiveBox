$(function() {

    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollpos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
     checkSkroll(scrollpos, introH);
    
    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollpos = $(this).scrollTop();
        
        
        checkSkroll(scrollpos, introH);
        
    });
    
    function checkSkroll(scrollpos, introH) {
        if( scrollpos > introH ){
            header.addClass("fixed");
        } else{
             header.removeClass("fixed");
        }
        
    }
    
     
   /* Smooth Scroll */
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementoffset = $(elementId).offset().top;
        
        nav.removeClass("show");
       
        console.log(elementoffset);
        
        $("html, body").animate({
            scrollTop: elementoffset -70
        }, 700);
    });
    
    
    
    /* navToggle */
    
    
    navToggle.on("click", function(event){
        event.preventDefault();
        
        nav.toggleClass("show");
        
        
    });
    
    /* Reviews:https: https://kenwheeler.github.io/slick/ */
    
    let slider = $("#reviewsSlider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    
    
});









