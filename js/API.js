const url = 'http://localhost:3000';
//aqui añadimos los datos del cliente  
export const newClient =async (cliente) => {
        try{
            await fetch(url, {
                method: 'POST',
                body: JSON.stringify(cliente),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            //luego lo enviamos a la otra pagina de administracion
            window.location.href = 'http://127.0.0.1:5500/proyecto_citas/administracion.html';
        }catch(e){
            console.log(e);
        }
}

//aqui vamos a obtener los clientes de la base de datos
export const getClientes = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(e){
        console.log(e);
    }
}
//vamos a eliminar los clientes de la base de datos
export const deleteCliente = async (id) => {
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }catch(e){
        console.log(e);
    }
}
//vamos a obtener los clientes de la base de datos
export const obtenerCliente = async (id) => {
    try{
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return data;
    }catch(e){
        console.log(e);
    }
}

//aqui haremos un update del cliente
export const updateCliente = async (cliente) => {
    try{
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
        }
        });
        window.location.href = './administracion.html';
        }catch(e){
            console.log(e);
        }
        
}