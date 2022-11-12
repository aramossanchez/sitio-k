import posts from "../../services/posts";
import styleBlog from "./Blog.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BlogComponent() {
  //usado para mostrar barra de busqueda o boton de lupa
  const [searchBar, setSearchBar] = useState(false);
  //usado para guardar el criterio de busqueda
  const [valueInput, setValueInput] = useState("");
  //usado para filtrar los resultados de busqueda en el array de posts
  const [postsOk, setPostsOk] = useState(posts);

  //filtar
  const search = (e) => {
    setPostsOk(
      posts.filter(
        (post) =>
          post.content.toUpperCase().includes(e.toUpperCase()) ||
          post.title.toUpperCase().includes(e.toUpperCase())
      )
    );
  };

  //cada cambio en valueInput hace un filtrado en el array postOk, refrescando el filtrado constantemente
  useEffect(() => {
    search(valueInput);
  }, [valueInput]);

  return (
    <div className="container_component">
      <div className="content_container">
        <div className={styleBlog.blog_title}>Lee los artículos de mi blog</div>
        {/* barra de busqueda */}
        {!searchBar && (
          <div
            className={styleBlog.search_button}
            onClick={() => setSearchBar(true)}
          >
            <span class="material-symbols-outlined">search</span>
          </div>
        )}
        {searchBar && (
          <div className={styleBlog.search_bar}>
            <span class="material-symbols-outlined">search</span>
            <input
              autoFocus
              type="text"
              placeholder="Busca por título o por contenido del post..."
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
            />
            <span
              class="material-symbols-outlined"
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
                  <div className={`${styleBlog.button_post} button`}>
                    LEER MÁS...
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
