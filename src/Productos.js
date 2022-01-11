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

        if(this.state.producto.nombre === ""){
            alert("Error: Debe ingresar el nombre del producto.");
        }
        else{
            axios
            .post("http://165.227.195.251:8080/productos/", { nombre: this.state.producto.nombre,
                                                        fechaVencimiento: this.state.producto.fechaVencimiento,
                                                        categoria: this.state.producto.categoria,
                                                        precio: this.state.producto.precio  })
            .then(this.getData())
            .catch(err => console.log(err));
            window.location.reload();
            this.getData();
        }     
    }

    handleDeleteAll = e =>{
        e.preventDefault();
        axios
            .delete("http://165.227.195.251:8080/productos/")
            .catch(err => console.log(err));
            this.getData();
    }

    async getData(){
        const response = await axios.get("http://165.227.195.251:8080/productos/")
        .catch(err => console.log(err));
        console.log(response.data);
        this.setState({listaProductos: response.data});
    }

    render() {
        return (
            <><div className="contanier">
                    <nav className="navbar navbar-dark bg-dark"></nav>
                                       
                    <div className="row">
                        <div className="col">
                            <div className="productos">
                                <h1 className='titulo' style={stylecss}>Agregar un producto</h1>
                                <div className="form-producto" style={stylecss}>
                                    <form>
                                        <label>Nombre del producto:</label>
                                        <input className="form-control" ref="nombre" id="nameProducto" placeholder="Ej: Mermerlada, Leche, etc." onChange={this.setNombre} />
                                        
                                        <label>Fecha vencimiento:</label>
                                        <input className="form-control" ref="fechavencimiento" id="fechaV" placeholder="formato: YYYY-MM-DD" onChange={this.setFecha} />
                                    
                                    
                                        <label>Categoría:</label>
                                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="categoria" onChange={this.setCategoria} >
                                            <option selected>Selecciona una categoría</option>
                                            <option value="Nacional">Nacional</option>
                                            <option value="Importado">Importado</option>  
                                        </select>
                                    
                                        <label>Precio:</label>
                                        <input id="precio" className="form-control"  ref="precio" onChange={this.setPrecio} />

                                        <button type="submit" id="botonIngresar" value="Clear" className="btn btn-primary" Style="margin-top:25px;" onClick={this.handleSubmit}> Ingresar producto </button>
                                    </form>    
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                        <div className="col"> </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="list-producto">
                        <h1 className='titulo' >Lista de productos</h1>
                        <button className='boton-borrar' className="btn btn-danger" Style="margin-left:12px;" style={stylecss} onClick={this.handleDeleteAll}>Deseo borrar todos los productos</button>
                        <ul>
                            {this.state.listaProductos.map((d, index) => (
                                <li key={d.codigoProducto}>
                                    <Producto codigoProducto={d.codigoProducto} index={index} />
                                </li>
                            ))}
                        </ul>
                    </div>
            </div></>           
        );
    }
} 

export default Productos;