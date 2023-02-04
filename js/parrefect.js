$(window).on('load', function() {
    $('.hello , .burger-menu , .hero-bg , .tag , .hero-text , .p-left , .p-right , .hirework').each(function (i)
    {
        setTimeout(function()
        { 
            $('.hello , .burger-menu , .hero-bg , .tag , .hero-text , .p-left , .p-right , .hirework').eq(i).addClass('activet');
        }, 500 * (i+1));
    })
});

$(window).scroll(function (){
    var wScroll = $(this).scrollTop();

    $('.desk .p-left').css({
        'opacity' : '1',
    
            'transform' : 'translate(0, '+ wScroll +'%)'
        });
        $('.desk .p-right').css({
            'opacity' : '1',
            'transform' : 'translate(0, '+ wScroll +'%)'
        });
    
        if( wScroll > 150){
            $('.desk .p-left').css({
                'opacity' : '0',
                'transform' : 'translate(105px, '+ wScroll +'%)'
            });
            $('.desk .p-right').css({
                'opacity' : '0',
                'transform' : 'translate(-105px, '+ wScroll +'%)'
            });
            $( "nav ul" ).even().removeClass( "activett" );
            $( "nav .burger-menu" ).even().removeClass( "active" );
            // console.log('oke')
        }
});