// JavaScript Document
//if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
   
	/*$('[placeholder]').each(function(){
	  var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) { 
            input.addClass('placeholder');
            input.val(input.attr('placeholder')); 
        }	
	})*/
	//var domain="http://"+window.location.host; 
	//var addProjectUrl="superbox[ajax]["+domain+"/Project/add.html]";
	//var addProjectUrl="/project/add.html";
	function getRequest()  
    {
	 var rel= window.location.href;
	 var index=rel.indexOf("?");
	 
	 var url = rel.substring(index); //获取url中"?"符后的字串
	 var theRequest = new Object();
	 if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
		   theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
	 }
	 return theRequest;
    }
	function getCookie(name){ 
         var strCookie=document.cookie; 
         var arrCookie=strCookie.split("; "); 
         for(var i=0;i<arrCookie.length;i++){ 
               var arr=arrCookie[i].split("="); 
               if(arr[0]==name)return arr[1]; 
         } 
} 
	if(typeof(globalPrjId)!="undefined")        
	{
	  var inviteUrl="/invite/add.html?prj_id="+globalPrjId;
	}
	//$(".addProject").attr("rel",addProjectUrl);
	$(".outerAllUser .add").attr("rel",inviteUrl);  
    $('[place]').live('keydown',function() {
        var $input = $(this);
		
        if ($input.val() == $input.attr('place')) { 
            $input.val('');
            $input.removeClass('place');
        }
    }).live('blur',function() {
        var $input = $(this);
        if ($input.val() == '' || $input.val() == $input.attr('place')) { 
            $input.addClass('place');
            $input.val($input.attr('place'));
        }
    })
	$('#usr_email').live('click',function(){
	  if($(this).val()==$(this).attr("place"))
	  {
	    $(this).val('');	
	  }
	})
	$('#usr_password').live('keydown',function(){
  $(this).siblings('.password_tip').css('top',100).hide();	
}).live('click',function(){$(this).siblings('.password_tip').css('top',100).hide();	
}).live('blur',function(){
  if($(this).val()==$(this).siblings('.password_tip').val() || $.trim($(this).val())==''){
	 $(this).siblings('.password_tip').css('top',0).show();	 
  }
  	
})
$('.password_tip').live('keydown',function(){
  if($(this).is(':visible')){
	$(this).css('top',100).hide();	  
  }	
  $(this).siblings('#usr_password').focus();
})
$('.password_tip').live('click',function(){
  if($(this).is(':visible')){
	$(this).css('top',100).hide();	  
  }	
  $(this).siblings('#usr_password').focus();
})
//};
/*function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
/*function setHeight(){
  var leftHeight=0;
  var mainHeight=0;
  var rightHeight=0;
  if($('#left').length>0){
  leftHeight=parseInt($('#left').height());
  }
  if($('#main').length>0){
  mainHeight=parseInt($('#main').height());
  }
  if($('#main_project').length>0){
  mainHeight=parseInt($('#main_project').height());
  }
  if($('#right').length>0){
  rightHeight=parseInt($('#right').height());
  }
  var height=mainHeight>rightHeight?mainHeight:rightHeight;
  var maxHeight=leftHeight>height?leftHeight:height;
  $('#left,#main,#right').css('height',maxHeight+200);
}*/
$('.register_main input:text').focus(function(){
  var tip_text=$(this).attr('tip_text');
  if($(this).attr('value')==tip_text){
	 $(this).attr('value','');  
  }	
}).blur(function(){
  var tip_text=$(this).attr('tip_text');
  if($(this).attr('value')==''){
	 $(this).attr('value',tip_text);  
  }		
})
if($('#usr_email').length!=0){
  $('#usr_email').focus();	
}
$('.main_header a,.create_disscussion,.add_todolist,.add_todo,.edit_todotype,.a_edit,.set_complete,.usr_name,#main .datepicker,.cancel_complete').click(function(){
  if(window.archive==true){
	return false;  
  }	
})
/*$('a').focus(function(){
  $(this).blur();	
})*/
/*$('#button').hover(function(){
  $(this).css('paddingRight',5);	
},function(){
  $(this).css('paddingRight',0);		
})*/
$('#button').live('click',function(){
  if ($('#right').width()==0){
	  $('#right').css('border-left','solid 1px #e1e3e6');
	$('#right').animate({width:'250px'},250); 
	$(this).animate({right:'251px'},250);
	$('#right .section .header p').animate({marginLeft:'-8px'},250);
  }else if($('#right').width()==250){
   $('#right').css('border-left','none');
   $('#right').animate({width:0},250);
   $(this).animate({right:0},250);
   $('#right .section .header p').animate({marginLeft:0},250);
  }
})
$('.comment_form .article_01 textarea').focus(function(){
  if($(this).text()=='内容：'){
   	$(this).text('');   
  }	
})
$('.comment_form .article_01 textarea').blur(function(){
  if($.trim($(this).text())==''){
	$(this).text('内容：');
  }
})
$('.comment_form .article_03 input').focus(function(){
  if($(this).val()=='请输入成员邮箱地址'){
   	$(this).val('');   
  }		
})
$('.comment_form .article_03 input').blur(function(){
  if($.trim($(this).val())==''){
	$(this).val('请输入成员邮箱地址');
  }
})
/*$('.pop_div .section_01 a').live('click',function(){
  $(this).parents('.pop_div').fadeOut(400);
  $(this).parents('.pop_div').find('.sub_invite').fadeOut(400);
  $('.mask').fadeOut(400);
  return false;
})*/
$('.add_project').live('click',function(){
  $('.pop_project').show();
  $('.pop_project').load($(this).attr('href'));
  $('.mask').show();
  $('.pop_project').css('left',(parseInt($('body').get(0).clientWidth)-parseInt($('.pop_div').css('width')))/2);
 $('.mask').css('width',parseInt($('body').get(0).clientWidth));
 $('.mask').css('height',parseInt($('body').get(0).clientHeight));	
  return false;	
})
/*$('.create_disscussion').live('click',function(){
  $('.pop_discuss').show();
  $('.pop_discuss').load($(this).attr('href'));
  $('.mask').show();
  $('.pop_discuss').css('left',(parseInt($('body').get(0).clientWidth)-parseInt($('.pop_discuss').get(0).clientWidth))/2);
 $('.mask').css('width',parseInt($('body').get(0).clientWidth));
 $('.mask').css('height',parseInt($('body').get(0).clientHeight));	
  return false;		
})*/
$('.invite_friends').live('click',function(){
  $('.pop_invite').show();
  $('.mask').show();
  $('.pop_invite').load($(this).attr('href'));
  $('.pop_invite').css('left',(parseInt($('body').get(0).clientWidth)-parseInt($('.pop_invite').get(0).clientWidth))/2);
 $('.mask').css('width',parseInt($('body').get(0).clientWidth));
 $('.mask').css('height',parseInt($('body').get(0).clientHeight));	
  return false;	
})

$('.comment_form .article_02 p.p_01 a.select_all').live('click',function(){
  $(this).parents('.comment_form').find('p.p_02 span').each(function(){
	  $(this).find('input').attr('checked','checked');
	  
  })	
  return false;	
})
$('.comment_form .article_02 p.p_01 a.select_none').live('click',function(){
  $(this).parents('.comment_form').find('p.p_02 span').each(function(){
	  $(this).find('input').attr('checked',false);
	  
  })	
  return false;	
})
$('#main .section_02 .article ul.ul_01 li').live('mouseenter',function(){
  if($(this).find('.usr_name').hasClass('none')){	
  $(this).find('.usr_name').css('display','block'); 
  }
  if($(this).find('.datepicker').hasClass('hidden')){	
  $(this).find('.datepicker').removeClass("hidden"); 
  }
  $(this).find('span.edit').show();	
}).live('mouseleave',function(){
  $(this).find('span.edit').hide();	
  if($(this).find('.usr_name').hasClass('hidden')){	
  $(this).find('.usr_name').css('display','none'); 
  }
  if($(this).find('.datepicker').hasClass('show')){	
  $(this).find('.datepicker').css('display','block'); 
  }
  if(!$(this).find('.datepicker').hasClass('show')){	
  $(this).find('.datepicker').addClass("hidden"); 
  }
})
var email_check=false;
var password_check=false;

function checkEmail(){
  var $input_mail=$('#usr_email');	
  var mail=$.trim($input_mail.val()),$email_tip=$input_mail.parent().find('.tip');
  if(mail==""){
	$email_tip.text('邮箱不能为空');
	email_check=false;
	return false;
  }	
   else if(mail.search(/^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/)==-1)
   {
      $email_tip.css('visibility','visible');
	  $email_tip.text('邮箱格式不正确');
	  email_check=false;
	  return false;
   }else{
	$email_tip.css('visibility','visible');
	 $email_tip.text('填写正确');
	 email_check=true;
     return true;
  }	
}
/*$('#usr_email').blur(function(){
	
  checkEmail();
})*/
function checkPassword(){
  var $input_password =	$('#usr_password');
  var password=$.trim($input_password.val()),$password_tip=$input_password.parent().find('.tip');	
  var reg=/^[A-Za-z0-9_]+$/g;

  if(password.length < 6 || password.length > 20) {
	$password_tip.text('密码长度范围 6~20！请重新填写');
	  password_check=false;
	  return false;
 }
 else{
	 $password_tip.text('密码格式正确');
	 password_check=true;
     return true;
  }	
}
/*$('#usr_password').blur(function(){ 
	
  checkPassword();
})*/

