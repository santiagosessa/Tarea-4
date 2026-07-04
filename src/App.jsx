import Tarjeta from './Tarjeta';
import './index.css';

function App() {
  return (
    <div className="contenedor-tarjetas">
      <Tarjeta
        nombre="Juan Pérez"
        profesion="Desarrollador Frontend"
        imagen="https://imgs.search.brave.com/5K0uE1hfiFOH9BErUpN13L2UQFexDuSBqQmkf5lXwwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzIyMzk0/OTY0MTItYWI2MDVi/ZWZhNTNmP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE1UTjhm/RzFoYzJOMWJHbHVi/M3hsYm53d2ZId3dm/SHg4TUE9PQ"
        descripcion="Especialista en React, enfocado en crear interfaces limpias y rápidas para mejorar la experiencia de usuario."
      />
      <Tarjeta
        nombre="Ana Gómez"
        profesion="Diseñadora UX/UI"
        imagen="https://imgs.search.brave.com/_uBlI5rsFcEcVRTKSwsrE2oHKEuiVspkpPYcnuElOjQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NzgxNjg5Ny9lcy9m/b3RvL211amVyLWRl/LW5lZ29jaW9zLWdl/cmVudGUtby1yZXRy/YXRvLWRlLXJlY3Vy/c29zLWh1bWFub3Mt/cGFyYS1lbC0lQzMl/QTl4aXRvLXByb2Zl/c2lvbmFsLWxhLWVt/cHJlc2EuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVVVUU10/NFF2WUlsRDNPVVRf/UTgxblpMVE1MNnZi/NVg1YndNTGp6blZO/dWs9"
        descripcion="Apasionada por la usabilidad y la creación de flujos de interacción que conecten al usuario con el producto."
      />
      <Tarjeta
        nombre="Carlos López"
        profesion="Ingeniero de Software"
        imagen="https://imgs.search.brave.com/-VKEqxUvdMFLPOf4CaP2ffmtSpZmSi0njmAGz0kC3L0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/NTU0Njc3NC9lcy9m/b3RvL2hvbWJyZS1j/YWx2by1zb25yaWVu/ZG8tYS1sYS1jJUMz/JUExbWFyYS1kZS1w/aWUtY29uLWxvcy1i/cmF6b3MtY3J1emFk/b3MuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPS1jSG5SMTM5/cV9JOHpHZ0kxM1JH/b0RYMEpySzJkVHJm/QmdoSjRYUUVtN1E9"
        descripcion="Experto en backend y bases de datos, garantizando que el sistema sea escalable, seguro y eficiente."
      />
    </div>
  );
}

export default App;
