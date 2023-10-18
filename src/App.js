import React, { useState } from 'react';
import './App.css';


function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarCambioNombre = (e) => {
    setNombre(e.target.value.trim());
  };

  const generarMensaje = () => {
    if (nombre.trim() === '') {
      setMensaje('Por favor, ingresa tu nombre.');
    } else if (nombre == "Teodelina" || nombre == "teodelina" || nombre == "teo" || nombre == "Teo"){
      setMensaje(`Hola, ${nombre}! ¡sos la novia de Pedro!`);
    } else if (nombre == "Andrea" || nombre == "andrea") {
      setMensaje(`Hola, ${nombre}! ¡sos la mama de Pedro!`);
    } else if (nombre == "Ana" || nombre == "ana" || nombre == "Ani" || nombre == "ani") {
      setMensaje(`Hola, ${nombre}! ¡sos la hermana de Pedro Genia!`);
    } else if (nombre == "Maria" || nombre == "maria") {
      setMensaje(`Hola, ${nombre}! ¡sos la hermana de Pedro!`);
    } else if (nombre == "ti" || nombre == "Ti") {
      setMensaje(`Hola miamor, Te amo mucho!`);
    } else if (nombre == "Ines" || nombre == "ines") {
      setMensaje(`Hola, ${nombre}! ¡sos la hermana de Pedro!`);
    } else if (nombre == "Felipe" || nombre == "felipe") {
      setMensaje(`Hola, ${nombre}! ¡sos el hermano de Pedro!`);
    } else if (nombre == "Pedro" || nombre == "pedro") {
      setMensaje(`Hola, ${nombre}! ¡sos vos boludo!`);
    } else if (nombre == "Fran" || nombre == "fran" || nombre == "Francisco" || nombre == "francisco") {
      setMensaje(`Hola, ${nombre}! ¡sos el esposo de Ana!`);
    } else if (nombre == "Alex" || nombre == "alex") {
      setMensaje(`Hola, ${nombre}! ¡nos vemos a la tarde!`);
    } else if (nombre == "Cielo" || nombre == "cielo") {
      setMensaje(`Hola, ${nombre}! ¡sos la novia de Fe!`);
    } else if (nombre == "Valen" || nombre == "valen") {
      setMensaje(`Hola, ${nombre}! ¡sos el novio de Mari!`);
    } else if (nombre == "Vero" || nombre == "vero" || nombre == "Veronica" || nombre == "veronica") {
      setMensaje(`Hola, ${nombre}! ¡sos la mama de Teo!`);
    } else {
      setMensaje(`Hola, ${nombre}! ¡vos no formas parte de esta familia afuera!!!`)
    }
  };

  return (
    <div className="App">
      <h1>Familia de Pedro</h1>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={manejarCambioNombre}
      />
      <button onClick={generarMensaje}>Generar Mensaje</button>
      <p>{mensaje}</p>
      <p>Son todos Genios/a!</p>
    </div>
  );
}

export default App;
