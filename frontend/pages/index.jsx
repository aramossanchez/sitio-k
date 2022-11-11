import LandingComponent from "../components/Landing/Landing.component";
import LayoutComponent from "../components/Layout/Layout.component";

export default function LandingPage() {
  return (
    <div>
      <LayoutComponent title='Inicio - Carmina Zamora'>
        <LandingComponent />
      </LayoutComponent>
    </div>
  )
}
