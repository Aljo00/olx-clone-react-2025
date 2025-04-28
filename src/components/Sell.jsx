// import React from 'react'

// const Sell = () => {
//     return (
//       <div style={{
//         minHeight: '100vh',
//         backgroundColor: '#f8f9fa'
//       }}>
//         <div style={{
//           backgroundColor: '#002f34',
//           padding: '15px 20px',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '20px',
//           color: 'white',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }}>
//           <span style={{
//             fontSize: '20px',
//             cursor: 'pointer',
//             transition: 'transform 0.2s ease'
//           }}>←</span>
//           <h2 style={{
//             margin: '0',
//             fontSize: '20px',
//             fontWeight: '600'
//           }}>Post Your Ad</h2>
//         </div>
  
//         <form style={{
//           maxWidth: '800px',
//           margin: '20px auto',
//           padding: '20px',
//           display: 'grid',
//           gridTemplateColumns: '300px 1fr',
//           gap: '30px'
//         }}>
          
//           {/* Image Upload Section */}
//           <div style={{
//             background: 'white',
//             borderRadius: '8px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             overflow: 'hidden'
//           }}>
//             <div style={{
//               width: '100%',
//               height: '300px',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               border: '2px dashed #e0e0e0',
//               transition: 'all 0.3s ease',
//               gap: '10px'
//             }}>
//               <div style={{
//                 fontSize: '40px',
//                 color: '#002f34',
//                 marginBottom: '10px'
//               }}>
//                 📷
//               </div>
//               <span>Click to upload image</span>
//             </div>
//           </div>
  
//           {/* Form Section */}
//           <div style={{
//             background: 'white',
//             padding: '25px',
//             borderRadius: '8px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//           }}>
//             {/* Product Name */}
//             <div style={{ marginBottom: '20px' }}>
//               <label style={{
//                 display: 'block',
//                 marginBottom: '8px',
//                 color: '#002f34',
//                 fontWeight: '600',
//                 fontSize: '14px'
//               }}>Product Name</label>
//               <input 
//                 type="text" 
//                 defaultValue="Dummy Product"
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '2px solid #e0e0e0',
//                   borderRadius: '4px',
//                   fontSize: '16px'
//                 }}
//               />
//             </div>
  
//             {/* Price */}
//             <div style={{ marginBottom: '20px' }}>
//               <label style={{
//                 display: 'block',
//                 marginBottom: '8px',
//                 color: '#002f34',
//                 fontWeight: '600',
//                 fontSize: '14px'
//               }}>Price</label>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '10px',
//                 border: '2px solid #e0e0e0',
//                 borderRadius: '4px',
//                 padding: '0 12px'
//               }}>
//                 <span style={{
//                   color: '#002f34',
//                   fontWeight: '600',
//                   fontSize: '18px'
//                 }}>₹</span>
//                 <input 
//                   type="number" 
//                   defaultValue="999"
//                   style={{
//                     border: 'none',
//                     padding: '12px 0',
//                     width: '100%',
//                     fontSize: '16px'
//                   }}
//                 />
//               </div>
//             </div>
  
//             {/* Phone Number */}
//             <div style={{ marginBottom: '20px' }}>
//               <label style={{
//                 display: 'block',
//                 marginBottom: '8px',
//                 color: '#002f34',
//                 fontWeight: '600',
//                 fontSize: '14px'
//               }}>Phone Number</label>
//               <input 
//                 type="tel" 
//                 defaultValue="9876543210"
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '2px solid #e0e0e0',
//                   borderRadius: '4px',
//                   fontSize: '16px'
//                 }}
//               />
//             </div>
  
//             {/* Location */}
//             <div style={{ marginBottom: '20px' }}>
//               <label style={{
//                 display: 'block',
//                 marginBottom: '8px',
//                 color: '#002f34',
//                 fontWeight: '600',
//                 fontSize: '14px'
//               }}>Location</label>
//               <input 
//                 type="text" 
//                 defaultValue="Dummy Location"
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '2px solid #e0e0e0',
//                   borderRadius: '4px',
//                   fontSize: '16px'
//                 }}
//               />
//             </div>
  
//             {/* Description */}
//             <div style={{ marginBottom: '20px' }}>
//               <label style={{
//                 display: 'block',
//                 marginBottom: '8px',
//                 color: '#002f34',
//                 fontWeight: '600',
//                 fontSize: '14px'
//               }}>Description</label>
//               <textarea 
//                 defaultValue="This is a dummy description for the product."
//                 rows="4"
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '2px solid #e0e0e0',
//                   borderRadius: '4px',
//                   fontSize: '16px',
//                   resize: 'vertical',
//                   minHeight: '100px'
//                 }}
//               />
//             </div>
  
//             {/* Post Button */}
//             <button type="button" style={{
//               width: '100%',
//               padding: '15px',
//               backgroundColor: '#002f34',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontSize: '16px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease'
//             }}>
//               Post Now
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   };
  
//   export default Sell;
  