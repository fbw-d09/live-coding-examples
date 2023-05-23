// Database users
const users = [
  { id: 1, name: "Olga", lastName: "Char" },
  { id: 2, name: "Nancy", lastName: "Co" },
];
// Database posts
const posts = {
  Olga: ["First info", "Cool, I'm on the beach"],
  Nancy: ["🍸 with my bb", "🎂 happy bDay to me"],
};
// Database groups
const groups = {
  Olga: ["Drinking"],
  Nancy: ["Eating"],
};

function getUser(id) {
  const user = users.find((userInfo) => userInfo.id == id);
  return Promise.resolve(user);
}
function getPosts(lastName) {
  const userPosts = posts[lastName];
  return Promise.resolve(userPosts);
}
