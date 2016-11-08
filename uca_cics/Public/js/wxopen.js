

//$(document).ready(function(){
//var ua = navigator.userAgent.toLowerCase();
//
//if(ua.match(/MicroMessenger/i)=="micromessenger")
//	{return true;} 
//	//else {window.location.href="http://www.wxyxb.cn"; }
//    else {alert('璇峰湪鎵嬫満涓婃祻瑙堬紝璋㈣阿锛�');}
//	
//	
// }
//)
//
//function checsessoin()   {     
//var strSession = "<%=Session["GZWXName"] %>".toString();        
//if( strSession == "")       
//{          alert('璇峰厛鐧诲綍');          
//return false;        
//}    
//}





function getCookie(c_name)
{
   if(document.cookie.length>0)
   {
       c_start=document.cookie.indexOf(c_name + "=")
        if(c_start!=-1){ 
          c_start=c_start + c_name.length+1 
          c_end=document.cookie.indexOf(";",c_start)
         if(c_end==-1) c_end=document.cookie.length
          return unescape(document.cookie.substring(c_start,c_end))
         }
   }
     return ""
}


$(document).ready(function(){
var ua = navigator.userAgent.toLowerCase();
var username=getCookie("GZWXLoginName");

if(ua.match(/MicroMessenger/i)=="micromessenger" || username != "")  
	{return true;} 
	//else {window.location.href="http://www.wxyxb.cn"; }
    else {alert('璇锋偍鍦ㄥ井淇′腑娴忚锛岃阿璋紒');
	window.location.href="http://weixin.qq.com/"; 
	}
	
	
 }
)









