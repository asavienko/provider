//todo Generic programming is a style of computer programming in which
//     algorithms are written in terms of types to-be-specified-later
//     that are then instantiated when needed for specific types
//     provided as parameters.

















//todo Generics are a powerful tool to write dynamic code,
//     and flexible code























//todo Simple Generic




function echo(data: any) {
  return data;
}

console.log(echo("Test")); //.length
console.log(echo(27)); //.length
console.log(echo({ a: "test", age: 27 })); //.length


















//todo How to force compiler check types?


















//Better Generic
/*

function echo2<T>(data: T) {
  return data;
}

console.log(echo2("Test")); //.length
console.log(echo2(27)); //<number> "27"
console.log(echo2({ a: "test", age: 27 })); //.length

*/




















// Built-in Generics
/*

const testArr = [1, 2, 3, 4];
const testArr2: Array<number> = [1, 2, 3, 4];

testArr2.push(1);
testArr2.push("1");

function printAll<T>(args: T[]) {
  args.forEach(elem => console.log(elem));
}

printAll<string>(["a", "b", "c"]);
printAll<number>([1, 2, 3]);

*/

















/*


//Generic Types
const echo3: <T>(data: T) => T = echo; //or any function

console.log(echo3<string>("abc"));



*/
























//Generic Class
/*
class Calculator {
  //add generic. Generic can be extended or has several types <T extends number | string>
  // you can use several generics
  firsValue;
  secondValue;
  multiple() {
    return this.firsValue * this.secondValue;
  }
}

const calculator = new Calculator();

calculator.firsValue = 5; //"someString" - noError
calculator.secondValue = 10;
console.log(calculator.multiple());

*/


















//todo Generics give us flexibility combined with type safety




//todo As for me, the most useFull generic is Promise

/*


const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{resolve("Resolved")}, 1000)

});

promise.then((result)=>{});


*/




















//One more case

/*
function merge(objA: object, objB: object) {
  return { ...objA, ...objB };
}

const newObj = merge({ a: 1 }, { b: 2 });

newObj.b; // error
*/



//Generic with interface
/*

interface ILength {
  length: number
}

function counter<T extends ILength>(val: T): [T, string] {
let message = "No value";
  if(val.length> 0){
    message = `Got ${val.length} elements`
  }
  return [val, message]
}

*/














/*


function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');


*/







/*



class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());


*/



/*




interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();



*/
