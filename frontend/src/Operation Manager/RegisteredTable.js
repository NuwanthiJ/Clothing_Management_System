import { Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from "@mui/material";


const RegisteredTable =({ rows })=>{
    return(
        <TableContainer component={Paper}>
         <Table>
            <TableHead  sx={{  backgroundColor: '#d5b39c ' }}>
                <TableRow>
                    <TableCell  sx={{  color: '#050100 ', fontSize: '18px' }}>First Name</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Last Name</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>NIC</TableCell>
                    <TableCell sx={{  color: '#050100', fontSize: '18px' }}>Role</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Contact No</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Address</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Qualifications</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Department</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Actions</TableCell>


                </TableRow>
               
            </TableHead>
            <TableBody sx={{  backgroundColor: '#ead9cd' }} >
               {
                   rows.length >0 ?rows.map(row=>(
                    <TableRow key={row.NIC} sx={{'&:last-child td, &:last-child th':{border:0}}}>
                        <TableCell component='th' scope="row">{row.FirstName}</TableCell>
                        <TableCell component='th' scope="row">{row.LastName}</TableCell>
                        <TableCell component='th' scope="row">{row.NIC}</TableCell>
                        <TableCell component='th' scope="row">{row.Role}</TableCell>
                        <TableCell component='th' scope="row">{row.ContactNo}</TableCell>
                        <TableCell component='th' scope="row">{row.Address}</TableCell>
                        <TableCell component='th' scope="row">{row.Qualifications}</TableCell>
                        <TableCell component='th' scope="row">{row.Department}</TableCell>
                    </TableRow>
                   )):(
                    <TableRow  sx={{'&: last-child td,&-last-child th':{border:0}}}>
                        <TableCell component='th' scope="row">No Data</TableCell>
            
                    </TableRow>
                )
            
    
                }

            </TableBody>
            
         </Table>
    </TableContainer>

    );
    

}

export default RegisteredTable;