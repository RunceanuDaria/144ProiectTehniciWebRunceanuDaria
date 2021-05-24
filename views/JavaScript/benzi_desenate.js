// modificare stil elemente

var citat_footer = document.getElementById("citat");
citat_footer.style.color = "darkblue";

window.onload = function ()
{
var titluri = document.getElementsByTagName("h2");
console.log(titluri);
alert("In aceasta pagina gasiti "+ titluri.length + " subtitluri care v-ar putea interesa.");
for(var titlu of titluri)
 {titlu.style.color="darkblue";}
}


var x = document.getElementById("audio_book");

window.onload = function playAudio() {
  x.play();
}

window.onload = function pauseAudio() {
  x.pause();
}