$('.login_form').submit(function(){
  //var $form=$(this).parents('form');	
  var $form=$(this)
  var url=$form.attr('action');
 /* if(!checkEmail()){
	return false;  
  }
  if(!checkPassword()){ 
	return false;  
  }	*/

  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:$form.serialize(),
	success:function(data){
	  	if(data.status!=200){
		  	$form.append('<p class="password_error" style="text-align:center;margin-top:20px;font-size:14px;color:#F18255;">'+data.msg+'</p>');
			$('.password_error').fadeOut(5000,function(){$('.password_error').remove();});
	    }else{
		  if(typeof(getCookie("mail"))=="undefined" && typeof(getCookie("password"))=="undefined")
		  {
		    var date=new Date(); 
            var expireDays=14; 
            date.setTime(date.getTime()+expireDays*24*3600*1000); 
		    document.cookie="email="+$form.find("#usr_email").val()+";path=/;expires="+date.toGMTString();	
		    document.cookie="password="+$form.find("#usr_password").val()+";path=/;expires="+date.toGMTString();	
		  }
		  if(typeof(window.key)!="undefined")
		  {
			window.location="/agree?key="+window.key;  
		  }
		  else
		  {	
		    window.location="/project/list.html"; 
		  }
		}
	} 
  })
  return false;
})
$('.reg_form').submit(function(){
  //var $form=$(this).parents('form');	
  var $form=$(this)
  var url=$form.attr('action');
 /* if(!checkEmail()){
	return false;  
  }
  if(!checkPassword()){ 
	return false;  
  }	*/

  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:$form.serialize(),
	success:function(data){
	  	if(data.status!=200){
		  	$form.append('<p class="password_error" style="text-align:center;margin-top:20px;font-size:14px;color:#F18255;">'+data.msg+'</p>');
			$('.password_error').fadeOut(5000,function(){$('.password_error').remove();});
	    }else{
		 if(typeof(window.key)!="undefined")
		  {
			window.location="/agree?key="+window.key;  
		  }
		  else
		  {	
		    window.location="/project/list.html";
		  }
		}
	} 
  })
  return false;
})
$('#edit_password_form').submit(function(){
  var $form=$(this);
  var url=$form.attr('action');
  var usr_password=$('#usr_password').val();
 
  if(!checkPassword()){
	return false;  
  }	

  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:$form.serialize(),
	success:function(data){
	  	
		  $form.find('.success').show();
	} 
  })
  return false;
})
$('.register_form').submit(function(){
  //var $form=$(this).parents('form');	
  var $form=$(this)
  var url=$form.attr('action');
  var usr_email=$('#usr_email').val();
  var usr_password=$('#usr_password').val();
  if(usr_email.search(/^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/)==-1){
    $form.append('<p class="register_error" style="text-align:center;margin-top:20px;font-size:14px;color:#F18255;">邮箱格式错误</p>');
	$('.register_error').fadeOut(5000,function(){$('.register_error').remove();});
	return false;
  }
  if(usr_password.length < 6 || usr_password.length > 20) {
	$form.append('<p class="register_error" style="text-align:center;margin-top:20px;font-size:14px;color:#F18255;">密码长度范围 6~20！请重新填写</p>');
	$('.register_error').fadeOut(5000,function(){$('.register_error').remove();});
	return false;
 }
 /* if(!checkEmail()){
	return false;  
  }
  if(!checkPassword()){
	return false;  
  }	*/

  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:$form.serialize(),
	success:function(data){
	  	if(data.status==false){
		  	$form.append('<p class="register_error" style="text-align:center;margin-top:20px;font-size:14px;color:#F18255;">'+data.info+'</p>');
			$('.register_error').fadeOut(5000,function(){$('.register_error').remove();});
			
	    }
		else{
		  	window.location=data.redirectUrl;
		}
	} 
  })
  return false;
})
$('#find_password_form').submit(function(){
  var $form=$(this);
  var url=$form.attr('action');
  var usr_email=$('#usr_email').val();
  if(!checkEmail()){
	return false;  
  }
 
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:$form.serialize(),
	success:function(data){
	  	
		  $form.append("<p style='color:#E94D20;'>邮件已发送到你邮箱，请注意查收</p>");
	} 
  })
  return false;
})
$('.recoverpw_form').submit(function(){
	
  var $form=$(this);
  var url=$form.attr('action');
  var password=$(this).find('.usr_password').val();
  if(password==$(this).find('.usr_password').attr('place') || password.length < 6 || password.length > 20) {
	$form.append("<div style='color:#E94D20;'>密码长度范围 6~20！请重新填写</div>");
	return false;
  }
 
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:$form.serialize(),
	success:function(data){
	  	
		  $form.append("<p style='color:#E94D20;'>密码修改成功,<a style='color:#E94D20;' href='/User/login/'>点击登录</a></p>");
	} 
  })
  return false;
})

/*var totalWidth=220;
var completeWidth=0;
$('#main_project .section .article').each(function(){
var $span_01=$(this).find('.p_04 .span_01');
var completeNum=parseInt($(this).find('.p_04 .span_02 .em_01').text());
var totalNum=parseInt($(this).find('.p_04 .span_02 .em_02').text());
var rate=completeNum/totalNum;
completeWidth=totalWidth*rate;
if(rate<0.5){
 $span_01.css('background','#86cac7');	
}else{
 $span_01.css('background','#86cac7');		
}
$span_01.animate({width:completeWidth},500);
$(this).find('.p_05 a').live('click',function(){
  $.ajax({
	type:'GET', 
	url:$(this).attr('u')
  }) 	
  if($(this).hasClass('gray')){
  $(this).addClass('yellow');	
  $(this).removeClass('gray');	  
}else if($(this).hasClass('yellow')){
  $(this).addClass('gray');	
  $(this).removeClass('yellow');	  
}	
return false;  
})
$(this).find('.p_03 li.all').hover(function(){
	$(this).find('div').show();
},function(){
  $(this).find('div').hide();	
})
})*/

$('.add_todolist').live('click',function(){
  $add_todolist_form=$(this).parents('.header').siblings('.add_todolist_form');
  if($add_todolist_form.hasClass('hide')){	
   $add_todolist_form.removeClass('hide').addClass('show');
   $add_todolist_form.find('.p_01 input').val("创建一个待办标题").focus();
  }else{
	 $add_todolist_form.removeClass('show').addClass('hide');
  }
  
  return false;	
})
$('.add_todo').live('click',function(){
  $add_todo_form=$(this).parents('p').siblings('.add_todo_form');
  if($add_todo_form.css('display')=='none'){	
   $add_todo_form.show();
   $(this).parents('.add').hide();
  $add_todo_form.find('.input_02').focus();
  }/*else{
	 $add_todo_form.hide(); 
  }*/
  
  return false;	
})
$body = window.opera ? document.compatMode == "CSS1Compat" ? $("html") : $("body") : $("html,body");
$('.a_todolist').live('click',function(){
	$body.animate({
		scrollTop: $(".todolist").offset().top
	},
		1000);
  
  return false;		
})
$('.a_discussion').live('click',function(){
	$body.animate({
		scrollTop: $(".discussion").offset().top
	},
		1000)
  return false;		
})
$('.a_pic').live('click',function(){
	$body.animate({
		scrollTop: $(".pic").offset().top
	},
		1000)
  return false;		
})
$('.a_add_todolist').live('click',function(){
	if($('.todolist').is(':hidden')){
	  $('.todolist').show();	
    }
	if($(this).find('.first_tip').is(':visible')){
	  $('.first_tip').hide();	
    }
	$body.animate({
		scrollTop: $(".todolist").offset().top
	},
		1000);
  $('.add_todolist').click();				
  return false;		
})
//点击讨论标题后的弹窗
function popAddDiscuss(){
  $('.pop_discuss').fadeIn(400);	
  $('.mask').fadeIn(400);
  var scrollTop=$(document).scrollTop();
  var popWidth=$('.pop_discuss').width();
  var windowWidth=$(window).width();

    $('.pop_discuss').css('top',50+scrollTop);
  $('.pop_discuss').css('left',(windowWidth-popWidth)/2);	
  
}
//点击讨论标题
$('.a_add_discussion').live('click',function(){
  
  $('.pop_discuss').load($(this).attr('href'),'',popAddDiscuss());//加载完内容后弹窗
  return false;		
})
$('.a_add_pic').live('click',function(){
	$(".first_tip").hide();
	if($('.pic').is(':hidden')){
	  
	  $('.pic').show();	
    }
	$body.animate({
		scrollTop: $(".pic").offset().top
	},
		1000);
		
  return false;		
})
$('.project_div .section_02 .email input').focus(function(){
  $(this).prev().css('backgroundPosition','5px -278px');
})
$('.project_div .section_02 .email input').blur(function(){
  if($(this).val()==""){	
   $(this).prev().css('backgroundPosition','5px -299px');
  }
})
$('.project_div .invite .span_invite').live('click',function(){
  if($(this).siblings('.sub_invite').is(':visible')){
	 $(this).siblings('.sub_invite').hide();	  
   }else{	
     $(this).siblings('.sub_invite').show();	
   }
})

$('.sub_invite .close a').live('click',function(){
  $(this).parents('.sub_invite').hide();
  return false;	
})
$('#main_project .section .tip .img1').hover(function(){
  var img_left=parseInt($(this).css('left'));
  var img_top=parseInt($(this).css('top'));
  $(this).css({'left':(img_left+1)+'px','top':(img_top-1)+'px'});
},function(){
	var img_left=parseInt($(this).css('left'));
    var img_top=parseInt($(this).css('top'));
  	$(this).css({'left':(img_left-1)+'px','top':(img_top+1)+'px'});
})
$('#main_project .section .tip .img2').hover(function(){
  var img_left=parseInt($(this).css('left'));
  var img_top=parseInt($(this).css('top'));
  $(this).css({'left':(img_left-1)+'px','top':(img_top-1)+'px'});
},function(){
	var img_left=parseInt($(this).css('left'));
    var img_top=parseInt($(this).css('top'));
  	$(this).css({'left':(img_left+1)+'px','top':(img_top+1)+'px'});
})
function popShowDiscuss(){
  
  $('.pop_div_discuss').fadeIn(400);
  $('.mask').fadeIn(400);
  var scrollTop=$(document).scrollTop();
  var popWidth=$('.pop_div_discuss').width();
  var windowWidth=$(window).width();

    $('.pop_div_discuss').css('top',50+scrollTop);
  $('.pop_div_discuss').css('left',(windowWidth-popWidth)/2);	
  return false;
}
//点击详细待办事项标题，讨论标题，进入讨论
/*$('.a_todo_discuss,.a_discuss_discuss,.a_img_discuss').live('click',function(){
  var ajaxComplete=$('.pop_div_discuss').load($(this).attr('href'),'',popShowDiscuss());
  return false;	
})*/

