// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(fahrenheit) {
    fahrenheit = (temperature*9/5) + 32;
    alert(`${fahrenheit.toFixed(2)}°F`);
  }
  
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(celsius) {
    celsius = (temperature -32)*5/9;
    alert(`${celsius.toFixed(2)}°C`);
  }
  
  // Prompt the user for input
  let temperature = parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
  
  if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    celsiusToFahrenheit();
  } else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    fahrenheitToCelsius();
} else {
    alert("Invalid conversion type.");
  }

  
  
  
  
  
  
  