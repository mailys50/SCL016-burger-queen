import React from 'react'
// import Data from '../Data/Data.json'

// import firestore from 'firebase-firestore' 
//  import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
//  import firestore from "./configFirebase";



const Table = ({ priceOrden ,  setPrice, prices }) => {
  const {  price } = priceOrden;



  const dataPrices = prices.reduce((prev, next) => prev + next.price, 0);

  console.log("soy" + dataPrices);
    

    setPrice([...price, ...dataPrices]);



    // console.log(orden.length);

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
                      
            </tr>
            </td>
            </thead>
          <tbody>
            {dataPrices.map((value, index) => {
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
        <div>Total</div>
      </div>
    </div>
    </div>
  );
}

export default Table
