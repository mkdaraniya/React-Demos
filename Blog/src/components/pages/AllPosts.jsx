import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../index";
import appwrite from "../../appwrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwrite.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts);
      }
    });
  }, []);

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
}

export default AllPosts;
