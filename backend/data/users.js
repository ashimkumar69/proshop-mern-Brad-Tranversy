import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "jon",
    email: "jon@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "doe",
    email: "doe@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];



export default users;
