// type FirmData = {
//   name: string;
//   slogan: string;
//   description: string;
//   hours: string;
//   address: string;
//   phone: string;
//   email?: string;
//   website?: string;
//   photo: string;
// };

// try 2
// import { useEffect, useState } from "react";

// function FirmCard() {
//   const [text, setText] = useState("");
//   const [data, setData] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
        
//       const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;
//       const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
//       const range = "Start!A1:B4";

//       const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log("data:", data);
//       setText(data.values?.[0]?.[0] || "Немає значення");
//       setData(data.values?.flat() || []);
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <p>Hello!</p>
//       <p>{data[0]}</p>
//       <p>{data[1]}</p> 
//       <p>{text}</p>
//     </>
//   );
// }

// export default FirmCard;


// // 3
// import { useEffect, useState } from "react";
// import { CardWrapper } from "./styles";

// export function FirmCard() {
//   const [data, setData] = useState<any[]>([]); 

//   useEffect(() => {
//     const fetchData = async () => {
//       const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID; 
//       const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;     
//       const range = "Start!A2:J5"; 

//       const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
//       const response = await fetch(url);
//       const data = await response.json();
      
//       const rows = data.values || [];
//       setData(rows);
//     };

//     fetchData();
//   }, []);

//   if (data.length === 0) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <CardWrapper>
//         {data.map((row, index) => (
//           <div key={index}>
  
//             {row[0] && (
//               <p>
//                 <strong>Title:</strong>{" "}
//                 <span className="span">{row[0]}</span>
//               </p>
//             )}
//             {row[1] && (
//               <p>
//                 <strong>Slogan:</strong>{" "}
//                 <span className="span">{row[1]}</span>
//               </p>
//             )}
//             {row[2] && (
//               <p>
//                 <strong>Description:</strong>{" "}
//                 <span className="span">{row[2]}</span>
//               </p>
//             )}
//             {row[3] && (
//               <p>
//                 <strong>Hours:</strong>{" "}
//                 <span className="span">{row[3]}</span>
//               </p>
//             )}
//             {row[4] && (
//               <p>
//                 <strong>Address:</strong>{" "}
//                 <span className="span">{row[4]}</span>
//               </p>
//             )}
//             {row[5] && (
//               <p>
//                 <strong>Phone:</strong>{" "}
//                 <span className="span">{row[5]}</span>
//               </p>
//             )}
//             {row[6] && (
//               <p>
//                 <strong>Email:</strong>{" "}
//                 <span className="span">{row[6]}</span>
//               </p>
//             )}
//             {row[7] && (
//               <p>
//                 <strong>Fax:</strong>{" "}
//                 <span className="span">{row[7]}</span>
//               </p>
//             )}
//             {row[8] && (
//               <p>
//                 <strong>Website:</strong>{" "}
//                 <span className="span">{row[8]}</span>
//               </p>
//             )}
//             {row[9] && (
//               <p>
//                 <strong>PhotoSlogan:</strong>{" "}
//                 <span className="span">{row[9]}</span>
//               </p>
//             )}
//           </div>
//         ))}
//       </CardWrapper>

//     </>
//   );
// }

//4
// import { useEffect, useState } from "react";

// function FirmCard() {
//   const [text, setText] = useState("");
//   const [data, setData] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID; 
//       const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;     
//       const range = "Start!A1:J5"; 

//       const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
//       const response = await fetch(url);
//       const data = await response.json();
      
//       console.log("data:", data);
//       setText(data.values?.[0]?.[0] || "Немає значення"); 
//       setData(data.values?.flat() || []); 
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <p>Hello!</p>
//       <p>{data[0]}</p> 
//       <p>{data[1]}</p> 
//       <p>{data[2]}</p> 
//       <p>{data[3]}</p> 
//       <p>{data[4]}</p> 
//       <p>{data[5]}</p> 
//       <p>{text}</p>
//     </>
//   );
// }

// export default FirmCard;

// 5 - only 1 row
// import { useEffect, useState } from "react";

// function FirmCard() {
//   const [data, setData] = useState<any>(null); 

//   useEffect(() => {
//     const fetchData = async () => {
//       const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID; 
//       const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;     
//       const range = "Start!A2:F2"; 

//       const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
//       const response = await fetch(url);
//       const data = await response.json();
      
     
//       const row = data.values?.[0]; 

//       if (row) {
//         const rowObj = {
//           title: row[0],
//           slogan: row[1],
//           description: row[2],
//           hours: row[3],
//           address: row[4],
//           phone: row[5],
//         };

//         setData(rowObj); 
//       }
//     };

//     fetchData();
//   }, []);

//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <p><strong>Title:</strong> {data.title}</p>
//       <p><strong>Slogan:</strong> {data.slogan}</p>
//       <p><strong>Description:</strong> {data.description}</p>
//       <p><strong>Hours:</strong> {data.hours}</p>
//       <p><strong>Address:</strong> {data.address}</p>
//       <p><strong>Phone:</strong> {data.phone}</p>
//     </div>
//   );
// }

// export default FirmCard;

// 6 - працює все по діапазону
import { useEffect, useState } from "react";
import { CardWrapper, FirmInfoWrapper, FotoWrapper } from "./styles";

function FirmCard() {
  const [data, setData] = useState<any[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID; 
      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;    
      const range = "Start!A2:F5"; // Діапазон для зчитування кількох рядків (A2:F5)

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      const rows = data.values || [];
      setData(rows);
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        {data.map((row, index) => (
         <FirmInfoWrapper>
            <FotoWrapper>Photo</FotoWrapper>

            <CardWrapper key={index}>
              {row[0] && <p><strong>Title 2:</strong> {row[0]}</p>} {/* A */}
              {row[1] && <p><strong>Slogan:</strong> {row[1]}</p>} {/* B */}
              {row[2] && <p><strong>Description:</strong> {row[2]}</p>} {/* C */}
              {row[3] && <p><strong>Hours:</strong> {row[3]}</p>} {/* D */}
              {row[4] && <p><strong>Address:</strong> {row[4]}</p>} {/* E */}
              {row[5] && <p><strong>Phone:</strong> {row[5]}</p>} {/* F */}
            </CardWrapper>
         </FirmInfoWrapper>
        ))}
      </div>
    </>
  );
}

export default FirmCard;
