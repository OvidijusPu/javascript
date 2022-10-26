/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
count = 0;
let myButton = document.getElementById("btn__element");
function onClick() {
  let output = document.getElementById("btn__state");
  output.innerHTML = count += 1;
}
myButton.addEventListener("click", onClick);
