// import React from "react";
// //importación de firebase-firestore
// import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
// import db from "./configFirebase";

// function list() {
//   //value la data, loading para cargar la data
//   const query = db.collection("lista");
//   const [values, loading, error] = useCollectionDataOnce(query);
//   console.log(values);
//   return (
//     <div className="orden">
//       <div>
//         <p>
//           {error && <strong>Error: {JSON.stringify(error)}</strong>}
//           {loading && <span>Collection: Loading...</span>}
//           {values && (
//             <span>
//               Collection:{" "}
//               {values.map((doc) => (
//                 <React.Fragment key={doc.id}>
//                   {JSON.stringify(doc.data())},{" "}
//                 </React.Fragment>
//               ))}
//             </span>
//           )}
//         </p>
//       </div>
//       <header>
//           <div className= "burger">
//               <h2>BURGER</h2>
//           </div>
//       </header>
//     </div>
//   );
// }

// export default list;
