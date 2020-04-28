function User(userId) {
  this._id = userId;
  this._balance = 0;
}

User.prototype = {
  constructor: User,

  getUserId: function() {
    return this._id;
  },

  getBalance: function() {
    return this._balance;
  },

  withdraw: function(money) {
    if (money > this._balance) throw new LowBalanceError();
    this._balance -= money;
  },

  addMoney: function(money) {
    if (money > 0) this._balance += money;
  }
};

export default User;
