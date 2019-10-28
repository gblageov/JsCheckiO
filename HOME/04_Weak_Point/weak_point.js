// var sumResultArray = [];
// var weakPoints = [];
// var data = [
//   [7, 2, 7, 2, 8],
//   [2, 9, 4, 1, 7],
//   [3, 8, 6, 2, 4],
//   [2, 5, 2, 9, 1],
//   [6, 6, 5, 4, 5]
// ];
// var minSumRow;
// var minSumCol;


// for (const dataElement of data) {
//   console.log(dataElement);
//   var summ = dataElement.reduce((a,b) => a + b);
//   sumResultArray.push(summ);
//   console.log(summ);
// }
// console.log(sumResultArray);
// minSumRow = Math.min(...sumResultArray);
// console.log(minSumRow);

// for (const key in sumResultArray) {
//   if (sumResultArray.hasOwnProperty(key)) {
//     const element = sumResultArray[key];
//     if (element == minSumRow){
//       weakPoints.push(key);      
//     }

//     // console.log(element);
//     // console.log(key);
//   }
// }
// console.log(weakPoints);



// // var newArr = [7, 2, 7, 2, 8];

// // var arrSum = newArr.reduce((a,b) => a + b);
// // console.log(arrSum);


// // const arrayColumn = (arr, n) => arr.map(x => x[n]);
// // var data = [
// //   [7, 2, 7, 2, 8],
// //   [2, 9, 4, 1, 7],
// //   [3, 8, 6, 2, 4],
// //   [2, 5, 2, 9, 1],
// //   [6, 6, 5, 4, 5]
// // ];
// // const twoDimensionalArray = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9]
// // ];

// // console.log(arrayColumn(data, 1));



// var matrix = [
//   [7, 2, 7, 2, 8],
//   [2, 9, 4, 1, 7],
//   [3, 8, 6, 2, 4],
//   [2, 5, 2, 9, 1],
//   [6, 6, 5, 4, 5]
// ];

var coordinates = [];

function points(arr) {
  let min = Math.min(...arr);

  arr.forEach((key, ind) => {
    if (min == key) {
      coordinates.push(ind);
    }
    
  });
}
function weakPoint(matrix) {
  
  var rowSum = matrix.map(r => r.reduce((a, b) => a + b));
  var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));
  
  
  points(rowSum); 
  points(colSum);
  // return console.log(coordinates);
  // 
  return coordinates;
}

weakPoint(matrix);
console.log(coordinates);

 