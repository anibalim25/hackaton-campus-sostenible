import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonNavegacion from './BotonNavegacion';

const datosHistoricos = [
  { id: 'CONT-001', fecha: '2025-05-27', hora: '10:30', capacidad: '75%' },
  { id: 'CONT-002', fecha: '2025-05-27', hora: '10:35', capacidad: '30%' },
  { id: 'CONT-003', fecha: '2025-05-27', hora: '10:40', capacidad: '95%' },
  { id: 'CONT-004', fecha: '2025-05-27', hora: '10:45', capacidad: '60%' },
  { id: 'CONT-001', fecha: '2025-05-28', hora: '12:15', capacidad: '78%' },
  { id: 'CONT-002', fecha: '2025-05-28', hora: '12:30', capacidad: '33%' },
];

function Historico() {
  const navigate = useNavigate();

  const [filtroId, setFiltroId] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');

  const contenedoresUnicos = [...new Set(datosHistoricos.map(d => d.id))];

  const convertirAMinutos = (hora) => {
    if (!hora) return null;
    const [h, m] = hora.split(':').map(Number);
    return h * 60 + m;
  };

  const datosFiltrados = datosHistoricos.filter((registro) => {
    const coincideId = filtroId ? registro.id === filtroId : true;

    const horaRegistroMin = convertirAMinutos(registro.hora);
    const inicioMin = convertirAMinutos(horaInicio);
    const finMin = convertirAMinutos(horaFin);

    let coincideHora = true;
    if (inicioMin !== null && finMin !== null) {
      coincideHora = horaRegistroMin >= inicioMin && horaRegistroMin <= finMin;
    } else if (inicioMin !== null) {
      coincideHora = horaRegistroMin >= inicioMin;
    } else if (finMin !== null) {
      coincideHora = horaRegistroMin <= finMin;
    }

    return coincideId && coincideHora;
  });

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header con título y botón Volver */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Histórico de Llenado</h2>
          <BotonNavegacion to = "/"
             className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"

          >
            Volver
          </BotonNavegacion>
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
          <select
            className="border px-4 py-2 rounded w-full sm:w-auto"
            value={filtroId}
            onChange={(e) => setFiltroId(e.target.value)}
          >
            <option value="">Todos los contenedores</option>
            {contenedoresUnicos.map((id) => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>

          <div className="flex items-center gap-2">
            <label className="text-gray-700">Desde:</label>
            <input
              type="time"
              className="border px-4 py-2 rounded"
              value={horaInicio}
              onChange={(e) => setHoraInicio(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-gray-700">Hasta:</label>
            <input
              type="time"
              className="border px-4 py-2 rounded"
              value={horaFin}
              onChange={(e) => setHoraFin(e.target.value)}
            />
          </div>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-6 py-3 border-b font-medium text-gray-700">Contenedor</th>
                <th className="px-6 py-3 border-b font-medium text-gray-700">Fecha</th>
                <th className="px-6 py-3 border-b font-medium text-gray-700">Hora</th>
                <th className="px-6 py-3 border-b font-medium text-gray-700">Capacidad</th>
              </tr>
            </thead>
            <tbody>
              {datosFiltrados.length > 0 ? (
                datosFiltrados.map((registro, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">{registro.id}</td>
                    <td className="px-6 py-4 border-b">{registro.fecha}</td>
                    <td className="px-6 py-4 border-b">{registro.hora}</td>
                    <td className="px-6 py-4 border-b">{registro.capacidad}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                    No hay datos coincidentes
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Historico;
