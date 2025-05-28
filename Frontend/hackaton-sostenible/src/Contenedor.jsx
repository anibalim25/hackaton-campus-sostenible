function Contenedor({ ubicacion, llenado, tipo }) {

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
    <div className="min-h-screen flex items-center justify-center px-[10vw]">
      <div>
        
      </div>
      <div className="flex flex-col md:flex-row w-full gap-6">

        <div className="flex-1 flex flex-col justify-center gap-4 text-xl mx-3">
          <div className="flex items-center gap-x-2">
            <p className="text-2xl font-semibold">Ubicación:</p>
            <p className="text-2xl">{ubicacion}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-2xl font-semibold">Llenado:</p>
            <p className="text-2xl">{llenado}%</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-2xl font-semibold">Tipo:</p>
            <p className="text-2xl">{tipo}</p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div
            className={`relative overflow-hidden w-full max-w-xs aspect-[3/4] bg-gray-200 border-4 rounded-4xl ${bordeColorClase}`}
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
