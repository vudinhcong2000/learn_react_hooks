import React, { useEffect, useState } from "react";
import "./list.css";

const tabs = ["posts", "comments", "albums", "photos", "users"];

function Content() {
  // const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  // console.log(type);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
    //   document.title = title;
    //   console.log("Mounted");
  }, [type]);

  //DOM event scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        //show
        setShowGoToTop(true);
      } else {
        //hide
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    console.log("addEventListener");

    //clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("windowremoveEventListener");
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      {/* <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}
      <ul>
        {posts.map((post) => (
          <li className="list" key={post.id}>
            {post.title || post.name}
          </li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Go to top
        </button>
      )}
    </div>
  );
}

export default Content;
