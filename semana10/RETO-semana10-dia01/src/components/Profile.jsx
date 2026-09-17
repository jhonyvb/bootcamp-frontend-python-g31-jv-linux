// src/components/Profile.jsx
function Profile({ nombre, role }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h2>{nombre}</h2>
      <p>Rol: {role}</p>
    </div>
  );
}

export default Profile;