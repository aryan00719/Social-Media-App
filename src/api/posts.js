const BASE_URL = "http://localhost:3001";

// GET posts
export async function fetchPosts() {
    const res = await fetch(`${BASE_URL}/posts`);
    return res.json();
}

// CREATE post
export async function createPost(content) {
    const res = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
    });

    return res.json();
}

// LIKE post
export async function likePost(id) {
    const res = await fetch(`${BASE_URL}/posts/${id}/like`, {
        method: "POST",
    });

    return res.json();
}