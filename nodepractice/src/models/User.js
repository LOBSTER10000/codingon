class User {
  static users = {
    id: ['lobster', 'lob', 'abc'],
    pass: ['1', '2', '3'],
    name: ['랍스터', '랍', '에이'],
  };

  static getUsers(...fields) {
    const users = this.users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

// class User {
//   constructor(_userId, _userPass, _userName) {
//     if (_userId && _userPass && _userName) {
//       this._userId = userId;
//       this._userPass = userPass;
//       this._userName = userName;
//     }
//   }
// }

module.exports = User;
