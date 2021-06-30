import React from "react";
//importación de firebase-firestore
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import db from "./configFirebase";
import Burger from "./Burger";
import "./orden.css"


const Orden = ({orden,setOrden}) => {
    //value la data, loading para cargar la data
    const query = db.collection('orden');
    const [values, loading, error] = useCollectionDataOnce  (query);
    console.log(values);

return (
    <div className= "orden">
          <div>
              <p>
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Collection: Loading...</span>}
                {values && (
                  <span>
                    Collection:{' '}
                    {values.map((doc) => (
                      <React.Fragment key={doc.id}>
                        {JSON.stringify(doc.data())},{' '}
                      </React.Fragment>
                    ))}
                  </span>
                )}
              </p>
            </div>
    <h3>Orden</h3>
    {orden.length === 0 ?(<p>0</p>): (orden.map((burger => <Burger key={burger.id} burger={burger} orden={orden} setOrden={setOrden}/> )))}
    </div>
)


};
export default Orden;
