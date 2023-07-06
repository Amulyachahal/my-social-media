import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo doloremque quidem quae temporibus perspiciatis nobis. Sed ipsa recusandae magnam delectus accusamus earum quis odio. Vero saepe voluptatem possimus nam deserunt!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo doloremque quidem quae temporibus perspiciatis nobis. Sed ipsa recusandae magnam delectus accusamus earum quis odio. Vero saepe voluptatem possimus nam deserunt!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo doloremque quidem quae temporibus perspiciatis nobis. Sed ipsa recusandae magnam delectus accusamus earum quis odio. Vero saepe voluptatem possimus nam deserunt!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo doloremque quidem quae temporibus perspiciatis nobis. Sed ipsa recusandae magnam delectus accusamus earum quis odio. Vero saepe voluptatem possimus nam deserunt!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "karenwilliams",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo doloremque quidem quae temporibus perspiciatis nobis. Sed ipsa recusandae magnam delectus accusamus earum quis odio. Vero saepe voluptatem possimus nam deserunt!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "amulyachahal",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
