import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function handleScroll() {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="txt1 flex justify-center w-full items-center sticky top-0 z-50 bg3 shadow-xl">
      <div className="container flex justify-between items-center py-5 px-4 relative">
        <a className="flex justify-start items-center">
          <img src={logo} className="h-12 lg:h-full" />
        </a>

        <div className="hidden lg:flex flex-row gap-5 items-center">
          <a href="#Home" className="nav-link active">
            الرئيسية
          </a>
          <a href="#Services" className="nav-link">
            خدماتنا
          </a>
          <a href="#About" className="nav-link">
            من نحن
          </a>
          <a href="#Partners" className="nav-link">
            شركاؤنا
          </a>
          <a href="#Team" className="nav-link">
            فريق العمل
          </a>
          <a href="#FAQ" className="nav-link">
            الأسئلة الشائعة
          </a>
          <a href="#Contact" className="bg2 p-2 lg:p-3 rounded-3xl txt3">
            تواصل معنا
          </a>
        </div>

        <div className="lg:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="txt1 focus:outline-none hover:scale-[1.3]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg1 opacity-40 z-40"
          ></div>

          <div className="fixed top-0 right-0 w-3/4 h-full bg3 z-50 flex flex-col items-start px-8 pt-12 pb-4 space-y-5 shadow-lg transition-all duration-300">
            <img src={logo} className="mb-20" />
            <a
              href="#Home"
              className="nav-link active"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </a>
            <a
              href="#Services"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              خدماتنا
            </a>
            <a
              href="#About"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              من نحن
            </a>
            <a
              href="#Partners"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              شركاؤنا
            </a>
            <a
              href="#Team"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              فريق العمل
            </a>
            <a
              href="#FAQ"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              الأسئلة الشائعة
            </a>
            <a
              href="#Contact"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              تواصل معنا
            </a>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
