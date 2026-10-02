import { useEffect, useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

const App = () => {
  const [corredores, setCorredores] = useState([])
  const [corredorAEditar, setCorredorAEditar] = useState(null)

  const API_URL = 'https://apibox.vercel.app/mxoRxINQFH2Bgl6chvTe5lEleNBWWHbV/api/marathon'

  // READ: Obtener corredores
  const fetchCorredores = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      setCorredores(data)
    } catch (error) {
      console.error("Error al cargar corredores:", error)
    }
  }

  useEffect(() => {
    fetchCorredores()
  }, [])

  // CREATE: Guardar nuevo corredor
  const agregarCorredor = async (nuevoCorredor) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoCorredor)
      })
      const data = await response.json()
      setCorredores([...corredores, data])
    } catch (error) {
      console.error("Error al crear:", error)
    }
  }

  // UPDATE: Actualizar corredor existente
  const actualizarCorredor = async (corredorActualizado) => {
    try {
      const response = await fetch(`${API_URL}/${corredorActualizado.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(corredorActualizado)
      })
      const data = await response.json()
      
      setCorredores(corredores.map(c => c.id === data.id ? data : c))
      setCorredorAEditar(null) // Limpiar modo edición
    } catch (error) {
      console.error("Error al actualizar:", error)
    }
  }

  // DELETE: Eliminar corredor
  const eliminarCorredor = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" })
      setCorredores(corredores.filter(c => c.id !== id))
    } catch (error) {
      console.error("Error al eliminar:", error)
    }
  }

  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <main className="max-w-2xl mx-auto px-6 py-16">
        <Header totalInscritos={corredores.length} />

        <div className="flex gap-4">
          <Form 
            agregarCorredor={agregarCorredor}
            actualizarCorredor={actualizarCorredor}
            corredorAEditar={corredorAEditar}
            setCorredorAEditar={setCorredorAEditar}
          />

          <List 
            corredores={corredores} 
            eliminarCorredor={eliminarCorredor}
            setCorredorAEditar={setCorredorAEditar}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App