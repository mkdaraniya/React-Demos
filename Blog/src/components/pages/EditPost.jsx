import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../index";
import appwrite from "../../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function EditPost() {
  const [post, setPosts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      appwrite.getPostById(id).then((postData) => {
        if (postData) {
          setPosts(postData);
        }
      });
    } else {
      navigate("/posts");
    }
  }, [id, navigate]);

  return post ? (
    <Container>
      <PostForm post={post} />
    </Container>
  ) : (
    <div>Post not found</div>
  );
}

export default EditPost;
