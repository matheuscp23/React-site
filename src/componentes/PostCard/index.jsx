import React from "react";
import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";
import BotaoPrincipal from "../BotaoPrincipal";

function PostCard({ post }) {
  const imgPath = require(`../../assets/posts/${post.id}/capa.png`);
  return (
    <Link to={`/post/${post.id}`}>
      <div className={styles.post}>
        <img className={styles.capa} src={imgPath} alt="imagens" />
        <h1 className={styles.titulo}>{post.titulo}</h1>
       <BotaoPrincipal texto={'ler'}/>
      </div>
    </Link>
  );
}

export default PostCard;