$('.info_right_content h3 a.history').live('click',function(){
  $(this).addClass('current');	
  $(this).siblings('.todo').removeClass('current');	
  $('.history_wrapper').show();
  $('.todo_wrapper').hide();
  return false;
})
$('.info_right_content h3 a.todo').live('click',function(){
  $(this).addClass('current');	
  $(this).siblings('.history').removeClass('current');	
  $('.todo_wrapper').show();
  $('.history_wrapper').hide();
  return false;
})
$('#info_right .p_close .close').live('click',function(){
  $('#info_right').stop(true,true).animate({width:'0'},450); 
  $('#info_right .p_close .close').stop(true,true).animate({width:'0'},450); 
  $('#info_right .p_photo a').stop(true,true).animate({width:'0'},450); 
})
$('.show_right').live('click',function(){
 /* var maxHeight=$('#container').height();
  $('#info_right').height(maxHeight);	
  $('#info_right').stop(true,true).animate({width:'280px'},450); 
  $('#info_right').load($(this).attr('href'),function(response,status,xhr){
    if(status=='success'){
	  $('#info_right .p_close .close').stop(true,true).animate({width:'30px'},450); 
      $('#info_right .p_photo a').stop(true,true).animate({width:'70px'},450); 	
    }
  });*/
 
  return false;	
})
$('.todo_completed .title').live('click',function(){
  if($(this).siblings('ul').is(':visible')){
	$(this).siblings('ul').hide();  
  }else{
	$(this).siblings('ul').show();    
  }
})
$('.popImg').live('click',function(){ 
	$(".popMask").fadeIn(200);
	$(".loading").removeClass("hide");
    var src = $(this).attr("imgUrl");
	
	var img=new Image();
	//img.src=src;
	img.onload=function(){
	 $(".popImgDiv .popBody").html("");
	  $(".popImgDiv").fadeIn(200).css({"width":"auto"});	
	  $(".popImgDiv .popBody").css({"paddingLeft":"30px","paddingRight":"30px"});
	  var top=50;
	  var scrollTop=$(document).scrollTop();
	  $(".popImgDiv").css("top",top+scrollTop);
	    var ratio=img.width/img.height;
		var width=img.width;
		var height=img.height;
		if(width>1000)
		{
		  	width=1000;
			height=width/ratio;
		}
	    imgStr='<img width="'+width+'" height="'+height+'" style="display:block;margin:30px auto 20px;" src="'+src+'" />';
	    $(".popImgDiv .popBody").append($(imgStr));
		
	    var marginLeft="-"+(width+60)/2+"px";
	    $(".popImgDiv").css("marginLeft",marginLeft);
		$(".loading").addClass("hide");
	  
    }
	img.src=src;
	
 
		
})
function shake($tag,z_range,z_range_i,z_range_t,marginTop){
				    for(var i=0; i<z_range_i; i++){
					$tag.animate({marginTop: marginTop+z_range}, {duration:z_range_t,easing:'swing'});
					$tag.animate({marginTop: marginTop-z_range}, {duration:z_range_t,easing:'swing'});
				};
				$tag.animate({marginTop: marginTop}, {duration:z_range_t,easing:'swing'});
				}
            $tag=$('#main_project .header .p_add_project');
			var	z_range=5;
			var	z_range_i=5;
			var	z_range_t=100;
			var marginTop = parseInt($tag.css('marginTop'));
			
			
				
$(document).live('click',function(event){
 if($('#main_project .section .article').length==1)
 {
	 shake($tag,z_range,z_range_i,z_range_t,marginTop); 
 }
})
$('.setting .box_04 ul li a.browser_sign').live('click',function(){
  var url=$(this).attr('href');
  var notice_case=parseInt($(this).parents('li').attr('notice_case'));	
  var notice_browser = null;	
  if($(this).hasClass('browser_blue')){
	$(this).addClass('browser_gray');
	$(this).removeClass('browser_blue');
	notice_browser = 0;
  }else{
	$(this).addClass('browser_blue');
	$(this).removeClass('browser_gray');  
	notice_browser = 1;
  }	
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{noticeType:'notice_browser',noticeTypeData:notice_browser,notice_case:notice_case},
	success:function(){
	  	
	}  
  })
  return false;
})
$('.setting .box_04 ul li a.mail_sign').live('click',function(){
  var url=$(this).attr('href');
  var notice_case=parseInt($(this).parents('li').attr('notice_case'));	
  var notice_email = null;		
  if($(this).hasClass('mail_blue')){
	$(this).addClass('mail_gray');
	$(this).removeClass('mail_blue');
	notice_email=0;
  }else{
	$(this).addClass('mail_blue');
	$(this).removeClass('mail_gray'); 
	notice_email=1; 
  }	
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{noticeType:'notice_email',noticeTypeData:notice_email,notice_case:notice_case},
	success:function(){
	  	
	}  
  })
  return false;
})
$('.setting .nav a').each(function(){
  $(this).live('click',function(){
	var index=$(this).index()+1;  
	$(this).addClass('current'); 
	$(this).siblings('a').removeClass('current');
	$('.setting .box_0'+index).show(); 
	$('.setting .box_0'+index).siblings('.article').hide();
	return false;
  })	
})
  
  $('.project_div .section_02 .invite ul li').live('click',function(){
	  var mail=$(this).find('span').text();	
	  var add_input=true;
	  $(this).parents('.project_div').find('p.email').each(function(){
	   if($.trim($(this).find('input').val())==""){
		 $(this).find('input').val(mail);
		 add_input=false;
		 return false;  
	  }else if($.trim($(this).find('input').val())==mail){
		add_input=false;  
		$(this).find('input').focus();
		return false;
	  }	  
	})
	if(add_input){
	 $(this).parents('.project_div').find('p.email:last').after('<p class="clearfix email"><span class="bg l"></span><input class="l" type="text" value="请填写好友邮箱" value="'+mail+'" /></p>');
	}
  })	
