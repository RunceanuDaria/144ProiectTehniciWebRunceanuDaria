
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("ora").innerHTML = d.toLocaleTimeString();
}


window.onload = function()
{
var par=document.getElementById("par");
var par2 = document.getElementById("par2");
document.body.onkeyup=function(event)
{ 
switch (event.key) {
 case "r":
 par.style.color="red";
 par2.style.color="red";
 break;
 case "v":
 par.style.color="green";
 par2.style.color="green";
break;
 case "a":
 par.style.color="blue";
 par2.style.color="blue";
 break;
 case "g":
 par.style.color="yellow";
 par2.style.color="yellow";
 break;
 case "m":
 par.style.color="purple";
 par2.style.color="purple";
 break;
 case "p":
par.style.color="orange";
par2.style.color="orange";
break;
 default:
 alert("Ai apasat o tasta a carei litera nu corespunde unei culori."); return; 
 }
document.getElementById("tasta").innerHTML=event.key; 
}
}

function creare(tag,text)
{
var elnou=document.createElement(tag);
var textnou=document.createTextNode(text);
elnou.appendChild(textnou);
return elnou;
}

function GenerarePovesti() {
    var list = document.getElementById("lista_povesti");
    var el1 = creare("li","Zana zorilor, autor: Ioan Slavici");
    el1.style.color = "brown";
    list.appendChild(el1);
    var el1 = creare("li","Spaima Zmeilor, autor: Ioan Slavici");
    el1.style.color = "brown";
    list.appendChild(el1);
    var el1 = creare("li","Baiet sarac, autor: Ioan Slavici");
    el1.style.color = "brown";
    list.appendChild(el1);
    var el1 = creare("li","Cei doisprezece frati, autor: Fratii Grimm");
    el1.style.color = "brown";
    list.appendChild(el1);
    var el1 = creare("li","Oraselul tabletelor, autor: Cristina Pop");
    el1.style.color = "brown";
    list.appendChild(el1);
    
}

var demo = document.getElementById("mouse");


function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; 
              }
    return color;
                

    }
            
            
 var count = 0;
 function tellPos(event){

 var x = event.clientX;
 var y = event.clientY; 
 var coor = "X coords: " + x + ", Y coords: " + y;
            
 var MouseButton = document.createElement("button");
 MouseButton.id = "mouse";
 MouseButton.style.position = "absolute";
 MouseButton.style.top = "0px";
 MouseButton.style.left = "0px";
 MouseButton.innerHTML = count;
 MouseButton.style.left = parseInt(MouseButton.style.left) + x + "px";
 MouseButton.style.top = parseInt(MouseButton.style.top) + y + "px";
 MouseButton.style['background-color'] = getRandomColor();
            
 document.body.append(MouseButton);
            count++;
            
 window.setTimeout(function(){ MouseButton.style.display = "none";}, 1000)
            
          }
window.addEventListener("click", tellPos);