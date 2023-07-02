import { useState, useEffect } from "react";

const Paginacion = ({ setPagina, pagina, cantResultado, porPagina }) => {
console.log(cantResultado)
const maximo = cantResultado / porPagina;
  
const [input, setInput] = useState(1);

  const maxTecho = Math.ceil(maximo);
  const nextPage = () => {
    const maxPages = Math.ceil(cantResultado / 2);
    if (pagina < maxPages) {
      setInput(input + 1);
      setPagina(pagina + 1);
    }
  }

  const previousPage = () => {
    if (pagina > 1) {
      setInput(input - 1);
      setPagina(pagina - 1);
    }
  }

  return (
    <div>
      <button onClick={previousPage}>Anterior</button>
      <input name="page" autoComplete="off" type="text" defaultValue={input} />
      <p>de {maxTecho}</p>
      <button onClick={nextPage}>Siguiente</button>
    </div>
  )
}

export default Paginacion