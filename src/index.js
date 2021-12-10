
import '@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss';
import './scss/style.scss';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';
import 'jquery-validation/dist/jquery.validate.min.js';
import 'jquery-validation/dist/localization/messages_ar.min.js';

$(document).ready(function(){
  if ($(this).scrollTop() >= 200) {
    $("#navBar").addClass("noTransparent");
  } else {
    $("#navBar").removeClass("noTransparent");
  }
  $("a.scroll").on('click', function(event) {
       var hash = this.hash;

       $('html, body').animate({scrollTop: $(hash).offset().top -30}, 800, function(){});
   
   });
   $(function (){
    $("#commentForm").validate();
  });
});
$(document).ready(function(){
});
console.log("مرحبا بك فى مدرسة علمنى");

