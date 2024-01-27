const User = {
  _email: "asutosh@ai.com",
  _password: "asutosh",
  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);

// console.log(User.email);
