const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// GLOBAL LOGGER (VERY IMPORTANT)
app.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.url);
    next();
});

let posts = [
    {
        id: 1,
        content: "Hello from backend 🚀",
        likes: 0,
        comments: [],
    },
];

// ROOT
app.get("/", (req, res) => {
    console.log("Root route hit");
    res.send("Backend is working 🚀");
});

// POSTS
app.get("/posts", (req, res) => {
    console.log("Posts route hit");
    res.json(posts);
});

// CREATE POST
app.post("/posts", (req, res) => {
    const newPost = {
        id: Date.now(),
        content: req.body.content,
        likes: 0,
        comments: [],
    };
    posts.unshift(newPost);
    res.json(newPost);
});

// LIKE POST
app.post("/posts/:id/like", (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    
    posts[postIndex].likes += 1;
    res.json(posts[postIndex]);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
});