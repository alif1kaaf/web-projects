function convertTemperature() {
  let val = document.getElementById("input_value");
  let userInput = document.getElementById("userInput");
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  let resultText = document.getElementById("resultText");

  val.addEventListener("keyup", convertTemperature);
  input.addEventListener("change", convertTemperature);
  output.addEventListener("change", convertTemperature);

  let inputValue = input.value;
  let outputValue = output.value;
  let result;

  //Celsius
  if (inputValue === "celsius" && outputValue === "fahrenheit") {
    result = Number((val.value) * 9 / 5) + 32;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "celsius" && outputValue === "kelvin") {
    result = Number(val.value) + 273.15;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "celsius" && outputValue === "celsius") {
    result = val.value;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  }

  //Fahrenheit
  if (inputValue === "fahrenheit" && outputValue === "celsius") {
    result = Number((val.value - 32) * 5) / 9;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "fahrenheit" && outputValue === "kelvin") {
    result = Number((val.value - 32) * 5 / 9) + 273.15;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "fahrenheit" && outputValue === "fahrenheit") {
    result = val.value;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  }

  //Kelvin
  if (inputValue === "kelvin" && outputValue === "celsius") {
    result = Number(val.value) - 273.15;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "kelvin" && outputValue === "fahrenheit") {
    result = Number((val.value - 273.15) * 9 / 5) + 32;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  } else if (inputValue === "kelvin" && outputValue === "kelvin") {
    result = val.value;
    if (result == userInput.value) {
      document.getElementById("resultText").innerHTML = "Correct Answer!";
    } else {
      document.getElementById("resultText").innerHTML = "Incorrect Answer!";
    }
  }
}

function reset() {
  convertTemperature();
}