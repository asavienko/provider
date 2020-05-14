/*
import User from "./Classes/User.js";
import Message from "./Classes/Message.js";
import Provider from "./Classes/Provider.js";

const provider = new Provider();

//add first user
const user1 = new User("user1");

provider.addUser(user1);
provider.addUserBalance("user1", 10);

//add second user
const user2 = new User("user2");
provider.addUser(user2);
provider.addUserBalance("user2", 10);

//create messages
const message1: Message = new Message(
  "user1",
  "user2",
  "12345678901234567890123467890"
);
const message2: Message = new Message("user2", "user1", "2");
const message3: Message = new Message("user1", "user2", "3");

(async () => {
  try {
    const response1 = await provider.sendMessage(message1);
    console.log(response1);
    const response2 = await provider.sendMessage(message2);
    console.log(response2);
    const response3 = await provider.sendMessage(message3);
    console.log(response3);
    const response4 = await provider.sendMessage(message1);
    console.log(response4);
    const response5 = await provider.sendMessage(message1);
    console.log(response5);
    const response6 = await provider.sendMessage(message1);
    console.log(response6);
    const response7 = await provider.sendMessage(message1);
    console.log(response7);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("function execution has finished");
  }
})();

const showResponseSendMessage = message => response => {
  console.log(response);
  return provider.sendMessage(message);
};

provider
  .sendMessage(message2)
  .then(showResponseSendMessage(message1))
  .then(showResponseSendMessage(message3))
  .then(showResponseSendMessage(message1))
  .then(showResponseSendMessage(message1))
  .then(showResponseSendMessage(message1))
  .then(showResponseSendMessage(message2))
  .then(showResponseSendMessage(message1))
  .then(showResponseSendMessage(message1))
  .catch(err => console.error(err))
  .finally(() => console.log("function execution has finished"));

function greeter(message: Message): string {
  return `Hello, ${message.receiver}! <br/>
You have new message: <br/>
${message.body};`;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(message1);
*/









// Generic programming is a style of computer programming in which
// algorithms are written in terms of types to-be-specified-later
// that are then instantiated when needed for specific types
// provided as parameters.

















//Generics are a powerful tool to write dynamic code,
//and flexible code























// Simple Generic




function echo(data: any) {
  return data;
}

console.log(echo("Test")); //.length
console.log(echo(27)); //.length
console.log(echo({ a: "test", age: 27 })); //.length


















// How to force compiler check types?


















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























//As for me, the most useFull generic is Promise

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




//todo Generics give us flexibility combined with type safety









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
