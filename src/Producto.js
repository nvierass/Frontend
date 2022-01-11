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

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    componentDidMount(){
        this.getData();
    }
    async getData(){
        axios.defaults.baseURL = 'http://165.227.195.251:8080';
        const response = await axios.get("/productos/"+ this.state.producto.codigoProducto)
        .catch(err => console.log(err));
        this.setState({producto: response.data});
        console.log(response.data);
    }

    handleDeleteById = e => {
        e.preventDefault();
        axios.defaults.baseURL = 'http://165.227.195.251:8080';
        axios
            .delete("/productos/"+this.state.producto.codigoProducto)
            .catch(err => console.log(err));
            this.setState({producto: "Eliminado"});
            this.forceUpdate();
    }


    render() {
        if (this.state.producto == "Eliminado"){
            return (
                <div className='info-producto' style = {stylecss} Style="body">
                    <p className='titulo' style = {stylecss}>{this.state.index}. Producto eliminado </p>
                </div>
                );
        }
        else{
            return (
                <div className='info-producto' style = {stylecss} Style="body">
                    <p className='titulo' style = {stylecss}>{this.state.index}. {this.state.producto.nombre} </p>
                    <div className='detalles'>
                        <p>Codigo de producto: {this.state.producto.codigoProducto}</p>
                        <p>Categoria: {this.state.producto.categoria}</p>
                        <p>Fecha de vencimiento: {this.state.producto.fechaVencimiento}</p>
                        <p className='titulo'>Precio:${this.state.producto.precio}</p>
                    </div>
                    <button class="btn btn-danger" onClick={this.handleDeleteById}>Borrar producto</button>
                </div>
            );     
        }
    }
}

export default Producto;