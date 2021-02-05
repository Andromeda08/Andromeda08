//! Responsive Navbar
var navbar = $('#nav-bar');
var minWidth = 700;

if ($(window).width() < minWidth) {
    navbar.css('display', 'none');
 }

$(window).resize(function() {
    if ($(window).width() < minWidth) {
       navbar.css('display', 'none');
    }
   else {
    navbar.css('display', 'block');
   }
});

//! Scroll to top button
var stt = $('#scroll-to-top');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
     stt.css('display', 'block')
   } else { 
      stt.css('display', 'none'); }
}

function scrollToTop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

 //html for unused stt button <button onclick="scrollToTop()" id="scroll-to-top"><i class="fa fa-chevron-circle-up fa-3x" aria-hidden="true"></i></button>