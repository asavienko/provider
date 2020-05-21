import User from "./src/classes/User.js";
import Message from "./src/classes/Message.js";
import Provider from "./src/classes/Provider.js";
import List from "./src/classes/List.js";
import IMessagable from "./src/interfaces/IMessagable";
import IUserable from "./src/interfaces/IUserable";

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