/*if($.trim($('#right').html())!=""){
 $('#button').show();	
 $('#right').css('width',0);
 $('#right').height($('#container').height());
 $('#right').css('border-left','none');
}*/
$('.create_big_title').live('click',function(){
  var $firstTip=$('.first_tip');	
  var $form=$(this).parents('form');	
  var input_value=$(this).parents('form').find('.p_01 input').val();	
  if($.trim(input_value)=="" || $.trim(input_value)==$(this).parents('form').find('.p_01 input').attr('place')){
	$form.find('.p_01 input').addClass('tip_red');
	return false;
  }
  $.ajax({  
			   type:'POST',
			   url:$(this).parents('form').attr('action'),
			   dataType:'json',
			   data:$(this).parents('form').serialize(),
			   success:function(data){
				     if(data.status==200)
					 {
						/* if($('#main .section_02 .article:first').is(':hidden')){
						   $articleHiddenFirst=$('#main .section_02 .article:first');
						 }
						 $('#main .section_02 .article:first').before($('#main .section_02 .article:first').clone(true));
						 $('#main .section_02 .article:first').show();
						 $('#main .section_02 .article:first .ul_01').children('li').remove();
						 if($articleHiddenFirst.html()!=""){
						   $articleHiddenFirst.remove();	 
						 }
						 $( ".datepicker" ).datepicker('destroy').datepicker({ dateFormat: 'yy-mm-dd' });
						 $articleFirst=$('#main .section_02 .article:first');
						 $('#main .section_02 .article:first h3 .tdt_id').attr('value',data.data.tdt_id);
						 $('#main .section_02 .article:first h3 .tdt_name').attr('value',input_value);
						  $('#main .section_02 .article:first h3 .span_tdt_name').text(input_value);
						 $('#main .section_02 .article:first p.add').show();
						 $('#main .section_02 .article:first').find("[name=tdt_id]").val(data.data.tdt_id);
						 $('#main .section_02 .article:first form').show(); 
						 $('#main .section_02 .article:first form').siblings('.add').hide();
						 $('#main .section_02 .article:first .input_02').focus();
						 $form.removeClass('show').addClass('hide');
						 
						 $form.find('.p_01 input').val($form.find('.p_01 input').attr('place'));
						 if($firstTip.length > 0){
						   $firstTip.remove();	 
						 }*/
						 var $innerUncomplete=$("#template .innerUncomplete").clone(true);
						 $innerUncomplete.find(".todotype_name .span_tdt_name").text(input_value);
						 $innerUncomplete.find(".todotype_name").attr("tdt_id",data.data.tdt_id);
						 $innerUncomplete.find(".add_todo_form").show();
						 $innerUncomplete.find(".add_todo").hide();
						 
						 $(".add_todolist_form").removeClass("show").addClass("hide");
						 var $outerUncomplete=$(".outerUncomplete");
						 var innerUncompleteHtml=$innerUncomplete.html();
						 $(innerUncompleteHtml).prependTo($outerUncomplete);
						 $outerUncomplete.find(".article:first .add_todo_form .tdi_name").focus();
						 
					 }
					 else
					 {
					    alert(data.msg);	 
				     }
			   }
			 })
  return false;	 
})
//点击完成
$('.set_complete').live('click',function(){
  var liAppend='';
  var complete=$(this).attr('complete');
  var unComplete=$(this).attr('uncomplete');
  var value=$(this).val();
  var url=$(this).siblings('.todo_name').attr('href');
  var $liMe=$(this).parent();
  var tdi_name=$liMe.find(".todo_name").text();
  var tdi_id=value;
  var color=$liMe.find(".a_color_span").css("background-color");
  var $liMeClone=$(this).parent().clone(true);
  var $todo_completed=$(this).parents('ul').siblings('div.todo_completed');
  var $ul02=$(this).parents('ul').siblings('div.todo_completed').find('ul.ul_02');
    $.ajax({
		type:'POST',
		dataType:'json',
		url:complete,
		data:{tdi_id:value},
	    success:function(data){
			
			
			if(data.status==200)
			{
			var $innerCompleteList=$("#template .innerCompleteList").clone(true);
			
			$innerCompleteList.find(".tdi_name").text(tdi_name);
			$innerCompleteList.find(".cancel_complete").val(tdi_id);
			$innerCompleteList.find(".a_color_span,.span_color").css("background-color",color);
			$innerCompleteList.find(".complete_user").text(currentUserName);
			
			  $innerCompleteList.find(".complete_time").text(data.data.tdt_completetime);
			//$innerCompleteList.find(".a_todo_discuss").attr("rel",rel);
			$($innerCompleteList.html()).prependTo($ul02);	
			$liMe.remove();	
			if($todo_completed.is(':hidden')){
		 	$todo_completed.show();
		  }
		  if($todo_completed.find(".title").is(':hidden')){
		 	$todo_completed.find(".title").show();
		  }
		  if($ul02.is(':hidden')){
		 	$ul02.show();
		  }
		}
	  }
  }
 
  )
  
  
  
})
//取消完成事项
$('.cancel_complete').live('click',function(){
  var id=$(this).val();	
  var $todo_completed=$(this).parents('.todo_completed');
  var $liMe=$(this).parent();
  var tdi_name=$liMe.find(".tdi_name").text();
  var color=$liMe.find(".span_color").css("background-color");
  var $ul02=$(this).parents('ul.ul_02');
  var $ul_01=$(this).parents('.todo_completed').siblings('.ul_01');
  $.ajax({
		type:'POST',
		dataType:'json',
		url:$(this).attr('uncomplete'),
		data:{tdi_id:id},
	    success:function(data){
	          var $innerUncompleteList=$(".innerUncompleteList").clone(true);
			  var comment=data.data.tdi_count;
			 // var rel="superbox[ajax][http://www.doin60.com/Todoitem/show/id/"+tdi_id+"]";
			  var usr_name=data.data.usr_name;
			  var tdi_deadline=data.data.tdi_deadline;
			  $innerUncompleteList.find(".todo_name").text(tdi_name);
			  $innerUncompleteList.find(".set_complete").val(id);
			  $innerUncompleteList.find(".a_color_span,.span_color").css("background-color",color); 
			  //$innerUncompleteList.find(".a_todo_discuss").attr("rel",rel);
			  $innerUncompleteList.find(".datepicker").val(tdi_deadline);
			  if(usr_name==null)
			  {
				   $innerUncompleteList.find(".usr_name").remove();
			  }
			  else
			  {
				   $innerUncompleteList.find(".usr_name").text(usr_name);
			  }
			  if(comment==0)
			  {
				  $innerUncompleteList.find(".comment").remove();
			  }
			  else
			  {
			  $innerUncompleteList.find(".comment").text(comment+"条评论");
			  }
			  if(tdi_deadline.indexOf("1970-01-01")!=-1)
			  {
				   $innerUncompleteList.find(".datepicker").attr("value",$innerUncompleteList.find(".datepicker").attr("place")).addClass("hidden"); 
			  }
			  else
			  {
					$innerUncompleteList.find(".datepicker").attr("value",tdi_deadline);
			  }
			  $liMe.parents(".article").find(".outerUncompleteList").append($innerUncompleteList.html());
			  $liMe.remove();
	  }
  }
 
  )
  
  
  
})
//添加待办事项提交
$('.create_small_title').live('click',function(){
	if($(this).siblings('.tip').html()!=""){
	 $(this).siblings('.tip').remove(); 
  }
  if($.trim($(this).parents('form').find('.input_02').val())=="" || $.trim($(this).parents('form').find('.input_02').val())==$(this).parents('form').find('.input_02').attr('place')){
	$(this).parents('form').find('.input_02').addClass('tip_red');
	return false;
  }	
  if($.trim($(this).parents('form').find('.input_02').val()).length>100){
	$(this).parents('form').find('.input_02').focus();
	confirm('输入的字符不能超过100个,请重新输入!');  
	return false;
  }
  var liAppend='';
  var $ul_01=$(this).parents('form').siblings('ul.ul_01'); 
  $form=$(this).parents('form');
  var $outerUncompleteList=$(this).parents(".article").find(".outerUncompleteList");
  var $text=$(this).parents('form').find('.input_02');
  var $tip=$(this).siblings('.tip');
  var $datePicker=$(this).parents('form').find('.datepicker');
  var $select=$(this).parents('form').find('select');
  var usr_name=$select.find("option:selected").text();
  var giveUsrId=$(this).parents('form').find('.create_usr_id').val();
  var receiveUsrId=$select.val();
  var prjId=window.globalPrjId;
  var tdt_id=$(this).parents(".article").find(".todotype_name").attr("tdt_id");
  var tdi_name=$form.find(".tdi_name").attr("value");
  var usr_id=$form.find("select option:selected").attr("value");
  var tdi_deadline_place=$form.find(".input_03").attr("place");
  var tdi_deadline="";
  if($form.find(".input_03").attr("value")==tdi_deadline_place)
  {
	  tdi_deadline="";
  }
  else
  {
	tdi_deadline=$form.find(".input_03").attr("value");   
  }
  $form.find(".tdt_id").val(tdt_id);
  $form.find(".prj_id").val(prjId);
  $.ajax({
			   type:'POST',
			   url:$(this).parents('form').attr('action')+"&prj_id="+prjId,
			   dataType:'json',
			   data:{prj_id:prjId,tdi_name:tdi_name,tdt_id:tdt_id,usr_id:usr_id,tdi_deadline:tdi_deadline},
			   success:function(data){
				   if(data.status==200)
				   {
					  var $innerUncompleteList=$("#template .innerUncompleteList").clone(true);
					  var tdi_name=data.data.tdi_name;
					  var tdi_id=data.data.tdi_id;
					  var color=data.data.color;
					  //var comment=data.data.tdi_count;
					  var rel="/disscussion/show.html?dsc_type=3&dsc_relateid="+tdi_id;
					  //var usr_name=data.data.usr_name;
					  $innerUncompleteList.find(".todo_name").text(tdi_name);
					  $innerUncompleteList.find(".set_complete").val(tdi_id);
					  $innerUncompleteList.find(".a_color_span,.span_color").css("background-color",color);
					  $innerUncompleteList.find(".a_todo_discuss").attr("rel",rel);
					  if(usr_name=="")
					  {
						   $innerUncompleteList.find(".usr_name").remove();
					  }
					  else
					  {
						   $innerUncompleteList.find(".usr_name").text(usr_name);
					  }
					 
					  $innerUncompleteList.find(".comment").remove();
					 
					  if(tdi_deadline=="")
					  {
						   $innerUncompleteList.find(".datepicker").addClass("hidden").attr("value",tdi_deadline_place); 
					  }
					  else
					  {
							$innerUncompleteList.find(".datepicker").addClass("show").attr("value",tdi_deadline);
					  }
					  var innerUncompleteList=$innerUncompleteList.html();
					  $outerUncompleteList.append(innerUncompleteList);
					  $form.find(".tdi_name").val("");
				   }
				   else
				   {
					  alert(data.msg);   
				   }
			}
			
			
  })
	 
  return false;
})
$('.add_todo_div .span_datepicker .date_reset').live('click',function(){
  $(this).siblings('input.datepicker').val('');
  return false;	
})
$('.a_datepicker').live("click",function(){
   return false;	
})
	    $( ".datepicker" ).live('focus',function(){
	    if($(this).hasClass('edit_todoitem_datepicker')){
		  $(this).datepicker('destroy').datepicker({ dateFormat: 'yy-mm-dd' });	
		  return false;
		}
		$(this).removeClass('hidden');
		$(this).addClass('show');
		$(this).datepicker({ dateFormat: 'yy-mm-dd', onSelect: function(dateText, inst) { 
		    if($(this).hasClass('select_date')){
              $('.ul_01 li').each(function(){
			   $(this).find('.todo_name').removeClass('bg_yellow');	
			   if($(this).find('.nameAndDate .edit_datepicker').val()==dateText){
				  $(this).find('.todo_name').addClass('bg_yellow');	
			   }	  
			 })			  	
			}
		    if($(this).hasClass('edit_datepicker'))
			  $.ajax({
				  url:$(this).parents('li').find('.a_edit').attr('href'),
				  type:'POST',
				  dataType:'json',
				  data:{tdi_id:$(this).parents('li').find('input:checkbox').val(),tdi_deadline:dateText},
				  success:function(data){
					  }
				  
				  })
		      if($(this).hasClass('hide_datepicker')){
				
			  $hide_datepicker=$(this);
			  

	          $.ajax({
				  url:$(this).parents('li').find('.a_edit').attr('href'),
				  type:'POST',
				  dataType:'json',
				  data:{tdi_id:$(this).parents('li').find('input:checkbox').val(),tdi_deadline:dateText},
				  success:function(data){
					  $hide_datepicker.val(data.tdi_deadline);
					  $hide_datepicker.removeClass('hidden');
					  $hide_datepicker.addClass('show');
					  
					  }
				  
				  })
	 }
	           if($(this).hasClass('append_datepicker')){
			       
			  $.ajax({
				  url:$(this).parents('li').find('.a_edit').attr('href'),
				  type:'POST',
				  dataType:'json',
				  data:{tdi_id:$(this).parents('li').find('input:checkbox').val(),tdi_deadline:dateText},
				  success:function(data){
					  }
				  
				  })
			 
			     
			   }
			 } });
	})

		
$('.hide_datepicker').live('blur',function(){
  if($(this).val()==""){$(this).addClass('hidden');}
})

