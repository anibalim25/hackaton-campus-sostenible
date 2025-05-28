import BotonNavegacion from './BotonNavegacion';

function Contenedor({ edificio, ubi, llenado, tipo }) {
  let colorClase = 'bg-green-400';
  if (llenado > 75) {
    colorClase = 'bg-red-400';
  } else if (llenado > 50) {
    colorClase = 'bg-yellow-300';
  }

  const tipoColorMap = {
    'papel': 'border-blue-500',
    'vidrio': 'border-green-700',
    'envases': 'border-yellow-400',
    'plástico': 'border-yellow-400',
    'orgánico': 'border-amber-800',
    'resto': 'border-gray-500',
  };

  const tipoNormalized = tipo?.toLowerCase() || '';
  const bordeColorClase = tipoColorMap[tipoNormalized] || 'border-gray-300';

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-[10vw] pt-10">
      <div className="pt-10 flex items-center justify-center flex-col w-full mb-5">
        <h1 className="text-6xl font-bold text-grisaceo-next">Contenedor</h1>
        <hr className="border-green-500 w-[80%] border-2 mt-2 mb-6" />
      </div>

      <div className="flex flex-col md:flex-row w-full gap-6">
        <div className="flex-1 mx-3 rounded-4xl border-4 border-green-500 p-6 bg-green-100 shadow-lg h-fit">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-xl">
            {[
              ['Edificio', edificio],
              ['Ubicación', ubi],
              ['Llenado', `${llenado}%`],
              ['Tipo', tipo],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col">
                <p className="text-2xl font-semibold border-b-2 border-green-500 pb-1 mb-2">
                  {label}
                </p>
                <p className="text-2xl break-words">{value}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="rounded-4xl px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-lg hover:brightness-110 transition duration-300">
              Ver histórico
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div
            className={`relative overflow-hidden shadow-lg w-full max-w-xs aspect-[3/4] bg-gray-200 border-4 rounded-4xl ${bordeColorClase}`}
          >
            <div
              className={`w-full absolute bottom-0 left-0 ${colorClase}`}
              style={{ height: `${llenado}%` }}
            ></div>
          </div>
        </div>
        
      </div>

      
    </div>
  );
}

export default Contenedor;
