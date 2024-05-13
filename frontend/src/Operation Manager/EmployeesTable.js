import {useState} from "react";
import {Button, Paper, TableContainer, TableCell,TableBody, Table, TableHead, TableRow, TextField }from "@mui/material";
import {useNavigate} from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

const EmployeeTable = ({rows, selectedEmployee, deleteEmployee}) => {
    const navigate=useNavigate();
    const[searchTerm,setSearchTerm]=useState("");

    const handleDownloadpdf=()=>{
        const doc=new jsPDF();
        doc.autoTable({
            head:[
                ["ID","Name","NIC","Age","Role","Contact No","Address","Qualifications","Department","Username","Password"],
            ],
            body:rows.map((row)=>[
                row.id,
                row.name,
                row.nic,
                row.age,
                row.role,
                row.contactno,
                row.address,
                row.qualifications,
                row.department,
                row.username,
                row.password,
            ]),
        
        });
        doc.save("Table.pdf");

    };

    const handleSearchChange=(e)=>{
        setSearchTerm(e.target.value);
    };

    const filteredRows=rows.filter((row)=>
         Object.values(row).some(
            (value)=>typeof value ==="string" && value.toLowerCase().includes(searchTerm.toLowerCase())
         )

    );
        return(
            <div>
               <TextField
                  variant="outlined"
                  label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  sx={{marginBottom: "10px"}}
               />

            
        <TableContainer component={Paper}>
        <Table>
            <TableHead  sx={{  backgroundColor: '#F5A136 ' }}>
                <TableRow>
                    <TableCell  sx={{  color: '#050100 ', fontSize: '18px' }} >ID</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Name</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>NIC</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Age</TableCell>
                    <TableCell sx={{  color: '#050100', fontSize: '18px' }}>Role</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Contact No</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Address</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Qualifications</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Department</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Username</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Password</TableCell>
                    <TableCell sx={{  color: '#050100 ', fontSize: '18px' }}>Actions</TableCell>
                    


                </TableRow>
            </TableHead>
            <TableBody sx={{  backgroundColor: '#F9CA79 ' }} >
                {
                    filteredRows.length >0? filteredRows.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' :{border:0}}}>
                             <TableCell component= 'th' scope="row">{row.id}</TableCell>
                             <TableCell component= 'th' scope="row">{row.name}</TableCell>
                             <TableCell component='th' scope="row">{row.nic}</TableCell>
                             <TableCell component='th' scope="row">{row.age}</TableCell>
                             <TableCell component='th' scope="row">{row.role}</TableCell>
                             <TableCell component='th' scope="row">{row.contactno}</TableCell>
                             <TableCell component='th' scope="row">{row.address}</TableCell>
                             <TableCell component='th' scope="row">{row.qualifications}</TableCell>
                             <TableCell component='th' scope="row">{row.department}</TableCell>
                             <TableCell component='th' scope="row">{row.username}</TableCell>
                             <TableCell component='th' scope="row">{row.password}</TableCell>
                             <TableCell>
                                <Button 
                                    sx={{ margin: '0px 10px',backgroundColor: '#72D93B ', color: '#000000', '&:hover':{
                                        opacity: '0.7',
                                        backgroundColor: '#72D93B ',
                                    }}}
                                    onClick={() => selectedEmployee({id: row.id, name:row.name, nic:row.nic, age:row.age, role:row.role, contactno:row.contactno, address:row.address, qualifications:row.qualifications, department:row.department,username:row.username,password:row.password})}
                                >
                                    Update
                                    
                                </Button>
                                <Button 
                                    sx={{ margin: '0px 10px', backgroundColor: '#F33D27 ', color: '#000000','&:hover':{
                                        opacity: '0.7',
                                        backgroundColor: '#F33D27 ',
                                    }}} 
                                    onClick={() => deleteEmployee({id: row.id})}
                                >
                                    Delete
                                    
                                </Button>
                             </TableCell>
                        </TableRow>
                        
                    )): (
                        <TableRow sx={{'&:last-child td, &:last-child th' :{border:0}}}>
                            <TableCell component= 'th' scope="row">No Data</TableCell>
                        </TableRow>    
                    )
                }
            </TableBody>
        </Table>
        </TableContainer>

        <div className="pdf">
            <Button variant="contained" color="primary" onClick={handleDownloadpdf}>
                Download PDF

            </Button>

        </div>
        </div>
    );
    

}

export default EmployeeTable;