$('.nameAndDate .usr_name').live('click',function(){
	$(this).removeClass('hidden');
	$(this).addClass('show');
	$(this).parents('li').find('.all_user_name').show();
	$(this).parents('li').find('.all_user_name').css('left',($(this).offset().left-$(this).parents('li').offset().left)+15);
	$(this).parents('li').find('.all_user_name').css('top',20);
	return false;
})
$('.todo .nameAndDate .usr_name').live('click',function(){
	var url="/project?m=findProjectByPrjID&prj_id="+$(this).parents("li").attr("prj_id");		 											
	$.ajax({
				  url:url,
				  type:'POST',
				  dataType:'json',
				  success:function(data){
					  if(data.status==200)
						{
						   var innerUsers="";
						   for(var i=0;i<data.data.items[0].userList.itemSize;i++)
						   {
							 var $innerUsers=$("#template .innerUsers").clone(true);
							 var userName=data.data.items[0].userList.items[i].usr_name;
							 var userId=data.data.items[0].userList.items[i].usr_id;
							 $innerUsers.find("p").text(userName);
							 $innerUsers.find("p").attr("value",userId);
							 innerUsers+=$innerUsers.html();  
						   }
						   $(".outerUsers").html(innerUsers);
						   $(this).removeClass('hidden');
							$(this).addClass('show');
							$(this).parents('li').find('.all_user_name').show();
							$(this).parents('li').find('.all_user_name').css('left',($(this).offset().left-$(this).parents('li').offset().left)+15);
							$(this).parents('li').find('.all_user_name').css('top',20);
					    }	
					 
				  
				  													
	
	}
	})
	return false;
})
$('.nameAndDate .usr_name').live('blur',function(){
    if($(this).text()=='执行人'){
	$(this).addClass('hidden');
	}
	
})
$('.all_user_name .close').live('click',function(){
  $(this).parent().hide();
  if($(this).parents('li').find('.usr_name').text()=='执行人'){
	$(this).parents('li').find('.usr_name').addClass('hidden');
	}	
})
$('.all_user_name p').live('click',function(){
	$all_user_name=$(this).parents('.all_user_name');
	$usr_name=$(this).parents('li').find('.usr_name');
	var user_id_name=$(this).text();
  	$.ajax({
				  url:$(this).parents('li').find('.a_edit').attr('href'),
				  type:'POST',
				  dataType:'json',
				  data:{tdi_id:$(this).parents('li').find('input:checkbox').val(),usr_id:$(this).attr('value'),edit_usr:true},
				  success:function(data){
					  if(data.status=200)
						{
						$usr_name.text(user_id_name);
						$all_user_name.hide();
						}
					   else
					   {
						  alert(data.msg);   
					   }	
					  }
				  
				  })
})
$('.a_edit').live('click',function(){
  var tdi_name=$(this).parents('li').find('.todo_name').text();	
  var tdi_deadline=$(this).parents('li').find('.input_03').val();	
  var usr_name=$(this).parents('li').find('.usr_name').text();	
  var usr_id=$(this).parents('li').find('.usr_name').attr("usr_id");	
  var tdi_id=$(this).parents('li').find('input:checkbox').val();
  $li_clone=$('#template #edit_todoitem li').clone(true);	
  $li_clone.find('.edit_todo_form').attr('action',$(this).attr('href'));
  $li_clone.find('.edit_todo_form').show();
  $(this).parents('li').after($li_clone);
  $(this).parents('.article').find('.add_todo_form').hide();
  $(this).parents('.article').find('.add').show();
  $(this).parents('li').hide();
  $li_clone.find('.edit_todo_form .input_02').val(tdi_name);
  $li_clone.find('.edit_todo_form .input_02').focus();
  $li_clone.find('.edit_todo_form .input_03').val(tdi_deadline);
  if($(this).parents("#main").hasClass("todo"))
  {
	var url="/project?m=findProjectByPrjID&prj_id="+$(this).parents("li").attr("prj_id");		 											
	$.ajax({
				  url:url,
				  type:'POST',
				  dataType:'json',
				  success:function(data){
					  if(data.status==200)
						{
						   var innerSelectUsersHtml="";
						   for(var i=0;i<data.data.items[0].userList.itemSize;i++)
						   {
							   var userId=data.data.items[0].userList.items[i].usr_id;
							   var userName=data.data.items[0].userList.items[i].usr_name;
							   var $innerSelectUsers=$("#template .innerSelectUsers").clone(true);
							   $innerSelectUsers.find("option").text(userName);
							   $innerSelectUsers.find("option").val(userId);
							   if(userId==usr_id)
							   {
								 $innerSelectUsers.find("option").attr("selected","selected");	 
							   }
							   innerSelectUsersHtml+=$innerSelectUsers.html();
						   }
						  $(".outerSelectUsers").html(innerSelectUsersHtml);
					    }	
					 
				  
				  													
	
	}
	})
  }
  
  $li_clone.find('.tdi_id').val(tdi_id);
  return false;
})
$('.edit_todo_form').live('submit',function(){
  var url=$(this).attr('action');
  var $form=$(this);
  var tdi_name=$form.find(".input_02").attr("value");
  var tdi_deadline=$form.find(".input_03").attr("value");
  var $li=$(this).parents('li');
  var $prev_li=$li.prev('li');
  var usr_name=$(this).find('select option:selected').text();
  $.ajax({
	url:url,
	type:'post',
	dataType:'json',
	data:$form.serialize(),
	success:function(data){
	  if(data.status==200)
		{	
		$li.remove();	
		$prev_li.find('.todo_name').text(tdi_name);
		if(tdi_deadline!=''){
			if(data.tdi_deadline==""){
			  $prev_li.find('.input_03').val('到期时间');
			}
			else{
				 $prev_li.find('.input_03').val(tdi_deadline);
			}
		$prev_li.find('.input_03').addClass('edit_datepicker show').removeClass('hide_datepicker hidden');
		$prev_li.find('.input_03').show();
		}
		$prev_li.find('.usr_name').text(usr_name);
		$prev_li.show();
	  }
	} 
  })
  return false;	
})
$('.edit_todotype_form').live('submit',function(){
  var $edit_todotype_form=$(this);	
  var $todotype_name=$edit_todotype_form.siblings('.todotype_name');
  var url=$edit_todotype_form.attr('action');
  $.ajax({
	  url:url,
	  type:'POST',
	  dataType:'json',
	  data:$edit_todotype_form.serialize(),
	  success:function(data){
		  if(data.status==200)
		  {
			$todotype_name.find('.span_tdt_name').text(data.data.tdt_name);
			$todotype_name.show();
			$edit_todotype_form.remove();
		  }
		 }  
	  })
	  return false;	
})
$('.a_delete').live('click',function(){
  var url=$(this).attr('href');
  var $li=$(this).parents('li');
  var tdi_id=$(this).parents('li').find('input:checkbox').val();
  $.ajax({
	  url:url,
	  type:'POST',
	  dataType:'json',
	  data:{tdi_id:tdi_id},
	  success:function(data){
		  if(data.status==200)
		  {
		  $li.remove(); 
		  }
		  else
		  {
			alert(data.msg);  
		  }
		 }  
	  })
	  return false;	
})
$('.textarea_edit').live('keypress',function(event){
	if (event.keyCode == 13){
	  $(this).parents('li').find('.name_save').click();
	}
})
/*$('.name_cancel').live('click',function(){
  	var $li=$(this).parents('li');
	var $name=$(this).parents('li').find('.todo_name');
	$li.children('.edit_hide').hide(); 
	$name.show(); 
	return false;
})*/
$('.todo_completed .ul_02 li').live('mouseenter',function(){
  $(this).find('span.edit').show();	
}).live('mouseleave',function(){
  $(this).find('span.edit').hide();	
})
$('.contactus').live('click',function(){
  $('.pop_contact').show();
  $('.pop_contact').load($(this).attr('href'));
  $('.mask').show();
  $('.pop_contact').css('left',(parseInt($('body').get(0).clientWidth)-parseInt($('.pop_contact').css('width')))/2);
 $('.mask').css('width',parseInt($('body').get(0).clientWidth));
 $('.mask').css('height',parseInt($('body').get(0).clientHeight));	
  return false;	
})

$('.todo_today').live('click',function(){
	
  $('.todo_today_wrapper').show();
  $('.todo_future_wrapper').hide();
  $(this).addClass('current');
  $('.todo_future').removeClass('current');
  return false;	
})
$('.todo_future').live('click',function(){
  $('.todo_future_wrapper').show();
  $('.todo_today_wrapper').hide();
  $(this).addClass('current');
  $('.todo_today').removeClass('current');
  return false;	
})

$('.contact_button').live('click',function(){
  var url=$(this).parents('form').attr('action'); 
  $pop_contact=$(this).parents('.pop_contact');	
  $mask=$('.mask');
  $.ajax({
	 type:'POST',
	 url:url,
	 dataType:'json',
	 data:$(this).parents('form').serialize(),
	 success:function(){
	   $pop_contact.append('<p style="color:#F18255;text-align:center;font-size:18px;height:30px;line-height:30px;margin:10px 0;">提交成功</p>')	;
	   $pop_contact.fadeOut(2000);
	   $mask.fadeOut(2000);
	 }
  })
  return false;	
})


$('.a_thumb').live('click',function(){
  return false;	
})
$('#right .section .article div p.p_01').live('click',function(){
  return false;	
})

$('.register_form input:text,.login_form input:text').keypress(function(event){
  if(event.keyCode == 13){
    $(this).parents('form').submit();
  }	
})
$('#prj_name,#prj_description').hover(function(){
  $(this).addClass('bg_show tip_blue');	
},function(){
  $(this).removeClass('bg_show tip_blue');		
})
$('#prj_name').bind({
  blur:function(){
  var $prj_name=$('#prj_name');
  var prj_id=window.globalPrjId;
  var url=$(this).attr('url');
  var prj_name=$(this).val();	
  var data=$(this).attr('data');
  $(this).siblings('.edit_prj_name').show();
  $(this).removeClass('bg_show tip_blue');
  if(prj_name==''){
	$(this).attr('value',data); 
	return false;
  }
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{prj_name:prj_name,prj_id:prj_id},
	success:function(data){
		if(data.status!=200)
		{
            alert(data.msg);
		}
	}
  })
  },
  keypress:function(event){
  if(event.keyCode==13){
  var $prj_name=$('#prj_name');
  var prj_id=window.globalPrjId;
  var url=$(this).attr('url');
  var prj_name=$(this).val();
  var data=$(this).attr('data');	
  $(this).siblings('.edit_prj_name').show();
  if(prj_name==''){
	$(this).attr('value',data); 
	return false; 
  }
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{prj_name:prj_name,prj_id:prj_id},
	success:function(data){
	 	if(data.status!=200)
		{
            alert(data.msg);
		}
		//$prj_name.blur();
	}
  })
  }
}
})

