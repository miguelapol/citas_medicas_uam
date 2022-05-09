//validamos que el objeto no sea nulo en caso devuelve true
//usando every
export function validar(obj) {
    return !Object.values(obj).every(input=> input!=='');    
}
//una funcion que muestre la alerta que faltan datos
export function mostrarAlerta(mensaje) {
    const alerta=document.querySelector('.alerta');
    if(!alerta){
      const alerta=document.createElement('BUTTON');
      const formulario=document.querySelector('#formulario');
      alerta.classList.add('alerta');
      alerta.innerText=mensaje;
      formulario.appendChild(alerta);
      setTimeout(() => {
          //removemos la alerta
            alerta.remove();
      }, 3000);
    }
}