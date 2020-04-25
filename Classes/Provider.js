function Provider() {
  this._messageCache = [];
  this._userList = [];
}

Provider.prototype = function() {
  function chooseMessageType(messageBody) {}
  function findMessages(receiver) {}
  function deleteMessage(id) {}
  function addMessage(message) {}
  function findUser(userId) {}
  function offBalance(userId, offBalance) {}
  return {
    constructor: Provider,
    sendMessage: function(message) {},
    receiveMessages: function(userId) {},
    addUser: function(user) {},
    deleteUser: function(userID) {},
    getUserBalance: function(userId) {},
    addBalance: function(userId, addBalance) {}
  };
};

/*


  + sendMessage (message: Message): void
  + receiveMessages(userId: string): ArrayOf(Message)
- chooseMessageType (messageBody: String): MessageType
- findMessages(receiver: String): ArrayOf(Message)
- deleteMessage(id: String): void
  - addMessage(message: Message): void

  + addUser(user: User): void
  + deleteUser(userID: String): void
  + getUserBalance(userId: String): Number
- findUser(userId: String): User
- offBalance(userId: String, offBalance: number): void
  + addBalance(userId: String, addBalance: Number): void
*/