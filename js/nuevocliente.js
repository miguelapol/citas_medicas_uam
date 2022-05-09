//importamos las funciones.js

import {validar,mostrarAlerta} from '../js/funciones.js';
//importamos newcliente de API.js
import {newClient} from './API.js';
(function () {
    //vamos a crear una funcion para validar los campos del formulario
    const formulario=document.querySelector('#formulario');
    formulario.addEventListener('submit',validarCliente);
        function validarCliente(e) {
            e.preventDefault();
            //vamos a crear una variable para cada campo del formulario
            const nombre=document.querySelector('#nombre').value;
            const email=document.querySelector('#email').value;
            const telefono=document.querySelector('#telefono').value;
            const fecha=document.querySelector('#fecha').value;
            const sintomas=document.querySelector('#sintomas').value;
            const id=document.querySelector('#id').value;

            //creamos un objeto del cliente de
            const cliente={
                id,
                nombre,
                email,
                telefono,
                fecha,
                sintomas
            };
            //validamos que el objeto se encuentre lleno
            if(validar(cliente)){
                // mostrarAlerta('Todos los campos son obligatorios');
                console.log('Todos los campos son obligatorios');
                mostrarAlerta('Todos los campos son obligatorios');
                return;
            }
            //agregamos el cliente
            newClient(cliente);
            console.log(cliente);
        }

})();