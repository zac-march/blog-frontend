import { useEffect, useState } from "react";
import styles from "./PostDetail.module.css";
import blogApi from "../../api/blogApi";
import { useParams } from "react-router-dom";

function PostDetail() {
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const params = useParams();

  useEffect(() => {
    const fetchData = async (postId) => {
      setPost(await blogApi.get.post(postId));
      setComments(await blogApi.get.comments(postId));
    };
    fetchData(params.id);
  }, []);

  useEffect(() => {
    console.log(post, comments);
  }, [post, comments]);

  return (
    <div className={styles.container}>
      <section className={styles.post}>
        {post && (
          <div>
            <h1>{post.title}</h1>
            <div>
              <p>{post.author}</p>
              <p>{new Date(post.dateAdded).toLocaleDateString()}</p>
            </div>
            <p>{post.body}</p>
          </div>
        )}
      </section>
      <section className={styles.comments}>
        {comments &&
          comments.map((comment) => (
            <div>
              <div>
                <p>{comment.author}</p>
              </div>
              <p>{comment.body}</p>
              <p>{new Date(comment.dateAdded).toLocaleDateString()}</p>
            </div>
          ))}
      </section>
    </div>
  );
}

export default PostDetail;
