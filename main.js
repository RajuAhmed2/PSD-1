const count1 = document.querySelector(".counter-1");
const count2 = document.querySelector(".counter-2");
const count3 = document.querySelector(".counter-3");
const count4 = document.querySelector(".counter-4");

var count = 1;

setInterval(function(){
     if(count <= 29){
          count++;
          count1.innerText = count;
     }

},10)
setInterval(function(){
     if(count <= 979){
          count++;
          count2.innerText = count;
     }

},10)
setInterval(function(){
     if(count <= 49){
          count++;
          count3.innerText = count;
     }

},10)
setInterval(function(){
     if(count <= 98){
          count++;
          count4.innerText = count;
     }

},10)

// barfiller
$('#bar1').barfiller({
     barColor: '#FF5E14',
     tooltip:true,
     duration: 2000,
     animateOnResize: false,
     symbol: "%"
   });
   $('#bar2').barfiller({
     barColor: '#FF5E14',
     tooltip:true,
     duration: 2000,
     animateOnResize: false,
     symbol: "%"
   });
   $('#bar3').barfiller({
     barColor: '#FF5E14',
     tooltip:true,
     duration: 2000,
     animateOnResize: false,
     symbol: "%"
   });


   function openNav() {
     document.getElementById("mySidenav").style.width = "250px";
   }
   
   function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
   }


   $('.owl-carousel').owlCarousel({
     center:true,
     loop:true,
     margin:10,
     nav:false,
     dots:false,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true,
     responsive:{
         0:{
             items:1
         },
         400:{
              items:1
         },
         450:{
          items:2
          },
         600:{
             items:3
         },
         1000:{
             items:5
         }
     }
 });



 AOS.init({
     duration: 2000,
 });
