$(function(){
    //mobile- 헤더에 호버가 될경우 로고의 이미지의 경로를 바꿔준다 
    const header = $('.headerWrap');
    const headerLogo =  $('.only-mobile')
    const headerLogoSrc = "./images/logo.png";
    const headerLogoSrcReset = "./images/mobile_logo.png";
    //아이콘 
    const icon = $('.icon-wrapper i')
    function headerLogoChange(){
        $(headerLogo).attr("src",headerLogoSrc)
        //아이콘의 색 바꿈
        $(icon).css('color','#000');

    }
    function headerLogoChangeReset(){
        $(headerLogo).attr("src",headerLogoSrcReset)
        $(icon).css('color','#fff');
    }
    $(header).hover(function(){
        headerLogoChange();},
        function(){
            headerLogoChangeReset();
    })
    const sideNav = $('.side-nav-container')
    // 햄버거 버튼을 누르면 sidbar 보이게 
    $('.ham-menu').click(function(){
        sideNav.addClass('on')
    })
    $('.close-icon').click(function(){
        sideNav.removeClass('on')
    })
    // 메뉴 탭 버튼 
    var gnb_li = $('#side-nav > li');
    gnb_li.on('click', function(){
        var isOn = $(this).children('a').hasClass('on');
        if(isOn){
            //다시 누르면 닫힘
            $(this).children('a').removeClass('on');
            $(this).children('.sub').stop().slideUp();
        }else{
            //이미 열린탭을 닫음 
            gnb_li.children('a').removeClass('on');
            gnb_li.children('.sub').stop().slideUp();
            //누른 자식들에게 창을 열기 
            $(this).children('a').addClass('on');
            $(this).children('.sub').stop().slideDown();
        }
    })
    
    // 무한 슬라이드
    var wid = $('.con3 .sliderWrapper div').outerWidth();
    var num = $('.con3  .sliderWrapper div').length;
    const con3Box = $('.con3 .sliderWrapper');
    var totalWid = wid * num;
    con3Box.width(totalWid);

    var mleft = 0; 
    var moveTimer = setInterval(move,20);

    $('.sliderWrapper').on('mouseenter',function(){
        clearInterval(moveTimer);
    })
    $('.sliderWrapper').on('mouseleave',function(){
        moveTimer = setInterval(move,20);
    })

    function move(){
        mleft -= 2;
        if(mleft < -wid){
            $('.con3 .sliderWrapper > div').first().appendTo(con3Box);
            mleft = 0;
        }
        con3Box.css({"left":mleft});
    }

    // 베스트 셀러 
    // 버튼 누르면 클래스 추가 
    var gender = $('.con1 .con1-btnWrap a');
    var product = $('.con1-panel > div');
    var menTxtBox = $('.con1-panel .m-Wrap .txt-box');
    var womenTxtBox = $('.con1-panel .w-Wrap .txt-box');

    gender.click(function(){
        $(this).addClass('on');
        gender.not(this).removeClass('on');
    })
    console.log(product)
    // 누른 상품에 따른 프로덕트 변경 
    gender.click(function() {
        if($(this).is(gender.eq(0))){
            product.eq(1).removeClass('on');
            womenTxtBox.css({"opacity":"1"})
            menTxtBox.css({"opacity":"0"})
        }
        if ($(this).is(gender.eq(1))) {
            product.eq(1).addClass('on');
            womenTxtBox.css({"opacity":"0"})
            menTxtBox.css({"opacity":"1"})
        }
    });

    // con2,4요소에서 스크롤하면 글씨 움직이기 
    const con2TxtBox = $('.con2 .right-txt');
    const con4TxtBox = $('.con4 .left-txt');
        if($(window).width() < 768) {
        // window 크기가 768보다 작을때
        } else {
        // window 크기가 768보다 클때
        }
    $(window).scroll(function(){
        const scrollPosition = $(window).scrollTop();
        if($(window).width()>768){
            if(scrollPosition >= 1000.5 && scrollPosition <= 1823){
                con2TxtBox.css({"animation":"textAnimation 2s"});
                console.log('실행중')
            }else{
                con2TxtBox.css({"animation":"textAnimationReset 2s"});
            }
            if(scrollPosition >= 2000 && scrollPosition <= 3500){
                con4TxtBox.css({"animation":"textAnimation2 2s"});
            }
            else{
                con4TxtBox.css({"animation":"textAnimationReset2 3s"});
            }
        }
        
    })
})