$(document).ready(function(){
    $('.navbar').hide();
   window.addEventListener("scroll", function(){
       if(window.scrollY > 300){
           $('.navbar').fadeIn();
       }
       else {
           $('.navbar').fadeOut();
       }
   }, false);
});