import React, { useState } from "react";
import Link from "next/link";
import style from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [sideNav, setSideNav] = useState(false);

  return (
    <nav>
      <nav className={style.navbar}>
        <div className={style.menu}>
          <Link href="/">
            <Image src="/ego.svg" alt="EGO Logo" width={45} height={75} />
          </Link>
          <div className={style.router}>
            <Link href="/" className={`${style.link} ${style.active}`}>
              Modelos
            </Link>
            <Link href="/" className={style.link}>
              Ficha de Modelos
            </Link>
          </div>
          <div className={style.sideNavOpener}>
            Menú
            <label className={style.burger}>
              <input
                type="checkbox"
                onClick={() => setSideNav(!sideNav)}
              ></input>
              <svg viewBox="0 0 32 32">
                <path
                  className={`${style.line} ${style.line_top_bottom}`}
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className={style.line} d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
        <div
          className={
            sideNav
              ? `${style.sideNav} ${style.slide_to_left}`
              : `${style.sideNav} ${style.slide_to_right}`
          }
        >
          <ul className={style.sideNav_list}>
            <li>
              <Link href="/" className={style.sideNav_list_active}>
                Modelos
              </Link>
            </li>
            <li>Servicios y Accesorios</li>
            <li>Financiación</li>
            <li>Reviews y Comunidad</li>
            <hr className={style.sideNav_list_divisor} />
            <li>Toyota Mobility Service</li>
            <li>Toyota Gazoo Racing</li>
            <li>Toyota Híbridos</li>
            <hr className={style.sideNav_list_divisor} />
            <li>Concesionarios</li>
            <li>Test Drive</li>
            <li>Contacto</li>
            <hr className={style.sideNav_list_divisor} />
            <li>Actividades</li>
            <li>Servicios al Cliente</li>
            <li>Ventas Especiales</li>
            <li>Innovación</li>
            <li>Prensa</li>
            <li>Acerca de...</li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}
