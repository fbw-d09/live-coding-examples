// Classes overview
class Person {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log(this.name);
  }
}

const user = new Person("Hadi");
user.display();

// API: Application Programming Interface
// kostenlos API: https://jsonplaceholder.typicode.com/

// URI = scheme ":" ["//" authority] path ["?" query] ["#" fragment]

const root = document.querySelector("#root");
const button = document.querySelector("#post");
async function getAllPosts() {
  // Opt 1
  // ! Example using async await
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    console.log(posts);
    posts.forEach((post) => {
      let element = `<div>
      <h5>Title: ${post.title}</h5>
      <p>Body: ${post.body}</p>
      </div>`;
      root.innerHTML += element;
    });
  } catch (err) {
    console.log(err);
  }

  // Opt 2
  // ! Example using promises
  await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
// getAllPosts();

async function getOnePhotoUsingID(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const post = await res.json();
  console.log(post);
  const element = `
  <div>
  <img src=${post.url} alt=${post.title} width="15rem" height="15rem" />
  </div>
  `;

  root.innerHTML += element;

  // fetch("https://jsonplaceholder.typicode.com/posts/1")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
}
// getOnePostUsingID(8);
let id = 1;
button.addEventListener("click", () => {
  getOnePhotoUsingID(id);
  id++;
});
