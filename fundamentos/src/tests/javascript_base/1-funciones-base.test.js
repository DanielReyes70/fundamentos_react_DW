import { saludo, sumar, par, obtenerObjeto, obtenerArray, crearPromesa } from '../../javascript_base/1-funciones-base'

describe('Tests del archivo 1-funciones-base.js', () => {
    describe('Tests de la funcion saludar', ()=> {
        test('Testar funcion saludar pasandole un parametro de nombre', () =>{
            const nombre = 'Roberto'
            const esperado = 'Hola '+nombre+'!'
            expect(saludo(nombre)).toBe(esperado)
        })
        
        
        test('testear funcion saludar sin pasar parametro', () => {
            
            const esperado = 'Hola Mundo!'
            
            expect(saludo()).toBe(esperado)
        })
    })

})


describe('Tests de la funcion sumar', () => {
    test('Testar funcion saludar pasandole dos parametros', () =>{
        const num_uno = 5
        const num_dos = 6
        const esperado = num_uno + num_dos
        expect(sumar(num_uno, num_dos)).toBe(esperado)
    })
    
    test('Testar funcion saludar pasandole el primer parametro parametro el otro no', () =>{
        const num_uno = 5
        const esperado = num_uno
        expect(sumar(num_uno)).toBe(esperado)
    })

  
    
})

describe('Tests de la funcion par', () => {
    test('Testar si un numero impar es impar', () =>{
        const numero = 5
        const esperado = 'Impar'
        expect(par(numero)).toBe(esperado)
    })
    
    test('Testar si un numero es par es par', () =>{
        const numero = 6
        const esperado = 'Par'
        expect(par(numero)).toBe(esperado)
    })

    test('Testar si 0 es Cero (ni par, ni impar)', () =>{
        const numero = 0
        const esperado = 'Cero'
        expect(par(numero)).toBe(esperado)
    })
  
    
})



describe('Tests de la funcion obtenerObjeto', () => {
    test('Testar si los objetos son iguales', () =>{
        const esperado = {nombre: 'Daniel', apellido: 'Reyes'}
        expect(obtenerObjeto()).toEqual(esperado)
    })
  
    
})

describe('Tests de la funcion obtenerArray', () => {
    test('Testar si los arrays son iguales', () =>{
        const esperado = ['Daniel', 'Reyes']
        expect(obtenerArray()).toEqual(esperado)
    })
  
    
})

describe('Testar promesa', () => {
    test('Testar respuesta promesa', (done) =>{
        const esperado = {nombre: 'Daniel', apellido:'Reyes'}
        crearPromesa().then(resultado =>{
            expect(resultado).toEqual(esperado)
            done()
        })
        //expect(crearPromesa()).toEqual(esperado)
    })
  
    
})

                       