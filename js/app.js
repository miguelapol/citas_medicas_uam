//importamos API.js
import {getClientes,deleteCliente} from '../js/api.js';

(function(){
    document.addEventListener('DOMContentLoaded', mostrarClientes);
    const listado = document.querySelector('#clientes-datos', '#boton-borrar');
    listado.addEventListener('click', confirmCliente);                            

    async function mostrarClientes(){
        const clientes = await getClientes();
        clientes.forEach(cliente => {
            const {nombre, email,telefono,fecha,sintomas,id} = cliente;
            const rw = document.createElement('tr');
            rw.innerHTML += `
            <td data-th="nombre">
              ${nombre}
            </td>
            <td data-th="email">
                ${email}
            </td>
            <td data-th="number phone">
                ${telefono}
            </td>
            <td data-th="Date">
                ${fecha}
            </td>
            <td data-th="sintomas">

                ${sintomas}
            </td>
            <td >
              <a href="editar.html?id=${id}"><i class="fa-solid fa-pen-to-square"></i></a>
            </td>
            <td>
           <a href="#"><i class="fa-solid fa-trash-can " data-cliente="${id}" id="boton-borrar"></i></a>
            </td>                     

            
            `;
            listado.appendChild(rw);
            console.log();
        });
    }
    function confirmCliente(e) {

        // console.log(parseInt(e.target.dataset.cliente));
        console.log("hola");
            if(e.target.classList.contains('fa-trash-can')){
                const clientID = parseInt(e.target.dataset.cliente);
                const confirmar = confirm('¿Estas seguro de eliminar este cliente?');
                if(confirmar){
                    
                    deleteCliente(clientID);
                    //refrescar pagina de client
                    window.location.reload();
                }
            }
        }
        
    
})();