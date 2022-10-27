/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    displayData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

let myOutput = document.getElementById("output");
myOutput.style.marginLeft = "20px";
myOutput.style.border = "2px solid black";
myOutput.style.backgroundColor = "beige";

function displayData(data) {
  for (let i = 0; i < data.length; i++) {
    myOutput.innerHTML +=
      "Brand: " +
      data[i].brand +
      "</br> " +
      "Model: " +
      data[i].models +
      "</br>";

    console.log(myOutput);
  }
}
