import { useEffect, useState } from "react";
import styles from "./Feed.module.css";
import blogApi from "../../api/blogApi";
import PostCard from "../PostCard/PostCard";

function Feed() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await blogApi.get.posts();
      console.log(data);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className={styles.container}>
      {posts && posts.map((post) => <PostCard data={post}></PostCard>)}
    </section>
  );
}

export default Feed;
