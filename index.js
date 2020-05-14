"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_js_1 = require("./Classes/User.js");
var Message_js_1 = require("./Classes/Message.js");
var Provider_js_1 = require("./Classes/Provider.js");
var provider = new Provider_js_1.default();
//add first user
var user1 = new User_js_1.default("user1");
provider.addUser(user1);
provider.addUserBalance("user1", 10);
//add second user
var user2 = new User_js_1.default("user2");
provider.addUser(user2);
provider.addUserBalance("user2", 10);
//create messages
var message1 = new Message_js_1.default("user1", "user2", "12345678901234567890123467890");
var message2 = new Message_js_1.default("user2", "user1", "2");
var message3 = new Message_js_1.default("user1", "user2", "3");
/*

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
*/
var showResponseSendMessage = function (message) { return function (response) {
    console.log(response);
    return provider.sendMessage(message);
}; };
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
    .catch(function (err) { return console.error(err); })
    .finally(function () { return console.log("function execution has finished"); });
function greeter(message) {
    return "Hello, " + message.receiver + " " + message.body;
}
// let user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(message1);
