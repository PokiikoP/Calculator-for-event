function calculateResult() {
  // Get user inputs
  const format = parseInt(document.getElementById('firstInput').value);

  // Validate input for A to G values
  const inputValues = document.getElementById('inputValues').value;
  const values = inputValues.split(',').map(value => {
      const parsedValue = parseInt(value.trim()); // Trim removes leading/trailing spaces
      return isNaN(parsedValue) ? 0 : parsedValue; // Set to 0 if not a valid number
  });

  // Log intermediate values to console for debugging
  console.log("Chosen Format:", format);
  console.log("Input Values:", values);

  // Multipliers based on the user's chosen format
  const multipliers = {
      1: [540, 270, 180, 135, 27, 27, 18],
      2: [360, 180, 120, 90, 18, 18, 12],
      3: [270, 90, 45, 27, 9, 9, 6]
  };

  // Log multipliers to console for debugging
  console.log("Multipliers:", multipliers[format]);

  // Multiply and sum the values
  const result = values.reduce((sum, value, index) => {
      const multiplier = multipliers[format][index];
      const partialResult = value * multiplier;
      console.log(`Value: ${value}, Multiplier: ${multiplier}, Partial Result: ${partialResult}`);
      return sum + partialResult;
  }, 0);

  // Divide the result by 30
  const finalResult = result / 30;

  // Display the final result
  document.getElementById('result').innerHTML = `The number of tickets you get is: ${finalResult}`;
}
