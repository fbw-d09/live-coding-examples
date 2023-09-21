exports.getAllPosts = (req, res) => {
    res.status(200).send("ALL POSTS")
};

exports.createNewPost = (req, res) => {
    res.status(201).send("CREATING AN NEW POST")
}

exports.getPost = (req, res) => {
    const { id } = req.params;

    res.status(200).send(`Der post mit der id "${id}" wird hier angezeigt`);
}

exports.deletePost = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        message: "Der post wurde gelöscht",
        id
    })
}

exports.updatePost = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        message: "Der post wurde geupdated",
        id
    })
}

// wenn const dann module.exports = { controllername, controllername, controllername }
