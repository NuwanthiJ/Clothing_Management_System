const Employee = require('./model');


const getEmployees = (req, res, next) =>{
    Employee.find()
            .then(response =>{
                res.json({response})
            })
            .catch(error =>{
                res.json({message: error })
            });
};
const searchEmployees=(req,res,next)=>{
    const searchTerm=req.query.searchTerm;
    const regex=new RegExp(searchTerm,'i');

    Employee.find({
        $or:[
           {id:regex},
           {name:regex},
           {nic:regex},
           {age:regex},
           {role:regex},
           {contactno:regex},
           {address:regex},
           {qualifications:regex},
           {department:regex},
           {username:regex},
           {password:regex},
        ]
    })
    .then(response=>{
        res.json({response});
    })
    .catch(error=>{
        res.json({error});
    });
    
    
};

const addEmployee = (req, res, next) =>{
    const employee = new Employee({
        id: req.body.id,
        name: req.body.name,
        nic:req.body.nic,
        age: req.body.age,
        role: req.body.role,
        contactno: req.body.contactno,
        address: req.body.address,
        qualifications: req.body.qualifications,
        department: req.body.department,
        username:req.body.username,
        password:req.body.password,
    });
    employee.save()
            .then(response =>{
                res.json({response})
            })
            .catch(error =>{
                res.json({error})
            });
}

const updateEmployee = (req, res, next) =>{
    const {id, name,nic,age,role,contactno,address,qualifications,department,username,password} = req.body;
    Employee.updateOne({ id: id},{$set: {name:name ,nic:nic, age:age,role:role,contactno:contactno, address:address, qualifications:qualifications,department:department,username:username,password:password }})
            .then(response =>{
                res.json({response})
            })
            .catch(error =>{
                res.json({error})
            });
    
}

const deleteEmployee = (req, res, next) => {
    const id = req.body.id;
    Employee.deleteOne({ id: id })
            .then(response =>{
                res.json({response})
            })
            .catch(error =>{
                res.json({error})
            });
}

exports.getEmployees = getEmployees;
exports.addEmployee = addEmployee;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;
exports.searchEmployees = searchEmployees;
