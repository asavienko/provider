function User(userId) {
  this._id = userId;
  this._balnce = 0;
}

User.prototype = {
  constructor: User,

  getUserId: function() {
    return this._id;
  },
  withdraw: function(money) {
    if (money > this._balnce) throw new LowBalanceError();
    this._balnce -= money;
  },
  addMoney: function(money) {
    if (money < 0) throw new PositiveNumberError();
    this._balnce += money;
  },
  getBalance: function() {
    return this._balnce;
  }
};

export default User;
