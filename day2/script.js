function changeText() {
  document.getElementById("myHeader").innerHTML = "Mouse in";
}

function revertText() {
  document.getElementById("myHeader").innerHTML = "Mouse out";
}

function getStyle() {
  document.getElementById("myHeader").style.color = "red";
  document.getElementById("myHeader").style.backgroundColor = "yellow";
  document.getElementById("myHeader").style.textDecoration = "underline";
}

function controlBox() {
  let box = document.getElementById("box");
  box.style.backgroundColor =
    box.style.backgroundColor === "blue" ? "brown" : "blue";
}

function selectControl() {
  let selector = document.querySelector("#selector");
  value = selector.value;
  document.getElementById("box").style.backgroundColor = value;
}

function boxDisplay() {
  let box = document.getElementById("box");
  box.style.display = box.style.display === "none" ? "block" : "none";
  document.getElementById("boxDisplay").innerText =
    box.style.display === "none" ? "Show Box" : "Hide Box";
}

function addOption() {
  let optionValue = document.getElementById("inputOption").value;
  if (optionValue === "") return;
  let selector = document.querySelector("#selector");
  let option = document.createElement("option");
  option.text = optionValue;
  selector.add(option);
}

let currentLocation = "nw";
function changeLocation(location) {
  let box = document.getElementById("txtbox");
  switch (location) {
    case "nw":
        box.style.alignItems = "start";
      box.style.justifyContent = "flex-start";
      break;
    case "n":
        box.style.alignItems = "start";
      box.style.justifyContent = "center";
      break;
    case "ne":
        box.style.alignItems = "start";      
        box.style.justifyContent = "flex-end";
      break;
    case "w":
      box.style.justifyContent = "start";
      box.style.alignItems = "center";
      break;
    case "c":
      box.style.justifyContent = "center";
      box.style.alignItems = "center";
      break;
    case "e":
      box.style.justifyContent = "end";
      box.style.alignItems = "center";
      break;
    case "sw":
        box.style.justifyContent = "flex-start";
      box.style.alignItems = "end";
      break;
    case "s":
        box.style.justifyContent = "center";
      box.style.alignItems = "end";
      break;
    case "se":
        box.style.justifyContent = "flex-end";
      box.style.alignItems = "end";
    default:
      console.log("Invalid location");
      break;
  }
}

let id = 1;

  document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting the traditional way
    // Get the values from the form
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    // Create a new row and cells
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.textContent = id++;
    cell2.textContent = name;
    cell3.textContent = age;
    cell4.textContent = gender;
    // Optionally clear the form fields
    document.getElementById('dataForm').reset();
});
