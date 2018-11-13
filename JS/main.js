$(document).ready(function(){
  $(".close, .hamburger").click(function(e){
  e.preventDefault();
  $(".main-nav").toggleClass('open-nav');
});

 });
