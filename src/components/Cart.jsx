import React from 'react'

import {  useParams } from 'react-router-dom';

function Cart() {
    
    console.log("soy"+ this.props.location);
   
    console.log(useParams());
     //  //value la data, loading para cargar la data
  //  const query = db.collection("orden");s
  //  const [values, loading, error] = useCollectionDataOnce(query);
  //  console.log(values);
  return (
    <div className="orden">
           {/* <div>
             <p>
               {error && <strong>Error: {JSON.stringify(error)}</strong>}
               {loading && <span>Collection: Loading...</span>}
               {values && (
                 <span>
                   Collection:{" "}
                   {values.docs.map((doc) => (
                     <React.Fragment key={doc.id}>
                       {JSON.stringify(doc.data())},{" "}
                     </React.Fragment>
                   ))}
                 </span>
               )}
             </p>
           </div> */}

    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "150px",
        marginRight: "500px",
        color: "black"
      }}
    >
      <div className="table-responsive">
        <table className="table-active table-dark">
          <thead>
            <td>
            <tr>
              <th>Codigo</th>
              <th>Cantidad</th>
              <th>precio</th>
              <th>eliminar</th>
               <th>Extra</th>
               <th>Sub-total</th>          
            </tr>
            </td>
            </thead>
            <div>
             <thead>
             <td>
            <tr>
              <th>Total</th>
                    

            </tr>
            </td>
          </thead>
          </div>
          <tbody>
            {this.props.location.state.orders.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default Cart
