import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
export default function Portafoliox() {
  return (
    <div className="flex-grow mt-36">
      <div className="flex justify-center text-3xl mb-6">
        <h1>Portafolio</h1>
      </div>
      <div className="flex justify-center mb-10">
        <div className="flex flex-row">
          <button className="px-2 hover:border-b border-blue-500">Todos</button>
          <button className="px-2 hover:border-b border-blue-500">Web</button>
          <button className="px-2 hover:border-b border-blue-500">
            Marketing
          </button>
          <button className="px-2 hover:border-b border-blue-500">
            ChatBot
          </button>
          <button className="px-2 hover:border-b border-blue-500">Otros</button>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-8 mt-6">
        <div className="hover:opacity-60 transition duration-500">
          <img
            src="https://img.freepik.com/psd-gratis/plantilla-web-pagina-inicio-restaurante-comida-tradicional-italiana_23-2148526098.jpg?w=996&t=st=1681244174~exp=1681244774~hmac=f3794791efd74c96c5402372eb795057e3ea6889a9a7ef9f37d810ea9f7ce4a8"
            alt=""
            className="w-80"
          />
        </div>
        <div className="hover:opacity-60 transition duration-500">
          <img
            src="https://img.freepik.com/psd-gratis/plantilla-web-pagina-inicio-restaurante-comida-tradicional-italiana_23-2148526098.jpg?w=996&t=st=1681244174~exp=1681244774~hmac=f3794791efd74c96c5402372eb795057e3ea6889a9a7ef9f37d810ea9f7ce4a8"
            className="w-80"
            alt=""
          />
        </div>
        <div className="hover:opacity-60 transition duration-500">
          <img
            src="https://img.freepik.com/psd-gratis/plantilla-web-pagina-inicio-restaurante-comida-tradicional-italiana_23-2148526098.jpg?w=996&t=st=1681244174~exp=1681244774~hmac=f3794791efd74c96c5402372eb795057e3ea6889a9a7ef9f37d810ea9f7ce4a8"
            className="w-80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
