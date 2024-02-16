//<![CDATA[
//Slider Image
$(document).ready(function() {
    $(".paging").show(); 
    $(".paging a:first").addClass("active");

var imageWidth = $(".easyslider").width(); 
var imageSum = $(".image_reel img").size(); 
var imageReelWidth = imageWidth * imageSum;

    $(".image_reel").css({'width' : imageReelWidth});

rotate = function(){ var triggerID = $active.attr("rel") - 1; 

var image_reelPosition = triggerID * imageWidth;

    $(".paging a").removeClass('active');
        $active.addClass('active');

    $(".easytitledes").stop(true,true).slideUp('slow');
    $(".easytitledes").eq( 
    $('.paging a.active').attr("rel") - 1 ).slideDown("slow"); 
    $(".image_reel").animate({left: -image_reelPosition}, 400 );
    };

rotateSwitch = function(){
    $(".easytitledes").eq( $('.paging a.active').attr("rel") - 1 ).slideDown("slow");

play = setInterval(function(){
    $active = $('.paging a.active').next();

if ( $active.length === 0) {
    $active = $('.paging a:first'); } rotate(); }, 4000); };

rotateSwitch(); $(".image_reel a, .easytitledes a").hover(function() {
    clearInterval(play); }, function() { rotateSwitch();
    });
    $(".paging a").click(function() { $active = $(this);
    clearInterval(play); rotate(); rotateSwitch();  return false;
    });
});


// Date Now
var tw = new Date();
if (tw.getTimezoneOffset() == 0) (a=tw.getTime() + ( 7 *60*60*1000))
else (a=tw.getTime());
tw.setTime(a);
var tahun= tw.getFullYear ();
var hari= tw.getDay ();
var bulan= tw.getMonth ();
var tanggal= tw.getDate ();
var hariarray=new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu");
var bulanarray=new Array("Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des");
document.getElementById("date").innerHTML = hariarray[hari]+", "+tanggal+" "+bulanarray[bulan]+" "+tahun;

// Back to Top Button
let mybutton = document.getElementById("myTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Snackbar
function mySnackbar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

//Modal Bottom
var modal = document.getElementById("myModal");
var btn = document.getElementById("button-modal");
var span = document.getElementsByClassName("close-modal")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//]]>