$('#prj_description').bind({
  blur:function(){
  var $prj_description=$('#prj_description');
  var prj_id=window.globalPrjId;
  var url=$(this).attr('url');
  var prj_description=$(this).val();
  var data=$(this).attr('data');
  if(prj_description==''){
	$(this).attr('value',data); 
	return false;
  }	
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{prj_description:prj_description,prj_id:prj_id},
	success:function(data){
	 	if(data.status!=200)
		{
            alert(data.msg);
		}
	}
  })	
},
keypress:function(event){
  if(event.keyCode==13){	
  var $prj_description=$('#prj_description');
  var prj_id=window.globalPrjId;
  var url=$(this).attr('url');
  var prj_description=$(this).val();
  var data=$(this).attr('data');
  if(prj_description==''){
	$(this).attr('value',data); 
	return false;
  }	
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{prj_description:prj_description,prj_id:prj_id},
	success:function(data){
	 	if(data.status!=200)
		{
            alert(data.msg);
		}
		//$prj_description.blur();
	}
  })	
  }
}
})
var scrollTop=$(document).scrollTop();
$(window).bind('scroll',function(){
	var scrollDiffer=$(document).scrollTop()-scrollTop;
	  $('#button').animate({top:parseInt($('#button').css('top'))+scrollDiffer},0)
	  scrollTop=$(document).scrollTop();
})
$('.todotype_name').live('mouseenter',function(){
 if($(this).parents('.complete_all').length==0){ 
  $(this).find('.edit').show();	
 }
}).live('mouseleave',function(){
if($(this).parents('.complete_all').length==0){ 	
  $(this).find('.edit').hide();	
}
})
$('.todotype_name .edit_todotype').live("click",function(){
  $todotype=$(this).parents('.todotype_name');
  $edit_todotype=$('#template .edit_todotype_form').clone(true);
  var span_tdt_name=$todotype.find('.span_tdt_name').text();
  var url=$(this).attr('href');
  $todotype.after($edit_todotype);
  $edit_todotype.attr('action',url);
  $edit_todotype.find('.tdt_id').val($todotype.attr('tdt_id'));
  $edit_todotype.find('.input_02').val(span_tdt_name);
  $edit_todotype.show();
  $edit_todotype.find('.input_02').focus();
  $todotype.hide();
  return false;
})
/*$('.todotype_name .tdt_name').keypress(function(event){
  var $tdt_name=$(this);
  var tdt_name=$(this).val();	
  var $type_edit=$(this).parents('h3').find('.type_edit');
  var url=$(this).parents('h3').find('.edit_todotype').attr('href'); 	
  var tdt_id=$(this).parents('h3').find('.tdt_id').val(); 	
  if(event.keyCode==13){
	$.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{tdt_id:tdt_id,tdt_name:tdt_name},
	success:function(data){
	 $tdt_name.css({borderBottom:"solid 1px #fff"}).blur();	
	 $type_edit.hide();
	}
  })	  
  }
})*/
/*$('.type_save').live('click',function(){
  var $tdt_name=$(this).parents('h3').find('.tdt_name');
  var $type_edit=$(this).parents('h3').find('.type_edit');
  var tdt_name=$tdt_name.val();	
  var url=$(this).parents('h3').find('.edit_todotype').attr('href'); 	
  var tdt_id=$(this).parents('h3').find('.tdt_id').val(); 	
	$.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{tdt_id:tdt_id,tdt_name:tdt_name},
	success:function(data){
	 $tdt_name.css({borderBottom:"solid 1px #fff"}).blur();	
	 $type_edit.hide();
	}
  })
  return false;	  
})*/
/*$(".type_cancel").live('click',function(){
  var $input_tdt_name=$(this).parents('h3').find('.tdt_name');
  var $span_tdt_name=$(this).parents('h3').find('.span_tdt_name');	
  var $type_edit=$(this).parents('h3').find('.type_edit');
  $type_edit.hide();
  $input_tdt_name.hide();
  $span_tdt_name.show();	
  return false;
})*/
$('.todotype_name .tdt_name').blur(function(){
  $(this).css({borderBottom:"solid 1px #fff"});
})
$('.todotype_name .delete_todotype').live('click',function(){
  var deleteOrNot=confirm('真的要删除该待办事项吗？');
  if(deleteOrNot==true){
  var tdt_id=$(this).parents('.todotype_name').attr('tdt_id');	  	
  var url=$(this).attr('href');
  var $article=$(this).parents('.article');
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{tdt_id:tdt_id},
	success:function(data){
	if(data.status==200)
	{	
	 $article.slideUp('5000',function(){$article.remove()});
	}
	else
	{
	  alert(data.msg);	
    }
	}
  })	
  }
  return false;  	
})
$('#delete_project').live('click',function(){
  var $this=$(this);	
  var url=$(this).attr('href');
  var deleteOrNot=confirm('真的要删除项目吗？');
  if(deleteOrNot==true){
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{prj_id:globalPrjId},
	success:function(data){
		if(data.status==200)
		{
	      alert('项目删除成功');
	      window.location=$this.attr('location');
		}
	}
  })
  }
  return false;
})
/*$(document).live('click',function(event){
	if($(event.target).parents('.add_todolist_form').length==0){
	if($(event.target).attr('class')!='add_todolist_form' && $('.add_todolist_form').is(':visible')){	
	$('.add_todolist_form').hide();	
	}
	}
	})*/
$('.logout_safe').live('click',function(){
  var logout=confirm('真的要退出吗？');
  if(logout==true){
	  var date=new Date(); 
      date.setTime(date.getTime()-10000); 
      document.cookie="email="+getCookie("email")+";path=/;expires="+date.toGMTString();	
	  document.cookie="password="+getCookie("password")+";path=/;expires="+date.toGMTString();
	  return true;  
  }
  return false;
})	

//个人设置
function showTip($element,info){
 $element.fadeIn(300);
 $element.text(info);
 $element.fadeOut(3000,function(){
 $element.text('');
  }) 	
}
$('#save_password').live('click',function(){
  var $form = $(this).parents('form');
  var old_pw=$form.find('.old_pw').val();
  var new_pw=$form.find('.new_pw').val();
  var new_pw2=$form.find('.new_pw2').val();
  var $settingTip=$(this).parents('form').find('.setting_tip');	
  var url=$form.attr('action');	
  var reg=/^[0-9a-zA-Z_]+$/g;
  if(old_pw==''){
	showTip($settingTip,'请输入旧密码！');
	return false;  
  }
  if(new_pw==''){
	showTip($settingTip,'请输入新密码！');
	return false;  
  }
  if(new_pw2==''){
	showTip($settingTip,'请重新输入新密码！');
	return false;  
  }
  if(new_pw.length<6 || new_pw.length>20){
	showTip($settingTip,'密码长度范围 6~20！请重新填写！');
	return false;    
  }
 
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{oldpwd:old_pw,newpwd1:new_pw,newpwd2:new_pw2},
	success:function(data){
		if(data.status==200)
		{
		   	showTip($settingTip,"修改成功！");
		}
		else
		{
          showTip($settingTip,data.msg);
		}
	}
  })
  return false;	
})
$('#save_name').live('click',function(){
  var $form=$(this).parents('form');
  var usrName=$form.find('.usr_name').val();
  var url=$form.attr('action');
  var $settingTip=$(this).parents('form').find('.setting_tip');	
  var reg=/^[0-9a-zA-Z_\u4e00-\u9fa5]+$/g;
  if(!reg.test(usrName)){
	showTip($settingTip,'称呼不能包含特殊字符！');
	return false;        
  }	
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{usr_name:usrName},
	success:function(data){
		if(data.status==200)
		{
          showTip($settingTip,"修改成功！");
		  $(".userInfo .userName").text(usrName);
		}
	}
  })
  return false;
})
$('#archive').live('click',function(){
  var url=$(this).attr('href');
  $.ajax({
	url:url,
	type:'POST',
	data:{prj_id:globalPrjId,isClose:1},
	success:function(data){
	  archive=true;	
	  $(".set_project .archive_project").addClass("hide");
	  $(".set_project .activate_project").removeClass("hide");
	  $(".archive_img").removeClass("hide");
	  $("input").attr("disabled","disabled");
	  $(".add,.addProject").removeClass("pop");
	  $(".add_todolist_btn").removeClass("add_todolist");
	  $(".add_todo_btn").removeClass("add_todo");
	  //window.location.reload();	
	} 
  })
  return false;	
})
$('#activate').live('click',function(){
  var url=$(this).attr('href');
  $.ajax({
	url:url,
	type:'POST',
	data:{prj_id:globalPrjId,isClose:0},
	success:function(data){
	  archive=false;	
	  $(".set_project .archive_project").removeClass("hide");
	  $(".set_project .activate_project").addClass("hide");
	  $(".archive_img").addClass("hide");
	  $("input").removeAttr("disabled");
	  $(".add,.addProject").addClass("pop");
	  $(".add_todolist_btn").addClass("add_todolist");
	  $(".add_todo_btn").addClass("add_todo");
	  //window.location.reload();	
	} 
  })
  return false;	
})
$('.set_project_link').toggle(function(){
  $(this).siblings('.sub_set_project').show();	
  return false;
},function(){
  $(this).siblings('.sub_set_project').hide();	
  return false;
})
//添加项目

