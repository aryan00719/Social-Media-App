import { useState } from "react";

export default function CreatePost({ onPost }) {
    const [text, setText] = useState("");

    return (
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write something..."
            />
            <button onClick={() => {
                if (!text.trim()) return;
                onPost(text);
                setText("");
            }}>
                Post
            </button>
        </div>
    );
}