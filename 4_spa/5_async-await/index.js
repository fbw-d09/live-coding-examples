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
function getPosts(name) {
  const userPosts = posts[name];
  return Promise.resolve(userPosts);
}
function getGroups(name) {
  const userGroups = groups[name];
  return Promise.resolve(userGroups);
}
// getUser(1)
//   // { id: 1, name: "Olga", lastName: "Char" }
//   .then((valOne) => getPosts(valOne.lastName))
//   // ["First info", "Cool, I'm on the beach"]
//   .then((valTwo) => console.log(valTwo));

// Async Await
async function getUserData() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.name);
    const groups = await getGroups(user.name);
    console.log(i);
    return [posts, groups];
  } catch (error) {
    console.log(error);
  }
}

getUserData().then((data) => {
  console.log(data);
});
