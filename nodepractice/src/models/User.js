class User {
  _users = {
    id: ['lobster', 'lob', 'abc'],
    pass: ['1', '2', '3'],
    name: ['랍스터', '랍', '에이'],
  };

  getUsersId() {
    return this._users.id;
  }

  getUsersPass() {
    return this._users.pass;
  }

  getUsersName() {
    return this._users.name;
  }
}

module.exports = User;
