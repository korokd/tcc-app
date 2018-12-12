const BASE_URL = "http://localhost:3000";
const USERS_URL = `${BASE_URL}/users`;
const POSTS_URL = `${BASE_URL}/posts`;

export const createUser = payload =>
  fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(r => r.json());

export const updateUser = payload =>
  fetch(`${USERS_URL}/${payload.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(r => r.json());

export const getUsers = () => fetch(USERS_URL).then(r => r.json());

export const getPosts = () =>
  Promise.all([fetch(POSTS_URL).then(r => r.json()), getUsers()]).then(
    ([posts, users]) => {
      return posts
        .map(post => {
          post.user = users.find(u => u.id === post.user);
          return post;
        })
        .filter(post => typeof post.user === "object");
    }
  );

export const createPost = payload =>
  fetch(POSTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(r => r.json());
