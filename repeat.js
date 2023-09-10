function repeatString(str, num) {
  // Check if num is a non-negative integer
  if (num < 0 || !Number.isInteger(num)) {
    return "Invalid input";
  }

  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

// Test the function
console.log(repeatString('hey', 3)); // Output: 'heyheyhey'
