import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "adming@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "Jane Doe",
    password: bcrypt.hashSync("123456", 10),
    password: xxx
  }
];

export default users;
