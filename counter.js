let count = 0;
const number = document.getElementById("number");
document.getElementById("increase").onclick = function () {
  count++;
  number.textContent = count;
};
document.getElementById("decrease").onclick = function (e) {
  console.log(e);
  count--;
  number.textContent = count;
};
document.getElementById("reset").addEventListener("click", function () {
  count = 0;
  number.textContent = count;
});

document.addEventListener("mousemove", (e) => {
  console.log({
    x: e.clientX,
    y: e.clientY,
  });
});

// addEventListener("click", function (e) {
//   console.log(e);
// });

// document.addEventListener("click", (e) => {
//   e.target.id == "increase"
//     ? count++
//     : e.target.id == "decrease"
//     ? count--
//     : (count = 0);
//   document.getElementById("number").innerText = count;
// });
