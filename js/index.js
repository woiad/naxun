$(document).ready(function() {
    setTimeout(function () {
        $(".loading").fadeOut()
    }, 100)
    // $(window).scroll(function(e){
    //     console.log(e.currentTarget.scrollY)
    // })
    function newsAutoRoll () {
        $(".news-info .news-container ul li").eq(0).animate({marginTop: "-50px"}, "1000", function () {
            $(this).css({"margin-top": 0})
            $(this).appendTo($(".news-info .news-container ul"))
        })
    }

    var news_inter = setInterval(newsAutoRoll, 5000)
    $(".news-info .news-container ul li").bind('mouseover', function () {
        clearInterval(news_inter)
    })

    $(".news-info .news-container ul li").bind('mouseout', function () {
        news_inter = setInterval(newsAutoRoll, 5000)
    })
    $(".deplay-navigation").bind('click', function () {
       if($(this).hasClass('expand')) {
           $(this).removeClass('expand')
           $(".nav-wrapper").removeClass('slide-left')
       } else{
           $(this).addClass('expand')
            $(".nav-wrapper").addClass('slide-left')
       }
    })

    $(".soul-case .case-tab li").bind("click", function () {
        var activeName = $(this)["0"].dataset.active
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
        $(".soul-case .case-tab-content > div").removeClass("showTab")
        $(".soul-case .case-tab-content ." + activeName).addClass("showTab")
    })

    /* product carousel */
    var proItem = $(".product-item").outerWidth(true)
    var len = $(".product-item").length
    var slideTimes = 0,
        showItem = 3;
    $(".product-list").css({"width": proItem *len  + 'px'})
    $(".prev").click(function () {
        console.log(slideTimes)
        if (slideTimes < (len - showItem)) {
            $(".product-list").animate({"margin-left": -proItem * (slideTimes + 1) + 'px'})
            slideTimes ++
        }
    })
    $(".next").click(function () {
        console.log(slideTimes)
        if (slideTimes > 0) {
            $(".product-list").animate({"margin-left": -proItem * (slideTimes -1)  + 'px'})
            slideTimes --
        }
    })

})
