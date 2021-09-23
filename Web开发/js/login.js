	function fun(){
				var name=document.getElementById("user").value;
				var pass=document.getElementById("pass").value;
				if (name==""){
					alert("账号不能为空！");
				}else if(pass==""){
					alert("密码不能为空！");
				}
				else if(name=="2013378143"&&pass=="15884235474")
			{
				window.location.href="http://127.0.0.1:8020/%e7%bd%91%e7%ab%99%e5%bb%ba%e8%ae%be/html/%e9%a6%96%e9%a1%b5.html"
			}
				else {
					alert("账号或者密码错误！！！")
				}
				
			}