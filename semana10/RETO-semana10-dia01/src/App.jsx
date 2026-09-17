// src/App.jsx
import Profile from './components/Profile';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Lista de Perfiles</h1>
      <Profile nombre="Jhony Verano" role="Frontend" />
      <Profile nombre="Cesar Verano" role="Backend" />
      <Profile nombre="María Carmen" role="Diseñer" />
    </div>
  );
}

export default App;