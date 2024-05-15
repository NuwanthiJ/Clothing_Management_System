import express from 'express'
import dbCon from './utils/db.util.js'
import cors from 'cors'

import feedbackRouter from './routes/feedback.route.js'
import itemRoutes from './routes/item.route.js'
import adminrouter from './routes/admins.route.js'
import Admins from './models/admins.model.js'
import feedbackrouter from './routes/feedback.route.js'
import productrouter from './routes/product.route.js'
import Product from './models/product.model.js'
import path from 'path'
import multer from 'multer'


const routers = express.Router()
const app = express()
dbCon()

app.use(express.json())
app.use(cors())


// app.use('/api/feedback', feedbackRouter)
// app.use('/items', itemRoutes);
// app.use('/itemdetails', itemdetailsRoutes);



/** Start Image Upload**/
app.get("/", (req, res) => {
    res.send("Wellcome to the MHCL");
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "productImages");
    },
    filename: function(req, file, cb) {
        console.log(file)
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({ storage });

app.post('/api/product', upload.single("image"),  (req,res) => {
            
                const newProduct = new Product({
                    productID: req.body.productID,
                    productName: req.body.productName,
                    description: req.body.description,
                    category: req.body.category,
                    quantity: req.body.quantity,
                    size: req.body.size,
                    price: req.body.price,
                    image: req.file.path
                })
                newProduct.save()
                .then(() => res.send('successfully uploaded')).catch(err=> console.log(err));
});
/** End Image Upload**/

//Admin Login
app.post("/adminlogin", async (req, res) => {
    const {email, password} = req.body;
    const admin =  await Admins.findOne({ admin_username : email }).lean();
    console.log(admin);

        if(admin) {
            
            if(admin.admin_password === password){
                res.json(admin.admin_type)
                
            }else{
                
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }

})

//End Admin Login



app.use('/api/feedback', feedbackrouter);
app.use('/api/product',productrouter);
app.use('/api/item', itemRoutes);
app.use('/adminlogin',adminrouter);


app.listen(3000, () => {
    console.log('Server is listening on port 3000'); 
    }
);