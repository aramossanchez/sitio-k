import posts from "../../services/posts";
import styleBlog from "./Blog.module.scss";
import Image from "next/image";

export default function BlogComponent() {
  return (
    <div className="container_component">
      <div className="content_container">
        <div className={styleBlog.blog_title}>Lee los artículos de mi blog</div>
        <div className={styleBlog.posts_list}>
          {posts.map((post) => {
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
