/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById("output").style.marginLeft = "200px";
document.getElementById("output").style.marginRight = "200px";
document.getElementById("output").style.padding = "20px";
document.getElementById("output").style.backgroundColor = "black";
document.getElementById("output").style.color = "white";
document.getElementById("output").style.border = "2px solid black";
const form = document.querySelector("form");
function convertKg(e) {
  e.preventDefault();
  let input = document.getElementById("search").value;
  let allInOne = [
    "Lbs: " + input * 2.2046,
    "Grams: " + input / 0.001,
    "Oz: " + input / 0.0283495231
  ];
  document.getElementById("output").innerHTML = allInOne.join("</br>");
}
form.addEventListener("submit", convertKg);
