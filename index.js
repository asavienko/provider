import User from "./Classes/User.js";
import Message from "./Classes/Message.js";
import Provider from "./Classes/Provider.js";

var provider = new Provider();

//add first user
var user1 = new User("user1");
provider.addUser(user1);
provider.addUserBalance("user1", 10);

//add second user
var user2 = new User("user2");
provider.addUser(user2);
provider.addUserBalance("user2", 10);

//create messages
var message1 = new Message("user1", "user2", "12345678901234567890123467890");
var message2 = new Message("user2", "user1", "2");
var message3 = new Message("user1", "user2", "3");

/*
function sendMessages(message, callback) {
  return function() {
    provider.sendMessage(message, callback);
  };
}

sendMessages(message1, sendMessages(message2, sendMessages(message3)))();
*/

/*function callFunc(callback) {
  if (callback) {
    return `function() {
    console.log(${callback});
    callFunc;
  }`;
  }
  callFunc();
}

[1, 2, 3].forEach(function(message) {
  callFunc = callFunc(message);
});*/

/*
provider.sendMessage(message1, function(err, balance) {
  if (err) {
    console.error(err);
  }
  if (balance) {
    console.log(balance);
  }
  provider.sendMessage(message2, function(err, balance) {
    if (err) {
      console.error(err);
    }
    if (balance) {
      console.log(balance);
    }
    provider.sendMessage(message3, function(err, balance) {
      if (err) {
        console.error(err);
      }
      if (balance) {
        console.log(balance);
      }
    });
  });
});

*/

provider.sendMessageSync(
  message1,
  message2,
  message3,
  message1,
  message3,
  message1,
  message3,
  message1
);
