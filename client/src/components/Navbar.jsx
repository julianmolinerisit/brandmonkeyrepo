import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showHoverContent, setShowHoverContent] = useState(false);
  const openMenu = () => {
    let menu = document.getElementById("menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };

  
  return (
    <div className="mb-4">
      <nav className="bg-gray-400 bg-opacity-10 py-0 mb-2 fixed top-0 w-full">
        <div className="container mx-auto flex px-8 xl:px-0">
          <div className="flex flex-grow items-center pl-10">
            <Link to="/">
              <img
                className="h-20"
                src="https://img.freepik.com/vector-premium/plantillas-diseno-logotipo-mono_67734-210.jpg?w=740"
                alt="not image"
              />
            </Link>
          </div>
          <button onClick={openMenu}>
            <BiMenu className="flex lg:hidden items-center" />
          </button>

          <div
            id="menu"
            className=" lg:flex lg:relative lg:top-0 w-full flex-grow  hidden justify-end absolute top-14 left-0  items-center py-14 lg-py-0 px-8 rounded-2xl "
          >
            <div className="flex flex-col lg:flex-row mb-8 lg:mb-0 items-center">
              <Link to="/" className="lg:mr-7 mb-8 lg:mb-0">
                INICIO
              </Link>
              <Link
                className="lg:mr-7 mb-8 lg:mb-0"
                onMouseEnter={() => setShowHoverContent(true)}
                onMouseLeave={() => setShowHoverContent(false)}
              >
                SERVICIOS
              </Link>

              <Link to="/blog" className="lg:mr-7 mb-8 lg:mb-0">
                BLOG
              </Link>
              <Link to="/portafolio" className="lg:mr-7 mb-8 lg:mb-0">
                PORTAFOLIO
              </Link>
              <Link to="/contacto">CONTACTO</Link>
            </div>
          </div>
        </div>
        {showHoverContent && (
          <div className="flex flex-col text-end mr-[350px]">
            <span>Todos</span>
            <span>Web</span>
            <span>Marketing</span>
            <span>ChatBot</span>
            <span>Otros</span>
          </div>
        )}
      </nav>
    </div>
  );
}
