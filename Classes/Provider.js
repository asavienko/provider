function Provider() {
  // - messageCache: ArrayOf(Message)
  // - userList: ArrayOf(User)
}

Provider.prototype = {
  constructor: Provider,
  sendMessage: function(message) {},
  receiveMessages: function(userId) {},
  chooseMessageType: function(messageBody) {},
  findMessages: function(receiver) {},
  deleteMessage: function(id) {},
  addMessage: function(message) {},
  addUser: function(user) {},
  deleteUser: function(userID) {},
  getUserBalance: function(userId) {},
  findUser: function(userId) {},
  offBalance: function(userId, offBalance) {},
  addBalance: function(userId, addBalance) {}
};

//
//   + sendMessage (message: Message): void
//   + receiveMessages(userId: string): ArrayOf(Message)
// - chooseMessageType (messageBody: String): MessageType
// - findMessages(receiver: String): ArrayOf(Message)
// - deleteMessage(id: String): void
//   - addMessage(message: Message): void
//
//   + addUser(user: User): void
//   + deleteUser(userID: String): void
//   + getUserBalance(userId: String): Number
// - findUser(userId: String): User
// - offBalance(userId: String, offBalance: number): void
//   + addBalance(userId: String, addBalance: Number): void
