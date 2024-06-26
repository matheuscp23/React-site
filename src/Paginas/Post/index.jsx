import React from "react";
import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "../../componentes/PostModelo";
import PostCard from "../../componentes/PostCard";
import ReactMarkdown from "react-markdown";
import PagErro from "../Pagina404";
import LayoutPadrao from "../../componentes/LayoutPadrao";
import styles from "./Post.module.css";
function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  if (!post) {
    return <PagErro />;
  }
  const postsRecomendados = posts
    .filter((post) => post.id!== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);
  console.log(postsRecomendados);
  const fotoCapa = require(`../../assets/posts/${post.id}/capa.png`);
  return (
    <Routes>
      <Route path="*" element={<LayoutPadrao />}>
        <Route
          index
          element={
            <PostModelo fotoCapa={fotoCapa} titulo={post.titulo}>
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <h2 className={styles.tituloOutrosPosts}>
                Outros Posts que você pode gostar:
              </h2>
              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post}/>
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}

export default Post;
