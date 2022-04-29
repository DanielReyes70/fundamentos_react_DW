import React, {useEffect} from 'react'
import { nanoid } from 'nanoid'
import {firebase} from '../firebase'

const Formulario = () => {
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [listaFrutas, setListaFrutas] = React.useState([])
    const [id, setId] = React.useState('')
    const [modoEdicion, SetModoEdicion] = React.useState(false)
    const [error, setError] = React.useState(null)


    React.useEffect(()=>{
        const obtenerDatos = async() => {
            try{
                const db = firebase.firestore()
                const data = await db.collection('frutas').get()
                const arrayData = data.docs.map(doc => (
                    {
                    id: doc.id, ... doc.data()
                    }
                ))
                //console.log(arrayData)

                setListaFrutas(arrayData)

            }catch(error){
                console.log(error)
            }
        }
        obtenerDatos()
    })

    const guardarFrutas = async (e) => {
        e.preventDefault()

        if (!fruta.trim()) {
            setError('digite la fruta')
            return
        }

        if (!descripcion.trim()) {
            setError('digite la descripcion')
            return
        }

       
        try {
            const db = firebase.firestore()
            const nuevaFruta = {
                nombreFruta: fruta,
                nombreDescripcion: descripcion 
            }
    
            const data = await db.collection('frutas').add(nuevaFruta)
    
            
            setListaFrutas([
                ... listaFrutas,
                { id: nanoid(), nombreFruta: fruta, nombreDescripcion: descripcion }
            ])
    
            e.target.reset()
            setFruta('')
            setDescripcion('')
            setError(null)
        
        } catch (error) {
            console.log(error)
            
        }
       
    }

    const editar = item => {
        setFruta(item.nombreFruta)
        setDescripcion(item.nombreDescripcion)
        SetModoEdicion(true)
        setId(item.id);
    }
    const editarFrutas =  async e => {
        e.preventDefault()

        if (!fruta.trim()) {
            setError('digite la fruta')
            return
        }

        if (!descripcion.trim()) {
            setError('digite la descripcion')
            return
        }
        try {
            const db = firebase.firestore()
            await db.collection('frutas').doc(id).update({
            nombreFruta: fruta,
            nombreDescripcion: descripcion
            })

            const arrayEditado = listaFrutas.map(
                item => item.id === id ? { id: id, nombreFruta: fruta, nombreDescripcion: descripcion } : item
    
            )
            setListaFrutas(arrayEditado)
            setFruta('')
            setDescripcion('')
            setId('')
            SetModoEdicion(false)
            setError(null)
        } catch (error) {
            console.log(error)
        }


       
    }

    const eliminar = async id => {
        try {
            const db = firebase.firestore()
            await db.collection('frutas').doc(id).delete()
            const aux = listaFrutas.filter(item =>item.id !== id)
            setListaFrutas(aux)
        } catch (error) {
            console.log(error)
            
        }
        
    }

    const cancelar = () => {
        SetModoEdicion(false)
        setFruta('')
        setId('')
        setDescripcion('')
        setError(null)
    }


    return (
        <div className='container mt-5'>
            <h1 className='text-center'>CRUD BASICO</h1>
            <hr />
            <div className='row'>
                <div className='col-8'>
                    <h4 className='text-center'>Listado de frutas</h4>
                    <ul className='list-group'>

                        {
                            listaFrutas.map(item => (
                                <li className='list-group-item' key={item.id}>
                                    <span className='lead'>{item.nombreFruta}-{item.nombreDescripcion}</span>
                                    <button className='btn btn-danger btn-sm float-end mx-2' onClick={() => eliminar(item.id)}>
                                        Eliminar
                                    </button>
                                    <button className='btn btn-warning btn-sm float-end' onClick={() => editar(item)}>
                                        Editar
                                    </button>

                                </li>

                            ))
                        }
                    </ul>
                </div>
                <div className='col-4'>
                    <h4 className='text-center'>
                        {
                            modoEdicion ? 'Editar Frutas' : 'Agregar Frutas'
                        }
                    </h4>
                    <form onSubmit={modoEdicion ? editarFrutas : guardarFrutas}>
                        {
                            error ? <span className='text-danger'>{error}</span> : null
                        }
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese fruta'
                            onChange={(e) => setFruta(e.target.value)}
                            value={fruta}
                        />
                        <input
                            className='form-control mb-2'
                            placeholder='Ingrese descripcion'
                            type="text"
                            onChange={(e) => setDescripcion(e.target.value)}
                            value={descripcion}
                        />
                        {
                            modoEdicion ?
                                (
                                    <>
                                        <button
                                            className='btn btn-warning btn-block'
                                            type='submit'
                                        >Editar
                                        </button>
                                        <button
                                            className='btn btn-dark btn-block mx-2'
                                            onClick={() => cancelar()}
                                        >Cancelar
                                        </button>
                                    </>
                                )
                                :
                                <button
                                    className='btn btn-primary btn-block'
                                    type='submit'
                                >Agregar</button>

                        }

                    </form>

                </div>
            </div>




        </div>
    )
}

export default Formulario