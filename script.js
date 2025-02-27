/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
}

function addData() {
  //Write your code here, just console.log
}

function removeAdmin() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
}
