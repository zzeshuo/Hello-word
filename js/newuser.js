$(function () {
		//菜单效果及记录历史点击
		$(".hst_menu ul li ul").first().show();
		$(".hst_menu ul li a").first().addClass("bei");
		$(".hst_menu ul li ul a").first().addClass("bei");
        $(".hst_menu ul li").click(function () {
			$.cookie('_menu_user_p', $(this).index(), { path: '/' });
            $(".hst_menu ul li a").removeClass("bei");
            $(this).find("a").first().addClass("bei");
            $(".hst_menu ul li ul").hide();
            $(this).find("ul").show();
        });
		$(".hst_menu ul li ul li").click(function () {
			$.cookie('_menu_user_c',$(this).index(), { path: '/' });
        });
        $(".hst_menu ul li ul a").click(function () {
			$.cookie('_menu_user_c',$(this), { path: '/' });
            $(".hst_menu ul li ul a").removeClass("bei");
            $(this).addClass("bei");
        });
		/*var _p=$.cookie('_menu_user_p');
		var _c=$.cookie('_menu_user_c');
		if(_p!=null)
		{
			$("a[href='#']").eq(_p).addClass("bei");
			$(".hst_menu ul li ul").eq(_p).show();
		}
		if(_c!=null)
		{
			$(".hst_menu ul li ul a").removeClass("bei");
			$(".hst_menu ul li ul").eq(_p).find("a").eq(_c).addClass("bei");
		}*/
		//var url = document.URL;							
//        url = url.replace("#", "").replace("http://www.enkj.com", "");		
//		if($("a[href='"+url+"']").length>0)
//		{													
//			$(".hst_menu ul li ul").hide();	
//			$("a[href='#']").removeClass("bei");
//			$(".hst_menu ul li ul a").removeClass("bei");
//			$("a[href='"+url+"']").addClass("bei");						
//       		$("a[href='"+url+"']").parent().parent().show();
//		}
		//用户中心首页
		//$(".loginmain").hide();
//		var _muip=$.cookie('_menu_user_index_p');
//		if(_muip!=null)
//		{
//			$(".nav_all ul li").removeClass("bei");
//			$(".nav_all ul li").eq(_muip).addClass("bei");
//			$(".loginmain").eq(_muip).show();
//		}
//		else
//		{
//        	$(".loginmain").first().show();
//		}
//        $(".nav_all ul li").click(function () {
//			$.cookie('_menu_user_index_p', $(this).index(), { path: '/' });
//            $(".loginmain").hide();
//            $(".nav_all ul li").removeClass("bei");
//            $(this).addClass("bei");
//            $(".loginmain").eq($(this).index()).show();
//        });	
	
								
    });