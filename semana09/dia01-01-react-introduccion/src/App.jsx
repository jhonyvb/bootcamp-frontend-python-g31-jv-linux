//01- Componente base usando function

//function App(){
//   return <h1>Hola Rect.js</h1>
//}


// ¿Que es un componente?
//* Es una funcion , devuelve JSK, todo componente en su nombre empieza con mayuscula

// Partes de un componente
// 1. Imports (Si los hay)
// 2  Logica (variables. hooks, functions )
// 3. Return -> JSK
// 4. Export (Nos sirve para crear un modulo de ES)

// Reglas basicas de un componente
// * Un solo elemento padre
// * Es recomendable  que la funcion tenga el nombre del archivo Ej. App.jsx -> App

// 02 Componentes usando multiples lineas


// function App(){
//   return (
//     <div>
//      <h1>Hola Cesar</h1>
//      <p>estamos aprendiendo sobre componentes</p>
//     </div> 
//   )
   
// }


//export default App

//03 - componentes usando fragments (<></>)

// function App(){
//   return (
//     <>
//      <h1>Hola Cesar</h1>
//      <p>estamos aprendiendo sobre componentes</p>
//     </> 
//   )
   
// }



// 04 -Extensiones deVSCODE PARA USAR CON React.js
// ES7+ React/Redux

// Snippets para crear componentes (rfc, rafce)


// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// snippet : rafce


// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// 05 - Anidar componentes dentro de otros
// function ComponentesSaludo(){
//   return <h4>Hola a todos</h4>
// }
// function ComponenteDespedida(){
//   return <h4>Hasta Luego muchachos</h4>
// }

// const App = () => {
//   return (
//     <section>
//         <h3>Componentes anidados</h3>
//         <ComponentesSaludo/>
//         <ComponenteDespedida/>
//     </section>
    
//   )
// }



//06- Importando compom¡nentes externos


// import ComponenteSaludo from "./components/ComponenteSaludo" 
// import ComponenteDespedida from "./components/ComponenteDespedida"
// function App() {
//   return (
//     <section>
//       <h3>Componentes saludos</h3>

//       <ComponenteSaludo/>
//       <ComponenteDespedida/>
//     </section>
//   )
// }



//07 Usando las expresiones con JSX -"{}"
// import nombreExportado, {frutas,curso} from "./modulo.js"

// const App = () => {
//    // Logica del componente
//    const suma =8+9
//    const nombre= "Jhony Verano"

//   return (
//     <section>
//       <h1>Usando expresiones con jsx</h1>
//       <p>{suma}</p>
//       <p>{1+9*5**2}</p>
//       <p>hola {nombre}</p>
//       <p>{`hola amigo ${nombre}`}</p>


//       {/* Hola este es un tipo de comentario dentro de jsx  */}
//       <p>{frutas}</p>
//       <p>{nombreExportado}</p>
//       <p>{JSON.stringify(curso)}</p>
//       <p>{curso.nombre}</p>
//       <p>{curso.nota}</p>
//     </section>
//   )
// }

// export default App

//09 Propiedades de un componente (Ahora el componente sera reutilizable)
// const BienvenidaPersonalizada =()=>{
//   return <h3>Hola a todos</h3>
// }

// const App = () => {
//   return (
//     <section>Propiedades de un componente</section>
//     <BienvenidaPersonalizada/>
//   )
// }

// export default App