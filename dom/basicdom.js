

//===============mainpulating text==================================================
var p = document.querySelector("p");
p.textContents;
//p.innerHTML="hello"//this things change ur pargharph text(mainpulating)
console.log(p);
//==============mainpulating with attributes=============================================
var img = document.querySelector('img');
img.setAttribute('src','/image/123.jpg');//by using js u can mainpulat img b
img.getAttribute('src')//u can get src of img in console
console.log(img);
//with actor tag
var a = document.querySelector('a');
a.setAttribute('href','https://expressjs.com/')
a.getAttribute('href')
a.textContent="LINK TO EXPRESS JS "
console.log(a);
//==========================EVENTS mainpulating======================================================
var bu =document.querySelector('button');
bu.addEventListener('click',checktext);


const checktext=()=>{
    p.innerHTML='while click text content change';
}
console.log(checktext);
