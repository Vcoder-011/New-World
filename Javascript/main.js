"use strict"

//Signing In
document.getElementById("website").style.display = "none"

function userPass() {
  var username = (document.getElementById("username").value)
  var password = document.getElementById("pass").value

  if (username == ("123") && password == ("abc")) {
    document.getElementById("website").style.display = "block"
    document.getElementById("gatekeeper").style.display = "none"
  }
  else {
    alert("Please try again");
  }
}
//Tabs
tab("homePage");

function tab(tab) {
  document.getElementById("homePage").style.display = "none"
  document.getElementById("developmentPathPage").style.display = "none"
  document.getElementById("characterScreenPage").style.display = "none"
  document.getElementById("encounterRunnerPage").style.display = "none"
  document.getElementById("sciSkillTreePage").style.display = "none"
  document.getElementById("NPCListPage").style.display = "none"
  document.getElementById("mapPage").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}


//Button Lights
function resetColor() {
  document.getElementById("nav0").style.opacity = 0.6;
  document.getElementById("nav1").style.opacity = 0.6;
  document.getElementById("nav2").style.opacity = 0.6;
  document.getElementById("nav3").style.opacity = 0.6;
  document.getElementById("nav4").style.opacity = 0.6;
  document.getElementById("nav5").style.opacity = 0.6;
  document.getElementById("nav6").style.opacity = 0.6;
}

