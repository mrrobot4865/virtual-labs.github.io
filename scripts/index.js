

var gb1 = document.getElementById("Get-button-1");
var gb2 = document.getElementById("Get-button-2");
var cab = document.getElementById("CA-button");
var kvl = document.getElementById("kvl-button");

if(gb1){
  gb1.addEventListener("click", function() {
      window.location.href = "./pages/table/table.html"; // Replace "another_page.html" with the URL of the page you want to navigate to
    });
}
  
if (gb2){
  gb2.addEventListener("click", function() {
    window.location.href = "./pages/table/table.html"; // Replace "another_page.html" with the URL of the page you want to navigate to
  });
}

if (cab){
  cab.addEventListener("click", function() {
    window.location.href = "../experiments/caexperiments.html"; // Replace "another_page.html" with the URL of the page you want to navigate to
  });
}

if(kvl){
  kvl.addEventListener("click", function() {
    window.location.href = ""; // Replace "another_page.html" with the URL of the page you want to navigate to
  });
}