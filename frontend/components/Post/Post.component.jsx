import { useEffect, useState } from "react";
import posts from "../../services/posts";
import { useRouter } from "next/router";
import stylePost from "./Post.module.scss";
import Image from "next/image";

export default function PostComponent() {
  const router = useRouter();

  const [postSelected, setPostSelected] = useState({});

  useEffect(() => {
    if (router.query.post_id) {
      posts.map((post) => {
        if (post.id.includes(router.query.post_id)) {
          setPostSelected(post);
        }
      });
    }
  }, [router.query.post_id]);

  return (
    <div className={stylePost.post_container}>
      <div className={stylePost.post_article}>
        <div className={stylePost.post_image}>
          <Image
            src={postSelected.image}
            alt="Picture of the author"
            width={250}
            height={80}
          />
        </div>
        <div className={stylePost.post_title}>{postSelected.title}</div>
        <div className={stylePost.post_content} dangerouslySetInnerHTML={{ __html: postSelected.content }}></div>
      </div>
      <div className={stylePost.post_lateral}>
      </div>
    </div>
  );
}
