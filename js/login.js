$(function(){
	$("#btn").on("click",function(){
		
               location="../index.html";
	
	});
	
		document.addEventListener("plusready", function(){
			$("#webo").on("click",function(){
			plus.oauth.getServices(function(services){
				var sina="";
				services.forEach(function(item,index){
					if(item.id=="sinaweibo"){
						sina=item;
					}					
				})
				if(sina){
   						sina.login(function(event){
   						// 做你自己的业务逻辑
   						//console.log(JSON.stringify(event.target.userInfo));
	   						location="../index.html";
	   						
	   					},function(){
	   						alert(1)
	   					})
   					}
			})
			
			
			
			
			
		})
	})
})