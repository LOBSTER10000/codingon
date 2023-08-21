class UserStorage {
  static users = {
    id: ['lobster', 'sean', 'sessac'],
    password: ['1234', '4567', '1020'],
    name: ['랍스터', '션', '새싹'],
  };

  static getUsers(...fields) {
    console.log(fields);
    const newUsers = fields.reduce((newUsers, field) => {
      if (this.users.hasOwnProperty(field)) {
        // 정적 속성에 접근하기 위해 'this.users' 사용
        newUsers[field] = this.users[field]; // 정적 속성에 접근하기 위해 'this.users' 사용
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return this.users;
  }

  static getUserInfo(id) {
    const users = this.users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
