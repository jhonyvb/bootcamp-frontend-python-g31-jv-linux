const Header = ({ totalMonto, cantidadGastos }) => {
  return (
    <header className="mb-8 p-6 bg-slate-900 text-white rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800">
      <div>
        <p className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1 font-semibold">
          Finanzas Personales
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-slate-100">Control de Gastos</h1>
      </div>
      
      <div className="text-left sm:text-right shrink-0">
        <p className="text-xs text-slate-400 uppercase font-mono tracking-wider mb-1">
          Gasto Acumulado
        </p>
        <p className="text-3xl font-extrabold text-emerald-400 tracking-tight leading-none">
          {totalMonto.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })}
        </p>
        <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-2">
          {cantidadGastos} {cantidadGastos === 1 ? "registro" : "registros"}
        </p>
      </div>
    </header>
  )
}

export default Header