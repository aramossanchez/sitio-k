import posts from "../../services/posts";
import styleBlog from "./Blog.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogComponent() {
  //usado para mostrar barra de busqueda o boton de lupa
  const [searchBar, setSearchBar] = useState(false);
  //usado para guardar el criterio de busqueda
  const [valueInput, setValueInput] = useState("");
  //usado para filtrar los resultados de busqueda en el array de posts
  const [postsOk, setPostsOk] = useState(posts);

  //filtar
  const search = (e) => {
    setPostsOk(posts.filter((post) => post.content.toUpperCase().includes(e.toUpperCase()) || post.title.toUpperCase().includes(e.toUpperCase())));
  };

  //cada cambio en valueInput hace un filtrado en el array postOk, refrescando el filtrado constantemente
  useEffect(() => {
    search(valueInput);
  }, [valueInput]);

  return (
    <>
      <div className={styleBlog.blog_title}>Lee los artículos de mi blog</div>
      <div
        className={styleBlog.search_button}
        onClick={() => setSearchBar(true)}
      >
        <span className="material-symbols-outlined">search</span>
      </div>
      {searchBar && (
        <div className={styleBlog.search_bar}>
          <span className="material-symbols-outlined">search</span>
          <input
            autoFocus
            type="text"
            placeholder="Buscar en los artículos..."
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <span
            className="material-symbols-outlined"
            onClick={() => (setSearchBar(false), setValueInput(""))}
          >
            close
          </span>
        </div>
      )}
      {/* barra de busqueda */}
      <div className={styleBlog.posts_list}>
        {postsOk.map((post) => {
          return (
            <div key={post.id} className={styleBlog.post_card}>
              <Image
                src={post.image}
                alt="Imagen del post"
                width={500}
                height={300}
              />
              <div className={styleBlog.title_post}>{post.title}</div>
              <div className={styleBlog.content_button_post}>
                <div className={styleBlog.content_post}>
                  {post.content.slice(0, 200) + "..."}
                </div>
                <Link className={`${styleBlog.button_post} button`} href={`/post/${post.id}`}>
                  LEER MÁS...
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
