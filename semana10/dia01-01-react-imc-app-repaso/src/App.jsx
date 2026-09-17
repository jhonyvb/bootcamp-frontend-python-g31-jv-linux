import { useState } from "react" 


const App = () => {

  const [peso, setPeso]= useState(70)
  const [altura, setAltura] = useState(175)

  const handlePeso = (event)=>{
    setPeso(event.target.value)
  }
  const handleAltura = (event)=>{
    setAltura(event.target.value)
  }

  const imc= peso / ((altura/100)**2)
  const imcDecimal =imc.toFixed(2)


  let imcResultado= ''
  
  if (imc < 18.5) {
  imcResultado = 'Bajo peso'
  } else if (imc < 25.0) {
  imcResultado = 'Peso saludable'
  } else if (imc < 30.0) {
  imcResultado = 'Sobrepeso'
  } else {
    
  imcResultado = 'Obesidad'
  }
  

  return (
    <section className="w-[400px] bg-slate-200 p-4 mt-8 mx-auto rounded-md">
      <h1 className="text-3xl text-sky-600 text-center font-bold">IMC APP</h1>
      <div className="pt-4">
        <h3 className="font-bold">Peso: {peso} kg</h3>
        <input 
        type="range"
        min="50"
        max="200" 
        className="w-full"
        onChange={handlePeso}
        />
        
      </div>

      <div className="pt-4">
        <h3 className="font-bold">Altura: {altura} cm</h3>
        <input 
        type="range"
        min="50"
        max="200" 
        className="w-full"
        onChange={handleAltura}
        />
      </div>
      <p className="font-bold mt-4">Tu IMC es ={imcDecimal}</p>
      <p className="font-bold text-2xl">ESTADO de IMC: {imcResultado}</p>

    </section>
  
  )
}

export default App