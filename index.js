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
const message1 = new Message("user1", "user2", "12345678901234567890123467890");
const message2 = new Message("user2", "user1", "2");
const message3 = new Message("user1", "user2", "3");

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
