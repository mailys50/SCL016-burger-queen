import React, { useEffect, useState } from "react"



function UseDatos() {
  const [Data, setData] = useState([])

  useEffect(() => {
    fetch("pucblic/Data/Data.json")
      .then(response => response.json())
      .then(datos => {
        setData(datos)
      })
  }, [])

  return Data
}

export default function Datos() {

  const Data = UseDatos()

  return (
    <div className="container mt-5" align="center">
      
      <h4>Lista de Data</h4>
        
      <div className="row">

        <div className="col-md-12">

          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Images</th>
                <th scope="col">Name</th>
                <th scope="col">Text</th>
                <th scope="col">Price</th>
              </tr>
            </thead> 
            <tbody>

            {Data.map(item => (

              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.text}</td>
                <td>{item.price}</td>
                <td><img src={`${process.env.PUBLIC_URL}/Data/${item.images}`} alt={item.name} width="30px" className="img-fluid"/></td>
              </tr>

            ))}

            </tbody>

          </table>

        </div>

      </div>

        
    </div>

  )
}