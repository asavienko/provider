var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "./Classes/User.js";
import Message from "./Classes/Message.js";
import Provider from "./Classes/Provider.js";
const user1 = new User("Bob");
console.log(user1);
const user2 = new User("newUser");
console.log(user2);
const message1 = new Message("Bob", "newUser", "some body");
console.log(message1);
const message2 = new Message("newUser", "Bob", "some loooooong body. some loooooong body. some loooooong body. some loooooong body. ");
console.log(message2);
const message3 = new Message("Bob", "unknownUser", "Some Body");
console.log(message3);
const provider = new Provider();
provider.addUser(user1);
provider.addUser(user2);
provider.userPayment("Bob", 10);
console.log(provider.getUserBalance("Bob"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response1 = yield provider.sendMessage(message1);
        console.log(response1);
        yield provider.sendMessage(message3);
    }
    catch (e) {
        console.error(e);
    }
    console.log(provider.receiveMessages("newUser"));
}))();
console.log(provider.messageList);
console.log(provider.userList);
console.log(provider.getUserBalance("Bob"));
