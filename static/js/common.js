$(function(){
    $(".pro-type dl").mouseover(function(){
        $(this).children("dd").show();
    }).mouseout(function(){
        $(this).children("dd").hide();
    })
   
    $(".pro-type dl dd").click(function(){
        $(".pro-type dl dt").text($(this).text());
    })

   /* $(".process-nav ul li").each(function(index){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(".process-img img").hide().eq(index).show();
        })
    })*/

	$(".nav ul li").eq(1).mouseenter(function(){
		$(".nav-con").slideUp();
		$(".nav-con").eq(0).slideDown();
	})
	$(".nav-con").eq(0).mouseleave(function(){
		$(".nav-con").eq(0).slideUp();
	});

	$(".nav ul li").eq(4).mouseenter(function(){
		$(".nav-con").slideUp();
		$(".nav-con").eq(2).slideDown();
	})
	$(".nav-con").eq(2).mouseleave(function(){
		$(".nav-con").eq(2).slideUp();
	});
	$(".go-top").click(function(){
		$("body,html").animate({"scrollTop":"0px"},500);
		})
	
})