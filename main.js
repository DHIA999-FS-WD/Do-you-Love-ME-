function chBtn() {
    document.getElementById("no").innerHTML = "Yes Also!";
  }
  function norBtn() {
    document.getElementById("no").innerHTML = "No";
  }

document.getElementById("yes").addEventListener("click", myFunction);
document.getElementById("no").addEventListener("click", myFunction2);

function myFunction() {
  document.getElementById("text").innerHTML = "I LOVE YOU TOO !";
}
function myFunction2() {
    document.getElementById("text").innerHTML = "I LOVE YOU TOO!";
  }
// Copyright ©-All rights are reserved ||Dhia Bouzaiene
function changeImg() {
    document.getElementById("me").removeAttribute("style"); 
    document.getElementById("qst").setAttribute("style", "display: none;");
    document.getElementById("myLinks").removeAttribute("style"); 
    document.getElementById("btns").setAttribute("style", "display: none;");
  }
  function changeImg2() {
    document.getElementById("smile").removeAttribute("style"); 
    document.getElementById("qst").setAttribute("style", "display: none;");
    document.getElementById("myLinks").removeAttribute("style"); 
    document.getElementById("btns").setAttribute("style", "display: none;");
  }



