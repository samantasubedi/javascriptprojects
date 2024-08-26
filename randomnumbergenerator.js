document.getElementById("btn").addEventListener("click", function () {
  let x = 50;
  let y = 0;
  x = Number(document.getElementById("maxbox").value);
  y = Number(document.getElementById("minbox").value);
  let a = Math.random() * (x - y);
  let b = Math.floor(a) + y + 1;
  document.getElementById("number").textContent = b;
});
