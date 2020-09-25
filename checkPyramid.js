function checkPyramid(str) {
  str = str.toLowerCase();
  console.log("Input is: " + str);
  let frequency = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (frequency[ch]) {
      frequency[ch]++;
    } else {
      frequency[ch] = 1;
    }
  }

  console.log("Frequency object: " + frequency);

  let sortedValues = Object.values(frequency).sort();
  console.log(sortedValues);

  let result = true;

  for (let i = 0; i < sortedValues.length - 1; i++) {
    console.log("Comparing " + sortedValues[i] + " and " + sortedValues[i + 1]);
    if (sortedValues[i + 1] !== sortedValues[i] + 1) {
      result = false;
      break;
    }
  }

  console.log("Boolean result: " + result);
}

module.exports = checkPyramid;
