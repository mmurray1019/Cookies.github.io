var cookie = 0;
function addCookie(){
     cookie = cookie + 1;
  document.getElementById("cookies").innerHTML = cookie;
};  
function save(){
  localStorage.setItem("cookies", cookie);
};
function load(){
cookie = localStorage.cookies;
document.getElementById("cookies").innerHTML = cookie;
};