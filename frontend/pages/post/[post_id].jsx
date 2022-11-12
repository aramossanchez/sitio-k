import PostComponent from "../../components/Post/Post.component";
import LayoutComponent from "../../components/Layout/Layout.component";

export default function PostPage() {
  return (
    <div>
      <LayoutComponent title='Entrada del blog - Laneuronamina'>
        <PostComponent />
      </LayoutComponent>
    </div>
  )
}
