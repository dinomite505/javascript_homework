// Converts Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;  // Fahrenheit to Celsius conversion formula that I found
    return celsius;
}

  // Converts Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;  // Same conversion, but Celsius to Fahrenheit
    return fahrenheit;
}

  // Test functions
  console.log(convertToCelsius(32)); // Outputs: 0
  console.log(convertToFahrenheit(0)); // Outputs: 32

    /*This part also tests the both conversion functions above and returns info 
    on how much is 32 degrees Fahrenheit in degrees Celsius just for the reference
    */
    const fahrenheitValue = 32;
    const celsiusValue = convertToCelsius(fahrenheitValue);

    console.log(`${fahrenheitValue} degrees Fahrenheit is equal to ${celsiusValue.toFixed(2)} degrees Celsius.`);
