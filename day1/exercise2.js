// Practice 1;

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

function getNamesOfCompany(companies) {
  companies.forEach((element) => console.log(element.name));
}

//getNamesOfCompany(companies);

function getNamesOfCompaniesAfter1987(companies) {
  companies
    .filter((element) => element.start > 1987)
    .forEach((element) => console.log(element.name));
}

//getNamesOfCompaniesAfter1987(companies);

function getOnlyRetailCompanies(companies) {
  companies
    .filter((element) => element.category === "Retail")
    .forEach((element, num) => console.log(num + ". " + element.name));
}

//getOnlyRetailCompanies(companies);

function getCompaniessortedByEndYear(companies) {
  companies
    .sort((a, b) => a.end - b.end)
    .forEach((element) => console.log(element.name + " - " + element.end));
}

//getCompaniessortedByEndYear(companies);

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

function getSortedArray(arr) {
  return arr.sort((a, b) => a - b);
}

//console.log(getSortedArray(ages));

function printSumAges(arr) {
  console.log("Sum of ages: " + arr.reduce((acc, val) => acc + val, 0));
}

//printSumAges(ages);

function newObjectfromFirstCompany(obj) {
  const { name, category } = obj;
  const newObject = {
    name,
    category,
    print: () => console.log(`Name: ${name}`),
  };
  return newObject;
}

//console.log(newObjectfromFirstCompany(companies[0]).print());

function sumOfUnkownNumOfArgs(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sumOfUnkownNumOfArgs(1, 2, 3, 4, 5));

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

const { address } = person;
const { street } = address;
console.log(street);

// Practice 2;

function printArrow(int, bool) {
  if (bool) {
    console.log("-".repeat(int) + ">");
  } else {
    console.log("<" + "-".repeat(int));
  }
}

//printArrow(5, false);

function printStars(int) {
  for (let i = 0; i < int; i++) {
    console.log("*".repeat(i + 1));
  }
}

//printStars(5);

function printStarsReverse(int) {
  for (let i = int; i > 0; i--) {
    console.log("*".repeat(i));
  }
}

//printStarsReverse(5);

// function printReverseStars(int){
// for(let i = 0; i < int; i++){
// console.log("*".repeat(i+1).padStart(int, " "));
// }
// }
//
//printCoverdStars(5);

// function printReverseStars(int){
// for(let i = int; i > 0; i--){
// console.log("*".repeat(i).padStart(int, " "));
// }
// }
//
// printReverseStars(5);
//

function multiplicationTable(int) {
  for (let i = 1; i <= int; i++) {
    console.log(i + " | " + multiplicationTableRow(i, int));
  }
}

function multiplicationTableRow(int, limit) {
  let result = "";
  for (let j = 1; j <= limit; j++) {
    result += (int * j).toString().padStart(3, " ");
  }
  return result;
}

//multiplicationTable(10);

function reverseInt(int) {
  if (int < 0) {
    console.log("-");
    reverseInt(Math.abs(int));
    return;
  }
  if (int === 0) {
    return "";
  }
  process.stdout.write((int % 10).toString());
  reverseInt(Math.floor(int / 10));
  return;
}

//reverseInt(12345);

function getCleanString(str) {
  if (str === "") if (str === "") return "empty string";
  spaces = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      spaces += str[i];
    }
  }
  if (spaces.length === str.length) return "only spaces";
  else return str.trim();
}

console.log(getCleanString(""));

const list1 = [1, 2, 3, 4];
const list2 = [5, 6, 7, 8];

function f(list1, list2) {
  const list3 = [];
  for (let i = 0; i < list1.length; i++) {
    let multiplylist1 = 1;
    let sumlist2 = 0;
    for (let j = 0; j < list2.length; j++) {
      if (i === j) {
        sumlist2 += list2[j];
      } else {
        sumlist2 += list2[j];
        multiplylist1 *= list1[j];
      }
    }
    list3.push(multiplylist1 * sumlist2);
  }
  return list3;
}

console.log(f(list1, list2));
