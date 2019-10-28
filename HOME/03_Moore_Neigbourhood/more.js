var row = 9;
var col = 8;


var count = 0;
var j;
var i;
var jRow;
var iCol;
var newArr = [];


var data = [
  [1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 1, 0, 0, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 1],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 1]
]
// console.log(row);


// console.log(data.length);
// console.log(col);
// console.log(data[row].length);


// var data = [
//   [1,0,1,0,1],
//   [0,1,0,1,0],
//   [1,0,1,0,1],
//   [0,1,0,1,0],
//   [1,0,1,0,1],
//   [0,1,0,1,0]
// ];


// var data = [
//   [1, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0],
//   [0, 0, 1, 0, 1],
//   [1, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0]
// ];

var rowArr = data[row];
var centerNumber = rowArr[col];
// console.log(centerNumber);


if (centerNumber == 1) {
  count--;
}

if (row == 0) {
  j = 0;
} else {
  j = row - 1;
}

if (row == data.length - 1) {
  // console.log(1);
  
  jRow = row;
} else {
  jRow = row + 1;
}

for (j; j <= jRow; j++) {
  newArr.push(data[j]);
}

for (const e of newArr) {
  if (col == 0) {
    i = 0;
  } else {
    i = col - 1;
  }

  if (col == data[row].length - 1) {
    iCol = col;
  } else {
    iCol = col + 1;
  }

  for (i; i <= iCol; i++) {
    var curentNumver = e[i];
    if (curentNumver == 1) {
      count++;
    }
  }
}
return count
// console.log(count);
