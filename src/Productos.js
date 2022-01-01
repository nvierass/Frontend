import React, {Component} from 'react';
import axios from 'axios';
import Producto from "./Producto.js";
import stylecss from "./Productos.css";

class Productos extends Component{

    constructor(){
        super();
        this.state = {
            producto: {nombre: "", fechaVencimiento: "", categoria:"", precio: null},
            listaProductos: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    setNombre = e => {
        e.preventDefault();
        const {value} = e.target;
        this.setState(Object.assign(this.state.producto,{nombre:value}));
    }
    setFecha = e => {
        e.preventDefault();
        const {value} = e.target;
        this.setState(Object.assign(this.state.producto,{fechaVencimiento:value}));
    }
    setCategoria = e => {
        e.preventDefault();
        const {value} = e.target;
        this.setState(Object.assign(this.state.producto,{categoria:value}));
    }
    setPrecio= e => {
        e.preventDefault();
        const {value} = e.target;
        this.setState(Object.assign(this.state.producto,{precio: parseInt(value,10)}));
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/productos/", { nombre: this.state.producto.nombre,
                                                        fechaVencimiento: this.state.producto.fechaVencimiento,
                                                        categoria: this.state.producto.categoria,
                                                        precio: this.state.producto.precio  })
            .then(this.getData())
            .catch(err => console.log(err));
            this.getData();
    }

    handleDeleteAll = e =>{
        //e.preventDefault();
        axios
            .delete("http://localhost:8080/productos/")
            .catch(err => console.log(err));
            this.getData();
    }

    async getData(){
        const response = await axios.get("http://localhost:8080/productos/");
        this.setState({listaProductos: response.data});
    }

    render() {
        return (
            <div className = "productos">
                <h1 className='titulo' style={stylecss}>Agregar un producto</h1>
                <div className="form-producto" style = {stylecss}>
                    <form>
                        <label>Nombre producto:</label>
                        <input className = "form-control" onChange={this.setNombre}/>
                    </form>
                    <form>
                        <label>Fecha vencimiento (YYYY-MM-DD):</label>
                        <input className = "form-control" onChange={this.setFecha}/>
                    </form>
                    <form>
                        <label>Categoria:</label>
                        <input className = "form-control" onChange={this.setCategoria}/>
                    </form>
                    <form>
                        <label>Precio:</label>
                        <input className = "form-control" onChange={this.setPrecio}/>
                    </form>
                    <form>
                        <button type="submit" className ="btn btn-primary" onClick={this.handleSubmit}> Ingresar producto </button>
                    </form>

                </div>
                <div className="list-producto">
                    <h1 className='titulo'>Lista de productos</h1>
                    <button className='boton-borrar' style={stylecss} onClick={this.handleDeleteAll}>Borrar Todos</button>
                        <ul>
                            {this.state.listaProductos.map((d,index) => (
                                <li key={d.codigoProducto}>
                                    <Producto codigoProducto={d.codigoProducto} index = {index}/> 
                                </li>
                            ))} 
                        </ul>
                </div>
            </div>
        );
    }
} 

export default Productos;