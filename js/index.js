   $(function(){

 var mySwiper = new Swiper ('.swiper-container', {
  	initialSlide:0,//从0开始算的 默认先显示哪一个
    direction: 'horizontal', //控制切换方向

    paginationClickable:true,
    bulletClass:'bullet',
    bulletActiveClass:'active',

    paginationBulletRender: function(swiper, index, className) {
    	var arr = ['美女','生活','现场'];
      return '<span class="' + className + '">' + arr[index] + '</span>';
    },

    pagination: '.pagination',

    onSlideChangeEnd:function(swiper){
      var index=swiper.activeIndex;
      // console.log(index);
    //第一个滑块
     if(index==0){
         var flag = ""; // 判断你停止后的操作 要么加载更多 要么刷新
     var down= document.querySelector('#down');  
     // var upTag = document.querySelector('.upTag');
    
     var upTag=$(".upTag").eq(index);
      // console.log(upTag);
     var maxScrollY = 0; //定义当前最大的滚动高度

    var myScroll = new IScroll(".wrap",{
       
        tap:true, //当前的滚动列表就支持 tap 事件 
        scrollX:true, //允许左右滚动
   
        probeType: 2,
       
  }); //传当前的包裹层 , 包裹层的高度必须要固定
     setTimeout(function(){
      myScroll.refresh(); 
    },20);

   maxScrollY = myScroll.maxScrollY ; //记录一下 最大的滚动高度

     myScroll.on('scrollStart',function(){
         //console.log(11)
     });

      myScroll.on('scroll',function(){
         if (this.directionY ==1 && this.y< maxScrollY-40 && flag=="") {
            this.maxScrollY = maxScrollY-40 ; //为了滚动停下来。高度 -40（） 
              down.innerHTML = "释放加载";
              flag="down" //你想加载更多
        };
        
        //上拉 拉过了 
         // console.log(maxScrollY-40 +'++++...'+ this.y);

        if (flag =="down" &&  this.directionY==-1 && this.y > maxScrollY-40)  {
             this.maxScrollY = maxScrollY;
           down.innerHTML = "上拉";
             flag="";
        }
      });

       myScroll.on('scrollEnd',function(){
  
          if (flag == "down") {
             down.innerHTML = "数据加载中...";
             flag = "";
          //做加载更多的操作 
             setTimeout(function(){
                 getList();
           },1500)
         };
       });
      }

      //第二个滑块
      if(index==1){
       
         var flag = ""; // 判断你停止后的操作 要么加载更多 要么刷新
        
     var down= document.querySelector('#down1');  
     // var upTag = document.querySelector('.upTag');
    
     var upTag=$(".upTag").eq(index);

     var maxScrollY = 0; //定义当前最大的滚动高度

    var myScroll = new IScroll(".wrap2",{
       
        tap:true, //当前的滚动列表就支持 tap 事件 
        scrollX:true, //允许左右滚动
   
        probeType: 2,
       
  }); //传当前的包裹层 , 包裹层的高度必须要固定
    setTimeout(function(){
      myScroll.refresh(); 
    },20);

   maxScrollY = myScroll.maxScrollY ; //记录一下 最大的滚动高度

     myScroll.on('scrollStart',function(){
         //console.log(11)
     });

      myScroll.on('scroll',function(){
         if (this.directionY ==1 && this.y< maxScrollY-40 && flag=="") {
            this.maxScrollY = maxScrollY-40 ; //为了滚动停下来。高度 -40（） 
              down.innerHTML = "释放加载";
              flag="down" //你想加载更多
        };
        
        //上拉 拉过了 
         // console.log(maxScrollY-40 +'++++...'+ this.y);

        if (flag =="down" &&  this.directionY==-1 && this.y > maxScrollY-40)  {
             this.maxScrollY = maxScrollY;
           down.innerHTML = "上拉";
             flag="";
        }
      });

       myScroll.on('scrollEnd',function(){
  
          if (flag == "down") {
             down.innerHTML = "数据加载中...";
             flag = "";
          //做加载更多的操作 
             setTimeout(function(){
                 getList();
           },1500)
         };
       });

      }
      //第三个滑块
          if(index==2){
       
         var flag = ""; // 判断你停止后的操作 要么加载更多 要么刷新
        
     var down= document.querySelector('#down2');  
     // var upTag = document.querySelector('.upTag');
    
     var upTag=$(".upTag").eq(index);
      // console.log(upTag);
     var maxScrollY = 0; //定义当前最大的滚动高度

    var myScroll = new IScroll(".wrap3",{
       
        tap:true, //当前的滚动列表就支持 tap 事件 
        scrollX:true, //允许左右滚动
   
        probeType: 2,
       
  }); //传当前的包裹层 , 包裹层的高度必须要固定
     setTimeout(function(){
      myScroll.refresh(); 
    },20);
   maxScrollY = myScroll.maxScrollY ; //记录一下 最大的滚动高度

     myScroll.on('scrollStart',function(){
         //console.log(11)
     });

      myScroll.on('scroll',function(){
         if (this.directionY ==1 && this.y< maxScrollY-40 && flag=="") {
            this.maxScrollY = maxScrollY-40 ; //为了滚动停下来。高度 -40（） 
              down.innerHTML = "释放加载";
              flag="down" //你想加载更多
        };
        
        //上拉 拉过了 
         // console.log(maxScrollY-40 +'++++...'+ this.y);

        if (flag =="down" &&  this.directionY==-1 && this.y > maxScrollY-40)  {
             this.maxScrollY = maxScrollY;
           down.innerHTML = "上拉";
             flag="";
        }
      });

       myScroll.on('scrollEnd',function(){
  
          if (flag == "down") {
             down.innerHTML = "数据加载中...";
             flag = "";
          //做加载更多的操作 
             setTimeout(function(){
                 getList();
           },1500)
         };
       });

      }
     function getList(){
           var str = ' <li><img src="img/wanzi.jpg" alt=""></li>'+
             ' <li><img src="img/cat.jpg" alt=""></li>'+
             ' <li><img src="img/cat.jpg" alt=""></li>'+
             ' <li><img src="img/wanzi.jpg" alt=""></li>';
            $(upTag).append(str);
   
            down.innerHTML="上拉";
            myScroll.refresh(); 
            maxScrollY = myScroll.maxScrollY ;
        }; 
  }
  
   }) 
      var flag = ""; // 判断你停止后的操作 要么加载更多 要么刷新
     var down= document.querySelector('#down');  
     // var upTag = document.querySelector('.upTag');
    
     var upTag=$(".upTag");
      // console.log(upTag);
     var maxScrollY = 0; //定义当前最大的滚动高度

    var myScroll = new IScroll(".wrap",{
       
        tap:true, //当前的滚动列表就支持 tap 事件 
        scrollX:true, //允许左右滚动
   
        probeType: 2,
       
  }); //传当前的包裹层 , 包裹层的高度必须要固定
     setTimeout(function(){
      myScroll.refresh(); 
    },20);

   maxScrollY = myScroll.maxScrollY ; //记录一下 最大的滚动高度

     myScroll.on('scrollStart',function(){
         //console.log(11)
     });

      myScroll.on('scroll',function(){
         if (this.directionY ==1 && this.y< maxScrollY-40 && flag=="") {
            this.maxScrollY = maxScrollY-40 ; //为了滚动停下来。高度 -40（） 
              down.innerHTML = "释放加载";
              flag="down" //你想加载更多
        };
        
        //上拉 拉过了 
         // console.log(maxScrollY-40 +'++++...'+ this.y);

        if (flag =="down" &&  this.directionY==-1 && this.y > maxScrollY-40)  {
             this.maxScrollY = maxScrollY;
           down.innerHTML = "上拉";
             flag="";
        }
      });

       myScroll.on('scrollEnd',function(){
  
          if (flag == "down") {
             down.innerHTML = "数据加载中...";
             flag = "";
          //做加载更多的操作 
             setTimeout(function(){
                 getList();
           },1500)
         };
       });
        function getList(){
           var str = ' <li><img src="img/wanzi.jpg" alt=""></li>'+
             ' <li><img src="img/cat.jpg" alt=""></li>'+
             ' <li><img src="img/cat.jpg" alt=""></li>'+
             ' <li><img src="img/wanzi.jpg" alt=""></li>';
            $(upTag).append(str);
   
            down.innerHTML="上拉";
            myScroll.refresh(); 
            maxScrollY = myScroll.maxScrollY ;
        }; 
     
   			//所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
   			  document.addEventListener('plusready', function(){
   			//调用摄像头
   			
   			$("#camera").on("click",function(){
   				
   				var cmr = plus.camera.getCamera(); //index 1 主要，2辅
   				
   				var format = cmr.supportedImageFormats[0];
   			
   				cmr.captureImage(function(capturedFile){
   					//做你自己的业务逻辑，传到后台，显示一下
   					
   					
     					console.log(capturedFile);
   					plus.io.resolveLocalFileSystemURL(capturedFile,function(entry){
   						
   						var img = new Image();
   					
   					    img.src=entry.fullPath;
   					    console.log(entry.fullPath);
   					    
	   					img.onload= function(){
	   						$(".upTag").append(this);
	   					}
	   					
   					},function(){
   						
   					})//通过URL参数获取目录对象或文件对象
   					
   					
   					
   				},function(){
   					
   					
   				},{
   					format:format
   				})
   			})
   		});
   
  
  
})
   