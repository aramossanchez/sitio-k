import styleLanding from './Landing.module.scss';
import Image from "next/image";

export default function LandingComponent() {
  return (
    <div className={styleLanding.landing_container}>
      <div className={styleLanding.landing_image_container}>
        <Image
          src="/images/landing_image.png"
          alt="Picture of the author"
          width={700}
          height={400}
        />
      </div>
      <div className={styleLanding.landing_quote_container}>
        <div className={styleLanding.landing_quote}>
          <i>"Los problemas que parecen pequeños, son grandes problemas que aún no se entienden"</i>
          <p>(Santiago Ramón y Cajal)</p>
        </div>
      </div>
      <div className={styleLanding.separator_container}>
        <div className={styleLanding.separator_line}></div>
        <span class="material-symbols-outlined">
          self_improvement
        </span>
        <div className={styleLanding.separator_line}></div>
      </div>
    </div>
  );
}
