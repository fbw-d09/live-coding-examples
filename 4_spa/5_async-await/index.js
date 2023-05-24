// Database users
const users = [
  { id: 1, name: "Olga", lastName: "Char" },
  { id: 2, name: "Nancy", lastName: "Co" },
];
// Database posts
const posts = {
  1: ["First info", "Cool, I'm on the beach"],
  2: ["🍸 with my bb", "🎂 happy bDay to me"],
};
// Database groups
const groups = {
  1: ["Drinking"],
  2: ["Eating"],
};

function getUser(id) {
  const user = users.find((userInfo) => userInfo.id == id);
  return Promise.resolve(user);
}
function getPosts(id) {
  const userPosts = posts[id];
  return Promise.resolve(userPosts);
}
function getGroups(id) {
  const userGroups = groups[id];
  return Promise.resolve(userGroups);
}
// without ( Async Await )
// Promises verwenden
// ! Aufgrund von Bereichsproblemen können wir den Nachnamen nicht an übergeben
// ! getGroups-Funktion
getUser(1)
  // { id: 1, name: "Olga", lastName: "Char" }
  .then((valOne) => getPosts(valOne.id))
  // ["First info", "Cool, I'm on the beach"]
  .then((valTwo) => console.log(valTwo));

// Async Await
// Wir können das Schlüsselwort „await“ nur innerhalb einer Funktion verwenden, die mit async deklariert wurde
// async function getUserData() {
//   try {
//     const user = await getUser(1);
//     const posts = await getPosts(user.id);
//     const groups = await getGroups(user.id);

//     // Posts und Groups sind vom Benutzer abhängig, aber nicht voneinander.
//     console.log(x);
//     return [posts, groups];
//   } catch (error) {
//     console.log(error);
//   }
// }
// Async Await mit => function

const getUserData = async () => {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const groups = await getGroups(user.id);

    // Posts und Groups sind vom Benutzer abhängig, aber nicht voneinander.
    console.log(x);
    return [posts, groups];
  } catch (error) {
    console.log(error);
  }
};
// Usage of getUser

getUserData().then((data) => {
  console.log(data);
});
