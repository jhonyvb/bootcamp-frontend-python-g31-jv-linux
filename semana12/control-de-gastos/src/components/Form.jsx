import { useState, useEffect } from "react"

const Form = ({ onCreate, onUpdate, editingGasto, setEditingGasto, loading }) => {
  const [formData, setFormData] = useState({
    concepto: "",
    monto: "",
    categoria: "",
    fecha: ""
  })

  useEffect(() => {
    if (editingGasto) {
      setFormData({
        concepto: editingGasto.concepto || "",
        monto: editingGasto.monto || "",
        categoria: editingGasto.categoria || "",
        fecha: editingGasto.fecha || ""
      })
    } else {
      resetForm()
    }
  }, [editingGasto])

  const resetForm = () => {
    setFormData({ concepto: "", monto: "", categoria: "", fecha: "" })
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.concepto || !formData.monto || !formData.categoria || !formData.fecha) {
      alert("Por favor, completa todos los campos del gasto")
      return
    }

    if (editingGasto) {
      onUpdate(editingGasto.id, formData)
    } else {
      onCreate(formData)
    }

    resetForm()
  }

  const handleCancel = () => {
    setEditingGasto(null)
    resetForm()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-12 border border-slate-200/80 bg-white rounded-2xl p-6 w-full md:w-80 shrink-0 h-fit shadow-sm"
    >
      <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-600 font-bold mb-4">
        {editingGasto ? "Editar Gasto" : "Nuevo Gasto"}
      </p>

      <div className="flex flex-col gap-4 mb-6">
        <label className="block text-xs font-semibold text-slate-600">
          Concepto / Servicio
          <input
            id="concepto"
            type="text"
            value={formData.concepto}
            onChange={handleChange}
            placeholder="Ej: Netflix, Almuerzo..."
            className="w-full mt-1 border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/50 outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
          />
        </label>

        <label className="block text-xs font-semibold text-slate-600">
          Monto (S/)
          <input
            id="monto"
            type="number"
            step="0.01"
            value={formData.monto}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full mt-1 border border-slate-200 rounded-xl px-3 py-2 text-sm font-mono bg-slate-50/50 outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
          />
        </label>

        <label className="block text-xs font-semibold text-slate-600">
          Categoría
          <select
            id="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="w-full mt-1 border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/50 outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
          >
            <option value="">Seleccionar</option>
            <option value="Alimentación">Alimentación</option>
            <option value="Servicios">Servicios</option>
            <option value="Ocio">Ocio</option>
            <option value="Transporte">Transporte</option>
            <option value="Salud">Salud</option>
          </select>
        </label>

        <label className="block text-xs font-semibold text-slate-600">
          Día / Fecha
          <input
            id="fecha"
            type="text"
            value={formData.fecha}
            onChange={handleChange}
            placeholder="Ej: 15 Sep o Hoy"
            className="w-full mt-1 border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/50 outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
          />
        </label>
      </div>

      <div className="flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {editingGasto ? "Guardar cambios" : "Registrar gasto"}
        </button>

        {editingGasto && (
          <button
            type="button"
            onClick={handleCancel}
            className="text-xs text-slate-400 hover:text-slate-800 transition-colors"
          >
            Cancelar edición
          </button>
        )}
      </div>
    </form>
  )
}

export default Form