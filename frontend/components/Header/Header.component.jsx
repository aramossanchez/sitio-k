import styleHeader from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

export default function HeaderComponent() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styleHeader.header_container}>
      <div className={styleHeader.header_logo_links_container}>
        <div className={styleHeader.header_button} onClick={() => setMenuOpen(!menuOpen)}>
          <div className={menuOpen ? `${styleHeader.header_button_line1_open}` : `${styleHeader.header_button_line1_close}`}></div>
          <div className={menuOpen ? `${styleHeader.header_button_line2_open}` : `${styleHeader.header_button_line2_close}`}></div>
          <div className={menuOpen ? `${styleHeader.header_button_line3_open}` : `${styleHeader.header_button_line3_close}`}></div>
        </div>
        <div className={styleHeader.header_logo}>
          <Image
            src="/images/logo.png"
            alt="Picture of the author"
            width={250}
            height={80}
          />
        </div>
          <div className={menuOpen ? `${styleHeader.header_links_container_open}` : `${styleHeader.header_links_container_close}`}>
            <Link
              className={router.pathname === "/" ? styleHeader.current : null}
              href="/"
            >
              Inicio
            </Link>
            <Link
              className={
                router.pathname === "/blog" ? styleHeader.current : null
              }
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className={
                router.pathname === "/colaboraciones"
                  ? styleHeader.current
                  : null
              }
              href="/colaboraciones"
            >
              Colaboraciones
            </Link>
            <Link
              className={
                router.pathname === "/sobre-mi" ? styleHeader.current : null
              }
              href="/sobre-mi"
            >
              Sobre mi
            </Link>
          </div>
      </div>
    </div>
  );
}
