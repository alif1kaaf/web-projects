function convertVolume() {
  let val = document.getElementById("input_value");
  let userInput = document.getElementById("userInput");
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  let resultText = document.getElementById("resultText");

  val.addEventListener("keyup", convertVolume);
  input.addEventListener("change", convertVolume);
  output.addEventListener("change", convertVolume);

  let inputValue = input.value;
  let outputValue = output.value;
  let result;

  //Liters
  if (inputValue === "liters" && outputValue === "gallons") {
    result = Number(val.value) * 0.264;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "liters" && outputValue === "cups") {
    result = Number(val.value) * 4.227;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "liters" && outputValue === "liters") {
    result = val.value;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  }

  //Gallons
  if (inputValue === "gallons" && outputValue === "liters") {
    result = Number(val.value) * 3.785;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "gallons" && outputValue === "cups") {
    result = Number(val.value) * 16;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "gallons" && outputValue === "gallons") {
    result = val.value;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  }

  //Cups
  if (inputValue === "cups" && outputValue === "liters") {
    result = Number(val.value) * 0.237;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "cups" && outputValue === "gallons") {
    result = Number(val.value) * 0.0625;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "cups" && outputValue === "cups") {
    result = val.value;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  }
}

function reset() {
  convertVolume();
}