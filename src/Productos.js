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
            alert("error");

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
            <><div class="contanier">
                    <nav class="navbar navbar-dark bg-dark"></nav>
                                       
                    <div class="row">
                        <div class="col">
                            <div className="productos">
                                <h1 className='titulo' style={stylecss}>Agregar un producto</h1>
                                <div className="form-producto" style={stylecss}>
                                    <form>
                                        <label>Nombre del producto:</label>
                                        <input className="form-control" ref="nombre" placeholder="Ej: Mermerlada, Leche, etc." onChange={this.setNombre} />
                                        
                                        <label>Fecha vencimiento:</label>
                                        <input className="form-control" ref="fechavencimiento" placeholder="formato: YYYY-MM-DD" onChange={this.setFecha} />
                                    
                                    
                                        <label>Categoría:</label>
                                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={this.setCategoria} >
                                            <option selected>Selecciona una categoría</option>
                                            <option value="Nacional">Nacional</option>
                                            <option value="Importado">Importado</option>  
                                        </select>
                                    
                                        <label>Precio:</label>
                                        <input id="boton" className="form-control"  ref="precio" onChange={this.setPrecio} />

                                        <button type="submit" value="Clear" className="btn btn-primary" Style="margin-top:25px;" onClick={this.handleSubmit}> Ingresar producto </button>
                                    </form>    
                                </div>
                            </div>
                        </div>
                        <div class="col"></div>
                        <div class="col"> </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="list-producto">
                        <h1 className='titulo' >Lista de productos</h1>
                        <button className='boton-borrar' class="btn btn-danger" Style="margin-left:12px;" style={stylecss} onClick={this.handleDeleteAll}>Deseo borrar todos los productos</button>
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