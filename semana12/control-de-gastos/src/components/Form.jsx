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
      className="mb-12 border border-neutral-200 bg-white rounded-xl p-6 w-full md:w-80 shrink-0 h-fit"
    >
      <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 mb-4">
        {editingGasto ? "Editar Gasto" : "Nuevo Gasto"}
      </p>

      <div className="flex flex-col gap-4 mb-6">
        <label className="block text-xs text-neutral-500">
          Concepto / Servicio
          <input
            id="concepto"
            type="text"
            value={formData.concepto}
            onChange={handleChange}
            placeholder="Suscripción Netflix, Almuerzo..."
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          />
        </label>

        <label className="block text-xs text-neutral-500">
          Monto (S/.)
          <input
            id="monto"
            type="number"
            step="0.01"
            value={formData.monto}
            onChange={handleChange}
            placeholder="25.50"
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm font-mono outline-none focus:border-neutral-900 transition-colors"
          />
        </label>

        <label className="block text-xs text-neutral-500">
          Categoría
          <select
            id="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          >
            <option value="">Seleccionar</option>
            <option value="Alimentación">Alimentación</option>
            <option value="Servicios">Servicios</option>
            <option value="Ocio">Ocio</option>
            <option value="Transporte">Transporte</option>
            <option value="Salud">Salud</option>
          </select>
        </label>

        <label className="block text-xs text-neutral-500">
          Día / Fecha
          <input
            id="fecha"
            type="text"
            value={formData.fecha}
            onChange={handleChange}
            placeholder="Ej: 15 Sep o Hoy"
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          />
        </label>
      </div>

      <div className="flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-neutral-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {editingGasto ? "Guardar cambios" : "Registrar gasto"}
        </button>

        {editingGasto && (
          <button
            type="button"
            onClick={handleCancel}
            className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            Cancelar edición
          </button>
        )}
      </div>
    </form>
  )
}

export default Form