var pageSize=10;

$(".close,.cancel,.close_window").live("click",function(){
  $(".pop_add_shop,.mask").fadeOut("fast");	
  return false;
})
$(".close2,.cancel2").click(function(){
  $(".pop_add_shop_user,.mask2").fadeOut("fast");	
  return false;
})
 
$(".add_shop_user").click(function(){
  $(".pop_add_shop_user,.mask2").fadeIn("fast"); 
  $(".mask2").height($("body").height());
  return false; 
})

function set_cookie(name, value, hours){  
	var expire = "";  
	if(hours != null){  
		expire = new Date((new Date()).getTime() + hours * 3600000);  
		expire = "; expires=" + expire.toGMTString();  
	}  
	document.cookie = name + "=" + escape(value) + expire;  
}  
		
function get_cookie(name){ 
         var strCookie=document.cookie; 
         var arrCookie=strCookie.split("; "); 
         for(var i=0;i<arrCookie.length;i++){ 
               var arr=arrCookie[i].split("="); 
               if(arr[0]==name)
               {
                    return unescape(arr[1]); 
 
               }
         } 
		 return "";
} 
function getRequest() 
  {
	 var rel= window.location.href;
	 var index=rel.indexOf("?");
	 
	 var url = rel.substring(index); //获取url中"?"符后的字串
	 var theRequest = {};
	 if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
		   theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
	 }
	 return theRequest; 
  }
  

 function fn_ajax(url,input_data,callback)
{
	
  	$.ajax({
					  type: "post",
					  url: url,
					  data:input_data ,
					  dataType: "json",
					  success: function (data) 
					  { 
						  
						  if(data.status==200)
						  {
							  eval(callback+"("+JSON.stringify(data.data)+")");
							 
						  }
						  else
						  {
						    alert(data.msg); 
						  }
					  }, 
					  error: function (msg) 
					  { 
						  console.log(msg); 
					  }
				})	

}


function   isDate(strDate){ 
        var   strSeparator = "-";   //日期分隔符 
        var   strDateArray; 
        var   intYear; 
        var   intMonth; 
        var   intDay; 
        var   boolLeapYear; 
        //var strDate=form1.a.value   //表单中的日期值
        strDateArray = strDate.split(strSeparator); 
        
        if(strDateArray.length!=3)    {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
        
        intYear  =  Number(strDateArray[0],10); 
        intMonth  =  Number(strDateArray[1],10); 
        intDay   =   Number(strDateArray[2],10); 
        
        if(isNaN(intYear)||isNaN(intMonth)||isNaN(intDay))   { alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false; }
        
        if(intMonth>12||intMonth<1) {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
        
        if((intMonth==1||intMonth==3||intMonth==5||intMonth==7||intMonth==8||intMonth==10||intMonth==12)&&(intDay>31||intDay<1))   {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
        
        if((intMonth==4||intMonth==6||intMonth==9||intMonth==11)&&(intDay>30||intDay<1))   {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
        
        if(intMonth==2){ 
              if(intDay<1)   {   alert('提示: 日期格式错误! \r\n 请依【YYYY-MM-DD】格式输入！'); return   false;   }
              
              boolLeapYear   =   false;  
            if((intYear%4==0 && intYear %100!=0)||(intYear %400==0))
    {
      boolLeapYear=true;
    }
              
              if(boolLeapYear){ 
                    if(intDay>29) {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
              } 
              else{ 
                    if(intDay>28)  {   alert('提示: 日期格式错误! \r\n  请依【YYYY-MM-DD】格式输入！'); return   false;   }
              } 
        } 
        
        return   true; 
  } 
