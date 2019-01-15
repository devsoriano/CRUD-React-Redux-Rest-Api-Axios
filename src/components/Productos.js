import React, {Component} from 'react'
import Producto from './Producto'

//Redux
import { connect } from 'react-redux'
import { mostrarProductos } from '../actions/productosActions'

class Productos extends Component {
  
  componentDidMount(){
    this.props.mostrarProductos()
  }

  render(){
    return(
      <React.Fragment>
        <h2 className="text-center my-5">{'Listado de productos'}</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {
                this.props.productos.map(producto => (
                  <Producto 
                    key={producto.id}
                    info={producto}
                  />
                ))
              }
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(
  (state) => ({productos: state.productos.productos}), 
  {mostrarProductos}
)(Productos)