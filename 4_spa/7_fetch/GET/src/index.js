// API: Application Programming Interface
// kostenlos API: https://jsonplaceholder.typicode.com/

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
// ! Example using promises

// ! Example using async await
