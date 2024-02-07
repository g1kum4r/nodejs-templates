import { contact, homeGet, homePost } from "./controllers";

export const router = [
  { path: '/home', controller: homeGet, method: "GET" },
  { path: '/home', controller: homePost, method: "POST" },
  { path: '/contact', controller: contact, method: "GET" }
]

