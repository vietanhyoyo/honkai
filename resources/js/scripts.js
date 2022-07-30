$(document).ready(
    function(){
        //Hiệu ứng lăng xuống hiển thị ra thanh ngang
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset: '500px'
            }
        )
        //Hiệu ứng cuộn khi nhấn vào thẻ <a>
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            event.preventDefault();
        });
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);

                if($('.mobile-nav-icon').hasClass('fa-bars')){
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars')
                }else{
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-times')
                }
            }
        )
    }
)