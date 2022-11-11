import styleHeader from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from 'next/image'

export default function HeaderComponent() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
  }, [router.pathname]);

  return (
    <div className={styleHeader.header_container}>
      <div className={styleHeader.header_logo_links_container}>
        <div className={styleHeader.header_logo}>
          <Image
            src="/images/logo.png"
            alt="Picture of the author"
            width={250}
            height={80}
          />
        </div>
        <div className={styleHeader.header_links_container}>
          <Link
            className={router.pathname === "/" ? styleHeader.current : null}
            href="/"
          >
            Inicio
          </Link>
          <Link
            className={router.pathname === "/blog" ? styleHeader.current : null}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={
              router.pathname === "/colaboraciones" ? styleHeader.current : null
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
