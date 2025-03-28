// "use client";

// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   tableCellClasses,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#ffffff",
//     color: "#000000",
//     fontWeight: 600,
//     fontFamily: "Inter",
//     fontSize: 20,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 24,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   backgroundColor: "#ffffff", // ✅ Ensure row background is white
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)", // ✅ Apply shadow to the whole row
//   borderRadius: "15px", // ✅ Rounded corners for entire row
//   marginBottom: "16px", // ✅ Adds spacing between rows
// //   overflow: "hidden", // ✅ Prevents child elements from overflowing
//   display: "flex", // ✅ Makes sure borderRadius applies properly
//   justifyContent: "space-between", // ✅ Aligns items horizontally
// //   alignItems: "center", // ✅ Centers items vertically
//   width: "100%", // ✅ Makes sure the row spans the full width
//   "& th": {
//     borderTopLeftRadius: "15px", // ✅ Round top-left of first cell
//     borderBottomLeftRadius: "15px", // ✅ Round bottom-left of first cell
//   },
//   "& td:last-of-type": {
//     borderTopRightRadius: "15px", // ✅ Round top-right of last cell
//     borderBottomRightRadius: "15px", // ✅ Round bottom-right of last cell
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
//   "& td, & th": {},
//   //   backgroundColor: '#ffffff',
//   //   boxShadow: "0px 0px 12.316px 0px rgba(0, 0, 0, 0.25)",
//   //   marginBottom: 50,
//   //   borderRadius: 15,

//   // hide last border
// //   "&:last-child td, &:last-child th": {
// //     border: 0,
// //   },
// }));

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// const DashboardTable = () => {
//   return (
//     <div>
//       DashboardTable
//       <TableContainer>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//               <StyledTableCell align="right">Calories</StyledTableCell>
//               <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//               <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//               <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <StyledTableRow key={row.name} sx={{ mb: "50px" }}>
//                 <StyledTableCell component="th" scope="row">
//                   {row.name}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                 <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                 <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                 <StyledTableCell align="right">{row.protein}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default DashboardTable;
