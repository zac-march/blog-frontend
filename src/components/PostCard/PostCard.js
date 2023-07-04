import styles from "./PostCard.module.css";

function PostCard({ data }) {
  return (
    <div className={styles.container}>
      <a href={`#/post/${data._id}`}>
        <small className={styles.date}>
          {new Date(data.dateAdded).toLocaleDateString()}
        </small>
        <h2>{data.title}</h2>
        <p className={styles.body}>{data.body}</p>
        <p className={styles.comments}>Comments: {data.comments.length}</p>
      </a>
    </div>
  );
}

export default PostCard;
