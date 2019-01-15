import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO } from '../actions/types'

import axios from 'axios'

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get('http://localhost:5000/productos')
  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  })
}

export const borrarProducto = id => async dispatch => {
  await axios.delete(`http://localhost:5000/productos/${id}`)
  dispatch({
    type: ELIMINAR_PRODUCTO,
    payload: id
  })
}