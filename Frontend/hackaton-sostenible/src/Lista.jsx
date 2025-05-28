import ComponenteLista from './ComponenteLista';

function Lista() {
  // Datos de ejemplo para los contenedores
  const contenedores = [
    {
      id: "CONT-001",
      tipo: "Plásticos",
      capacidad: "75%",
      ubicacion: "Edificio A, Planta Baja",
      nivelLlenado: "amarillo",
      color: "naranja"
    },
    {
      id: "CONT-002",
      tipo: "Vidrio",
      capacidad: "30%",
      ubicacion: "Edificio B, Pasillo Central",
      nivelLlenado: "verde",
      color: "azul"
    },
    {
      id: "CONT-003",
      tipo: "Orgánico",
      capacidad: "95%",
      ubicacion: "Comedor Principal",
      nivelLlenado: "rojo",
      color: "naranja"
    },
    {
      id: "CONT-004",
      tipo: "Papel/Cartón",
      capacidad: "60%",
      ubicacion: "Biblioteca, Sala de Estudio",
      nivelLlenado: "amarillo",
      color: "azul"
    }
  ];

  const handleVerContenedores = (id) => {
    console.log(`Mostrar detalles del contenedor ${id}`);
    // Aquí puedes implementar la navegación o lógica para mostrar detalles
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Monitor de Contenedores ECO-ETSISI</h1>
        
        {/* Filtros y búsqueda (opcional) */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Buscar contenedor..."
              className="px-4 py-2 border rounded-lg w-full"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Todos</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Plásticos</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Vidrio</button>
          </div>
        </div>

        {/* Lista de contenedores */}
        <div className="space-y-6">
          {contenedores.map((contenedor) => (
            <ComponenteLista
              key={contenedor.id}
              id={contenedor.id}
              tipo={contenedor.tipo}
              capacidad={contenedor.capacidad}
              ubicacion={contenedor.ubicacion}
              nivelLlenado={contenedor.nivelLlenado}
              color={contenedor.color}
              onVerDetalles={() => handleVerContenedores(contenedor.id)}
            />
          ))}
        </div>

        {/* Paginación (opcional) */}
        <div className="mt-8 flex justify-center">
          <nav className="flex gap-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">1</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">2</button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">Siguiente</button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Lista;