import React from 'react'
import Proptypes from 'prop-types';

const Contador = ({valor_inicial}) => {
  const [contador, setContador] = React.useState(valor_inicial)
  const aumentar = () => setContador(contador + 1)
  const decrementar = () => setContador(contador - 1)
  const resetear = () => setContador(valor_inicial)

  return (
    <>

      <hr/>
      <h1>Contador</h1>
      <h1>El valor de la variable contador es: {contador}</h1>
      <h1>
        {contador < 0 ? 'contador es negativo' : 'contador no es negativo'}
      </h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={resetear}>Resetear</button>
      <button onClick={decrementar}>decrementar</button>




    </>
  )
}


Contador.propTypes = {
  valor_inicial: Proptypes.number.isRequired
}

Contador.defaultProps = {
    valor_inicial: 0
}

export default Contador