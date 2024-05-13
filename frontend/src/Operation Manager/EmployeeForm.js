import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const EmployeeForm = ({addEmployee, updateEmployee, submitted, data, isEdit }) =>{

    const [id,setId] = useState(0);
    const [name,setName] = useState('');
    const [nic,setNIC] = useState('');
    const [age,setAge] = useState('');
    const [role,setRole] = useState('');
    const [contactno,setContactNo] = useState('');
    const [address,setAddress] = useState('');
    const [qualifications,setQualifications] = useState('');
    const [department,setDepartment] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');



    useEffect(() =>{
        if (!submitted){
            setId(0);
            setName('');
            setNIC('');
            setAge('');
            setRole('');
            setContactNo('');
            setAddress('');
            setQualifications('');
            setDepartment('');
            setUsername('');
            setPassword('');
        }
    }, [submitted]);

    useEffect(() =>{
        if( data?.id && data.id !==0){
            setId(data.id);
            setName(data.name);
            setNIC(data.nic);
            setAge(data.age);
            setRole(data.role);
            setContactNo(data.contactno);
            setAddress(data.address);
            setQualifications(data.qualifications);
            setDepartment(data.department);
            setUsername(data.username);
            setPassword(data.password);
        }
    }, [data]);



    return(
        <Grid
           container
           spacing={2}
           sx={{
            backgroundColor: '#FAC3B7 ',
            marginBottom: '30px',
            display: 'block',
           }}

        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{color: '#050100 ' ,marginLeft: '20px',fontSize: '24px',}}>Employee Form</Typography>

            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                   component={'label'} 
                   htmlFor="id"
                   sx={{
                      color: '#000000',
                      marginRight: '97px',
                      marginLeft: '20px',
                      fontSize: '16px',
                      display:'block',
                    }}
                >
                    ID

                </Typography>
                <Input
                    type="number"
                    id='id'
                    name="id"
                    sx={{width: '400px'}}
                    value={id}
                    onChange={e =>setId(e.target.value)}

                />

            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                   component={'label'} 
                   htmlFor="name"
                   sx={{
                      color: '#000000',
                      marginRight: '75px',
                      marginLeft: '20px',
                      fontSize: '16px',
                      display:'block',
                    }}
                >
                    Name

                </Typography>
                <Input
                    type="text"
                    id='name'
                    name="name"
                    sx={{width: '400px'}}
                    value={name}
                    onChange={e =>setName(e.target.value)}

                />

            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor="NIC"
                 sx={{
                    color: '#050100 ',
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginTop: '10px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                 }}
                >
                    NIC

                </Typography>
                <Input
                    type="Number"
                    id='nic'
                    name="nic"
                    sx={{
                         width: '400px'
                    }}
                    value={nic}
                    onChange={e=> setNIC(e.target.value)}
                    
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor="Age"
                 sx={{
                    color: '#050100 ',
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginTop: '10px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                 }}
                >
                    Age

                </Typography>
                <Input
                    type="Number"
                    id='age'
                    name="age"
                    sx={{
                         width: '400px'
                    }}
                    value={age}
                    onChange={e=> setAge(e.target.value)}
                    
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor="Role"
                 sx={{
                    color: '#050100 ',
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginTop: '10px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                 }}
                >
                    Role

                </Typography>
                <Input
                    type="text"
                    id='role'
                    name="role"
                    sx={{
                         width: '400px'
                    }}
                    value={role}
                    onChange={e=> setRole(e.target.value)}
                    
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor="Contact No"
                 sx={{
                    color: '#050100 ',
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginTop: '10px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                 }}
                >
                    Contact No

                </Typography>
                <Input
                    type="Number"
                    id='contactno'
                    name="contactno"
                    sx={{
                         width: '400px'
                    }}
                    value={contactno}
                    onChange={e=> setContactNo(e.target.value)}
                    
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor=" Address "
                 sx={{
                    color: '#050100 ',
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginTop: '10px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                 }}
                >
                   Address

                </Typography>
                <Input
                    type="text"
                    id='address'
                    name="address"
                    sx={{
                         width: '400px'
                    }}
                    value={address}
                    onChange={e=> setAddress(e.target.value)}
                    
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor="Qualifications"
                 sx={{
                    color: '#050100 ',
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginTop: '10px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                 }}
                >
                    Qualifications

                </Typography>
                <Input
                    type="text"
                    id='qualifications'
                    name="qualifications"
                    sx={{
                         width: '400px'
                    }}
                    value={qualifications}
                    onChange={e=> setQualifications(e.target.value)}
                    
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor="Department"
                 sx={{
                    color: '#050100 ',
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginTop: '10px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                 }}
                >
                    Department

                </Typography>
                <Input
                    type="text"
                    id=' department'
                    name=" department"
                    sx={{
                         width: '400px'
                    }}
                    value={department}
                    onChange={e=> setDepartment(e.target.value)}
                    
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor="Username"
                 sx={{
                    color: '#050100 ',
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginTop: '10px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                 }}
                >
                    Username

                </Typography>
                <Input
                    type="text"
                    id=' username'
                    name=" username"
                    sx={{
                         width: '400px'
                    }}
                    value={username}
                    onChange={e=> setUsername(e.target.value)}
                    
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor="Password"
                 sx={{
                    color: '#050100 ',
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginTop: '10px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                 }}
                >
                    Password

                </Typography>
                <Input
                    type="text"
                    id=' password'
                    name=" password"
                    sx={{
                         width: '400px'
                    }}
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                    
                />
            </Grid>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '30px',
                    marginTop: '20px',
                    '&:hover':{
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    }
                }}
                onClick={() => isEdit ? updateEmployee({id,name ,nic,age,role,contactno,address,qualifications,department,username,password}):addEmployee({ id, name,nic,age,role,contactno,address,qualifications,department,username,password })}
            >    
                {
                    isEdit ? 'Update': 'Add'
                }
            </Button>

        </Grid>

    );

}

export default EmployeeForm; 