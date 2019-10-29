var
  numbN = 17,
  numbM = 177;


// function addBinary(a, b) {
//   var sum = a + b, 
//   binary = ''; 
//   while (sum > 0) {
//     binary = (sum % 2) + binary;
//     sum = Math.floor(sum / 2);
//   }
//   return binary;
// }

// console.log(addBinary(1,16));
 




// function convertBinary(number) {
//   var binaryArr = [];
//   for (; number; number /= 2) {
//       binaryArr.push(number % 2);
//   }
//   return binaryArr.reverse().join('');
// }

function convertBinary(number) {
  var binaryArr = [];
  for (; number; number >>= 1) {
      binaryArr.push(number & 1);
  }
  return binaryArr.reverse().join('');
}
var newNumb = convertBinary(numbN);

for (const iterator of newNumb) {
  console.log(iterator);
  
}
console.log(convertBinary(numbM));
