/**
 * 
 * @authors ming (you@example.org)
 * @date    2018-01-10 14:50:36
 * @version $Id$
 */


 $(function(){
		//right_sidebar 里面的微信和qq客服显示与隐藏

		$(".right_sidebar li").hover(function(){
			var _class = $(this).children("div").attr("class");
			
			switch (_class) {
				case "qq_people":

					$(".qq_people").show();
					break;
				 		
				case "code":
				 	$(".code").show();
				  	break;

				default:
			}
		},function(){
			$(this).children("div").hide();
		});

		//在线留言 表单验证

		

})



