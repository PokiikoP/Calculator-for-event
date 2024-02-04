function calculateResult() {
  // Get user inputs
  const format = parseInt(document.getElementById('firstInput').value);

  // Validate input for A to G values
  const inputValues = document.getElementById('inputValues').value;
  const values = inputValues.split(',').map(value => {
      const parsedValue = parseInt(value.trim()); // Trim removes leading/trailing spaces
      return isNaN(parsedValue) ? 0 : parsedValue; // Set to 0 if not a valid number
  });

  const multipliers = {
      1: [270, 90, 45, 27, 9, 9, 6], 
      2: [360, 180, 120, 90, 18, 18, 12],
      3: [540, 270, 180, 135, 27, 27, 18] 
  };

  // Multiply and sum the values
  const result = values.reduce((sum, value, index) => {
      const multiplier = multipliers[format][index];
      const partialResult = value * multiplier;
      console.log(`Value: ${value}, Multiplier: ${multiplier}, Partial Result: ${partialResult}`);
      return sum + partialResult;
  }, 0);
  let totaltickets = values.reduce((sum, value) =>{
    return sum + value;
  }, 0);
  // Divide the result by 30
  const finalResult = result / 30;
  totaltickets=format*totaltickets;
  const netvalue = Math.round(finalResult-totaltickets);
  const percent = Math.round(Math.abs((netvalue/totaltickets)*100));

  document.getElementById('totaltickets').innerHTML = `Tickets invested :${totaltickets}`;

  // Display the final result
  if (netvalue>0){
    document.getElementById('result').innerHTML = `The Amount of tickets you roughly make from this deal is ${Math.abs(netvalue)}.`;
    document.getElementById('resultper').innerHTML = `Essentially a profit of roughly ${percent}%`;
  }
  else if (netvalue<0){
    document.getElementById('result').innerHTML = `The Amount of tickets you roughly lose from this deal is ${Math.abs(netvalue)}.`;
    document.getElementById('resultper').innerHTML = `Essentially a loss of roughly ${percent}%`;

  }
}
