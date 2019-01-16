import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { borrarProducto } from '../actions/productosActions'

class Producto extends Component {
  eliminarProducto = () => {
    //console.log('Eliminando...', this.props.info.id)
    this.props.borrarProducto(this.props.info.id)
  }

  render(){
    return(
      <li className="list-group-item">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 d-flex justify-content-between align-items-center">
            <p className="text-dark m-0">
              {this.props.info.nombre}
            </p>
            <span className="badge badge-warning text-dark">
              {'$'}{this.props.info.precio}
            </span>
          </div>
          <div className="col-md-4 d-flex justify-content-between acciones">
            <Link to={`productos/editar/${this.props.info.id}`} className="btn btn-primary mr-2">{'Editar'}</Link>
            <button onClick={this.eliminarProducto} type="button" className="btn btn-danger">{'Borrar'}</button>
          </div>
        </div>
      </li>
    )
  }
}

export default connect(null, {borrarProducto})(Producto)