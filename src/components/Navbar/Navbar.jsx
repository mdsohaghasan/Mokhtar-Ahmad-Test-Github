"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.png";
import React, { useState } from 'react'

const Navbar = () => {

  const [mobileToggle, setMobileToggle] = useState(false);

  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  }

  return (
    <header className="st-site-header st-style1 st-sticky-header">
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <Link className="st-site-branding" href="/">
                <Image src={logo} alt="Mokhter Ahmad" />
              </Link>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul className="st-nav-list st-onepage-nav" style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                  <li>
                    <Link href="/" className="st-smooth-move" onClick={() => setMobileToggle(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="st-smooth-move" onClick={() => setMobileToggle(false)}>
                      About
                    </Link>
                  </li>
                  {/* Submenu  */}
                  <span className="dropdown relative st-smooth-move me-5">
                    <li className="rounded inline-flex items-center me-1">
                      <Link href="/lecture" className="st-smooth-move" onClick={() => setMobileToggle(false)}>
                        MEDIA
                      </Link>
                    </li>
                    <i className="bi bi-chevron-down"></i>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                      <li className="">
                        <Link
                          className="st-smooth-move rounded-t bg-gray-200 hover:bg-[#FEC544] py-2 px-4 block"
                          href="/live" onClick={() => setMobileToggle(false)} >
                          LIVE
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="st-smooth-move rounded-t bg-gray-200 hover:bg-[#FEC544] py-2 px-4 block"
                          href="/lecture" onClick={() => setMobileToggle(false)} >
                          LECTURES
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="st-smooth-move bg-gray-200 hover:bg-[#FEC544] py-2 px-4 block"
                          href="/podcast" onClick={() => setMobileToggle(false)}>
                          PODCAST
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="st-smooth-move rounded-b bg-gray-200 hover:bg-[#FEC544] py-2 px-4 block"
                          href="/gallery" onClick={() => setMobileToggle(false)}>
                          GALLERY
                        </Link>
                      </li>
                    </ul>
                  </span>
                  {/* Submenu  */}
                  <li>
                    <Link href="/consultancy" className="st-smooth-move" onClick={() => setMobileToggle(false)}>
                      CONSULTANCY
                    </Link>
                  </li>
                {/* Submenu  */}
                <span className="dropdown relative st-smooth-move me-5">
                    <li className="rounded inline-flex items-center me-1">
                      <Link href="/blog" className="st-smooth-move" onClick={() => setMobileToggle(false)}>
                       Blog
                      </Link>
                    </li>
                    <i className="bi bi-chevron-down"></i>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                      <li className="">
                        <Link
                          className="st-smooth-move rounded-t bg-gray-200 hover:bg-[#FEC544] py-2 px-4 block"
                          href="/quotes" onClick={() => setMobileToggle(false)} >
                          QUOTES
                        </Link>
                      </li>
                    </ul>
                  </span>
                  {/* Submenu  */}
                </ul>
                <div className={`st-munu-toggle ${mobileToggle ? "st-toggle-active" : ""} `}  onClick={handleToggleMenu}>
                  <span></span>
                </div>
                <div className="sp-phone">
                  <div className="st-hero-btn">
                    <Link
                      href="/applyProgram"
                      className="st-btn st-style1 st-color1 st-smooth-move"
                    >
                      Apply Program
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
