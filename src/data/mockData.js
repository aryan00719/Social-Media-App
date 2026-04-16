export const CURRENT_USER = {
    id: "me",
    name: "Aryan",
    username: "@aryan",
    avatar: "AS",
    avatarColor: "#5DCAA5",
};

export const INITIAL_POSTS = [
    {
        id: 1,
        user: { id: "u1", name: "Priya", avatar: "PM", avatarColor: "#D4537E" },
        content: "Building cool stuff 🚀",
        likes: 5,
        likedByMe: false,
        comments: [],
        bookmarked: false,
    },
];

export const SUGGESTIONS = [
    { name: "Rohan", username: "@rohan" },
];

export const TRENDING = ["#React", "#WebDev"];