const List = ({ gastos, onEdit, onDelete, loading }) => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">
          Historial de Movimientos
        </h2>
        <div className="h-px flex-1 bg-neutral-200 mx-4"></div>
      </div>

      {loading && gastos.length === 0 ? (
        <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest py-10 text-center">
          Cargando datos...
        </p>
      ) : gastos.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-neutral-200 rounded-xl">
          <p className="text-lg font-semibold text-neutral-400 mb-1">Sin registros</p>
          <p className="text-sm text-neutral-400">No has registrado ningún gasto aún.</p>
        </div>
      ) : (
        <ul className="space-y-3 mb-4">
          {gastos.map((gasto) => (
            <li
              key={gasto.id}
              className="flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors"
            >
              <div className="shrink-0 w-16 h-12 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
                <span className="font-mono text-xs font-semibold text-neutral-800">
                  S/.{parseFloat(gasto.monto || 0).toFixed(2)}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{gasto.concepto}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-medium">
                    {gasto.categoria}
                  </span>
                  <span className="text-xs text-neutral-400">{gasto.fecha}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onEdit(gasto)}
                  className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(gasto.id)}
                  className="text-xs text-neutral-400 hover:text-red-500 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default List