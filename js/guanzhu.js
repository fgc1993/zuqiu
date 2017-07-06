 $(function(){
         var flag = ""; // 判断你停止后的操作 要么加载更多 要么刷新
     var down= document.querySelector('#down');  
     // var upTag = document.querySelector('.upTag');
    
     var upTag=$(".bigbox");
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
           var str = "<ul>"+
            "<li>"+
              "<dl>"+
                "<dt><img src='../img/pika.jpg' ></dt>"+
                "<dd>我叫小萌<br/><span>我是小萌我怕谁！哈哈哈哈</span></dd>"+
              "</dl>"+
              "<div><img src='../img/5.jpg' ></div>"+
            "</li>"+
            "<li><img src='../img/cat.jpg' ><p>小丸子啊小丸子</p></li>"+
           "</ul>";
            $(upTag).append(str);
   
            down.innerHTML="上拉";
            myScroll.refresh(); 
            maxScrollY = myScroll.maxScrollY ;
        }; 
 })