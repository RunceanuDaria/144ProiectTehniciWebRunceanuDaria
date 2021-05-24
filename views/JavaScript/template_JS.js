function creare(tag,text)
{
var elnou=document.createElement(tag);
var textnou=document.createTextNode(text);
elnou.appendChild(textnou);
return elnou;
}
window.onload=function()
{var list=document.getElementById("lista");
var el1=creare("li","JavaScript");
list.appendChild(el1);
var el2=creare("h2","Tehnici Web");
document.body.insertBefore(el2,list);
}