$('.pop_project .invite_imgs a').live('click',function(){
	$emails=$(this).parents('form').find('.emails');
	$invite_members=$(this).parents('form').find('.invite_members');
	var name=$(this).find('em').text();
	var append=true;
	var remove=false;
	var email=$(this).attr('rel');
	$member='<div class="member bg_add_project l" rel="'+email+'"><p class="bg_add_project l">'+name+'<a class="close r" href="#"></a></p><input type="hidden" name="invitee[]"   type="text" value='+email+'  /></div>';
	if($(this).find('span').is(':visible')){
     $(this).find('span').hide();
	 
	$invite_members.children('.member').each(function(){
	  if($(this).attr('rel')==email){
		  remove=true;
		  $member=$(this);
		  return false; 
	  }	
	})
	if(remove==true){
		$member.remove();
		remove=false;
	  }
	}else{
	 $(this).find('span').show(); 
	 $invite_members.children('.member').each(function(){
      if($(this).attr('rel')==email){
		 append=false;
		 return false; 
	  }
	  
	})
	if(append==true){
		$invite_members.append($member);
	  }
	}
	return false; 	
})
$('.invite_members .member .close').live('click',function(){
  var email=$(this).parents('.member').attr('rel');	
  $(this).parents('.member').remove();
  $('.invite .invite_imgs').children('a').each(function(){
	 if($(this).attr('rel')==email){
	  $(this).find('span').hide();	 
	}  
  })
  return false;	
})
$('.invite_email').live('keypress',function(event){
  if(event.keyCode==13){
	 $(this).siblings('.invite_friend').click();  
	 return false;
  }	
  
})
$('.invite_friend').live('click',function(){
  var email=$(this).siblings('.invite_email').attr('value');
  if($(this).parents('p').find('.tip').length!=0){
	$(this).parents('p').find('.tip').remove();  
  }	
  if(email.search(/^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/)==-1){
	$(this).parents('p').append('<span class="tip" style="display:block;clear:both;color: #E94D20;">邮箱格式不正确</span>');  
	return false;
  }
  var append=true; 
  
  $invite_members=$(this).parents('form').find('.invite_members');
  $member='<div class="member bg_add_project l" rel="'+email+'"><p class="bg_add_project l">'+email+'<a class="close r" href="#"></a></p><input type="hidden" name="invitee"   type="text" value='+email+'  /></div>';	
  $invite_members.children('.member').each(function(){
      if($(this).attr('rel')==email){
		 append=false;
		 return false; 
	  }
	  
	})
	if(append==true){
		$invite_members.append($member);
	  }
  return false;
})
$('.pop_project form').live('submit',function(){
  if($(this).find('.prj_name').attr('value')==""){
	 $(this).append('<div style="text-align:center;color: #E94D20;height:60px;line-height:60px;">项目名称不能为空</div>');
	 return false;  
  }	
})
$('.invite_button .invite_cancel,.close_box').live('click',function(){
  $('.popWrapper').fadeOut(200);
  $('.popMask').fadeOut(200);
  return false;
})
/*$.superbox.settings = {
	boxId: "superbox", // Id attribute of the "superbox" element
	boxClasses: "", // Class of the "superbox" element
	overlayOpacity: .8, // Background opaqueness
	boxWidth: "700", // Default width of the box
	boxHeight:"650", // Default height of the box
	loadTxt: "Loading...", // Loading text
	closeTxt: "关闭", // "Close" button text
	prevTxt: "Previous", // "Previous" button text
	nextTxt: "Next" // "Next" button text
};
if($('#superbox-innerbox').children('.pop_div').length < 2){
	$.superbox();
}
*/
$('.edit_color').live('click',function(){
	var $li=$(this).parents('li');
	var $span_color=$li.find('.span_color');
	var $a_color_span=$li.find('.a_color span');
	var url=$(this).attr('url');
	var tdi_id=$(this).parents('li').find('input:checkbox').val();
	var color=$(this).attr('color');
  $.ajax({
	  url:url,
	  type:'POST',
	  dataType:'json',
	  data:{tdi_id:tdi_id,color:color},
	  success:function(data){
		  if(data.status==200)
		  {
			$span_color.css('background',color);
			$a_color_span.css('background',color);
		  }
		  else
		  {
			 alert(data.msg);  
		  }
		}
	  })	
      return false;
})
$('.a_color').live('mouseenter',function(){
  $(this).find('em').show();	
}).live('mouseleave',function(){
  $(this).find('em').hide();	
})
$('.edit_prj_name').live('click',function(){
  $(this).siblings('input').focus();
  $(this).siblings('input').addClass('tip_blue bg_show');
  $(this).hide();
  return false;	
})
$('.complete_all .todotype_name').live('click',function(){
  $complete_all=$(this).parents('.complete_all');
  $article=$(this).parents('.article');	
  $article_clone=$(this).parents('.article').clone(true);
  $complete_all.before($article_clone);	
  $article.remove();
})
$('.box_disscussion').live('click',function(){
  $li=$(this).parents('li');
  $box_disscussion=$(this);
  $box_disscussion_save=$li.find('.box_disscussion_save');
  $box_disscussion_edit=$li.find('.box_disscussion_edit');
  $box_disscussion.addClass('bg_show input_edit');
  $box_disscussion_edit.hide();
  $box_disscussion_save.show();
  return false;	
}).live('blur',function(){
  $li=$(this).parents('li');
  $box_disscussion=$(this);
  $box_disscussion_save=$li.find('.box_disscussion_save');
  $box_disscussion_edit=$li.find('.box_disscussion_edit');
  var dsc_id=$box_disscussion.attr('dsc_id');
  var dsc_body=$box_disscussion.attr('value');
  var url=$box_disscussion_save.find('.save').attr('href');
  $.ajax({
	 type:'post',
	 url:url,
	 datatype:'json',
	 data:{dsc_id:dsc_id,dsc_body:dsc_body},
	 success:function(data){
	  $box_disscussion_edit.show();
	  $box_disscussion_save.hide();	 
	  $box_disscussion.removeClass('bg_show input_edit');
	} 
  })	
  return false;
}).live('keypress',function(event){
  if(event.keyCode==13){
	$li=$(this).parents('li');
	$box_disscussion=$(this);
	$box_disscussion_save=$li.find('.box_disscussion_save');
	$box_disscussion_edit=$li.find('.box_disscussion_edit');
	var dsc_id=$box_disscussion.attr('dsc_id');
	var dsc_body=$box_disscussion.attr('value');
	var url=$box_disscussion_save.find('.save').attr('href');
	$.ajax({
	   type:'post',
	   url:url,
	   datatype:'json',
	   data:{dsc_id:dsc_id,dsc_body:dsc_body},
	   success:function(data){
		$box_disscussion_edit.show();
		$box_disscussion_save.hide();	 
		$box_disscussion.removeClass('bg_show input_edit');
	  } 
	})	  
  }	
})
/*$('.box_disscussion_edit .edit').live('click',function(){
  $li=$(this).parents('li');
  $box_disscussion=$li.find('.box_disscussion');
  $box_disscussion_save=$li.find('.box_disscussion_save');
  $box_disscussion_edit=$li.find('.box_disscussion_edit');
  $box_disscussion.focus();
  $box_disscussion.addClass('bg_show input_edit');
  $box_disscussion_edit.hide();
  $box_disscussion_save.show();
  return false;
  	
})*/
$('.box_disscussion_edit .edit').live('click',function(){
  var $form_clone=$('#comment_templete .comment_edit_form').clone(true);
  var $content_wrapper=$(this).parents('.content_wrapper');
  var $content=$content_wrapper.find('.content');
  var dsc_id=$(this).attr("dsc_id");
  $content.hide();
  var dsc_body=$content.find('.dsc_body').html();
  var reg=new RegExp("<br>","g");
  dsc_body=dsc_body.replace(reg,"\r");
    $form_clone.find('.dsc_body').html(dsc_body);
	$form_clone.find('.dsc_id').val(dsc_id);
  $content_wrapper.append($form_clone);
  return false;
})
$('.comment_edit_form').live('submit',function(){
  var $form=$(this); 	
  var $content_wrapper=$(this).parents('.content_wrapper');
  var $content=$content_wrapper.find('.content'); 
  var url=$(this).attr('action');	
  var dsc_body=$form.find('.dsc_body').val();
  //$content.find('.dsc_body').text(dsc_body);
  $.ajax({
	   type:'post',
	   url:url,
	   dataType:'json',
	   data:$form.serialize(),
	   success:function(data){
	   if(data.status==200)
	   {
		$content.show();
		
		//var reg=RegExp("&lt;br /&gt;","g");
		//var dsc_body=data.dsc_body.replace(reg,"<br />");
		$content.find('.dsc_body').html(dsc_body);
		$form.remove();
	   }
	  } 
	})	
	return false;  	
})
$('.comment_edit_form .cancel').live('click',function(){
  var $content_wrapper=$(this).parents('.content_wrapper');
  var $content=$content_wrapper.find('.content');
  $content.show();
  $(this).parents('.comment_edit_form').remove();
  return false;
})
/*$('.box_disscussion_save .save').live('click',function(){
  $li=$(this).parents('li');
  $box_disscussion=$li.find('.box_disscussion');
  $box_disscussion_save=$li.find('.box_disscussion_save');
  $box_disscussion_edit=$li.find('.box_disscussion_edit');
  var dsc_id=$box_disscussion.attr('dsc_id');
  var dsc_body=$box_disscussion.attr('value');
  var url=$(this).attr('href');
  $.ajax({
	 type:'post',
	 url:url,
	 datatype:'json',
	 data:{dsc_id:dsc_id,dsc_body:dsc_body},
	 success:function(data){
	  $box_disscussion_edit.show();
	  $box_disscussion_save.hide();	 
	  $box_disscussion.removeClass('bg_show input_edit');
	} 
  })	
  return false;
})*/
/*$('.box_disscussion_save .cancel').live('click',function(){
  $(this).parents('.box_disscusfsion_save').hide();
  $(this).parents('.box_disscussion_save').siblings('.box_disscussion_edit').show();
  
  return false;
})*/
$('.box_disscussion_edit .delete').live('click',function(){
  $li=$(this).parents('li');
  $box_disscussion=$li.find('.box_disscussion');
  var dsc_id=$(this).attr("dsc_id");
  $.ajax({
	url:"/discussion?m=delDiscussion",
	type:'POST',
	dataType:'JSON',
    data:{"dsc_id":dsc_id},
	success:function(data){
    if(data.status==200)
		{
	      $li.slideUp('5000',function(){$li.remove()});
		}
	}
  })	
  
  return false;  	
})
$(window).bind('scroll',function(){
	
  if($(document).scrollTop()>0){
	$('#top').show();  
  }	else{
	$('#top').hide();    
  }
})
$('.select_members').live('mouseenter',function(){
  $(this).find('.members').show();	
}).live('mouseleave',function(){
  $(this).find('.members').hide();		
})
$('.select_members .members p').live("mouseenter",function(){
  $(this).addClass('hover');	
}).live("mouseleave",function(){$(this).removeClass('hover');	
})
$('.select_members .members p').live('click',function(){
  var thisClass=$(this).attr('class');
  var name=$(this).text();	
  var usr_id=$(this).attr("usr_id");
  $(this).parents('.select_members').find('h4').text(name);
  $('.ul_01 li').each(function(){
	if(thisClass=='all_members'){
	  $(this).find('.todo_name').removeClass('bg_yellow');		
	}else{  
	$(this).find('.todo_name').removeClass('bg_yellow');	
	  if($(this).find('.nameAndDate .usr_name').attr("usr_id")==usr_id){
		$(this).find('.todo_name').addClass('bg_yellow');	
	  }  
	}
  })	
})
$('.cancel_todolist_form').live('click',function(){
  $(this).parents('form').removeClass('show').addClass('hide');	
  return false;
})
$('.cancel_todo_form').live('click',function(){
  $(this).parents('form').hide();
  $(this).parents('form').siblings('.add').show();
  return false;	
})
$('.cancel_edit_todotype_form').live('click',function(){
  $(this).parents('.edit_todotype_form').siblings('.todotype_name').show();
  $(this).parents('.edit_todotype_form').remove();
  return false;	
})
$('.cancel_edit_todo_form').live('click',function(){
  
  $(this).parents('li').prev().show();
  $(this).parents('li').remove();
  return false;	
})
$('.add_todolist_form .p_01 input').keypress(function(event){
	
  if(event.keyCode==13){
	$(this).parents('form').find('.create_big_title').click();  
	return false;
  }	
})
$('.add_todo_div .input_02').keypress(function(event){
  if(event.keyCode==13){
	$(this).parents('form').find('.create_small_title').click();   
	return false;
  }	
})


