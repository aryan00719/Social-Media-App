import { useState, useEffect } from "react";
import { fetchPosts } from "./api/posts";

import Feed from "./pages/Feed";
import Bookmarks from "./pages/Bookmarks";
import Profile from "./pages/Profile";

import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("feed");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data);
      })
      .catch(err => {
        console.error("Failed to fetch posts:", err);
        setError("Something went wrong while fetching posts");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function renderPage() {
    if (tab === "bookmarks") return <Bookmarks />;
    if (tab === "profile") return <Profile />;
    return <Feed posts={posts} setPosts={setPosts} />;
  }

  if (loading) {
    return <h2>Loading posts...</h2>;
  }

  if (!loading && posts.length === 0) {
    return <h2>No posts available</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <LeftSidebar setTab={setTab} />
      <div style={{ flex: 1 }}>
        {renderPage()}
      </div>
      <RightSidebar />
    </div>
  );
}