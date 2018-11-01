 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
 function hambut() {
//    document.getElementById("myDropdown").classList.toggle("show");

} 

// Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event){
  if(event.target.matches('i') || event.target.matches('.dropbtn')) {
    document.getElementById("myDropdown").classList.toggle("show");
  } 
  else if (!event.target.matches('.dropbtn')  ) {
    var dropdowns = document.getElementsByClassName("hambarCont");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

var klick = document.querySelector(".rub h1");
klick.style.color = "white"
klick.addEventListener("click", function(){
   if(klick.style.color == "white"){
    klick.classList.remove("klickadd");
    klick.style.color = "blue";
    void klick.offsetWidth;
    klick.classList.add("klickadd");

   } 
    else if(klick.style.color == "blue"){
      klick.classList.remove("klickadd");
      klick.style.color = "green";
      void klick.offsetWidth;
      klick.classList.add("klickadd");

  } 
  else{
    klick.classList.remove("klickadd");
    klick.style.color = "white";
    void klick.offsetWidth;
    klick.classList.add("klickadd");
  }
  
});

/* var klickAnim = document.querySelector(".navbar a");

klickAnim.addEventListener("click", function(){
  klickAnim.classList.add("klickadd");
});
 */