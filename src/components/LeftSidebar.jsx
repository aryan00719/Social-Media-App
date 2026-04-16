export default function LeftSidebar({ setTab }) {
    return (
        <div>
            <button onClick={() => setTab("feed")}>Feed</button>
            <button onClick={() => setTab("bookmarks")}>Bookmarks</button>
            <button onClick={() => setTab("profile")}>Profile</button>
        </div>
    );
}