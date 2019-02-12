// main.js
// 자작 페이드 비쥬얼 배경

// var img_num = 1; // 이미지번호
// var duration= 2000;

// setInterval(function(){
    //     //이미지 번호 증가
    //     img_num++;
    //     if(img_num>4) {img_num=1;}
    //     $("#content .main_visual")
    //     .fadeTo(500,0, function(){
        //         $(this).css({backgroundImage:"url(../images/main-visual"+img_num+".jpg)"})
        //     })
        //     .fadeTo(500,1)
        
        // },duration)
        
        
        
        $(function(){
            $(".depth2").hide();
            $(".depth1 li").hover(function(){
                $(this).find(".depth2").stop().slideDown();
            },
            function(){
                $(this).find(".depth2").stop().slideUp();
            }
            )

            $(".gallery_box").vegas({
                slides: [
                    { src: "images/헬스1.png"},
                    { src: "images/헬스2.png"},
                    { src: "images/헬스3.png"},
                    { src: "images/헬스4.png"},
                    { src: "images/헬스5.png"},
                    
                ],
            });
            $('#previous').on('click', function () {
                $(".gallery_box").vegas('options', 'transition', 'slideRight2').vegas('previous');
            });
            $('#next').on('click', function () {
                $(".gallery_box").vegas('options', 'transition', 'slideLeft2').vegas('next');
            });
        })
        
        

        // var swiper = new Swiper(".swiper-container",{
        //     direction: 'vertical',
        //     loop: true,
        //     slidesPerView: 2,
        // });  // initialize swiper with options