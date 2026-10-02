const List = ({ gastos, onEdit, onDelete, loading }) => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-mono text-[11px] uppercase tracking-widest text-slate-400 font-bold">
          Historial de Movimientos
        </h2>
        <div className="h-px flex-1 bg-slate-200 mx-4"></div>
      </div>

      {loading && gastos.length === 0 ? (
        <p className="font-mono text-xs text-slate-400 uppercase tracking-widest py-10 text-center">
          Cargando datos...
        </p>
      ) : gastos.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl bg-white/50">
          <p className="text-base font-bold text-slate-400 mb-1">Sin registros</p>
          <p className="text-xs text-slate-400">No has registrado ningún gasto aún.</p>
        </div>
      ) : (
        <ul className="space-y-3 mb-4">
          {gastos.map((gasto) => {
            const montoFormateado = Number(gasto.monto || 0).toLocaleString('es-PE', {
              style: 'currency',
              currency: 'PEN'
            })

            return (
              <li
                key={gasto.id}
                className="flex items-center gap-4 bg-white border border-slate-200/80 rounded-2xl px-4 py-3.5 hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div className="shrink-0 px-3 py-2 rounded-xl border border-emerald-100 bg-emerald-50/50 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-emerald-700">
                    {montoFormateado}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate">{gasto.concepto}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold border border-slate-200/60">
                      {gasto.categoria}
                    </span>
                    <span className="text-xs text-slate-400">{gasto.fecha}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => onEdit(gasto)}
                    className="text-xs font-medium text-slate-400 hover:text-emerald-600 transition-colors"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(gasto.id)}
                    className="text-xs font-medium text-slate-400 hover:text-rose-500 transition-colors"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default List