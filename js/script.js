$('.1st').owlCarousel({
    
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
     nav:true,
     dots:false,
    responsive:{
        326:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

$('.2nd').owlCarousel({
    
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    dots:true,
    nav:false,
    responsive:{
        326:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})