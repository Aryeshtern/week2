const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}


function multiplyArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}


function averageArray(arr) {
  let sum = sumArray(arr);
  return sum / arr.length;
}


function swapFirstAndLast(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  arr[0] = last;
  arr[arr.length - 1] = first;
  return arr;
}


function reverseArray(arr) {
 let l = arr.length - 1;
  for (let i = 0; i <= Math.floor(l / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[l - i];
    arr[l - i] = temp;
  }
  return arr;
}

console.log(reverseArray(ints));


function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}


function createEvenArray(arr) {
  let evenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    }
  }
  return evenArray;
}

const strings = ['yeuda', 'shira', 'eli', 'avi'];


function createSentence(arr) {
    return arr.join(' ');
}

function GEtSumOfLength(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
    }
    return sum;
}



function convertToUpper(arr) {
    let upperArray = [];
    for (let i = 0; i < arr.length; i++) {
        upperArray.push(arr[i].toUpperCase());
    }
    return upperArray;
}

function GetStringsGreatherThen6(strings){
    let greatherStrings = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > 6) {
            greatherStrings.push(strings[i]);
        }
    }
    return greatherStrings;
}

function GetLengthestString(arr) {
    let longest = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

function GetSumOfWordsWith4Letters(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            sum += arr[i].split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        }
    }
    return sum;
}

const mat = [[1, 2, 3], [4, 5, 6], [10, 13, 15]];

function PrintSubarr(mat) {
    for (let i = 0; i < mat[0].length; i++) {
        console.log(mat[i]);
    }

}

function PrintLengthOfSubArr(mat) {
    for (let i = 0; i < mat[0].length; i++) {
        console.log(mat[i].length);
    }
}

function GetSumOfLengthSumArr(mat) {
    let sum = 0;
    for (let i = 0; i < mat[0].length; i++) {
        sum += mat[i].length;
    }
    return sum;
}

function PrintAllValues(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            console.log(mat[i][j]);
        }
    }
}

function PrintAllValuesIfGreatherThen5(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] > 5) {
                console.log(mat[i][j]);
            }
        }
    }
}

function GetSumOfAllValues(mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
        }
    }
    return sum;
}



