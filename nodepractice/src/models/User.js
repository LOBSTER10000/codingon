class User {
  #users = {
    id: ['lobster', 'lob', 'abc'],
    pass: ['1', '2', '3'],
    name: ['랍스터', '랍', '에이'],
  };

  getUsersId() {
    return this.#users.id;
  }

  getUsersPass() {
    return this.#users.pass;
  }

  getUsersName() {
    return this.#users.name;
  }
}

module.exports = User;
