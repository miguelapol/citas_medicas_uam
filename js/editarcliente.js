//importamos la API.JS 
import { obtenerCliente,updateCliente } from './API.js';
//importamos funciones.js
import { validar,mostrarAlerta} from './funciones.js';
(function(){

    //selecionamos los input de los valores del formulario de la vista
    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputTelefono = document.querySelector('#telefono');
    const inputFecha = document.querySelector('#fecha');
    const inputSintomas = document.querySelector('#sintomas');
    const inputId = document.querySelector('#id');

    //obtener la id del cliente que esta en la url del navegador
    document.addEventListener('DOMContentLoaded', async() => {
        const parametroURl = new URLSearchParams(window.location.search);
        const id = parseInt(parametroURl.get('id'));
        console.log(id);
        const cliente = await obtenerCliente(id);
        //aqui se llenan los valores del formulario con los datos del cliente
        //luego los mostramos para que el usuario pueda editarlos
        mostrarCliente(cliente);
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit',validarCliente );

    });
    function mostrarCliente(cliente) {
       const{nombre,email,telefono,fecha,sintomas,id} = cliente;

        inputNombre.value = nombre;
        inputEmail.value = email;
        inputTelefono.value = telefono;
        inputFecha.value = fecha;
        inputSintomas.value = sintomas;
        inputId.value = id;
       console.log( cliente);
 
    }
    function validarCliente(e) {
        e.preventDefault();
        const cliente={
            nombre: inputNombre.value,
            email: inputEmail.value,
            telefono: inputTelefono.value,
            fecha: inputFecha.value,
            sintomas: inputSintomas.value,
            id: parseInt(inputId.value)

        }
        if(validar(cliente)){
           mostrarAlerta('Todos los campos son obligatorios');
           return;
        }
        //aqui se envia el cliente a la base de datos
        //y se redirecciona a la pagina de clientes
        updateCliente(cliente);
      
    }







})();