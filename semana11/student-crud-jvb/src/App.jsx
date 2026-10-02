import { useState } from 'react'
import Swal from 'sweetalert2'

const App=() =>{
  const ESTUDIANTES_POR_DEFECTO=[

    {
      id:'1',
      name:'Lulu',
      city:'Lima',
      age:'25'
    },
     {
      id:'2',
      name:'Lolo',
      city:'Hyo',
      age:'20'
    },
     {
      id:'3',
      name:'Pedro',
      city:'hca',
      age:'15'
    }

  ]
  //2.Memoria de lista de estudiantes
  const[estudiantes, setEstudiantes]=useState(()=>{
    const estudiantesGuardados =localStorage.getItem('ESTUDIANTES')
    return estudiantesGuardados
      ? JSON.parse(estudiantesGuardados)
      :ESTUDIANTES_POR_DEFECTO
  })
//3. Memoria para la hoja borrador del formulario
 const [formulario, setFormulario]=useState({
  id:'',
  name:'',
  city:'',
  age:''
 })

//.4 Captura lo que tecleas en tiempo real y lo actualiza en la hoja borrador
 const manejarCambio=(evento)=>{
  const {name, value}=evento.target
  setFormulario({...formulario,[name]: value})
 }
 //.5 Restablece todos los campos del borrador para dejarlos vacíos
const limpiarFormulario=()=>{
  setFormulario({
    id:'',
    name:'',
    city:'',
    age:''
  })
}

//.6 Guarda un alumno nuevo o actualiza uno existente en la lista y en localStorage
const manejarGuardar=(evento)=>{
  evento.preventDefault()
  // CASO 1: Si ya tiene ID, editamos al alumno
  if (formulario.id){
    const estudiantesActualizados =estudiantes.map((estudiante)=>{
      if(estudiante.id === formulario.id){
        return{
          ...estudiante,
          name:formulario.name,
          city:formulario.city,
          age:formulario.age
        }
        
      }
      return estudiante
    })
  }
}

setEstudiantes(estudiantesActualizados)
localStorage.setItem('ESTUDIANTES', JSON.stringify(estudiantesActualizados))
limpiarFormulario()
return


// CASO 2: Si no tiene ID, creamos un alumno nuevo
const nuevoEstudiante ={
  id: crypto.randomUUID(),
  name:formulario.name,
  city:formulario.city,
  age:formulario.age
}
const estudiantesActualizados=[... estudiantes, nuevoEstudiante]
setEstudiantes(estudiantesActualizados)
localStorage.setItem('ESTUDIANTES', JSON.stringify(estudiantesActualizados))
limpiarFormulario()

}
export default App