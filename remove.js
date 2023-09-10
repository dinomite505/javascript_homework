function removeFromArray(arr, ...args) {
    // Filter method to create a new array with elements not in "args"
    return arr.filter((element) => !args.includes(element));
}

  // Test
  console.log(removeFromArray([1, 2, 3, 4], 3)); // Outputs: [1, 2, 4]
