import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mostrarProducto, editarProducto } from '../actions/productosActions'

class EditarProducto extends Component {
  
  state = {
    nombre: '',
    precio: '',
    error: false
  }

  componentDidMount() {
    const {id} = this.props.match.params
    this.props.mostrarProducto(id)
  }

  componentWillReceiveProps(nextProps, nextState) {
    const {nombre, precio} = nextProps.producto
    this.setState({nombre, precio})
  }

  nombreProducto = e => this.setState({nombre: e.target.value})

  precioProducto = e => this.setState({precio: e.target.value})

  actualziarProducto = e => {
    e.preventDefault();

    const {nombre, precio} = this.state

    //validar
    if( nombre === '' || precio === '' ) {
      this.setState({error: true})
      return
    }
    this.setState({error: false})

    const {id} = this.props.match.params
    
    //actualizar producto
    this.props.editarProducto({ id, nombre, precio })

    //redireccionar
    this.props.history.push('/')
  }

  render(){
    return(
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">{'Agregar Nuevo Producto'}</h2>
              <form onSubmit={this.actualziarProducto}>
                <div className="form-group">
                  <label>{'Titulo'}</label>
                  <input
                    defaultValue={this.state.nombre} 
                    onChange={this.nombreProducto} 
                    type="text" 
                    className="form-control" 
                    placeholder="Titulo" 
                  />
                </div>
                 <div className="form-group">
                  <label>{'Precio del Producto'}</label>
                  <input
                    defaultValue={this.state.precio}  
                    onChange={this.precioProducto} 
                    type="text" 
                    className="form-control" 
                    placeholder="Precio" 
                  />
                </div>
                <button type="submit" 
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                  {'Guardar cambios'}
                </button>
              </form>
              {
                this.state.error ? 
                  <div className="font-weight-bold alert alert-danger text-center mt-4">
                    {'Todos los campos son obligatorios'}
                  </div> 
                  : ''
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({ producto: state.productos.producto }), 
  {mostrarProducto, editarProducto}
)(EditarProducto)