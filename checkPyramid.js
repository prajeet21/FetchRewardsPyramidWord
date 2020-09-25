// Function to check wheter the word is a pyramid word or not

function checkPyramid(str) {
  str = str.toLowerCase(); // convert the input to lower case
  let frequency = {}; // object to store frequencies of each characters {char: frequency}

  // Build the frequency object
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (frequency[ch]) {
      frequency[ch]++;
    } else {
      frequency[ch] = 1;
    }
  }

  // console.log("Frequency object: " + frequency);

  // Sort the frequencies by their values
  let sortedValues = Object.values(frequency).sort();
  // console.log(sortedValues);

  let result = true;

  // first value must be 1
  if (sortedValues[0] !== 1) {
    return false;
  }

  // check if the frequency values are increasing by 1
  for (let i = 0; i < sortedValues.length - 1; i++) {
    if (sortedValues[i + 1] !== sortedValues[i] + 1) {
      result = false;
      break;
    }
  }

  return result;
}

module.exports = checkPyramid;
