"use client";

import { Logo } from "@/components";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-10">
      <div className="p-3 bg-primary-400 rounded-b-md relative">
        <div className="flex justify-between container">
          <ul className="flex gap-4 items-center font-bold">
            <li>
              <a href="/">
                <div className="bg-white rounded-full flex justify-center items-center aspect-square p-2">
                  <Logo size="icon" />
                </div>
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
          <button
            className="mx-1"
            onClick={() => setIsDropdownOpen((old) => !old)}
          >
            <FaChevronDown />
          </button>
        </div>

        <div
          id="bottom-nav"
          className={`transition-[height_0.3s_ease] ${
            isDropdownOpen ? "overflow-auto h-fit" : "overflow-hidden h-0"
          }`}
        >
          <ul className="m-4 flex flex-col items-end italic gap-4">
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
