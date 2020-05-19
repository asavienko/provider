import User from "./Classes/User.js";
import Message from "./Classes/Message.js";
import Provider from "./Classes/Provider.js";
import { IMessagable, IUserable } from "./Classes/interfaces";
import List from "./Classes/List.js";

const user1 = new User("Bob");
console.log(user1);

const user2 = new User("newUser");
console.log(user2);

const message1 = new Message("Bob", "newUser", "some body");
console.log(message1);

const message2 = new Message(
  "newUser",
  "Bob",
  "some loooooong body. some loooooong body. some loooooong body. some loooooong body. "
);
console.log(message2);

const message3 = new Message("Bob", "unknownUser", "Some Body");
console.log(message3);

const provider = new Provider(new List<IMessagable>(), new List<IUserable>());

provider.addUser(user1);
provider.addUser(user2);
provider.userPayment("Bob", 10);

console.log(provider.getUserBalance("Bob"));

(async () => {
  try {
    const response1 = await provider.sendMessage(message1);
    console.log(response1);
    await provider.sendMessage(message3);
  } catch (e) {
    console.error(e);
  }
  console.log(provider.receiveMessages("newUser"));
})();

console.log(provider.getMessageList());
console.log(provider.getUserList());
console.log(provider.getUserBalance("Bob"));
