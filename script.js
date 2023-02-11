/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr.map(({id , name , age , marks}) => {
    if(marks > 50)
    {
      console.log(id , name , age , marks);
    }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
    arr.forEach(({id , name , age , marks }) => {
    if(marks > 50)
    {
      console.log(id , name , age ,marks);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newData = {id:4,name:"susan",age:"20",marks:45};
  arr.push(newData);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(var i = 0 ; i < arr.length ; i++)
  {
    if(arr[i].marks < 50)
    {
      arr.splice(i);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "jerry", age: "18", marks: 80 },
    { id: 6, name: "raman", age: "20", marks: 85 },
    { id: 7, name: "hari", age: "19", marks: 35 },
  ];
  let children = arr.concat(arr2);
  console.log(children);
}
