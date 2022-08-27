import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

import { PORT } from "./config.js"
dotenv.config()
const { NODE_ENV, MONGODB_URI } = process.env

//router
import router from "./routes/images.routes.js"

// settings
const app = express()
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req,res) => {
	res.status(200).json({msg: 'Hello world !'})
})
app.use("/api/images", router)

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running in PORT ${PORT} & the environment is set in ${NODE_ENV}`)
		})
	})
	.catch(err => console.error(err))
