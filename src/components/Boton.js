//UseState: es un hook que nos permite tener variables reactivas en nuestros componentes funcionales

import React,{useState} from 'react'

const Boton = () => {

    //contadro: es el nombre de la variable
    //setContador: es la funcion que me permite modificar el valor de la variable
    //useState(0): es el valor inicial de la variable

    const [contador, setContador] = useState(10)
    const nombre = "Juan Pablo"
    const arrayNombres = ["Juan","Pablo","Pedro","Maria","Jose","Luis","Carlos"]

    const alumnos = [
                      {nombre:"Juan",apellido:"Perez",edad:20,sexo:"M"},
                        {nombre:"Maria",apellido:"Lopez",edad:30,sexo:"F"},
                        {nombre:"Pedro",apellido:"Gomez",edad:40,sexo:"M"},
                        {nombre:"Jose",apellido:"Garcia",edad:50,sexo:"M"},
                        {nombre:"Luis",apellido:"Hernandez",edad:60,sexo:"M"},
                        {nombre:"Carlos",apellido:"Rodriguez",edad:70,sexo:"M"}]
        
  
    

  return (
    <>
         <p style={{background:"orange",color:"white"}}>Ejemplo de contador haz Click {contador} </p>

        <button type="button" class="btn btn-danger" onClick={()=>setContador(contador+10)}>Aumentar  {contador}</button>
        <h1> INTECAP BIENVENIDO  {nombre}</h1>

        <br/><br/> <h2>Listado de Nombres</h2>
        <ul>
            {arrayNombres.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>

        {/* imprimir el array en una tabla */}
        
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Sexo</th>
                </tr>
            </thead>
            <tbody>
                {alumnos.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.nombre}</td>
                        <td>{item.apellido}</td>
                        <td>{item.edad}</td>
                        <td>{item.sexo}</td>
                    </tr>
                ))}
            </tbody>
        </table>
            </div>

   
    </>
  )
}

export default Boton