const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

const color = document.querySelector(".color");

red.addEventListener("click", function () {
  const redd = document.createElement("div");
  redd.classList.add("redblock");
  redd.textContent = "red";
  color.appendChild(redd);
});

blue.addEventListener("click", function () {
  const bluee = document.createElement("div");
  bluee.classList.add("blueblock");
  bluee.textContent = "blue";
  color.appendChild(bluee);
});

green.addEventListener("click", function () {
  const grenn = document.createElement("div");
  grenn.classList.add("greenblock");
  grenn.textContent = "green";
  color.appendChild(grenn);
});
