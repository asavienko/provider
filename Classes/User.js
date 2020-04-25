function User(userId) {
  this._userId = userId;
  this._balnce = 0;
}

User.prototype = {
  constructor: User,

  getUserId: function() {
    return this._userId;
  },
  withdraw: function(money) {
    this._balnce -= money;
  },
  addMonet: function(money) {
    this._balnce += money;
  },
  getBalance: function() {
    return this._balnce;
  }
};

export default User;
