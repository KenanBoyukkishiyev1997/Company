function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



$(window).scroll(function(){
  if ($(window).scrollTop()<300) {
    $('.nav').css("backgroundColor","#fff"),
    $('.hamburger').css("color","#000")
  }else{
    $('.nav').css("backgroundColor"," #000"),
    $('.hamburger').css("color","#fff")
  }
})