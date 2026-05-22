import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../index";
import appwrite from "../../appwrite/config";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwrite.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts);
      }
    });
  }, []);

  if (posts && posts.length > 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <Container>
        <h1 className="text-2xl font-bold">No posts found</h1>
      </Container>
    );
  }
}

export default Home;
