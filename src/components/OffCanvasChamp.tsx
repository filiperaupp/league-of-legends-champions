export default () => {} 
// export default function OffcanvasChamp() {
//     return (
//         <Offcanvas
//         show={show}
//         onHide={handleClose}
//         placement="end"
//         backdrop={false}
//       >
//         <Offcanvas.Header
//           closeButton
//           closeVariant="white"
//           style={{
//             backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${selected?.id}_0.jpg)`,
//             backgroundSize: "100% auto",
//             color: "white",
//           }}
//         >
//           <div style={{ position: 'absolute', filter: 'brightness(0.5)' }} className="w-100 h-100"></div>
//           <div className="d-flex align-items-center">
//             <img
//               src="http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/Aatrox.png"
//               alt=""
//               width={70}
//               style={{ paddingRight: "8px" }}
//             />
//             <div>
//               <strong>Aatrox</strong>
//               <span className="d-block">a Lâmina Darkin</span>
//             </div>
//           </div>
//           {/* <Offcanvas.Title>{selected?.id}</Offcanvas.Title> */}
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <p><strong>Sinópse</strong> {selected?.blurb}</p>
//           <div>
//             {selected?.tags?.map(item => <p>{item}</p>)}
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     )
// }