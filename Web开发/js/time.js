setInterval(function(){
		var time=new Date();
		var year=time.getFullYear();
		var month=time.getMonth();
		var day0=time.getDate();
		var day=time.getDay();
		var xqs=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		var xq=xqs[day];
		var hour=time.getHours();
		var minute=time.getMinutes();
		var sencond=time.getSeconds();
		var Millisecond=time.getMilliseconds();
		hour=checkTime(hour);
		 minute=checkTime(minute);
		 sencond=checkTime(sencond);
		 month=checkTime(month);
		 day0=checkTime(day0);
		var str=year+"年"+month+"月"+day0+"日"+xq+hour+":"+minute+":"+sencond;
		
		document.getElementById("time").innerHTML=str;
		},1000)
   function checkTime(i)     
            {     
                if(i<10){  
                    i="0" + i;  
                }     
                  return i;  
            }   

