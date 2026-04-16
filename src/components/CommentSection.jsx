export default function CommentSection({ comments }) {
    return (
        <div>
            {comments.map((c) => (
                <p key={c.id}>{c.text}</p>
            ))}
        </div>
    );
}