import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ComponenteLista from './ComponenteLista';
import BotonNavegacion from './BotonNavegacion';

function Lista() {
  const navigate = useNavigate();

  const [filtro, setFiltro] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [ubicacionFiltro, setUbicacionFiltro] = useState('Todas');
  const [paginaActual, setPaginaActual] = useState(1);
  const contenedoresPorPagina = 2;

  const contenedores = [
    {
      id: "CONT-001",
      tipo: "Plásticos",
      capacidad: "75%",
      ubicacion: "Edificio A, Planta Baja",
      nivelLlenado: "amarillo",
      color: "verde"
    },
    {
      id: "CONT-002",
      tipo: "Vidrio",
      capacidad: "30%",
      ubicacion: "Edificio B, Pasillo Central",
      nivelLlenado: "verde",
      color: "verde"
    },
    {
      id: "CONT-003",
      tipo: "Orgánico",
      capacidad: "95%",
      ubicacion: "Comedor Principal",
      nivelLlenado: "rojo",
      color: "verde"
    },
    {
      id: "CONT-004",
      tipo: "Papel/Cartón",
      capacidad: "60%",
      ubicacion: "Biblioteca, Sala de Estudio",
      nivelLlenado: "amarillo",
      color: "verde"
    }
  ];

  const ubicacionesUnicas = ['Todas', ...new Set(contenedores.map(c => c.ubicacion))];

  const handleVerContenedores = (id) => {
    console.log(`Mostrar detalles del contenedor ${id}`);
  };

  //FILTER
  const contenedoresFiltrados = contenedores.filter(c => {
    const coincideTipo = filtro === 'Todos' || c.tipo === filtro;
    const coincideBusqueda = c.id.toLowerCase().includes(busqueda.toLowerCase());
    const coincideUbicacion = ubicacionFiltro === 'Todas' || c.ubicacion === ubicacionFiltro;
    return coincideTipo && coincideBusqueda && coincideUbicacion;
  });

  // PAGING
  const indexInicio = (paginaActual - 1) * contenedoresPorPagina;
  const indexFin = indexInicio + contenedoresPorPagina;
  const contenedoresPaginados = contenedoresFiltrados.slice(indexInicio, indexFin);
  const totalPaginas = Math.ceil(contenedoresFiltrados.length / contenedoresPorPagina);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header con título y botón Volver */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Monitor de Contenedores ECO-ETSISI</h1>
          <BotonNavegacion
            to = "/"
             className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Volver
          </BotonNavegacion>
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4">
          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Buscar por ID..."
              className="px-4 py-2 border rounded-lg w-full"
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
                setPaginaActual(1);
              }}
            />
          </div>

          <div className="flex gap-2 w-full sm:w-auto flex-wrap">
            {['Todos', 'Plásticos', 'Vidrio', 'Orgánico', 'Papel/Cartón'].map((tipo) => (
              <button
                key={tipo}
                className={`px-4 py-2 rounded-lg ${
                  filtro === tipo ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => {
                  setFiltro(tipo);
                  setPaginaActual(1);
                }}
              >
                {tipo}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-auto">
            <select
              className="px-4 py-2 border rounded-lg w-full"
              value={ubicacionFiltro}
              onChange={(e) => {
                setUbicacionFiltro(e.target.value);
                setPaginaActual(1);
              }}
            >
              {ubicacionesUnicas.map((ubic) => (
                <option key={ubic} value={ubic}>
                  {ubic}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Lista de contenedores */}
        <div className="space-y-6">
          {contenedoresPaginados.length === 0 ? (
            <p className="text-center text-gray-500">No se encontraron contenedores.</p>
          ) : (
            contenedoresPaginados.map((contenedor) => (
              <ComponenteLista
                key={contenedor.id}
                {...contenedor}
                onVerDetalles={() => handleVerContenedores(contenedor.id)}
              />
            ))
          )}
        </div>

        {/* PAGING */}
        {totalPaginas > 1 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex gap-2">
              {[...Array(totalPaginas)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setPaginaActual(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    paginaActual === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              {paginaActual < totalPaginas && (
                <button
                  onClick={() => setPaginaActual((prev) => prev + 1)}
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                >
                  Siguiente
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lista;
