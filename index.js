import User from "./Classes/User.js";
import Message from "./Classes/Message.js";
import Provider from "./Classes/Provider.js";

var provider = new Provider();

//add first user
var user1 = new User("user1");
provider.addUser(user1);
provider.addUserBalance("user1", 100);

//add second user
var user2 = new User("user2");
provider.addUser(user2);
provider.addUserBalance("user2", 100);

//create messages
var message1 = new Message("user1", "user2", "1");
var message2 = new Message("user2", "user1", "2");
var message3 = new Message("user1", "user2", "3");

//create random number from 2 to 4
var randomNumber = Math.floor(Math.random() * 3 + 2);

//create timout with callback
function sendMessageTimeout(message, callback) {
  setTimeout(function() {
    provider.sendMessage(message);
    console.log(provider);
    callback && callback();
  }, randomNumber * 1000);
}

//create callback function to send messages synchronously
function sendMessages() {
  sendMessageTimeout(message1, function() {
    sendMessageTimeout(message2, function() {
      sendMessageTimeout(message3);
    });
  });
}

// call function
sendMessages();
