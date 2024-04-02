import express from 'express'
import dbCon from './utils/db.util.js'
import cors from 'cors'
import feedbackRouter from './routes/feedback.route.js'

const app = express()
dbCon()

app.use(express.json())
app.use(cors())

app.use('/api/feedback', feedbackRouter)

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
    }
);