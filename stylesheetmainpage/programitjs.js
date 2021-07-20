
function menuopen(){
  document.getElementById("mySidenav").style.width = "100%";

}
function menuclose(){
  document.getElementById("mySidenav").style.width = "0%";
}

menubutton.addEventListener('click', menuopen)
