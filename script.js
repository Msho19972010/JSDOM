// DOM

// document.getElementBy...("");

// let div = document.getElementById("playground");

// console.log(div);

// let p = document.getElementsByClassName("text");

// console.log(p);

// let h1 = document.getElementsByTagName("h1");

// console.log(h1);

// querySelector("");

// let h1 = document.querySelector("h1");

// console.log(h1);

// let text = document.querySelectorAll(".text");

// console.log(text);

// Getting access to the contents of DOM ellement.

// let div = document.getElementById("playground");
// let h1 = document.querySelector("h1");
// let input = document.querySelector("input");
// Замена содержимого

// div.innerHTML = '<h2 style="color: skyblue;">Hello from JS</h2>'; // получ доступа к сод HTML эл в текстовом формате т возмлжность менять сод
// h1.textContent = "Changed from JS"; // получ доступа к текстовому сод эл и возможность менять сод
// input.value = "I am from js"; // получ доступа к сод эл и возможность менять сод

// console.log(div.innerHTML);
// console.log(h1.textContent);
// console.log(input.value);

// Atributes

// let a = document.querySelector("a");
// let oldHref = a.getAttribute("href"); // Полученеие достура к атрибутам HTML эл

// a.setAttribute("href", "https://ya.ru"); // замена значений атрибутов элементов
// a.textContent = "Yandex"; // замена текстового значения

// console.log(a.attributes);
// console.log(a.getAttribute("title"));

// var box1 = document.querySelector("#box1");
// var box2 = document.querySelector("#box2");

// box1.classList.add("red"); // add new class
// box2.classList.remove("blue"); // remove class
// console.log(box2.classList.contains("blue")); // checks the presence of a certain class

// Scripts in JS

// var button = document.querySelector("button");
// var h1 = document.querySelector("h1");
// var input = document.querySelector("input");

// function buttonHandler() {
//   h1.textContent = input.value;
// }

// h1.addEventListener("mouseenter", function () {
//   this.style.color = "red";
//   this.style.backgroundColor = "black";
// });

// h1.addEventListener("mouseleave", function () {
//   this.style.color = "black";
//   this.style.backgroundColor = "transparent";
// });

// button.addEventListener("click", buttonHandler);

// Coming and immersion

// var divs = document.querySelectorAll("div");

// console.log(divs);

// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener(
//     "click",
//     function () {
//       console.log(this.getAttribute("id"));
//     },
//     true
//   );
// }

// Object of event

// var divs = document.querySelectorAll("div");
// var link = document.querySelector("a");

// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", function (event) {
//     event.stopPropagation(); // stoped event on the clicked element
//     console.log(this.getAttribute("id"));
//   });
// }

// link.addEventListener("click", handleLinkClick);

// function handleLinkClick(event) {
//   event.preventDefault();

//   let div = divs[0];

// Confused operator(условный оператор)

// if (div.style.display === "none") {
//   div.style.display = "flex";
// } else {
//   div.style.display = "none";
// }

// terner type

//   div.style.display = div.style.display === "none" ? "flex" : "none";
// }

// Delegation

// var p = document.querySelectorAll("p");

// for (let i = 0; i < p.length; i++) {
//   p[i].addEventListener("click", function (event) {
//     event.target.style.color = "blue";
//   });
// }

// document.querySelector(".wrapper").addEventListener("click", function (event) {
//   let tagName = event.target.tagName.toLowerCase(); // we use toLower case to prevent conflicts

//   if (tagName === "p") {
//     event.target.style.color = "blue";
//   }

//   if (event.target.classList.contains("color")) {
//     event.target.style.color = "red";
//   }
// });
