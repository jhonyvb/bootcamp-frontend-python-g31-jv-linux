import { useEffect, useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"
import Footer from "./components/Footer"

const App = () => {
  const [gastos, setGastos] = useState([])
  const [editingGasto, setEditingGasto] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Reemplaza esta URL con tu endpoint personalizado de ApiBox si lo deseas
  const API_URL = 'https://6abf1b7d06bcd2f206726c22.mockapi.io/gastos'

  // READ: Obtener gastos de APIBox
  const fetchGastos = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error("Error al obtener los gastos")
      const data = await response.json()
      setGastos(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGastos()
  }, [])

  // CREATE: Registrar un nuevo gasto
  const handleCreate = async (nuevoGasto) => {
    setLoading(true)
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoGasto)
      })
      if (!response.ok) throw new Error("Error al guardar el gasto")
      await fetchGastos()
    } catch (err) {
      alert("No se pudo registrar el gasto")
    } finally {
      setLoading(false)
    }
  }

  // UPDATE: Actualizar gasto existente
  const handleUpdate = async (id, gastoActualizado) => {
    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gastoActualizado)
      })
      if (!response.ok) throw new Error("Error al actualizar")
      setEditingGasto(null)
      await fetchGastos()
    } catch (err) {
      alert("No se pudo actualizar el gasto")
    } finally {
      setLoading(false)
    }
  }

  // DELETE: Eliminar gasto con confirmación previa
  const handleDelete = async (id) => {
    const confirmacion = window.confirm("¿Estás seguro de eliminar este registro de gasto?")
    if (!confirmacion) return

    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      })
      if (!response.ok) throw new Error("Error al eliminar")
      await fetchGastos()
    } catch (err) {
      alert("No se pudo eliminar el gasto")
    } finally {
      setLoading(false)
    }
  }

  // Cálculo del monto total gastado
  const totalMonto = gastos.reduce((acc, curr) => acc + (parseFloat(curr.monto) || 0), 0)

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col justify-between">
      <main className="max-w-2xl w-full mx-auto px-6 py-16">
        <Header totalMonto={totalMonto} cantidadGastos={gastos.length} />

        {error && (
          <div className="mb-6 p-4 text-sm text-red-600 bg-red-50 rounded-xl border border-red-200">
            {error}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          <Form
            onCreate={handleCreate}
            onUpdate={handleUpdate}
            editingGasto={editingGasto}
            setEditingGasto={setEditingGasto}
            loading={loading}
          />

          <List
            gastos={gastos}
            onEdit={setEditingGasto}
            onDelete={handleDelete}
            loading={loading}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App