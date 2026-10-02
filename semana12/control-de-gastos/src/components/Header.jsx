const Header = ({ totalMonto, cantidadGastos }) => {
  return (
    <header className="mb-10 flex items-end justify-between gap-6">
      <div>
        <p className="font-mono text-xs text-emerald-600 tracking-widest uppercase mb-1">
          Finanzas Personales
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Control de Gastos</h1>
      </div>
      <div className="text-right shrink-0">
        <p className="text-3xl font-semibold leading-none text-neutral-900">
          S/.{totalMonto.toFixed(2)}
        </p>
        <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest mt-1">
          {cantidadGastos} {cantidadGastos === 1 ? "registro" : "registros"}
        </p>
      </div>
    </header>
  )
}

export default Header