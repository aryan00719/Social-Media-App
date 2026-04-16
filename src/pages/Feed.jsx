import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import { createPost, likePost } from "../api/posts";

export default function Feed({ posts, setPosts }) {

    async function addPost(text) {
        const newPost = await createPost(text);
        setPosts(prev => [newPost, ...prev]);
    }

    return (
        <div>
            <CreatePost onPost={addPost} />

            {posts.map(p => (
                <PostCard
                    key={p.id}
                    post={p}
                    onLike={async () => {
                        const updated = await likePost(p.id);

                        setPosts(prev =>
                            prev.map(post =>
                                post.id === p.id ? updated : post
                            )
                        );
                    }}
                />
            ))}
        </div>
    );
}