import { Box } from "@mui/material";
import EmployeeForm from "./EmployeeForm";
import EmployeesTable from"./EmployeesTable";
import Axios from "axios";
import { useEffect, useState, data } from "react";

const Employees = ()=> {
    const [employees,setEmployees] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedEmployee, setselectedEmployee] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [errorMessage, setErrorMessage]= useState('');
    const [searchTerm]=useState('');

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = () => {
        Axios.get('http://localhost:3001/api/employees')
           .then(response => {
              setEmployees(response.data?.response || []);
           })
           .catch(error => {
               console.error("Axios Error :", error);
           });
    }

    const filteredEmployees=employees.filter(employee=>
        Object.values(employee).some(value=>
            typeof value ==='string' && value.toLowerCase().includes(searchTerm.toLowerCase())
        )

    );

    const addEmployee = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
            nic:data.nic, 
            age:data.age,
            role:data.role,
            contactno:data.contactno,
            address:data.address,
            qualifications:data.qualifications,
            department:data.department,
            username:data.username,
            password:data.password,
        }
        Axios.post('http://localhost:3001/api/createemployee', payload)
             .then(() => {
                getEmployees();
                setSubmitted(false);
                isEdit(false);
              })
             .catch(error => {
                console.error("Axios Error :", error);
              });
    }

    const updateEmployee = (data) => {
        setSubmitted(true);

        const payload= {
            id: data.id,
            name: data.name,
            nic:data.nic, 
            age:data.age,
            role:data.role,
            contactno:data.contactno,
            address:data.address,
            qualifications:data.qualifications,
            department:data.department,
            username:data.username,
            password:data.password,
        }
        Axios.post('http://localhost:3001/api/updateemployee', payload)
             .then(() => {
                getEmployees();
                setSubmitted(false);
                isEdit(false);
              })
             .catch(error => {
                console.error("Axios Error :", error);
              });
    }

    const deleteEmployee = (data) =>{
        Axios.post('http://localhost:3001/api/deleteemployee', data)
             .then(() => {
                getEmployees();
              })
             .catch(error => {
                console.error("Axios Error :", error);
              });
    }
    return(
        <Box
           sx={{
               width: 'calc(100%-100px)',
               margin:'auto',
               marginTop:'100px',


           }}
        >
            <EmployeeForm
                 addEmployee={addEmployee}
                 updateEmployee={updateEmployee}
                 submitted={submitted}
                 data={selectedEmployee}
                 isEdit = {isEdit}
            />
            <EmployeesTable 
                 rows={employees}
                 selectedEmployee={data =>{
                    setselectedEmployee(data);
                    setIsEdit(true);

                 }}
                 deleteEmployee={data => window.confirm('Are you sure?') && deleteEmployee(data)}
            />
        </Box>
        

    );

}

export default Employees;