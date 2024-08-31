import React from "react";

const Home: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Correo copiado al portapapeles");
      },
      (err) => {
        console.error("Error al copiar al portapapeles: ", err);
      }
    );
  };

  return (
    // todo la tarjeta de presentacion 
    <div className="flex items-center justify-center h-screen bg-gray-100 bg-opacity-0">
      <div className="w-full h-full md:w-3/4 md:h-3/4 lg:w-2/3 lg:h-2/3 rounded overflow-hidden shadow-lg bg-white p-6">
      {/* Imagen  */}
        <div className="flex justify-center mb-6">
          <img
            className="w-48 h-48 object-cover rounded-full"
            src="https://via.placeholder.com/300x300"
            alt="Imagen de perfil"
          />
        </div>
        <div className="px-6 py-2 sm:py-4 h-auto">
          {/* Nommbre */}
          <h2 className="font-bold text-3xl md:text-4xl mb-2 sm:mb-4">
            Luis Martinez
          </h2>
          {/* Descripcion */}
          <p className="text-gray-700 text-base md:text-lg hidden sm:block">
            "Desarrollador Front-End con experiencia en React, JavaScript y
            Tailwind CSS. Apasionado por crear interfaces de usuario intuitivas
            y responsivas, optimizando la experiencia del usuario con un enfoque
            en la accesibilidad y el diseño atractivo."
          </p>
        </div>

        {/* Grupos de habilidades */}
        <div className="px-6 pt-4 pb-2 flex flex-wrap sm:flex-nowrap mb-0 sm:mb-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Desarrollador Front-end
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #HTML
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #TypeScript
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #javaScrip
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #React
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #Tailwind CSS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Next.js
          </span>
        </div>
        {/* Correo Electronico  */}
        <div className="px-6 py-2">
          <button
            onClick={() => copyToClipboard("tucorreo@example.com")}
            className="text-blue-500 hover:underline"
          >
            Luismartinez84ar@gmail.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
