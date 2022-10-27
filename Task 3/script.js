/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const myButton = document.getElementById("btn");
const para = document.getElementById("message");

const unorderedList = document.createElement("ul");
const output = document.getElementById("output");
output.append(unorderedList);

function fetchInfo() {
  fetch("https://api.github.com/users")
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.forEach(user => {
        console.log(data);
        const markup = `<li>User login: ${user.login}</br> User avatar URL: ${user.avatar_url} </li>`;

        unorderedList.insertAdjacentHTML("beforeend", markup);
      });
    })

    .catch(error => console.log(error));
  para.style.display = "none";
  myButton.style.display = "none";
}

myButton.addEventListener("click", fetchInfo);
