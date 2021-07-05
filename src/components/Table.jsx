import React from 'react'
import Data from '../Data/Data.json'
// import firestore from 'firebase-firestore' 
//  import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
//  import db from "./configFirebase";



function Table() {
  //  //value la data, loading para cargar la data
  //  const query = db.collection("orden");
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
                   {values.map((doc) => (
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
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Cantidad</th>
              <th>precio</th>
              <th>eliminar</th>
               <th>Extra</th>
               <th>Sub-total</th>
              

            </tr>
          </thead>
          <tbody>
            {Data.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.price}</td>
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

export default Table
