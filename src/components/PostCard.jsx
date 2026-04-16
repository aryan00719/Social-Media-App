import ActionButton from "./ActionButton";
import CommentSection from "./CommentSection";

export default function PostCard({ post, onLike }) {
    return (
        <div style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
            <p>{post.content}</p>
            <ActionButton onClick={onLike} label={`Like (${post.likes})`} />
            <CommentSection comments={post.comments} />
        </div>
    );
}