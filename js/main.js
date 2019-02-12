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
            // 메인 헤더 애니메이션
            // $("#main_header").animate({marginTop:"90px"},1000)
            //베가스 bg 플러그인
            $("#content .main_visual").vegas({
                slides: [
                    { src: "images/main-visual1.jpg",
                    video: { src:"images/main_visual.mp4", loop: true, mute: true,} },
                    // { src: "images/main-visual2.jpg" },
                    // { src: "images/main-visual3.jpg" },
                    // { src: "images/mains-visual4.jpg" }
                ],
                preloadVideo:true,
            });
            $(".depth2").hide();
            $(".depth1 li").hover(function(){
                $(this).find(".depth2").stop().slideDown();
            },
            function(){
                $(this).find(".depth2").stop().slideUp();
            }
            )
            // $(".main_visual h2").animate({
            //     fontSize: "60px"
            // },2000);
           
            $(".main_visual a").animate({
                opacity: "1",
                bottom: "33%"
            },2000,"linear",function(){
                $(".main_visual h2").animate({
                    opacity: "1",
                    paddingLeft: "40px"
                },2000,"linear",function(){
                    $(".main_visual h3").animate({
                        opacity: "1",
                        paddingRight: "40px"
                    },2000,"linear",function(){
                        $(".main_visual h2 span, .main_visual h3 span").animate({
                            opacity:"0"
                        },1000,"linear",function(){
                            $(".main_visual h2 span").css({
                                opacity:"1",
                                color:"#E23626"
                            },1000),
                            $(".main_visual h3 span").css({
                                opacity: "1",
                                color: "#FAC90E"
                            },1000)
                        })

                    })
                })
                
            });
          
            
        })
        // var swiper = new Swiper(".swiper-container",{
        //     direction: 'vertical',
        //     loop: true,
        //     slidesPerView: 2,
        // });  // initialize swiper with options