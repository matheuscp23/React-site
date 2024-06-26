import React from 'react'
import styles from './HomePage.module.css'
import posts from '../../json/posts.json'
import PostCard from '../../componentes/PostCard'
function HomePage() {
  return (
      <ul className={styles.posts}>
        {posts.map((post)=>(
          <li key={post.id}>
            <PostCard post={post}/>
          </li>
        ))}
      </ul>
  )
}

export default HomePage