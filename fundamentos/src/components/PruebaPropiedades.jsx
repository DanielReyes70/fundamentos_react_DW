import React from 'react'
import Proptypes from 'prop-types'

const PruebaPropiedades = ({titulo = 'titulo por defecto', cuerpo, cantidad}) => {
  return (
    <>
    <h1>{titulo}</h1>
    <h2>{cuerpo}</h2>
    <h3>{cantidad * 5}</h3>
    </>
  )
}

PruebaPropiedades.propstypes = {
    titulo: Proptypes.string.isRequired,
    cuerpo: Proptypes.string.isRequired,
    cantidad: Proptypes.number.isRequired
}

PruebaPropiedades.defaultProps = {
    titulo: 'aqui debe ir un titulo',
    cuerpo: 'aqui debe ir un cuerpo',
    cantidad: 0
}
export default PruebaPropiedades