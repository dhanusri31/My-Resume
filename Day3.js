//const students = [{ name: "Dhanu", marks: 80 },{ name: "Deeps", marks: 90 },{ name: "Divya", marks: 95 }];
//const passed = students
  //  .filter((s) => s.marks >= 50)
    //.map((s) => s.name)
    //.join(", ");
// console.log(passed);

//objects

//const employees = {name: "Diya", salary: "20000", age: 30, department: "Sales",
  //                 senior()
    //    {
      //      if (this.age >= 30)
        //    {
          //      return this.age+=40;
            //}
        //}
    //}
//;
//console.log(employees);
//console.log(employees.senior());

//const prices = [120,60,899];
//console.log(prices.reduce((a,b)=>a+b,0));

// const students = [
//   {name: "Kiran", marks: 80},
//   { name: "Deeps", marks: 90 },
//   { name: "Divya", marks: 95 }
// ];
// console.log(students.find((s)=>s.name == "Kiran"))

// function createGreeter(name) {
//     const greeting = "hello"; 
//     return function() {
//         console.log(`${greeting} ${name}`);
//     };
// }

// const sayHelloAsha = createGreeter("asha");

// sayHelloAsha(); 

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 
  fetchData();

