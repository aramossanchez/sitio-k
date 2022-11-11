import BlogComponent from "../components/Blog/Blog.component";
import LayoutComponent from "../components/Layout/Layout.component";

export default function BlogPage() {
  return (
    <div>
      <LayoutComponent title='Blog - Laneuronamina'>
        <BlogComponent />
      </LayoutComponent>
    </div>
  )
}
