
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $(function(){
    if (window.matchMedia('(max-width: 1224px) and (min-width:320px)').matches) {
      $('#header-nav a[href*="#"]').on('click', function(event) {
        $('.js-hamburger').trigger('click');
    });
  }})


  $(function() {
    var height = $('.about').offset().top;
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > height ) {
        $(".header").addClass('fixed');
      } else {
        $(".header").removeClass('fixed');
      }
    });
  });

      // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

      $(document).on('click', 'a[href*="#"]', function () {
        let time = 200;
        let header = $('header').innerHeight();
        let target = $(this.hash);
        if (!target.length) return;
        let targetY = target.offset().top - header;
        $('html,body').animate({ scrollTop: targetY }, time, 'swing');
        return false;
      });

  jQuery(function ($){
    $('.js-hamburger').on('click' , function(){
        if($(this).hasClass('open')){
            //ドロワーメニューが開いているときの処理
            $('.js-drawer').fadeOut();
            $(this).removeClass('open');
            //ドロワーメニューが開いているときはスクロールできない→base.scssに記述
            $('html').removeClass('fixed');
        } else {
             //ドロワーメニューが閉じているの処理
             $('.js-drawer').fadeIn();
             $(this).addClass('open');
             //ドロワーメニューが閉じているときはスクロールできる
             $('html').addClass('fixed');
        }
    });
});

  $(function(){
    $(".switch1").on("click", function() {
    $(this).next().slideToggle();
    $(".locate1").toggleClass("add");
    });
    });
    
    $(function(){
    $(".switch2").on("click", function() {
    $(this).next().slideToggle();
    $(".locate2").toggleClass("add");
    });
    });
    
    $(function(){
      $(".switch3").on("click", function() {
      $(this).next().slideToggle();
      $(".locate3").toggleClass("add");
      });
      });
    
      $(function(){
        $(".switch4").on("click", function() {
        $(this).next().slideToggle();
        $(".locate4").toggleClass("add");
        });
        });


  $(".success-cards").slick({
    slidesToShow: 1, // 表示するスライド枚数
    centerMode: true,
    centerPadding: '234px',
    dots: true,
    prevArrow: '<img src="./images/common/slider-left.svg" alt="左矢印" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./images/common/slider-right.svg" alt="右矢印" class="slide-arrow next-arrow">',
    variableWidth: true,
    responsive: [
      {
      breakpoint: 768,
      settings: {
        slidesToShow:1,
        variableWidth: true,
        centerPadding: '0',
      },
    },
  ]
  });


});
