// wir erstellen unsere routen innerhalb von /posts, auch hier können wir methode chaining benutzen.

const express = require('express');
const router = express.Router();

const postController = require('./../controller/posts.js');

router.route("/")
// diese route ist GET /posts/ - um alle post anzuzeigen
.get(postController.getAllPosts)
// diese route ist POST /posts/ - um einen neuen post zu erstellen
.post(postController.createNewPost);

router.route("/:id")
// diese route ist GET /posts/:id - um einen spezifischen post anzuzeigen
.get(postController.getPost)
.delete(postController.deletePost)
.put(postController.updatePost);

module.exports = router;
