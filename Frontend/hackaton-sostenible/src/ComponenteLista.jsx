export default function ComponenteLista({
  id,
  tipo,
  capacidad,
  ubicacion,
  nivelLlenado, // "rojo", "amarillo" o "verde"
  color,
  onVerDetalles // Función para manejar el click del botón
}) {
  const colorClasses = {
    naranja: 'bg-orange-500 border-orange-500',
    azul: 'bg-blue-500 border-blue-500',
    verde: 'bg-green-500 border-green-500',
  };

  const nivelLlenadoClasses = {
    rojo: 'bg-red-500',
    amarillo: 'bg-yellow-400',
    verde: 'bg-green-500'
  };

  const buttonClasses = {
    naranja: 'bg-orange-500 hover:bg-orange-600',
    azul: 'bg-blue-500 hover:bg-blue-600'
  };

  return (
    <div className={`w-[90%] mx-[5%] sm:w-[80%] sm:mx-[10%] border-3 rounded-xl overflow-hidden shadow-md mt-8 mb-12 ${colorClasses[color].replace('bg', 'border')}`}>
      {/* Encabezado con ID */}
      <div className={`${colorClasses[color]} pt-2 pb-2 flex justify-center items-center`}>
        <h1 className="text-xl font-bold text-white">ID: {id}</h1>
      </div>

      {/* Cuerpo - Diseño horizontal */}
      <div className="px-6 py-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Columna Tipo */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Tipo</h2>
            <hr className={`${colorClasses[color]} h-1 w-16 mx-auto mb-3`} />
            <p className="text-gray-700">{tipo}</p>
          </div>

          {/* Columna Capacidad */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Capacidad</h2>
            <hr className={`${colorClasses[color]} h-1 w-16 mx-auto mb-3`} />
            <p className="text-gray-700">{capacidad}</p>
          </div>

          {/* Columna Ubicación */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Ubicación</h2>
            <hr className={`${colorClasses[color]} h-1 w-16 mx-auto mb-3`} />
            <p className="text-gray-700">{ubicacion}</p>
          </div>

          {/* Columna Nivel de Llenado */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Llenado</h2>
            <hr className={`${colorClasses[color]} h-1 w-16 mx-auto mb-3`} />
            <div className="flex justify-center">
              <div className={`w-8 h-8 rounded-full ${nivelLlenadoClasses[nivelLlenado]}`}></div>
            </div>
          </div>
        </div>

        {/* Botón "Ver Contenedores" */}
        <div className="flex justify-center mt-4">
          <button 
            onClick={onVerDetalles}
            className={`${buttonClasses[color]} text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 hover:shadow-xl`}
          >
            Ver Contenedor
          </button>
        </div>
      </div>
    </div>
  );
}