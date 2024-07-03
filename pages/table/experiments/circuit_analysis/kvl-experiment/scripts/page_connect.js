var app = document.getElementById("aim");
var app = document.getElementById("app");
var theory = document.getElementById("theory");
var proce = document.getElementById("procedure");
var result = document.getElementById("result");
var simulation = document.getElementById("simulation");
var gotoedit = document.getElementById("gotoedit");


if(aim){
    aim.addEventListener("click", function() {
        window.location.href = "../kvl-aim/kvl_aim.html"; // Replace "another_page.html" with the URL of the page you want to navigate to
      });
  }


if(app){
    app.addEventListener("click", function() {
        window.location.href = "../kvl-apparatus/kvl_apparatus.html"; // Replace "another_page.html" with the URL of the page you want to navigate to
      });
  }


if(theory){
    theory.addEventListener("click", function() {
        window.location.href = "../kvl-theory/kvl_theory.html"; // Replace "another_page.html" with the URL of the page you want to navigate to
      });
  }


if(proce){
    proce.addEventListener("click", function() {
        window.location.href = ".."; // Replace "another_page.html" with the URL of the page you want to navigate to
      });
  }


  if(result){
    result.addEventListener("click", function() {
        window.location.href = "../kvl-result/kvl_result.html"; // Replace "another_page.html" with the URL of the page you want to navigate to
      });
  }

  
if(simulation){
    simulation.addEventListener("click", function() {
        window.location.href = "../kvl-simulation/kvl_simulation.html"; // Replace "another_page.html" with the URL of the page you want to navigate to
      });
  }


if(gotoedit){
    gotoedit.addEventListener("click", function() {
        window.location.href = "../kvl-simulation/editor/editor.html"; // Replace "another_page.html" with the URL of the page you want to navigate to
      });
  }