"use client";

import { Logo } from "@/components";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  function toggleNavbar() {
    const bottomNav = document.getElementById("bottom-nav");
    if (!bottomNav) return;

    if (bottomNav.classList.contains("hidden")) {
      bottomNav.classList.remove("hidden");
    } else {
      bottomNav.classList.add("hidden");
    }
  }

  return (
    <nav className="sticky top-0 w-full">
      <div className="p-3 bg-primary-400 rounded-b-md">
        <div className="flex justify-between">
          <ul className="flex gap-4 items-center font-bold">
            <li>
              <a href="/">
                <Logo size="icon" />
              </a>
            </li>
            <li>
              <a href="/butik">Butik</a>
            </li>
            <li>
              <a href="/klinik">Klinik</a>
            </li>
            <li>
              <a href="/vandrarhem">Vandrarhem</a>
            </li>
          </ul>
          <button className="mx-1" onClick={toggleNavbar}>
            <FaChevronDown />
          </button>
        </div>
        <div id="bottom-nav" className="m-4 hidden">
          <ul className="flex flex-col items-end italic gap-4">
            <li>
              <a href="/about">Om oss</a>
            </li>
            <li>
              <a href="/contact">Kontakt</a>
            </li>
            <li>
              <a href="https://ananda-stones.vercel.app">Ananda Stones</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
