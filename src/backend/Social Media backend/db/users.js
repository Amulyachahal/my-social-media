import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    website: "",
    bio: "Hello, Adarsh Balika here",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Amulya",
    lastName: "Chahal",
    username: "amulyachahal",
    password: "amulyachahal123",
    website: "amulya-chahal-portfolio.netlify.app/",
    bio: "Hello, Amulya Chahal here",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    website: "",
    bio: "Hello, John Doe here",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Karen",
    lastName: "Williams",
    username: "karenwilliams",
    password: "karenwilliams123",
    website: "",
    bio: "Hello, Karen Williams here",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
