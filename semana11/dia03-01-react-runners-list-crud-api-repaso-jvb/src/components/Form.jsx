import { useState, useEffect } from "react"

const Form = ({ agregarCorredor, actualizarCorredor, corredorAEditar, setCorredorAEditar }) => {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState("")
  const [categoria, setCategoria] = useState("")
  const [dorsal, setDorsal] = useState("")

  // Cargar los datos en el formulario si se presiona "Editar"
  useEffect(() => {
    if (corredorAEditar) {
      setNombre(corredorAEditar.nombre || "")
      setEdad(corredorAEditar.edad || "")
      setCategoria(corredorAEditar.categoria || "")
      setDorsal(corredorAEditar.dorsal || "")
    } else {
      limpiarFormulario()
    }
  }, [corredorAEditar])

  const limpiarFormulario = () => {
    setNombre("")
    setEdad("")
    setCategoria("")
    setDorsal("")
    setCorredorAEditar(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre || !edad || !categoria || !dorsal) return alert("Completa todos los campos")

    const datos = { nombre, edad: Number(edad), categoria, dorsal: Number(dorsal) }

    if (corredorAEditar) {
      actualizarCorredor({ ...datos, id: corredorAEditar.id })
    } else {
      agregarCorredor(datos)
    }

    limpiarFormulario()
  }

  return (
    <form onSubmit={handleSubmit} className="mb-12 border border-neutral-200 rounded-xl p-6" noValidate>
      <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 mb-4">
        {corredorAEditar ? "Editar inscripción" : "Inscripción"}
      </p>

      <div className="flex flex-col gap-4 mb-4">
        <label className="block text-xs text-neutral-500 mb-1">
          Nombre completo
          <input
            type="text" placeholder="Ana Torres" value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          />
        </label>

        <label className="block text-xs text-neutral-500 mb-1">
          Edad
          <input
            type="number" placeholder="28" value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          />
        </label>

        <label className="block text-xs text-neutral-500 mb-1">
          Categoría
          <select
            value={categoria} onChange={(e) => setCategoria(e.target.value)}
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          >
            <option value="">Elegir</option>
            <option value="5K">5K</option>
            <option value="10K">10K</option>
            <option value="21K">21K</option>
            <option value="42K">42K</option>
          </select>
        </label>

        <label className="block text-xs text-neutral-500 mb-1">
          Dorsal
          <input
            type="number" placeholder="101" value={dorsal}
            onChange={(e) => setDorsal(e.target.value)}
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm font-mono outline-none focus:border-neutral-900 transition-colors"
          />
        </label>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          type="submit"
          className="w-full bg-neutral-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
        >
          {corredorAEditar ? "Guardar cambios" : "Inscribir"}
        </button>

        {corredorAEditar && (
          <button
            type="button" onClick={limpiarFormulario}
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