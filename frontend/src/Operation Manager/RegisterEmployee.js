import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";



const RegisterEmployee = props => {

    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [nic,setNIC] = useState('');
    const [role,setRole] = useState('');
    const [contactno,setContactNo] = useState('');
    const [address,setAddress] = useState('');
    const [qualifications,setQualifications] = useState('');
    const [department,setDepartment] = useState('');


    return(
       
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#FAC3B7',
                marginBottom: '30px',
                display:'block',
            }}

        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{color: '#050100 ' ,marginLeft: '20px',marginTop:'10px', fontSize: '24px',}}>EMPLOYEE    REGISTRATION</Typography>
            </Grid>

            

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor="firstname"
                 sx={{
                    color: '#050100 ',
                    marginRight: '20px',
                    marginLeft: '20px',
                    marginTop:'10px',
                    fontSize: '16px',
                    width: '100px',
                    display:'block',
                 }}
                >
                    First Name

                </Typography>
                <Input
                    type="text"
                    id='first Name'
                    name="first Name"
                    sx={{
                         width: '400px'
                    }}
                    value={firstname}
                    onChange={e=> setFirstName(e.target.value)}
                    
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography
                 component={'label'}
                 htmlfor="Lastname"
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
                    Last Name

                </Typography>
                <Input
                    type="text"
                    id='last Name'
                    name="last Name"
                    sx={{
                         width: '400px'
                    }}
                    value={lastname}
                    onChange={e=> setLastName(e.target.value)}
                    
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

        
            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '30px',
                    marginTop: '10px',
                    '&:hover': {
                        opacity:'0.7',
                        backgroundColor:'#00c6e6'
                    }
                }}
                
            >   
               Submit 
            </Button>

            

        </Grid>

    );

}

export default RegisterEmployee;