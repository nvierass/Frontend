import React, {Component} from 'react';
import axios from 'axios';
import stylecss from "./Producto.css";

class Producto extends Component{

    constructor(props){
        super();
        this.state = {
            index: props.index + 1,
            producto: {
                codigoProducto: props.codigoProducto,
                nombre: "",
                fechaVencimiento: "",
                categoria:"", 
                precio: null
            }
        }
    }

    componentDidMount(){
        this.getData();
    }
    async getData(){
        const response = await axios.get("http://localhost:8080/productos/"+ this.state.producto.codigoProducto);
        this.setState({producto: response.data});
    }

    handleDeleteById = e => {
        e.preventDefault();
        axios
            .delete("http://localhost:8080/productos/"+this.state.producto.codigoProducto)
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className='info-producto' style = {stylecss}>
                <p className='titulo' style = {stylecss}>{this.state.index}. {this.state.producto.nombre} </p>
                <div className='detalles'>
                    <p>Codigo de producto: {this.state.producto.codigoProducto}</p>
                    <p>Categoria: {this.state.producto.categoria}</p>
                    <p>Fecha de vencimiento: {this.state.producto.fechaVencimiento}</p>
                    <p className='titulo'>Precio:${this.state.producto.precio}</p>
                </div>
                <button onClick={this.handleDeleteById}>Borrar producto</button>
            </div>
        );
    }
}

export default Producto;