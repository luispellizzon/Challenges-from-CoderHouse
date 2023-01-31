import React from "react";
import {useState, useRef, useEffect } from "react";
import Cart from "./Cart";
import Crown from "../assets/crown.svg";
import { motion } from "framer-motion";

const NavBar = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();
  
    /* Close and open menu mobile */
    useEffect(() => {
      const closeDropDown = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setIsMenuOpen(false);
        }
      };
  
      document.addEventListener("click", closeDropDown, { capture: true });
  
      return () => document.removeEventListener("click", closeDropDown, { capture: true });
    }, []);


    return (
        <nav className="container flex justify-between px-10 pt-10 pb-5 mx-auto border-b-2 border-black min-w-full md:min-w-max">
        <div className="nav-logo">
          <a href="/">
            <img src={Crown} alt="" />
          </a>
        </div>
        <div className="flex gap-5">
          {/* Desktop menu */}
          <div className="hidden sm:block">
            <ul className="relative overflow-visible flex gap-5 items-center pt-1 text-lg uppercase">
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                  <a href="/login">Sign In</a>
              </li>
            </ul>
          </div>
        
        {/* Mobile menu */}
          {/* Burguer Menu */}
          <div ref={menuRef} className="relative flex gap-4 items-center sm:hidden ">
            <button
              id="menu-btn"
              className={`${isMenuOpen ? "open" : ""} block hamburger px-3 py-3`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-mid"></span>
              <span className="hamburger-bot"></span>
            </button>
            
            {/* Check if Menu is opened */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="menu-mobile absolute top-10 right-0 bg-white border-black border-[1px] rounded py-2 z-30"
              >
                <ul className="flex flex-col space-y-4 py-2 text-center">
                  <li className="border-b-black border-b-[1px] px-4 pb-3 uppercase">
                    <a href="/shop">Shop</a>
                  </li>
                  <li className="border-b-black border-b-[1px] px-4 pb-4 uppercase">
                    <a href="/contact">Contact</a>
                  </li>
                  <li className="px-4 uppercase">
                      <a href="/login">Sign In</a>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
          {/* <Cart /> */}
                <Cart />
        </div>
      </nav>
    )
};

export default NavBar;