$('.disscuss_more').live('click',function(){
  if($(this).hasClass('show_disscuss')){
   $(this).parents('.article').prev('.article').children('.hide').addClass('show').removeClass('hide');
   $(this).removeClass('show_disscuss').addClass('hide_disscuss');	
   $(this).find('.click').text('(点击收缩)');
 }else if($(this).hasClass('hide_disscuss')){
	$(this).parents('.article').prev('.article').children('.show').addClass('hide').removeClass('show');
   $(this).removeClass('hide_disscuss').addClass('show_disscuss');	 
   $(this).find('.click').text('(点击展开)');  
  }
  return false;
})
function ajaxCallback(data,error){
 if(data=='failed'){
   $('.upload_photo_form').append('<p class="error" style="text-align:center;margin-top:20px;color:#F18255;">'+error+'</p>');	 
   $('.upload_photo_form .error').fadeOut(5000,function(){$('.upload_photo_form .error').remove();});
   return false;
 }else{	
 $('.upload_photo_form').find('.p_photo img').remove();
 $('.upload_photo_form').find('.p_photo').append(data);	 
 $('#left .header .a_photo img').remove();
 $('#left .header .a_photo').append(data);	 
 var src1=$('.upload_photo_form').find('.p_photo img').attr('src')+'?'+Math.random();
 $('.upload_photo_form').find('.p_photo img').attr('src',src1);
 var src2=$('#left .header .a_photo .photo').attr('src')+'?'+Math.random();
 $('#left .header .a_photo .photo').attr('src',src2);
 $('.upload_photo_form').find('.file').val('');
 }
}
$('.project_add_form').live('submit',function(){
  if($(this).find('.prj_name').val()=='' || $(this).find('.prj_name').val()==$(this).find('.prj_name').attr('place')){
	$('.project_add_form .error').css('visibility','visible');
	return false;  
  }
  var url=$(this).attr("action");
  var $form=$(this);
  var prj_name=$form.find(".prj_name").val();
  var prj_description=$form.find(".prj_description").val();
  var invite="";
	var memberLength=$form.find(".invite_members").children(".member").length;
	var i=0;
	$form.find(".invite_members").children(".member").each(function(){
	  if(i<memberLength-1)
	  {	
	    invite+=$(this).find("input").attr("value")+",";	
	  }
	  else if(i==memberLength-1)
	  {	
	    invite+=$(this).find("input").attr("value");	
	  }
	  i++;
	})
  $.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{prj_name:prj_name,prj_description:prj_description,invite:invite},
	success:function(data){
	 if(data.status==200)
	 {
	   window.location="/project/show.html?prj_id="+data.data.prj_id;	 
     }
	 else
	 {
            alert(data.msg);
	 }
	}
  })	
  return false;	
})
$('.invite_form').live('submit',function(){
  if($(this).find('.member').children('input').length == 0){
	$(this).append('<p class="error" style="text-align:center;margin-top:20px;color:#F18255;">邀请成员为空！</p>');	 
    $(this).find('.error').fadeOut(5000,function(){$(this).find('.error').remove();});  
	
  }
  else
  {
	$form=$(this);
	url=$form.attr("action"); 
	var prj_id=$form.find(".invite_prj_id").attr("value");
	var invitee="";
	var memberLength=$form.find(".invite_members").children(".member").length;
	var i=0;
	$form.find(".invite_members").children(".member").each(function(){
	  if(i<memberLength-1)
	  {	
	    invitee+=$(this).find("input").attr("value")+",";	
	  }
	  else if(i==memberLength-1)
	  {	
	    invitee+=$(this).find("input").attr("value");	
	  }
	  i++;
	}) 
	$.ajax({
	url:url,
	type:'POST',
	dataType:'JSON',
	data:{invitee:invitee,prj_id:prj_id},
	success:function(data){
	   if(data.status==200){
		  alert("邀请成功！"); 
		  $(".popWrapper").hide(200);
		  $(".popMask").hide();  
		}
	   else
	   {
		  alert(data.msg);   
	   } 	
	 }
	})
  }
  return false;	
  
})
if($.browser.msie){
 var ver = $.browser.version;
 if(parseInt(ver) < 8){
	window.location='/Index/ie';
  }	
}
if(window.location.pathname=='/user/setting.html'){ 
	  var location_hash=window.location.hash;
	  if(location_hash=='#notice_setting'){
		 $('.setting .nav a:eq(3)').click(); 
	  }	
	}
$(".email_wrapper input,.password_wrapper input").live("keydown",function(){
  $(this).siblings("em").hide();	
}).live("blur",function(){
  if($(this).attr("value")==""){	
  $(this).siblings("em").show();
  }
})	

$(".addUserForm").live("submit",function(){
  var $form=$(this);
  var usr_email=$form.find(".usr_email").attr("value");
  var url=$form.attr("action");
  var deleteUrl="";
  $.ajax({
	       url:url,
		   type:"post",
		   dataType:"JSON",
		   data:$form.serialize(),
		   success:function(data){
			  if(data.status==200){
				alert("添加成功！");  
				$innerMemberList=$("#template .innerMemberList").clone(true);
				deleteUrl=$innerMemberList.find(".deleteUser").attr("href")+data.data.usr_id;
				$innerMemberList.find(".usr_email").attr("value",usr_email);
				$innerMemberList.find(".deleteUser").attr("href",deleteUrl);
				$(".outerMemberList .memberContent").prepend($innerMemberList.html());
			  }  
			  else{
				alert(data.msg);  
			  } 
		   }
	    })	
		return false;
})
$(".deleteUser").live("click",function(){
  var deleteOrNot=confirm('真的要删除用户吗？');
  if(deleteOrNot==true){
   var url=$(this).attr("href");
   var $deleteNode=$(this).parents("tr");
	$.ajax({ 
	       url:url,
		   type:"post",
		   dataType:"JSON",
		   success:function(data){
			  if(data.status==200){
				$deleteNode.remove();
			  }  
			  else{
				alert(data.msg);  
			  } 
		   }
	    })	
  }
  return false;
})
$(".editUser").live("click",function(){
  $(this).siblings(".usr_password").removeAttr("disabled").focus();	
  $(this).text("保存").addClass("savePassword");
  return false;
})
$(".savePassword").live("click",function(){
  var $this=$(this);	
  var $usr_password=$(this).siblings(".usr_password");	
  var url=$this.attr("href");	
  var usr_id=$(this).attr("rel");
  var password=$usr_password.attr("value"); 
  $.ajax({  
	       url:url,
		   type:"post",
		   dataType:"JSON",
		   data:{usr_id:usr_id,usr_password:password},
		   success:function(data){
			  if(data.status==200){
				$usr_password.attr("disabled","disabled").attr("value","******");
				$this.removeClass("savePassword");
				$this.text("修改");
			  }  
			  else{
				alert(data.msg);  
			  } 
		   }
	    })		
})
$(".pop").live("click",function(){
  $(".popWindow .popBody").attr("rel",$(this).attr("rel"));
  $(".popWindow .popBody").load($(this).attr("rel"),function(){
	var top=20+parseInt($(document).scrollTop());  
	$(".popWindow").css("top",top);
	$(".popWindow").fadeIn(200);
	$(".popMask").fadeIn(200);  
  });
  return false;	
})
/*$(".popImg").live("click",function(){
  $(".popWrapper .popBody").html("");	
  $(".popWrapper .popBody").attr("rel",$(this).attr("rel"));
  var img="<img style='display:block;margin:20px auto;' src="+$(this).attr("rel")+" />";
  $(".popWrapper .popBody").append(img);
	var top=20+parseInt($(document).scrollTop());  
	$(".popWrapper").css("top",top);
	$(".popWrapper").fadeIn(200);
	$(".popMask").fadeIn(200);  
  
  return false;	
})*/
$(".popClose").live("click",function(){
  $(".popWrapper,.popMask").fadeOut(200);
  return false;	
})
$(document).live('keydown',function(event){
	if (event.keyCode == 27){
	  $(".popClose").click();
	}
})
//$( ".datepicker" ).datepicker({ dateFormat: 'yy-mm-dd' });