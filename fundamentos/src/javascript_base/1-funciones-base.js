 export function saludo(nombre='Mundo') {
    return `Hola ${nombre}!`;
}

export function sumar (num_uno, num_dos = 0) {
    return num_uno + num_dos
}

export function par(numero) {
    if (numero === 0){
        return 'Cero'
    }else if(numero % 2 === 0) {
        return 'Par'
    }else{
        return 'Impar'
    }


}

export function obtenerObjeto() {
    return {nombre: 'Daniel', apellido: 'Reyes'}
}

export function obtenerArray() {
    return ['Daniel', 'Reyes']
}

export function crearPromesa() {
    return new Promise((resolve) => {
    setTimeout(() => {
        const ob = obtenerObjeto();
        resolve(ob)
    }, 1500)
    })
}